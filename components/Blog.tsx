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
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [activeCategory, setActiveCategory] = useState<'all' | ReturnType<typeof getCategoryKey>>('all');
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            setErrored(false);
            setErrorMessage('');
            try {
                const fetchedArticles: Article[] = [];
                
                for (const slug of BLOG_POSTS) {
                    try {
                        const response = await fetch(`/blog/${slug}.md`);
                        
                        if (!response.ok) {
                            console.error(`Failed to fetch ${slug}: ${response.status} ${response.statusText}`);
                            continue;
                        }
                        
                        const text = await response.text();
                        
                        if (!text || text.trim().length === 0) {
                            console.error(`Empty response for ${slug}`);
                            continue;
                        }
                        
                        try {
                            const parsed = matter(text);
                            const { data, content } = parsed;
                            
                            if (!data || !content) {
                                console.error(`Invalid parsed data for ${slug}:`, { data, content });
                                continue;
                            }
                            
                            fetchedArticles.push({
                                slug,
                                title: data.title || t('blog.untitled'),
                                date: data.date || new Date().toISOString().slice(0, 10),
                                summary: data.summary || t('blog.loadingSummary'),
                                author: data.author || t('blog.defaultAuthor'),
                                content: content || '',
                            });
                        } catch (parseError) {
                            console.error(`Error parsing ${slug}:`, parseError);
                            continue;
                        }
                    } catch (fetchError) {
                        console.error(`Error fetching ${slug}:`, fetchError);
                        continue;
                    }
                }
                
                if (fetchedArticles.length === 0) {
                    setErrored(true);
                    setErrorMessage('No articles could be loaded. Please try again later.');
                    setLoading(false);
                    return;
                }
                
                // Sort articles by date, newest first
                fetchedArticles.sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                });
                
                setArticles(fetchedArticles);
                setErrored(false);
            } catch (error) {
                console.error("Unexpected error fetching articles:", error);
                setErrored(true);
                setErrorMessage('An unexpected error occurred while loading articles.');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [t, language]);
    
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
            const haystack = [article.title, article.summary, article.author, article.content]
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
        <>
            <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-white scroll-mt-20" aria-label={t('blog.title')}>
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
                                    disabled={!isDataReady}
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
                                    disabled={!isDataReady}
                                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === 'all' ? 'border-transparent bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-brand' : 'border-slate-200 bg-white/80 text-slate-600 hover:border-brand-200 hover:text-brand-700'} ${!isDataReady ? 'cursor-not-allowed opacity-60' : ''}`}
                                >
                                    {t('blog.filter.all')}
                                </button>
                                {isDataReady && categoryFilters.map(category => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'border-transparent bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-brand' : 'border-slate-200 bg-white/80 text-slate-600 hover:border-brand-200 hover:text-brand-700'}`}
                                    >
                                        {t(categoryTranslationMap[category])}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-slate-500" aria-live="polite">
                            {loading ? <span className="animate-pulse">{t('blog.loadingButton')}</span> : resultLabel}
                        </div>

                        {errored && (
                            <div className="mt-8 text-center text-red-600 bg-red-50 p-4 rounded-lg">
                                <p>{errorMessage || t('blog.error')}</p>
                            </div>
                        )}

                        {loading && (
                            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className="rounded-xl bg-white shadow-lg animate-pulse">
                                        <div className="p-6">
                                            <div className="mb-4 flex items-center justify-between">
                                                <div className="w-16 h-4 bg-gray-200 rounded-md"></div>
                                                <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
                                            </div>
                                            <div className="w-full h-6 bg-gray-200 rounded-md mb-2"></div>
                                            <div className="w-5/6 h-4 bg-gray-200 rounded-md mb-1"></div>
                                            <div className="w-full h-4 bg-gray-200 rounded-md mb-4"></div>
                                            <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!loading && !errored && articles.length > 0 && (
                            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {filteredArticles.map((article) => (
                                    <div
                                        key={article.slug}
                                        className="rounded-xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                                        onClick={() => openArticleModal(article)}
                                        onKeyPress={(e) => e.key === 'Enter' && openArticleModal(article)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Read article: ${article.title}`}
                                    >
                                        <div className="p-6">
                                            <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
                                                <span className={`${getCategoryColor(getCategoryKey(article.slug))} rounded-full px-3 py-1 text-xs font-semibold`}>
                                                    {t(categoryTranslationMap[getCategoryKey(article.slug)])}
                                                </span>
                                                <span>{dateFormatter.format(new Date(article.date))}</span>
                                            </div>
                                            <h3 className="mb-2 text-lg font-bold text-slate-800">
                                                {article.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 line-clamp-3">
                                                {article.summary}
                                            </p>
                                            <div className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700">
                                                {t('blog.readMore')}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!loading && !errored && articles.length > 0 && filteredArticles.length === 0 && (
                            <div className="mt-8 text-center text-slate-600">
                                <p>{t('blog.noResults')}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {selectedArticle && (
                <ArticleModal 
                    article={selectedArticle} 
                    onClose={closeArticleModal} 
                    relatedLinks={relatedMap[selectedArticle.slug] || []}
                />
            )}
        </>
    );
};

export default Blog;
