import React, { useState, useEffect, useMemo } from 'react';
import matter from 'gray-matter';
import { useTranslation } from '../i18n/LanguageContext';
import { BLOG_POSTS } from '../constants';
import { Article } from '../types';
import ArticleModal from './ArticleModal';
import type { TranslationKey } from '../i18n/translations';

const Blog: React.FC = () => {
    const { t } = useTranslation();
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [errored, setErrored] = useState<boolean>(false);

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
                            title: data.title || 'Untitled',
                            date: data.date || '',
                            summary: data.summary || '',
                            author: data.author || 'Sami Halawa',
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
    }, []);
    
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
            author: 'Sami Halawa',
            content: t('blog.loadingContent')
        }))
    ), [t]);

    const list = articles.length ? articles : fallbackArticles;

    return (
        <>
            <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-white scroll-mt-20" aria-label="Blog" aria-busy={loading}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{t('blog.title')}</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {t('blog.intro')}
                        </p>
                    </div>
                    {
                        (() => (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                    {list.map((article) => {
                                        const categoryKey = getCategoryKey(article.slug);
                                        const categoryLabel = t(categoryTranslationMap[categoryKey]);
                                        const categoryColorClass = getCategoryColor(categoryKey);
                                        const readingTime = Math.max(1, Math.ceil(article.content.split(' ').length / 200));

                                        return (
                                            <article key={article.slug} className="bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-300 flex flex-col overflow-hidden group">
                                                {/* Category Badge */}
                                                <div className="px-6 pt-6">
                                                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryColorClass}`}>
                                                        {categoryLabel}
                                                    </span>
                                                </div>

                                                {/* Content */}
                                                <div className="px-6 py-4 flex-grow flex flex-col">
                                                    {/* Meta Information */}
                                                    <div className="flex items-center text-sm text-slate-500 mb-3 gap-3">
                                                        <time dateTime={article.date}>
                                                            {new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                                        </time>
                                                        <span className="text-slate-300">•</span>
                                                        <span>{t('blog.readTime').replace('{minutes}', readingTime.toString())}</span>
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                        {article.title}
                                                    </h3>

                                                    {/* Summary */}
                                                    <p className="text-slate-600 mb-4 flex-grow line-clamp-3">
                                                        {article.summary || t('blog.fallbackSummary')}
                                                    </p>

                                                    {/* Author */}
                                                    <div className="flex items-center mb-4">
                                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                                            {article.author?.charAt(0) || 'S'}
                                                        </div>
                                                        <span className="ml-2 text-sm text-slate-600">{article.author || 'Sami Halawa'}</span>
                                                    </div>

                                                    {/* Related Links */}
                                                    {relatedMap[article.slug] && (
                                                        <div className="mb-4 pt-3 border-t border-slate-100">
                                                            <div className="flex flex-wrap gap-2">
                                                                {relatedMap[article.slug].map((r) => (
                                                                    <a
                                                                        key={r.href}
                                                                        href={r.href}
                                                                        className="inline-block px-3 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors"
                                                                    >
                                                                        {t(r.labelKey)}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Read More Button */}
                                                <div className="px-6 pb-6 mt-auto">
                                                    <button
                                                        onClick={() => openArticleModal(article)}
                                                        className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group flex items-center justify-center"
                                                    >
                                                        {t('blog.readMore')}
                                                        <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                                                    </button>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            ))()
                    }
                    {!loading && errored && (
                        <p className="mt-10 text-center text-sm text-red-600" role="alert">
                            {t('blog.error')}
                        </p>
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
