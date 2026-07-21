import React from 'react';
import HireCTA from '../../components/HireCTA';
import { useTranslation } from '../../i18n/LanguageContext';

const ProptechAnalytics: React.FC = () => {
  const { t } = useTranslation();
  const title = t('caseStudies.proptech.title');
  const relatedServices = [
    { href: '/services/proptech-analytics', label: t('services.proptechAnalytics.title') },
    { href: '/services/airbnb-analytics', label: t('services.airbnbAnalytics.title') }
  ];
  return (
    <section className="py-16 bg-white">
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
