import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { usePageMeta } from '../../hooks/usePageMeta';

const CASES = [
  { href: '/case-studies/radiology-ai', titleKey: 'caseStudies.index.case.radiology.title', descKey: 'caseStudies.index.case.radiology.description' },
  { href: '/case-studies/autoclient', titleKey: 'caseStudies.index.case.autoclient.title', descKey: 'caseStudies.index.case.autoclient.description' },
  { href: '/case-studies/attio-sequences', titleKey: 'caseStudies.index.case.attio.title', descKey: 'caseStudies.index.case.attio.description' },
  { href: '/case-studies/banking-assistant', titleKey: 'caseStudies.index.case.banking.title', descKey: 'caseStudies.index.case.banking.description' },
  { href: '/case-studies/spreadsheet-assistant', titleKey: 'caseStudies.index.case.spreadsheet.title', descKey: 'caseStudies.index.case.spreadsheet.description' },
  { href: '/case-studies/proptech-analytics', titleKey: 'caseStudies.index.case.proptech.title', descKey: 'caseStudies.index.case.proptech.description' },
  { href: '/case-studies/airbnb-intelligence', titleKey: 'caseStudies.index.case.airbnb.title', descKey: 'caseStudies.index.case.airbnb.description' },
  { href: '/case-studies/autofunding-grants', titleKey: 'caseStudies.index.case.grants.title', descKey: 'caseStudies.index.case.grants.description' },
  { href: '/case-studies/lanzadera-readiness', titleKey: 'caseStudies.index.case.lanzadera.title', descKey: 'caseStudies.index.case.lanzadera.description' },
];

const CaseStudiesIndex: React.FC = () => {
  const { t } = useTranslation();
  const { title, description } = usePageMeta('caseStudies');

  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&h=630&q=80" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&h=630&q=80" />
        <link rel="canonical" href="/case-studies" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t('caseStudies.index.title')}</h1>
        <p className="text-slate-700 mb-8 max-w-3xl">{t('caseStudies.index.description')}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map(c => (
            <Link key={c.href} to={c.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{t(c.titleKey)}</h2>
              <p className="text-slate-700">{t(c.descKey)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesIndex;
