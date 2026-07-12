import React, { Fragment, useMemo } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { marked } from 'marked';
import { Article } from '../types';
import { useTranslation, LanguageCode } from '../i18n/LanguageContext';
import { SERVICE_MENU_SECTIONS } from '../constants';
import type { TranslationKey } from '../i18n/translations';

interface ArticleModalProps {
    onClose: () => void;
    article: Article | null;
    relatedLinks?: { href: string; labelKey: TranslationKey }[];
    isOpen: boolean;
}

const localeMap: Record<LanguageCode, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    zh: 'zh-CN',
};

type CategoryKey = 'automation' | 'architecture' | 'devops' | 'safety' | 'education' | 'development' | 'insights';

const getCategoryKey = (slug: string): CategoryKey => {
    if (slug.includes('agent') || slug.includes('automation')) return 'automation';
    if (slug.includes('rag') || slug.includes('langchain') || slug.includes('llm')) return 'architecture';
    if (slug.includes('deploy') || slug.includes('docker') || slug.includes('kubernetes')) return 'devops';
    if (slug.includes('ethics') || slug.includes('bias') || slug.includes('securing')) return 'safety';
    if (slug.includes('learning') || slug.includes('getting-started')) return 'education';
    if (slug.includes('react') || slug.includes('code')) return 'development';
    return 'insights';
};

const blueprintMap: Record<CategoryKey, string[]> = {
    automation: ['Map inputs/approvals and SLAs', 'Instrument retries + alerts', 'Human-in-the-loop checkpoints', 'Runbook for incidents'],
    architecture: ['Define retrieval schemas', 'Choose embedding + re-ranker combo', 'Add eval harness with goldens', 'Wire tracing and budgets'],
    devops: ['Containerize with health probes', 'Scale-to-zero & cache configuration', 'Observability (logs, traces, metrics)', 'Disaster recovery tests'],
    safety: ['Threat model flows', 'Content filters + privacy redaction', 'Red-team prompts and jailbreaks', 'Monitor drift and abuse'],
    education: ['Learner personas and goals', 'Content pacing with assessments', 'Feedback loop for tutors', 'Analytics on completion'],
    development: ['Define contracts and tool surfaces', 'Type-safe prompts and validators', 'CI checks with evals', 'Release + rollback plan'],
    insights: ['Capture event/feature store', 'Design decision dashboards', 'Model success metrics', 'A/B guardrails and rollouts'],
};

const pitfallMap: Record<CategoryKey, { risk: string; mitigation: string }[]> = {
    automation: [
        { risk: 'Silent failures in background jobs', mitigation: 'Add retries + alerts with budgets' },
        { risk: 'Data drift between tools', mitigation: 'Daily reconciliations and schema contracts' },
    ],
    architecture: [
        { risk: 'Hallucinated retrieval', mitigation: 'Hybrid search + re-rankers + evals' },
        { risk: 'Latency creep', mitigation: 'Caching, truncation, and batch pipelines' },
    ],
    devops: [
        { risk: 'Cold-start penalties', mitigation: 'Provisioned concurrency + cache warmers' },
        { risk: 'Unbounded costs', mitigation: 'Budgets, alerts, and autoscaling limits' },
    ],
    safety: [
        { risk: 'Prompt injections', mitigation: 'Input validation, policies, and content filters' },
        { risk: 'PII leakage', mitigation: 'Redaction + restricted logging' },
    ],
    education: [
        { risk: 'Low engagement', mitigation: 'Micro-goals with nudges and cohort prompts' },
        { risk: 'Inaccurate feedback', mitigation: 'Evaluator rubrics + human review loop' },
    ],
    development: [
        { risk: 'Breaking API/tool contracts', mitigation: 'Typed tool schemas and CI checks' },
        { risk: 'Unbounded generation', mitigation: 'Stop sequences, timeouts, rate limits' },
    ],
    insights: [
        { risk: 'Misread metrics', mitigation: 'Clear definitions and source-of-truth dashboards' },
        { risk: 'Stale data', mitigation: 'Freshness alerts and backfills' },
    ],
};

