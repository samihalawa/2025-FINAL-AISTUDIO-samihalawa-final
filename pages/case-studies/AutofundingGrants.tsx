import React from 'react';
import { Helmet } from 'react-helmet-async';
import HireCTA from '../../components/HireCTA';
import { useTranslation } from '../../i18n/LanguageContext';

const AutofundingGrants: React.FC = () => {
  const { t, language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}/case-studies/autofunding-grants`;
  const title = t('caseStudies.grants.title');
  const description = t('caseStudies.grants.description');
  const relatedServices = [
    { href: '/services/ai-funding-grants', label: t('services.aiFundingGrants.title') },
    { href: '/services/ai-ip-patents', label: t('services.aiPatentsIP.title') }
  ];
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'TechArticle', headline: title,
    about: 'Funding, Grants, AI Health', description,
    author: { '@type': 'Person', name: 'Sami Halawa' },
    inLanguage: language,
    mainEntityOfPage: canonical,
    isRelatedTo: relatedServices.map(service => ({
      '@type': 'Service',
      name: service.label,
      url: `${siteUrl}${service.href}`
    }))
  };
  const og = 'https://images.unsplash.com/photo-1554224155-3a589877462f?auto=format&fit=crop&w=1200&h=630&q=80';
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
        <p className="text-slate-700 mb-6">{t('caseStudies.grants.intro')}</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Funding scan with timelines and scoring</li>
          <li>Narrative drafting aligned with program criteria</li>
          <li>Budget and milestones plan</li>
          <li>Submission checklist with roles</li>
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

export default AutofundingGrants;
