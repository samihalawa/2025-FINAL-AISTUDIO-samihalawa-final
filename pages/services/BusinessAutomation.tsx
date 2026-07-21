import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';

const Section: React.FC<{ title: string; points: string[] }> = ({ title, points }) => (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

const CTA: React.FC<{ primaryLabel: string; secondaryLabel: string }> = ({ primaryLabel, secondaryLabel }) => (
  <div className="mt-10 flex flex-col sm:flex-row gap-4">
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{primaryLabel}</Link>
    <Link to="/projects" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{secondaryLabel}</Link>
  </div>
);

const BusinessAutomation: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.businessAutomation.title');
  const relatedCaseStudies = [
    { href: '/case-studies/autoclient', label: t('caseStudies.index.case.autoclient.title') }
  ];
  const scopeKeys: TranslationKey[] = [
    'services.businessAutomation.scope1',
    'services.businessAutomation.scope2',
    'services.businessAutomation.scope3',
    'services.businessAutomation.scope4'
  ];
  const stackKeys: TranslationKey[] = [
    'services.businessAutomation.stack1',
    'services.businessAutomation.stack2',
    'services.businessAutomation.stack3',
    'services.businessAutomation.stack4'
  ];
  const scopePoints = scopeKeys.map((key) => t(key));
  const stackPoints = stackKeys.map((key) => t(key));
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{t('services.businessAutomation.intro')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={t('services.businessAutomation.section.scope')} points={scopePoints} />
          <Section title={t('services.businessAutomation.section.stack')} points={stackPoints} />
        </div>
        <CTA primaryLabel={t('cta.freeAudit')} secondaryLabel={t('cta.viewCases')} />
        <div className="mt-8 text-sm text-slate-700">
          <span className="font-semibold">{t('services.relatedCaseStudies')}</span>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {relatedCaseStudies.map(cs => (
              <li key={cs.href}>
                <a className="underline" href={cs.href}>{cs.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessAutomation;
