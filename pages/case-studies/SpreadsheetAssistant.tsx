import React from 'react';
import HireCTA from '../../components/HireCTA';
import { useTranslation } from '../../i18n/LanguageContext';

const SpreadsheetAssistant: React.FC = () => {
  const { t } = useTranslation();
  const title = t('caseStudies.spreadsheet.title');
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">{t('caseStudies.spreadsheet.intro')}</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Natural language to formulas and charts</li>
          <li>Reusable prompt templates with evals</li>
          <li>Anomaly flags and explanations</li>
          <li>Adoption playbook and training sessions</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">
            {t('caseStudies.relatedServices')} {' '}
            <a className="underline" href="/services/rag-langchain">{t('services.ragLangChain.title')}</a> · <a className="underline" href="/services/prompt-engineering">{t('services.promptEngineering.title')}</a>
          </p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default SpreadsheetAssistant;
