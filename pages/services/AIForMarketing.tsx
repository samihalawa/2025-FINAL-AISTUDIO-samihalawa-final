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

const AIForMarketing: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.aiForMarketing.title');
  const relatedCaseStudies = [
    { href: '/case-studies/autoclient', label: t('caseStudies.index.case.autoclient.title') },
    { href: '/projects#oulang', label: 'OULANG multilingual growth platform' }
  ];
  const moduleKeys: TranslationKey[] = [
    'services.aiForMarketing.module1',
    'services.aiForMarketing.module2',
    'services.aiForMarketing.module3',
    'services.aiForMarketing.module4'
  ];
  const deliverableKeys: TranslationKey[] = [
    'services.aiForMarketing.deliverable1',
    'services.aiForMarketing.deliverable2',
    'services.aiForMarketing.deliverable3',
    'services.aiForMarketing.deliverable4'
  ];
  const modules = moduleKeys.map((key) => t(key));
  const deliverables = deliverableKeys.map((key) => t(key));
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{t('services.aiForMarketing.intro')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={t('services.aiForMarketing.section.modules')} points={modules} />
          <Section title={t('services.aiForMarketing.section.deliverables')} points={deliverables} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{t('cta.requestTrainingPlan')}</Link>
          <Link to="/services/no-code-ai" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{t('services.noCodeAI.name')}</Link>
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

export default AIForMarketing;
