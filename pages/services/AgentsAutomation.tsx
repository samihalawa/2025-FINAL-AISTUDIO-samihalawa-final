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

const AgentsAutomation: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.agentsAutomation.title');
  const relatedCaseStudies = [
    { href: '/case-studies/autoclient', label: t('caseStudies.index.case.autoclient.title') },
    { href: '/projects#gowa', label: 'GOWA WhatsApp API / WhatsApp MCP' }
  ];
  const bootcampKeys: TranslationKey[] = [
    'services.agentsAutomation.bootcamp1',
    'services.agentsAutomation.bootcamp2',
    'services.agentsAutomation.bootcamp3',
    'services.agentsAutomation.bootcamp4'
  ];
  const impactKeys: TranslationKey[] = [
    'services.agentsAutomation.impact1',
    'services.agentsAutomation.impact2',
    'services.agentsAutomation.impact3',
    'services.agentsAutomation.impact4'
  ];
  const bootcampPoints = bootcampKeys.map((key) => t(key));
  const impactPoints = impactKeys.map((key) => t(key));
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{t('services.agentsAutomation.intro')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={t('services.agentsAutomation.section.bootcamp')} points={bootcampPoints} />
          <Section title={t('services.agentsAutomation.section.impact')} points={impactPoints} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{t('cta.requestProposal')}</Link>
          <Link to="/services/business-automation" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{t('services.businessAutomation.name')}</Link>
        </div>
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

export default AgentsAutomation;