const checklistMap: Record<CategoryKey, string[]> = {
    automation: ['Success metrics defined', 'Retries/alerts configured', 'Access + secrets reviewed', 'Runbook stored and owners named'],
    architecture: ['Eval set ready', 'Observability endpoints wired', 'Caching strategy chosen', 'Rollout + rollback documented'],
    devops: ['Health checks passing', 'Autoscaling + budgets enforced', 'Disaster recovery tested', 'Performance SLOs tracked'],
    safety: ['Abuse classes covered', 'PII handling documented', 'Human escalation path set', 'Audit logs retained'],
    education: ['Pre/post assessments set', 'Content localized if needed', 'Support channel defined', 'Analytics dashboard live'],
    development: ['Contracts versioned', 'CI evals passing', 'Feature flags added', 'Docs updated for handoff'],
    insights: ['Data contracts signed', 'Dashboard owners assigned', 'Alert thresholds set', 'Backfill plan drafted'],
};

const ArticleModal: React.FC<ArticleModalProps> = ({ onClose, article, relatedLinks, isOpen }) => {
    const { t, language } = useTranslation();
    const category = getCategoryKey(article?.slug || '');
    const blueprint = blueprintMap[category];
    const pitfalls = pitfallMap[category];
    const checklist = checklistMap[category];
    const capabilityLinks = SERVICE_MENU_SECTIONS.flatMap(section => section.items).slice(0, 6);
    const leadMagnetPrimary = category === 'architecture' ? '/services/rag-langchain#template' : '/services/ai-readiness-audit#checklist';
    const leadMagnetLabel = category === 'architecture' ? 'Get RAG architecture template' : 'Download AI readiness checklist';
    
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

    const open = isOpen ?? Boolean(article);

    return (
        <Transition appear show={open} as={Fragment}>
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
                                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                                        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                                            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-2">Implementation blueprint</div>
                                            <ul className="text-sm text-slate-700 space-y-1">
                                                {blueprint.map(step => (<li key={step} className="flex gap-2"><i className="fas fa-diagram-project text-brand-600 mt-1"></i><span>{step}</span></li>))}
                                            </ul>
                                        </div>
                                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-2">Common pitfalls</div>
                                            <ul className="space-y-2 text-sm text-slate-700">
                                                {pitfalls.map(p => (
                                                    <li key={p.risk}>
                                                        <div className="font-semibold">{p.risk}</div>
                                                        <div className="text-slate-600">Mitigate: {p.mitigation}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-4">
                                            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200 mb-2">Production checklist</div>
                                            <ul className="space-y-1 text-sm">
                                                {checklist.map(item => (<li key={item} className="flex gap-2"><i className="fas fa-check-circle text-amber-300 mt-1"></i><span>{item}</span></li>))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Lead magnet</div>
                                            <div className="text-lg font-bold text-slate-900">{leadMagnetLabel}</div>
                                            <p className="text-sm text-slate-600">Context-aware CTA for this topic.</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={leadMagnetPrimary} className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">
                                                Access now <i className="fas fa-arrow-right ml-2 text-xs"></i>
                                            </a>
                                            <a href="/contact" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-200 hover:text-brand-700">
                                                Talk to Sami
                                            </a>
                                        </div>
                                    </div>
                                    {relatedLinks && relatedLinks.length > 0 && (
                                        <div className="mt-6">
                                            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Related services & cases</div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {relatedLinks.map(link => (
                                                    <a key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-brand-200 hover:text-brand-700">
                                                        {t(link.labelKey)}
                                                        <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="mt-6">
                                        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-2">Navigate by capability</div>
                                        <div className="flex flex-wrap gap-2">
                                            {capabilityLinks.map(link => (
                                                <a key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-200">
                                                    {t(link.labelKey)}
                                                    <i className="fas fa-arrow-right text-[10px]"></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
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
