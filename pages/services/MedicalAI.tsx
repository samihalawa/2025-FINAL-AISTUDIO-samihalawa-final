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
    <a href="https://wa.me/34679794037" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{secondaryLabel}</a>
  </div>
);

const MedicalAI: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.medicalAI.title');
  const relatedCaseStudies = [
    { href: '/case-studies/radiology-ai', label: t('caseStudies.index.case.radiology.title') }
  ];
  const learnKeys: TranslationKey[] = [
    'services.medicalAI.learn1',
    'services.medicalAI.learn2',
    'services.medicalAI.learn3',
    'services.medicalAI.learn4'
  ];
  const caseKeys: TranslationKey[] = [
    'services.medicalAI.case1',
    'services.medicalAI.case2',
    'services.medicalAI.case3'
  ];
  const learnPoints = learnKeys.map((key) => t(key));
  const casePoints = caseKeys.map((key) => t(key));
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{t('services.medicalAI.intro')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={t('services.medicalAI.section.learn')} points={learnPoints} />
          <Section title={t('services.medicalAI.section.cases')} points={casePoints} />
        </div>
        <CTA primaryLabel={t('cta.requestDemo')} secondaryLabel={t('cta.chatWhatsapp')} />
        <div className="mt-8 text-sm text-slate-700">
          <span className="font-semibold">{t('services.relatedCaseStudies')}</span>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {relatedCaseStudies.map((cs) => (
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

export default MedicalAI;
