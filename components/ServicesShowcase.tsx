import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

type ClusterId = 'engineering' | 'enablement' | 'specialized';

type ClusterItem = { href: string; labelKey: TranslationKey; descKey: TranslationKey };

const SERVICE_CLUSTERS: Array<{ id: ClusterId; items: ClusterItem[] }> = [
  {
    id: 'engineering',
    items: [
      { href: '/services/agents-automation', labelKey: 'services.agentsAutomation.name', descKey: 'services.agentsAutomation.description' },
      { href: '/services/rag-langchain', labelKey: 'services.ragLangChain.name', descKey: 'services.ragLangChain.description' },
      { href: '/services/advanced-ai', labelKey: 'services.advancedAI.name', descKey: 'services.advancedAI.description' },
      { href: '/services/prompt-engineering', labelKey: 'services.promptEngineering.name', descKey: 'services.promptEngineering.description' },
      { href: '/services/business-automation', labelKey: 'services.businessAutomation.name', descKey: 'services.businessAutomation.description' },
      { href: '/services/ai-readiness-audit', labelKey: 'services.aiReadinessAudit.name', descKey: 'services.aiReadinessAudit.description' },
      { href: '/services/troubleshooting', labelKey: 'services.troubleshooting.name', descKey: 'services.troubleshooting.description' },
    ],
  },
  {
    id: 'enablement',
    items: [
      { href: '/ai-training', labelKey: 'nav.training', descKey: 'trainingOverview.description' },
      { href: '/services/data-science-training', labelKey: 'services.dataScienceTraining.name', descKey: 'services.dataScienceTraining.description' },
      { href: '/services/no-code-ai', labelKey: 'services.noCodeAI.name', descKey: 'services.noCodeAI.description' },
      { href: '/services/university-ml', labelKey: 'services.universityML.name', descKey: 'services.universityML.description' },
      { href: '/services/family-ai', labelKey: 'services.familyAI.name', descKey: 'services.familyAI.description' },
      { href: '/services/ai-language-learning', labelKey: 'services.aiLanguageLearning.name', descKey: 'services.aiLanguageLearning.description' },
    ],
  },
  {
    id: 'specialized',
    items: [
      { href: '/services/medical-ai', labelKey: 'services.medicalAI.name', descKey: 'services.medicalAI.description' },
      { href: '/services/ai-funding-grants', labelKey: 'services.aiFundingGrants.name', descKey: 'services.aiFundingGrants.description' },
      { href: '/services/accelerator-readiness', labelKey: 'services.acceleratorReadiness.name', descKey: 'services.acceleratorReadiness.description' },
      { href: '/services/ai-competitive-research', labelKey: 'services.aiCompetitiveResearch.name', descKey: 'services.aiCompetitiveResearch.description' },
      { href: '/services/ai-ip-patents', labelKey: 'services.aiPatentsIP.name', descKey: 'services.aiPatentsIP.description' },
      { href: '/services/proptech-analytics', labelKey: 'services.proptechAnalytics.name', descKey: 'services.proptechAnalytics.description' },
      { href: '/services/airbnb-analytics', labelKey: 'services.airbnbAnalytics.name', descKey: 'services.airbnbAnalytics.description' },
      { href: '/services/ai-for-marketing', labelKey: 'services.aiForMarketing.name', descKey: 'services.aiForMarketing.description' },
    ],
  },
];

