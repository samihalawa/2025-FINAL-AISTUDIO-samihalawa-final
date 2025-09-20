import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../../i18n/LanguageContext';

const SpreadsheetAssistant: React.FC = () => {
  const { t, language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}/case-studies/spreadsheet-assistant`;
  const title = t('caseStudies.spreadsheet.title');
  const description = t('caseStudies.spreadsheet.description');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'Productivity, Data Analysis, NL2SQL',
    description,
    author: { '@type': 'Person', name: 'Sami Halawa' },
    inLanguage: language,
    mainEntityOfPage: canonical,
    isRelatedTo: [
      { '@type': 'Service', name: t('services.ragLangChain.title'), url: `${siteUrl}/services/rag-langchain` },
      { '@type': 'Service', name: t('services.promptEngineering.title'), url: `${siteUrl}/services/prompt-engineering` }
    ]
  };
  const og = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
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
