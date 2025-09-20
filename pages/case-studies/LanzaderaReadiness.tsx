import React from 'react';
import { Helmet } from 'react-helmet-async';
import HireCTA from '../../components/HireCTA';
import { useTranslation } from '../../i18n/LanguageContext';

const LanzaderaReadiness: React.FC = () => {
  const { t, language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}/case-studies/lanzadera-readiness`;
  const title = t('caseStudies.lanzadera.title');
  const description = t('caseStudies.lanzadera.description');
  const relatedServices = [
    { href: '/services/accelerator-readiness', label: t('services.acceleratorReadiness.title') },
    { href: '/services/ai-competitive-research', label: t('services.aiCompetitiveResearch.title') }
  ];
  const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, about: 'Accelerators, Pitch, GTM', description, author: { '@type': 'Person', name: 'Sami Halawa' },
    inLanguage: language,
    mainEntityOfPage: canonical,
    isRelatedTo: relatedServices.map(service => ({
      '@type': 'Service',
      name: service.label,
      url: `${siteUrl}${service.href}`
    })) };
  const og = 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&h=630&q=80';
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
        <p className="text-slate-700 mb-6">{t('caseStudies.lanzadera.intro')}</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Investor deck and one‑pager</li>
          <li>Clickable demo or prototype</li>
          <li>Narrative and Q&A prep</li>
          <li>GTM plan and metric tracking</li>
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

export default LanzaderaReadiness;
