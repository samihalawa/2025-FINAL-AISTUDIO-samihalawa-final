import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import type { TranslationKey } from '../i18n/translations';

type Item = { href: string; titleKey: TranslationKey; descriptionKey: TranslationKey; categoryKey: TranslationKey };

const ITEMS: Item[] = [
  { href: '/ai-training', titleKey: 'search.item.trainingOverview.title', descriptionKey: 'search.item.trainingOverview.description', categoryKey: 'search.category.overview' },
  { href: '/services/prompt-engineering', titleKey: 'search.item.promptEngineering.title', descriptionKey: 'search.item.promptEngineering.description', categoryKey: 'search.category.services' },
  { href: '/services/rag-langchain', titleKey: 'search.item.ragLangChain.title', descriptionKey: 'search.item.ragLangChain.description', categoryKey: 'search.category.services' },
  { href: '/services/agents-automation', titleKey: 'search.item.agentsAutomation.title', descriptionKey: 'search.item.agentsAutomation.description', categoryKey: 'search.category.services' },
  { href: '/services/ai-for-marketing', titleKey: 'search.item.aiForMarketing.title', descriptionKey: 'search.item.aiForMarketing.description', categoryKey: 'search.category.services' },
  { href: '/services/ai-readiness-audit', titleKey: 'search.item.aiReadinessAudit.title', descriptionKey: 'search.item.aiReadinessAudit.description', categoryKey: 'search.category.services' },
  { href: '/services/ai-competitive-research', titleKey: 'search.item.aiCompetitiveResearch.title', descriptionKey: 'search.item.aiCompetitiveResearch.description', categoryKey: 'search.category.services' },
  { href: '/services/ai-funding-grants', titleKey: 'search.item.aiFundingGrants.title', descriptionKey: 'search.item.aiFundingGrants.description', categoryKey: 'search.category.services' },
  { href: '/services/ai-ip-patents', titleKey: 'search.item.aiPatentsIP.title', descriptionKey: 'search.item.aiPatentsIP.description', categoryKey: 'search.category.services' },
  { href: '/services/accelerator-readiness', titleKey: 'search.item.acceleratorReadiness.title', descriptionKey: 'search.item.acceleratorReadiness.description', categoryKey: 'search.category.services' },
  { href: '/services/data-science-training', titleKey: 'search.item.dataScienceTraining.title', descriptionKey: 'search.item.dataScienceTraining.description', categoryKey: 'search.category.services' },
  { href: '/services/proptech-analytics', titleKey: 'search.item.proptechAnalytics.title', descriptionKey: 'search.item.proptechAnalytics.description', categoryKey: 'search.category.services' },
  { href: '/services/airbnb-analytics', titleKey: 'search.item.airbnbAnalytics.title', descriptionKey: 'search.item.airbnbAnalytics.description', categoryKey: 'search.category.services' },
  { href: '/services/ai-language-learning', titleKey: 'search.item.aiLanguageLearning.title', descriptionKey: 'search.item.aiLanguageLearning.description', categoryKey: 'search.category.services' },
  { href: '/case-studies/radiology-ai', titleKey: 'search.item.caseRadiology.title', descriptionKey: 'search.item.caseRadiology.description', categoryKey: 'search.category.caseStudies' },
  { href: '/case-studies/autoclient', titleKey: 'search.item.caseAutoclient.title', descriptionKey: 'search.item.caseAutoclient.description', categoryKey: 'search.category.caseStudies' },
  { href: '/case-studies/attio-sequences', titleKey: 'search.item.caseAttio.title', descriptionKey: 'search.item.caseAttio.description', categoryKey: 'search.category.caseStudies' },
  { href: '/locations/madrid', titleKey: 'search.item.locationMadrid.title', descriptionKey: 'search.item.locationMadrid.description', categoryKey: 'search.category.locations' },
  { href: '/locations/barcelona', titleKey: 'search.item.locationBarcelona.title', descriptionKey: 'search.item.locationBarcelona.description', categoryKey: 'search.category.locations' },
  { href: '/locations/valencia', titleKey: 'search.item.locationValencia.title', descriptionKey: 'search.item.locationValencia.description', categoryKey: 'search.category.locations' },
  { href: '/locations/spain', titleKey: 'search.item.locationSpain.title', descriptionKey: 'search.item.locationSpain.description', categoryKey: 'search.category.locations' },
  { href: '/locations/online', titleKey: 'search.item.locationOnline.title', descriptionKey: 'search.item.locationOnline.description', categoryKey: 'search.category.locations' },
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const SearchPage: React.FC = () => {
  const { t } = useTranslation();
  const { title, description } = usePageMeta('search');
  const localizedItems = useMemo(
    () =>
      ITEMS.map(item => ({
        ...item,
        title: t(item.titleKey),
        description: t(item.descriptionKey),
        category: t(item.categoryKey),
      })),
    [t]
  );

  const q = useQuery().get('q')?.trim().toLowerCase() || '';
  const results = useMemo(() => {
    if (!q) return localizedItems;
    return localizedItems.filter(item =>
      [item.title, item.description, item.category, item.href].join(' ').toLowerCase().includes(q)
    );
  }, [q, localizedItems]);

  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
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
