import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../../i18n/LanguageContext';

const AttioSequences: React.FC = () => {
  const { t, language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}/case-studies/attio-sequences`;
  const title = t('caseStudies.attio.title');
  const description = t('caseStudies.attio.description');
  const og = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80';
  const relatedServices = [
    { href: '/services/ai-competitive-research', label: t('services.aiCompetitiveResearch.title') },
    { href: '/services/ai-readiness-audit', label: t('services.aiReadinessAudit.title') }
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'Product Research, Reverse Engineering, APIs',
    author: { '@type': 'Person', name: 'Sami Halawa' },
    description,
    inLanguage: language,
    mainEntityOfPage: canonical,
    isRelatedTo: relatedServices.map(service => ({
      '@type': 'Service',
      name: service.label,
      url: `${siteUrl}${service.href}`
    }))
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">{t('caseStudies.attio.intro')}</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Deliverables</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Architecture and data model</li>
          <li>Open-source replacement blueprint</li>
          <li>API specs with examples</li>
          <li>MVP scope and milestones</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">
            {t('caseStudies.relatedServices')} {' '}
            {relatedServices.map((service, index) => (
              <span key={service.href}>
                <a className="underline" href={service.href}>{service.label}</a>
                {index === relatedServices.length - 1 ? '' : ' · '}
              </span>
            ))}
          </p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default AttioSequences;
