import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../../i18n/LanguageContext';

const ProptechAnalytics: React.FC = () => {
  const { t, language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}/case-studies/proptech-analytics`;
  const title = t('caseStudies.proptech.title');
  const description = t('caseStudies.proptech.description');
  const relatedServices = [
    { href: '/services/proptech-analytics', label: t('services.proptechAnalytics.title') },
    { href: '/services/airbnb-analytics', label: t('services.airbnbAnalytics.title') }
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'PropTech, Real Estate Analytics',
    description,
    author: { '@type': 'Person', name: 'Sami Halawa' },
    inLanguage: language,
    mainEntityOfPage: canonical,
    isRelatedTo: relatedServices.map(service => ({
      '@type': 'Service',
      name: service.label,
      url: `${siteUrl}${service.href}`
    }))
  };
  const og = 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">{t('caseStudies.proptech.intro')}</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Consolidated multi‑source property data</li>
          <li>Valuation and opportunity scoring</li>
          <li>Market trends and geo insights</li>
          <li>Dashboards and alerting playbooks</li>
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

export default ProptechAnalytics;
