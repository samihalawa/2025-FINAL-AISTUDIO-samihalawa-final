import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, LanguageCode } from '../i18n/LanguageContext';
import { BLOG_POSTS } from '../constants';
import type { TranslationKey } from '../i18n/translations';

interface BlogEntry {
    slug: string;
    title: string;
    date: string;
    summary: string;
    author: string;
    tags: string[];
}

// Lightweight front-matter parser (fallback path only — no YAML dep at runtime).
function parseFrontMatter(content: string): { data: Record<string, string> } {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { data: {} };
    const data: Record<string, string> = {};
    for (const line of match[1].split('\n')) {
        const idx = line.indexOf(':');
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        data[key] = value;
    }
    return { data };
}

const Blog: React.FC = () => {
    const { t, language } = useTranslation();
    const [articles, setArticles] = useState<BlogEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errored, setErrored] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [activeCategory, setActiveCategory] = useState<'all' | ReturnType<typeof getCategoryKey>>('all');
    const [query, setQuery] = useState('');

    useEffect(() => {
        let cancelled = false;
        const fetchArticles = async () => {
            setLoading(true);
            setErrored(false);
            setErrorMessage('');
            try {
                // Primary source: the build-time manifest. It lists every post
                // (hand-written + content-hub deliveries) so new posts appear
                // without editing constants.ts.
                const manifestRes = await fetch('/blog/index.json', { cache: 'no-cache' });
                if (manifestRes.ok) {
                    const manifest = await manifestRes.json();
                    if (Array.isArray(manifest) && manifest.length) {
                        const entries: BlogEntry[] = manifest.map((m: any) => ({
                            slug: String(m.slug),
                            title: m.title || t('blog.untitled'),
                            date: m.date || new Date().toISOString().slice(0, 10),
                            summary: m.summary || t('blog.loadingSummary'),
                            author: m.author || t('blog.defaultAuthor'),
                            tags: Array.isArray(m.tags) ? m.tags : [],
                        }));
                        if (!cancelled) {
                            setArticles(entries);
                            setLoading(false);
                        }
                        return;
                    }
                }

                // Fallback: static slug list (older deployments without manifest).
                const fetched: BlogEntry[] = [];
                for (const slug of BLOG_POSTS) {
                    try {
                        const response = await fetch(`/blog/${slug}.md`);
                        if (!response.ok) continue;
                        const text = await response.text();
                        if (!text.trim()) continue;
                        const { data } = parseFrontMatter(text);
                        fetched.push({
                            slug,
                            title: data.title || t('blog.untitled'),
                            date: data.date || new Date().toISOString().slice(0, 10),
                            summary: data.summary || t('blog.loadingSummary'),
                            author: data.author || t('blog.defaultAuthor'),
                            tags: [],
                        });
                    } catch {
                        continue;
                    }
                }
                if (cancelled) return;
                if (!fetched.length) {
                    setErrored(true);
                    setErrorMessage('No articles could be loaded. Please try again later.');
                    setLoading(false);
                    return;
                }
                fetched.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setArticles(fetched);
            } catch (error) {
                if (!cancelled) {
                    setErrored(true);
                    setErrorMessage('An unexpected error occurred while loading articles.');
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchArticles();
        return () => {
            cancelled = true;
        };
    }, [t, language]);

    const getCategoryKey = (slug: string): 'automation' | 'architecture' | 'devops' | 'safety' | 'education' | 'development' | 'insights' => {
        if (slug.includes('agent') || slug.includes('automation') || slug.includes('mcp') || slug.includes('orchestration')) return 'automation';
        if (slug.includes('rag') || slug.includes('langchain') || slug.includes('llm') || slug.includes('context') || slug.includes('memory') || slug.includes('prompt')) return 'architecture';
        if (slug.includes('deploy') || slug.includes('docker') || slug.includes('kubernetes') || slug.includes('self-host') || slug.includes('cost') || slug.includes('observability') || slug.includes('production')) return 'devops';
        if (slug.includes('ethics') || slug.includes('bias') || slug.includes('securing') || slug.includes('eval') || slug.includes('verification')) return 'safety';
        if (slug.includes('learning') || slug.includes('getting-started') || slug.includes('build-in-public') || slug.includes('founder') || slug.includes('lessons')) return 'education';
        if (slug.includes('react') || slug.includes('code') || slug.includes('coding') || slug.includes('tool')) return 'development';
        return 'insights';
    };

    const categoryTranslationMap: Record<ReturnType<typeof getCategoryKey>, TranslationKey> = {
        automation: 'blog.category.automation',
        architecture: 'blog.category.architecture',
        devops: 'blog.category.devops',
        safety: 'blog.category.safety',
        education: 'blog.category.education',
        development: 'blog.category.development',
        insights: 'blog.category.insights'
    };

    const localeMap: Record<LanguageCode, string> = {
        en: 'en-US',
        es: 'es-ES',
        fr: 'fr-FR',
        zh: 'zh-CN',
    };

    const dateFormatter = useMemo(() => new Intl.DateTimeFormat(localeMap[language] || 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }), [language]);

    const categoryOrder: ReturnType<typeof getCategoryKey>[] = ['automation', 'architecture', 'devops', 'safety', 'education', 'development', 'insights'];

    const categoryFilters = useMemo(() => {
        const present = new Set(articles.map(article => getCategoryKey(article.slug)));
        return categoryOrder.filter(key => present.has(key));
    }, [articles]);

    const filteredArticles = useMemo(() => {
        const lowered = query.trim().toLowerCase();
        return articles.filter(article => {
            const categoryMatch = activeCategory === 'all' || getCategoryKey(article.slug) === activeCategory;
            if (!categoryMatch) return false;
            if (!lowered) return true;
            const haystack = [article.title, article.summary, article.author, ...(article.tags || [])]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();
            return haystack.includes(lowered);
        });
    }, [articles, activeCategory, query]);

    const isDataReady = !loading && !errored && articles.length > 0;
    const resultLabel = isDataReady
        ? t('blog.resultCount').replace('{count}', filteredArticles.length.toString())
        : t('blog.loadingButton');

    return (
        <section id="blog" className="scroll-mt-20 border-b border-slate-300 bg-[#f8f6f1] py-12 sm:py-16" aria-label={t('blog.title')}>
            <div className="container">
                <header className="grid gap-8 border-b border-slate-400 pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,.85fr)] lg:items-end lg:gap-16">
                    <div>
                        <h1 className="cv-serif text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.045em] text-slate-950">{t('blog.title')}</h1>
                    </div>
                    <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-700 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{t('blog.intro')}</p>
                </header>

                <div className="border-b border-slate-400 py-8">
                    <div className="grid gap-5 lg:grid-cols-[minmax(16rem,.7fr)_minmax(0,1.3fr)] lg:items-start">
                        <div className="relative w-full">
                            <label htmlFor="blog-search" className="sr-only">{t('blog.searchPlaceholder')}</label>
                            <input
                                id="blog-search"
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={t('blog.searchPlaceholder')}
                                disabled={!isDataReady}
                                className="min-h-12 w-full border border-slate-400 bg-white px-4 py-3 pr-11 text-sm text-slate-700 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
                            />
                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            <button
                                type="button"
                                onClick={() => setActiveCategory('all')}
                                disabled={!isDataReady}
                                className={`inline-flex min-h-11 items-center border-b-2 px-1 text-sm font-bold transition ${activeCategory === 'all' ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-950'} ${!isDataReady ? 'cursor-not-allowed opacity-60' : ''}`}
                            >
                                {t('blog.filter.all')}
                            </button>
                            {isDataReady && categoryFilters.map(category => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`inline-flex min-h-11 items-center border-b-2 px-1 text-sm font-bold transition ${activeCategory === category ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-950'}`}
                                >
                                    {t(categoryTranslationMap[category])}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-500" aria-live="polite">
                        {loading ? <span className="animate-pulse">{t('blog.loadingButton')}</span> : resultLabel}
                    </div>

                    {errored && (
                        <div className="mt-8 border border-red-300 bg-red-50 p-4 text-red-700">
                            <p>{errorMessage || t('blog.error')}</p>
                        </div>
                    )}

                    {loading && (
                        <div className="mt-8 grid border-t border-slate-300 md:grid-cols-2">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="animate-pulse border-b border-slate-300 bg-white md:border-r">
                                    <div className="p-6">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="h-4 w-16 bg-slate-200"></div>
                                            <div className="h-4 w-20 bg-slate-200"></div>
                                        </div>
                                        <div className="mb-2 h-6 w-full bg-slate-200"></div>
                                        <div className="mb-1 h-4 w-5/6 bg-slate-200"></div>
                                        <div className="mb-4 h-4 w-full bg-slate-200"></div>
                                        <div className="h-4 w-24 bg-slate-200"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!loading && !errored && articles.length > 0 && (
                        <div className="mt-10 grid border-t border-slate-400 md:grid-cols-2">
                            {filteredArticles.map((article, index) => (
                                <Link
                                    key={article.slug}
                                    to={`/blog/${article.slug}`}
                                    className={`group block border-b border-slate-300 py-7 md:px-7 ${index % 2 === 0 ? 'md:border-r' : ''}`}
                                    aria-label={`Read article: ${article.title}`}
                                >
                                    <div>
                                        <div className="mb-5 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                            <span className="text-brand-800">
                                                {t(categoryTranslationMap[getCategoryKey(article.slug)])}
                                            </span>
                                            <span>{dateFormatter.format(new Date(article.date))}</span>
                                        </div>
                                        <h3 className="cv-serif mb-3 text-2xl font-semibold leading-tight text-slate-950 group-hover:text-brand-800">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 line-clamp-3">
                                            {article.summary}
                                        </p>
                                        <div className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-slate-500 text-sm font-bold text-slate-800 group-hover:border-slate-950">
                                            {t('blog.readMore')} <i className="fas fa-arrow-right text-xs" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!loading && !errored && articles.length > 0 && filteredArticles.length === 0 && (
                        <div className="mt-8 border border-dashed border-slate-400 p-10 text-center text-slate-600">
                            <p>{t('blog.noResults')}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;
