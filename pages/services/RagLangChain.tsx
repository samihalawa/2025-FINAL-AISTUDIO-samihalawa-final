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

const RagLangChain: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.ragLangChain.title');
  const relatedCaseStudies = [
    { href: '/projects#chronicle', label: 'Codex Chronicle / Screenpipe tooling' },
    { href: '/projects#jules', label: 'Google Jules MCP' }
  ];
  const topicKeys: TranslationKey[] = [
    'services.ragLangChain.topic1',
    'services.ragLangChain.topic2',
    'services.ragLangChain.topic3',
    'services.ragLangChain.topic4'
  ];
  const deliverableKeys: TranslationKey[] = [
    'services.ragLangChain.deliverable1',
    'services.ragLangChain.deliverable2',
    'services.ragLangChain.deliverable3',
    'services.ragLangChain.deliverable4'
  ];
  const topics = topicKeys.map((key) => t(key));
  const deliverables = deliverableKeys.map((key) => t(key));
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{t('services.ragLangChain.intro')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={t('services.ragLangChain.section.topics')} points={topics} />
          <Section title={t('services.ragLangChain.section.deliverables')} points={deliverables} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{t('cta.bookWorkshop')}</Link>
          <Link to="/services/advanced-ai" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{t('services.advancedAI.name')}</Link>
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

export default RagLangChain;
