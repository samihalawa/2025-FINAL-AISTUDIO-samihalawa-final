import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../../i18n/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';

const SERVICE_CARDS: Array<{ href: string; titleKey: TranslationKey; descKey: TranslationKey }> = [
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

const FEATURED_CASE_STUDIES: Array<{ href: string; titleKey: TranslationKey; descKey: TranslationKey }> = [
  { href: '/case-studies/autoclient', titleKey: 'services.index.caseStudy.autoclient.title', descKey: 'services.index.caseStudy.autoclient.description' },
  { href: '/case-studies/radiology-ai', titleKey: 'services.index.caseStudy.radiology.title', descKey: 'services.index.caseStudy.radiology.description' },
];

const indexCopy: Record<LanguageCode, { eyebrow: string; guide: string; guideBody: string; openCase: string }> = {
  en: { eyebrow: 'Product, delivery and enablement', guide: '20 focused ways to work together', guideBody: 'Choose the closest starting point. Every engagement is shaped around the existing product, team and operating constraints.', openCase: 'Open case study' },
  es: { eyebrow: 'Producto, entrega y capacitación', guide: '20 formas concretas de trabajar juntos', guideBody: 'Elige el punto de partida más cercano. Cada colaboración se adapta al producto, al equipo y a sus restricciones operativas.', openCase: 'Abrir caso' },
  fr: { eyebrow: 'Produit, livraison et accompagnement', guide: '20 façons concrètes de collaborer', guideBody: 'Choisissez le point de départ le plus proche. Chaque mission s’adapte au produit, à l’équipe et aux contraintes d’exploitation.', openCase: 'Ouvrir l’étude de cas' },
  zh: { eyebrow: '产品、交付与赋能', guide: '20 种明确的合作方式', guideBody: '选择最接近的起点。每次合作都会围绕现有产品、团队与运营条件进行调整。', openCase: '查看案例' },
};

const ServicesIndex: React.FC = () => {
  const { t, language } = useTranslation();
  const copy = indexCopy[language];

  return (
    <section className="border-b border-slate-300 bg-[#f8f6f1] py-12 sm:py-16">
      <header className="grid gap-8 border-b border-slate-400 pb-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,.8fr)] lg:items-end lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{copy.eyebrow}</p>
          <h1 className="cv-serif mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.045em] text-slate-950">{t('services.index.title')}</h1>
        </div>
        <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-700 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{t('services.index.description')}</p>
      </header>

      <div className="grid gap-10 py-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{copy.guide}</p>
          <p className="mt-4 leading-relaxed text-slate-600">{copy.guideBody}</p>
        </div>
        <ol className="border-t border-slate-400">
          {SERVICE_CARDS.map((card, index) => (
            <li key={card.href} className="border-b border-slate-300">
              <Link to={card.href} className="group grid min-h-32 gap-4 py-6 sm:grid-cols-[3rem_minmax(12rem,.7fr)_minmax(0,1fr)_2rem] sm:items-start sm:gap-6">
                <span className="font-mono text-xs font-bold text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="cv-serif text-2xl font-semibold leading-tight text-slate-950 group-hover:text-brand-800">{t(card.titleKey)}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{t(card.descKey)}</p>
                <i className="fas fa-arrow-right mt-1 text-xs text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-800" />
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <section className="grid gap-8 border-t border-slate-400 pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16" aria-labelledby="featured-case-studies">
        <h2 id="featured-case-studies" className="cv-serif text-3xl font-normal leading-tight text-slate-950">{t('services.index.caseStudiesHeading')}</h2>
        <div className="grid border-t border-slate-400 md:grid-cols-2">
          {FEATURED_CASE_STUDIES.map((cs, index) => (
            <Link key={cs.href} to={cs.href} className={`group border-b border-slate-300 py-6 md:px-6 ${index === 0 ? 'md:border-r' : ''}`}>
              <span className="font-mono text-xs font-bold text-brand-800">0{index + 1}</span>
              <h3 className="cv-serif mt-4 text-2xl font-semibold text-slate-950 group-hover:text-brand-800">{t(cs.titleKey)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{t(cs.descKey)}</p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-slate-500 text-sm font-bold text-slate-800 group-hover:border-slate-950">{copy.openCase} <i className="fas fa-arrow-right text-xs" /></span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ServicesIndex;
