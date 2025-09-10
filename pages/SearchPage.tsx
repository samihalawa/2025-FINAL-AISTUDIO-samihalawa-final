import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

type Item = { href: string; title: string; description: string; category: string };

const ITEMS: Item[] = [
  { href: '/ai-training', title: 'AI Training Overview', description: 'All programs and workshops', category: 'Overview' },
  { href: '/services/prompt-engineering', title: 'Prompt Engineering', description: 'Prompts, tools, evals, guardrails', category: 'Services' },
  { href: '/services/rag-langchain', title: 'RAG & LangChain', description: 'Retrieval, chunking, hybrid search', category: 'Services' },
  { href: '/services/agents-automation', title: 'AI Agents & Automation', description: 'Workflows and orchestration', category: 'Services' },
  { href: '/services/ai-for-marketing', title: 'AI for Marketing', description: 'Content, SEO, ads and analytics', category: 'Services' },
  { href: '/services/ai-readiness-audit', title: 'AI Readiness Audit', description: 'Evals, safety and budgets', category: 'Services' },
  { href: '/services/ai-competitive-research', title: 'Competitive Research', description: 'Reverse engineering & blueprints', category: 'Services' },
  { href: '/services/ai-funding-grants', title: 'Funding & Grants', description: 'Non-dilutive financing support', category: 'Services' },
  { href: '/services/ai-ip-patents', title: 'Patents & IP', description: 'Claims, drafting and readiness', category: 'Services' },
  { href: '/services/accelerator-readiness', title: 'Accelerator Readiness', description: 'Deck, demo and narrative', category: 'Services' },
  { href: '/services/data-science-training', title: 'Data Science Training', description: 'Stats, ML and evaluation', category: 'Services' },
  { href: '/services/proptech-analytics', title: 'PropTech Analytics', description: 'Pipelines and valuation', category: 'Services' },
  { href: '/services/airbnb-analytics', title: 'Airbnb Intelligence', description: 'Pricing and occupancy', category: 'Services' },
  { href: '/services/ai-language-learning', title: 'AI Language Learning', description: 'SRS and conversation partners', category: 'Services' },
  { href: '/case-studies/radiology-ai', title: 'Case Study — RadiologyAI', description: 'Clinical reporting & triage', category: 'Case Studies' },
  { href: '/case-studies/autoclient', title: 'Case Study — AutoClient', description: 'Outreach & CRM automation', category: 'Case Studies' },
  { href: '/case-studies/attio-sequences', title: 'Case Study — Attio Sequences', description: 'Reverse engineering sequences', category: 'Case Studies' },
  { href: '/locations/madrid', title: 'Madrid', description: 'Onsite delivery in Madrid', category: 'Locations' },
  { href: '/locations/barcelona', title: 'Barcelona', description: 'Workshops in Barcelona', category: 'Locations' },
  { href: '/locations/valencia', title: 'Valencia', description: 'Startups & Lanzadera', category: 'Locations' },
  { href: '/locations/spain', title: 'Spain', description: 'Nationwide delivery', category: 'Locations' },
  { href: '/locations/online', title: 'Online', description: 'Remote-first worldwide', category: 'Locations' },
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const SearchPage: React.FC = () => {
  const { t } = useTranslation();
  const q = useQuery().get('q')?.trim().toLowerCase() || '';
  const results = useMemo(() => {
    if (!q) return ITEMS;
    return ITEMS.filter(item =>
      [item.title, item.description, item.category, item.href].join(' ').toLowerCase().includes(q)
    );
  }, [q]);

  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{t('search.title')} | Sami Halawa</title>
        <meta name="description" content={t('search.description')} />
        <link rel="canonical" href="/search" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t('search.title')}</h1>
        <form action="/search" className="mb-6">
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder={t('search.placeholder')}
            className="w-full border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </form>
        {results.length === 0 ? (
          <p className="text-slate-600">{t('search.noResults')}</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {results.map((r) => (
              <Link key={r.href} to={r.href} className="block p-5 border border-slate-200 rounded-md hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="text-xs uppercase tracking-wide text-slate-500">{r.category}</div>
                <div className="text-lg font-semibold text-slate-900">{r.title}</div>
                <div className="text-slate-700">{r.description}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;

