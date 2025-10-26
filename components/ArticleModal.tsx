import React, { Fragment, useMemo } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { marked } from 'marked';
import { Article } from '../types';
import { useTranslation, LanguageCode } from '../i18n/LanguageContext';

interface ArticleModalProps {
    article: Article;
    onClose: () => void;
    relatedLinks?: Array<{ href: string; labelKey: string }>;
}

const localeMap: Record<LanguageCode, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    zh: 'zh-CN',
};

const ArticleModal: React.FC<ArticleModalProps> = ({ onClose, article, relatedLinks }) => {
    const { t, language } = useTranslation();

    const parsedContent = useMemo(() => {
        if (article?.content) {
            // Configure marked to add classes for styling if needed, or sanitize HTML
            return marked.parse(article.content, { async: false });
        }
        return '';
    }, [article]);

    const formattedDate = useMemo(() => {
        if (!article?.date) {
            return '';
        }
        const parsedDate = new Date(article.date);
        if (Number.isNaN(parsedDate.getTime())) {
            return '';
        }
        return new Intl.DateTimeFormat(localeMap[language], {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(parsedDate);
    }, [article, language]);

    return (
        <Transition appear show={true} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/70" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all flex flex-col">
                                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                                    <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-slate-900">
                                        {article?.title || t('blog.untitled')}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md p-2 text-sm font-medium text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                                        onClick={onClose}
                                        aria-label={t('ui.close')}
                                    >
                                        <i className="fas fa-times text-xl"></i>
                                    </button>
                                </div>
                                <div className="p-6 md:p-8 flex-grow overflow-y-auto max-h-[75vh]">
                                    <div className="flex items-center text-sm text-slate-500 mb-6">
                                        <span>{article?.author || t('blog.defaultAuthor')}</span>
                                        <span className="mx-2">&bull;</span>
                                        <span>{formattedDate || t('blog.dateUnknown')}</span>
                                    </div>
                                    <article 
                                        className="prose max-w-none"
                                        dangerouslySetInnerHTML={{ __html: parsedContent as string }} 
                                    />
                                </div>
                                {/* Add a custom style block for prose content since we don't have the Tailwind typography plugin */}
                                <style>{`
                                .prose {
                                    color: #334155; /* slate-700 */
                                    line-height: 1.65;
                                }
                                .prose h1, .prose h2, .prose h3, .prose h4 {
                                    color: #0f172a; /* slate-900 */
                                    font-weight: 700;
                                    margin-bottom: 0.8em;
                                    margin-top: 1.5em;
                                }
                                .prose h1 { font-size: 2.25em; }
                                .prose h2 { font-size: 1.875em; }
                                .prose h3 { font-size: 1.5em; }
                                .prose p { margin-bottom: 1.25em; }
                                .prose a { color: #0f172a; text-decoration: underline; }
                                .prose a:hover { color: #475569; }
                                .prose ul, .prose ol { margin-left: 1.5rem; margin-bottom: 1.25em; }
                                .prose li > p { margin-bottom: 0.5em; }
                                .prose blockquote {
                                    border-left: 4px solid #cbd5e1; /* slate-300 */
                                    padding-left: 1rem;
                                    margin-left: 0;
                                    font-style: italic;
                                    color: #475569; /* slate-600 */
                                }
                                .prose pre {
                                    background-color: #f1f5f9; /* slate-100 */
                                    color: #1e293b; /* slate-800 */
                                    padding: 1rem;
                                    border-radius: 0.5rem;
                                    overflow-x: auto;
                                }
                                .prose code {
                                    font-family: monospace;
                                    background-color: #f1f5f9;
                                    padding: 0.2em 0.4em;
                                    margin: 0;
                                    font-size: 85%;
                                    border-radius: 0.3rem;
                                }
                                .prose pre code {
                                  background-color: transparent;
                                  padding: 0;
                                  margin: 0;
                                  font-size: inherit;
                                }
                                `}</style>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ArticleModal;
