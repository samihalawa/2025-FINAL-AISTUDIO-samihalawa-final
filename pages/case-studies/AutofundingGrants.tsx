import React from 'react';
import HireCTA from '../../components/HireCTA';
import { useTranslation } from '../../i18n/LanguageContext';

const AutofundingGrants: React.FC = () => {
  const { t } = useTranslation();
  const title = t('caseStudies.grants.title');
  const relatedServices = [
    { href: '/services/ai-funding-grants', label: t('services.aiFundingGrants.title') },
    { href: '/services/ai-ip-patents', label: t('services.aiPatentsIP.title') }
  ];
  return (
    <section className="py-16 bg-white">
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
