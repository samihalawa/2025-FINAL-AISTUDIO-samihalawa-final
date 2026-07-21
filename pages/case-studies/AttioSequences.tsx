import React from 'react';
import HireCTA from '../../components/HireCTA';
import { useTranslation } from '../../i18n/LanguageContext';

const AttioSequences: React.FC = () => {
  const { t } = useTranslation();
  const title = t('caseStudies.attio.title');
  const relatedServices = [
    { href: '/services/ai-competitive-research', label: t('services.aiCompetitiveResearch.title') },
    { href: '/services/ai-readiness-audit', label: t('services.aiReadinessAudit.title') }
  ];
  return (
    <section className="py-16 bg-white">
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
