import React, { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { useTranslation } from '../i18n/LanguageContext';
import { BLOG_POSTS } from '../constants';
import { Article } from '../types';
import ArticleModal from './ArticleModal';

const Blog: React.FC = () => {
    const { t } = useTranslation();
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);
    
    const openArticleModal = (article: Article) => setSelectedArticle(article);
    const closeArticleModal = () => setSelectedArticle(null);

    const relatedMap: Record<string, { href: string; label: string }[]> = {
        'building-rag-with-gemini-langchain': [ { href: '/services/rag-langchain', label: 'RAG & LangChain' } ],
        '2025-guide-ai-agent-orchestration': [ { href: '/services/agents-automation', label: 'AI Agents & Automation' } ],
        'finetuning-vs-prompt-engineering': [ { href: '/services/prompt-engineering', label: 'Prompt Engineering' } ],
        'ai-agents-automating-workflows': [ { href: '/services/agents-automation', label: 'AI Agents & Automation' }, { href: '/services/business-automation', label: 'Business Automation' } ],
        'deep-dive-attio-api': [ { href: '/case-studies/attio-sequences', label: 'Attio Sequences Case' } ],
    };

    return (
        <>
            <section id="blog" className="py-20 bg-slate-50 scroll-mt-20" aria-label="Blog">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">{t('blog.title')}</h2>
                    {
                        (() => {
                            const fallback: Article[] = BLOG_POSTS.map((slug) => ({
                                slug,
                                title: slug.replace(/-/g, ' '),
                                date: new Date().toISOString().slice(0,10),
                                summary: '',
                                author: 'Sami Halawa',
                                content: 'Loading...'
                            }));
                            const list = articles.length ? articles : fallback;
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                    {list.map((article) => (
                                        <div key={article.slug} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col">
                                            <p className="text-sm text-slate-500 mb-2">{new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                            <h3 className="text-xl font-bold mb-3 text-slate-900">{article.title}</h3>
                                            <p className="text-slate-600 mb-4 flex-grow">{article.summary || ' '}</p>
                                            {relatedMap[article.slug] && (
                                                <div className="text-sm text-slate-600 mb-3">
                                                    <span className="font-semibold">Related:</span>
                                                    {relatedMap[article.slug].map((r) => (
                                                        <a key={r.href} href={r.href} className="ml-2 underline hover:no-underline">{r.label}</a>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="mt-auto">
                                                <button onClick={() => openArticleModal(article)} className="font-semibold text-slate-800 hover:text-slate-900 transition-colors duration-300 group text-sm">
                                                    {t('blog.readMore')} <i className="fas fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })()
                    }
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
