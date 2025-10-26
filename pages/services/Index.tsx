import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { usePageMeta } from '../../hooks/usePageMeta';
import type { TranslationKey } from '../../i18n/translations';

const SERVICE_CARDS = [
  { href: '/services/medical-ai', titleKey: 'services.medicalAI.name', descKey: 'services.medicalAI.description' },
  { href: '/services/business-automation', titleKey: 'services.businessAutomation.name', descKey: 'services.businessAutomation.description' },
  { href: '/services/university-ml', titleKey: 'services.universityML.name', descKey: 'services.universityML.description' },
  { href: '/services/family-ai', titleKey: 'services.familyAI.name', descKey: 'services.familyAI.description' },
  { href: '/services/advanced-ai', titleKey: 'services.advancedAI.name', descKey: 'services.advancedAI.description' },
  { href: '/services/no-code-ai', titleKey: 'services.noCodeAI.name', descKey: 'services.noCodeAI.description' },
  { href: '/services/prompt-engineering', titleKey: 'services.promptEngineering.name', descKey: 'services.promptEngineering.description' },
  { href: '/services/rag-langchain', titleKey: 'services.ragLangChain.name', descKey: 'services.ragLangChain.description' },
  { href: '/services/agents-automation', titleKey: 'services.agentsAutomation.name', descKey: 'services.agentsAutomation.description' },
  { href: '/services/ai-for-marketing', titleKey: 'services.aiForMarketing.name', descKey: 'services.aiForMarketing.description' },
  { href: '/services/ai-readiness-audit', titleKey: 'services.aiReadinessAudit.name', descKey: 'services.aiReadinessAudit.description' },
  { href: '/services/ai-competitive-research', titleKey: 'services.aiCompetitiveResearch.name', descKey: 'services.aiCompetitiveResearch.description' },
  { href: '/services/ai-funding-grants', titleKey: 'services.aiFundingGrants.name', descKey: 'services.aiFundingGrants.description' },
  { href: '/services/ai-ip-patents', titleKey: 'services.aiPatentsIP.name', descKey: 'services.aiPatentsIP.description' },
  { href: '/services/accelerator-readiness', titleKey: 'services.acceleratorReadiness.name', descKey: 'services.acceleratorReadiness.description' },
  { href: '/services/data-science-training', titleKey: 'services.dataScienceTraining.name', descKey: 'services.dataScienceTraining.description' },
  { href: '/services/proptech-analytics', titleKey: 'services.proptechAnalytics.name', descKey: 'services.proptechAnalytics.description' },
  { href: '/services/airbnb-analytics', titleKey: 'services.airbnbAnalytics.name', descKey: 'services.airbnbAnalytics.description' },
  { href: '/services/ai-language-learning', titleKey: 'services.aiLanguageLearning.name', descKey: 'services.aiLanguageLearning.description' },
  { href: '/services/troubleshooting', titleKey: 'services.troubleshooting.name', descKey: 'services.troubleshooting.description' },
];

const FEATURED_CASE_STUDIES = [
  { href: '/case-studies/autoclient', titleKey: 'services.index.caseStudy.autoclient.title', descKey: 'services.index.caseStudy.autoclient.description' },
  { href: '/case-studies/radiology-ai', titleKey: 'services.index.caseStudy.radiology.title', descKey: 'services.index.caseStudy.radiology.description' },
  { href: '/case-studies/banking-assistant', titleKey: 'services.index.caseStudy.banking.title', descKey: 'services.index.caseStudy.banking.description' },
];

const ServicesIndex: React.FC = () => {
  const { t } = useTranslation();
  const { title, description } = usePageMeta('services');
  const ogImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80';

  return (
    <section className="py-8">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href="/services" />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t('services.index.title')}</h1>
      <p className="text-slate-700 mb-8 max-w-3xl">{t('services.index.description')}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_CARDS.map(card => (
          <Link key={card.href} to={card.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">{t(card.titleKey as TranslationKey)}</h2>
            <p className="text-slate-700">{t(card.descKey as TranslationKey)}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('services.index.caseStudiesHeading')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CASE_STUDIES.map(cs => (
            <Link key={cs.href} to={cs.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{t(cs.titleKey as TranslationKey)}</h3>
              <p className="text-slate-700">{t(cs.descKey as TranslationKey)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIndex;