const clusterCopy: Record<LanguageCode, Record<ClusterId, { title: string; blurb: string }>> = {
  en: {
    engineering: {
      title: 'Production AI Engineering',
      blurb: 'Agentic systems, RAG and MCP, platform and backend work, automation, evaluations and observability — built to run in production.',
    },
    enablement: {
      title: 'AI Enablement & Training',
      blurb: 'Corporate programs, hands-on workshops and tutoring for teams, students and families, so the people around the system can operate it.',
    },
    specialized: {
      title: 'Specialized Solutions',
      blurb: 'Domain engagements where the context does the heavy lifting: medical AI, funding, competitive research, property analytics and creative production.',
    },
  },
  es: {
    engineering: {
      title: 'Ingeniería de IA en producción',
      blurb: 'Sistemas agénticos, RAG y MCP, plataforma y backend, automatización, evaluaciones y observabilidad, construidos para operar en producción.',
    },
    enablement: {
      title: 'Capacitación y formación en IA',
      blurb: 'Programas para empresas, talleres prácticos y tutoría para equipos, estudiantes y familias, para que las personas alrededor del sistema sepan operarlo.',
    },
    specialized: {
      title: 'Soluciones especializadas',
      blurb: 'Proyectos donde el dominio marca la diferencia: IA médica, financiación, investigación competitiva, analítica inmobiliaria y producción creativa.',
    },
  },
  fr: {
    engineering: {
      title: 'Ingénierie IA en production',
      blurb: 'Systèmes agentiques, RAG et MCP, plateforme et backend, automatisation, évaluations et observabilité — conçus pour tourner en production.',
    },
    enablement: {
      title: 'Accompagnement & formation IA',
      blurb: 'Programmes en entreprise, ateliers pratiques et tutorat pour équipes, étudiants et familles, afin que les personnes autour du système sachent l’exploiter.',
    },
    specialized: {
      title: 'Solutions spécialisées',
      blurb: 'Missions où le domaine fait la différence : IA médicale, financement, recherche concurrentielle, analytique immobilière et production créative.',
    },
  },
  zh: {
    engineering: {
      title: '生产级 AI 工程',
      blurb: '智能体系统、RAG 与 MCP、平台与后端、自动化、评估与可观测性——按可长期在生产环境运行的标准构建。',
    },
    enablement: {
      title: 'AI 赋能与培训',
      blurb: '面向企业的培训项目、实操工作坊，以及针对团队、学生与家庭的辅导，让使用系统的人真正能把它用起来。',
    },
    specialized: {
      title: '专项解决方案',
      blurb: '由行业背景决定成败的项目：医疗 AI、资金申请、竞品研究、房产数据分析与创意内容生产。',
    },
  },
};

const ServicesShowcase: React.FC = () => {
  const { t, language } = useTranslation();
  const copy = clusterCopy[language];

  return (
    <section className="relative py-24" aria-labelledby="home-services-title">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill inline-flex items-center gap-2 text-brand-700">
            <i className="fas fa-layer-group"></i>
            {t('home.servicesShowcase.badge')}
          </span>
          <h2 id="home-services-title" className="section-heading mt-4">{t('home.servicesShowcase.title')}</h2>
          <p className="section-subtitle mx-auto mt-3">{t('home.servicesShowcase.description')}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">{t('home.servicesShowcase.subtitle')}</p>
        </div>

        <div className="mt-14 space-y-14">
          {SERVICE_CLUSTERS.map((cluster, clusterIndex) => (
            <div key={cluster.id} aria-labelledby={`services-cluster-${cluster.id}`}>
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-bold text-brand-600">{String(clusterIndex + 1).padStart(2, '0')}</span>
                  <h3 id={`services-cluster-${cluster.id}`} className="text-2xl font-black tracking-tight text-slate-950">{copy[cluster.id].title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-600">{copy[cluster.id].blurb}</p>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {cluster.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group glass-panel relative flex h-full flex-col justify-between overflow-hidden p-6 shadow-soft-xl transition hover:-translate-y-1"
                  >
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">{t(item.labelKey)}</h4>
                      <p className="mt-3 text-sm text-slate-600">{t(item.descKey)}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                      {t('home.servicesShowcase.learnMore')}
                      <i className="fas fa-arrow-right transition group-hover:translate-x-1"></i>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-slate-600">{t('home.servicesShowcase.meta')}</p>
          <a href="/services" className="btn-secondary">
            {t('home.servicesShowcase.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
