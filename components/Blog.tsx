import React, { useState, useEffect, useMemo } from 'react';
import matter from 'gray-matter';
import { useTranslation, LanguageCode } from '../i18n/LanguageContext';
import { BLOG_POSTS } from '../constants';
import { Article } from '../types';
import ArticleModal from './ArticleModal';
import type { TranslationKey } from '../i18n/translations';

const Blog: React.FC = () => {
    const { t, language } = useTranslation();
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [errored, setErrored] = useState<boolean>(false);
    const [activeCategory, setActiveCategory] = useState<'all' | ReturnType<typeof getCategoryKey>>('all');
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const fetchedArticles = await Promise.all(
                    BLOG_POSTS.map(async (slug) => {
                        const response = await fetch(`/blog/${slug}.md`);
                        const text = await response.text();
                        const { data, content } = matter(text);
                        return {
                            slug,
                            title: data.title || t('blog.untitled'),
                            date: data.date || '',
                            summary: data.summary || '',
                            author: data.author || t('blog.defaultAuthor'),
                            content,
                        };
                    })
                );
                // Sort articles by date, newest first
                fetchedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setArticles(fetchedArticles);
                setErrored(false);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
                setErrored(true);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [language]);
    
    const openArticleModal = (article: Article) => setSelectedArticle(article);
    const closeArticleModal = () => setSelectedArticle(null);

    const relatedMap: Record<string, { href: string; labelKey: TranslationKey }[]> = {
        'building-rag-with-gemini-langchain': [ { href: '/services/rag-langchain', labelKey: 'services.ragLangChain.name' } ],
        '2025-guide-ai-agent-orchestration': [ { href: '/services/agents-automation', labelKey: 'services.agentsAutomation.name' } ],
        'finetuning-vs-prompt-engineering': [ { href: '/services/prompt-engineering', labelKey: 'services.promptEngineering.name' } ],
        'ai-agents-automating-workflows': [ { href: '/services/agents-automation', labelKey: 'services.agentsAutomation.name' }, { href: '/services/business-automation', labelKey: 'services.businessAutomation.name' } ],
        'deep-dive-attio-api': [ { href: '/case-studies/attio-sequences', labelKey: 'caseStudies.index.case.attio.title' } ],
        'ai-powered-code-generation-debugging': [ { href: '/services/advanced-ai', labelKey: 'services.advancedAI.name' } ],
        'deploying-ml-models-docker-kubernetes': [ { href: '/services/troubleshooting', labelKey: 'services.troubleshooting.name' } ],
        'ethics-of-ai-bias-fairness': [ { href: '/services/ai-readiness-audit', labelKey: 'services.aiReadinessAudit.name' } ],
        'getting-started-with-gemini': [ { href: '/services/no-code-ai', labelKey: 'services.noCodeAI.name' } ],
        'maximizing-learning-with-ai': [ { href: '/services/family-ai', labelKey: 'services.familyAI.name' }, { href: '/services/university-ml', labelKey: 'services.universityML.name' } ],
        'multimodal-ai-explained': [ { href: '/services/advanced-ai', labelKey: 'services.advancedAI.name' } ],
        'react-server-vs-client-components': [ { href: '/services/troubleshooting', labelKey: 'services.troubleshooting.name' } ],
        'rise-of-ai-first-development': [ { href: '/services/advanced-ai', labelKey: 'services.advancedAI.name' }, { href: '/services/agents-automation', labelKey: 'services.agentsAutomation.name' } ],
        'securing-llm-powered-applications': [ { href: '/services/ai-readiness-audit', labelKey: 'services.aiReadinessAudit.name' } ],
        'why-ai-is-the-future': [ { href: '/services/ai-for-marketing', labelKey: 'services.aiForMarketing.name' }, { href: '/ai-training', labelKey: 'search.item.trainingOverview.title' } ],
    };

    const getCategoryKey = (slug: string): 'automation' | 'architecture' | 'devops' | 'safety' | 'education' | 'development' | 'insights' => {
        if (slug.includes('agent') || slug.includes('automation')) return 'automation';
        if (slug.includes('rag') || slug.includes('langchain') || slug.includes('llm')) return 'architecture';
        if (slug.includes('deploy') || slug.includes('docker') || slug.includes('kubernetes')) return 'devops';
        if (slug.includes('ethics') || slug.includes('bias') || slug.includes('securing')) return 'safety';
        if (slug.includes('learning') || slug.includes('getting-started')) return 'education';
        if (slug.includes('react') || slug.includes('code')) return 'development';
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

    const getCategoryColor = (categoryKey: ReturnType<typeof getCategoryKey>): string => {
        const colors: Record<ReturnType<typeof getCategoryKey>, string> = {
            automation: 'bg-blue-100 text-blue-800',
            architecture: 'bg-purple-100 text-purple-800',
            devops: 'bg-green-100 text-green-800',
            safety: 'bg-red-100 text-red-800',
            education: 'bg-yellow-100 text-yellow-800',
            development: 'bg-indigo-100 text-indigo-800',
            insights: 'bg-gray-100 text-gray-800'
        };
        return colors[categoryKey] || colors.insights;
    };

    const fallbackArticles = useMemo<Article[]>(() => (
        BLOG_POSTS.slice(0, 6).map((slug, index) => ({
            slug: `placeholder-${slug}-${index}`,
            title: t('blog.loadingTitle'),
            date: new Date().toISOString().slice(0, 10),
            summary: t('blog.loadingSummary'),
            author: t('blog.defaultAuthor'),
            content: t('blog.loadingContent')
        }))
    ), [t]);

    const localeMap: Record<LanguageCode, string> = {
        en: 'en-US',
        es: 'es-ES',
        fr: 'fr-FR',
        zh: 'zh-CN',
    };

    const dateFormatter = useMemo(() => new Intl.DateTimeFormat(localeMap[language], {
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
            const haystack = [article.title, article.summary, article.author, article.content]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();
            return haystack.includes(lowered);
        });
    }, [articles, activeCategory, query]);

    const displayArticles = articles.length ? filteredArticles : fallbackArticles;
    const usingFallback = !articles.length;
    const isDataReady = !usingFallback && !loading && !errored;
    const resultLabel = isDataReady
        ? t('blog.resultCount').replace('{count}', filteredArticles.length.toString())
        : t('blog.loadingButton');

    return (
        <>
            <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-white scroll-mt-20" aria-label={t('blog.title')} aria-busy={loading}>
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('blog.title')}</h2>
                        <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
                            {t('blog.intro')}
                        </p>
                    </div>

                    <div className="glass-panel mx-auto max-w-6xl p-6 shadow-soft-xl">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="relative w-full md:max-w-md">
                                <label htmlFor="blog-search" className="sr-only">{t('blog.searchPlaceholder')}</label>
                                <input
                                    id="blog-search"
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={t('blog.searchPlaceholder')}
                                    disabled={usingFallback}
                                    className="w-full rounded-full border border-slate-200 bg-white/80 px-4 py-3 pr-11 text-sm text-slate-600 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={() => setActiveCategory('all')}
                                    disabled={usingFallback}
                                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === 'all' ? 'border-transparent bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-brand' : 'border-slate-200 bg-white/80 text-slate-600 hover:border-brand-200 hover:text-brand-700'} ${usingFallback ? 'cursor-not-allowed opacity-60' : ''}`}
                                >
                                    {t('blog.filter.all')}
                                </button>
                                {categoryFilters.map(category => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        disabled={usingFallback}
                                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'border-transparent bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-brand' : 'border-slate-200 bg-white/80 text-slate-600 hover:border-brand-200 hover:text-brand-700'} ${usingFallback ? 'cursor-not-allowed opacity-60' : ''}`}
                                    >
                                        {t(categoryTranslationMap[category])}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                            {resultLabel}
                        </div>
                    </div>

                    {!loading && errored && (
                        <p className="mt-10 text-center text-sm text-red-600" role="alert">
                            {t('blog.error')}
                        </p>
                    )}

                    {displayArticles.length === 0 && !usingFallback ? (
                        <p className="mt-16 text-center text-slate-500">{t('blog.emptyState')}</p>
                    ) : (
                        <div className="mt-12 grid max-w-7xl mx-auto grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {displayArticles.map((article) => {
                                const categoryKey = getCategoryKey(article.slug);
                                const categoryLabel = t(categoryTranslationMap[categoryKey]);
                                const categoryColorClass = getCategoryColor(categoryKey);
                                const readingTime = Math.max(1, Math.ceil(article.content.split(' ').length / 200));
                                const displayTitle = article.title || t('blog.untitled');
                                const parsedDate = article.date ? new Date(article.date) : null;
                                const displayDate = parsedDate && !Number.isNaN(parsedDate.getTime())
                                    ? dateFormatter.format(parsedDate)
                                    : t('blog.dateUnknown');

                                return (
                                    <article key={article.slug} className="glass-panel flex h-full flex-col overflow-hidden p-6 transition hover:-translate-y-1">
                                        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                                            <span>{categoryLabel}</span>
                                            <time dateTime={article.date} className="text-slate-400">
                                                {displayDate}
                                            </time>
                                        </div>
                                        <h3 className="mt-4 text-xl font-semibold text-slate-900 transition-colors group-hover:text-brand-600 line-clamp-2">
                                            {displayTitle}
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                                            {article.summary || t('blog.fallbackSummary')}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                                            <span>{t('blog.readTime').replace('{minutes}', readingTime.toString())}</span>
                                            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${categoryColorClass}`}>
                                                <i className="fas fa-hashtag"></i>
                                                {categoryLabel}
                                            </span>
                                        </div>
                                        {relatedMap[article.slug] && (
                                            <div className="mt-5 border-t border-slate-100 pt-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {relatedMap[article.slug].map((r) => (
                                                        <a
                                                            key={r.href}
                                                            href={r.href}
                                                            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600 transition hover:border-brand-200 hover:text-brand-700"
                                                        >
                                                            <i className="fas fa-up-right-from-square text-[10px]"></i>
                                                            {t(r.labelKey)}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <button
                                            onClick={() => openArticleModal(article)}
                                            disabled={usingFallback}
                                            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-brand transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60`}
                                        >
                                            {usingFallback ? t('blog.loadingButton') : t('blog.readMore')}
                                            {!usingFallback && <i className="fas fa-arrow-right text-xs"></i>}
                                        </button>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
            <ArticleModal
                isOpen={!!selectedArticle}
                onClose={closeArticleModal}
                article={selectedArticle}
            />
        </>
    );
};

export default Blog;
