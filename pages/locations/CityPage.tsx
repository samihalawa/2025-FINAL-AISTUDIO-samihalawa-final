import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';

type CityPageProps = {
  cityKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  canonical: string;
};

const highlightServices: Array<{ href: string; labelKey: TranslationKey }> = [
  { href: '/services/prompt-engineering', labelKey: 'services.promptEngineering.name' },
  { href: '/services/rag-langchain', labelKey: 'services.ragLangChain.name' },
  { href: '/services/agents-automation', labelKey: 'services.agentsAutomation.name' },
  { href: '/services/ai-for-marketing', labelKey: 'services.aiForMarketing.name' },
  { href: '/services/business-automation', labelKey: 'services.businessAutomation.name' },
  { href: '/services/medical-ai', labelKey: 'services.medicalAI.name' },
];

const siteUrl = 'https://samihalawa.com';

const CityPage: React.FC<CityPageProps> = ({ cityKey, titleKey, descriptionKey, canonical }) => {
  const { t } = useTranslation();
  const city = t(cityKey);
  const title = t(titleKey);
  const description = t(descriptionKey);
  const siteName = t('layout.siteName');
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;

  const faqItems = useMemo(() => ([
    { question: t('locations.city.faq.delivery.question'), answer: t('locations.city.faq.delivery.answer') },
    { question: t('locations.city.faq.languages.question'), answer: t('locations.city.faq.languages.answer') },
    { question: t('locations.city.faq.availability.question'), answer: t('locations.city.faq.availability.answer') },
  ]), [t]);

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: t('locations.city.schema.name').replace('{city}', city),
    areaServed: city,
    url: canonicalUrl,
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: t('locations.city.schema.serviceType'),
    availableLanguage: ['es', 'en'],
  }), [canonicalUrl, city, t]);

  const faqJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }), [faqItems]);

  const highlightTitle = t('locations.city.highlightsTitle').replace('{city}', city);
  const highlightSubtitle = t('locations.city.highlightsSubtitle').replace('{city}', city);
  const faqTitle = t('locations.city.faqTitle').replace('{city}', city);

  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{`${title} | ${siteName}`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{description}</p>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 md:p-8 shadow-soft-xl">
          <h2 className="text-2xl font-semibold text-slate-900">{highlightTitle}</h2>
          <p className="mt-2 text-slate-600">{highlightSubtitle}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlightServices.map((highlight) => (
              <Link
                key={highlight.href}
                to={highlight.href}
                className="group block rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-brand-200 hover:text-brand-700"
              >
                <span className="flex items-center justify-between">
                  {t(highlight.labelKey)}
                  <i className="fas fa-arrow-right text-xs opacity-0 transition group-hover:opacity-100"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800">
            {t('locations.city.cta.primary')}
          </Link>
          <Link to="/ai-training" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700">
            {t('locations.city.cta.secondary')}
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">{faqTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faqItems.map((item, index) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{t('locations.city.faqLabel').replace('{index}', (index + 1).toString())}</div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityPage;

