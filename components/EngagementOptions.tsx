import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

interface Option { letter: string; title: string; body: string; format: string; bestFor: string; cta: string }

const content: Record<LanguageCode, { eyebrow: string; title: string; body: string; modality: string; formatLabel: string; bestForLabel: string; options: Option[] }> = {
  en: {
    eyebrow: 'Engagement options',
    title: 'Three ways to engage.',
    body: 'Each engagement is scoped around a production outcome, not a headcount. Start with a consultation and I will recommend the format that fits.',
    modality: 'Every option starts with one consultation. Engagements can run alongside an existing team, and staff-level permanent roles are considered on the same basis.',
    formatLabel: 'Format', bestForLabel: 'Best for',
    options: [
      { letter: 'A', title: 'Direct B2B Systems Engineering', body: 'Hands-on design and delivery of production agentic systems, RAG platforms and FastAPI / TypeScript infrastructure, from architecture through deployment and observability.', format: 'Project or monthly contract · fixed scope or retained capacity', bestFor: 'Teams that need a production AI system shipped and operated, not a prototype.', cta: 'Scope a build' },
      { letter: 'B', title: 'Fractional CTO & AI Architecture Governance', body: 'Ongoing technical leadership: architecture decisions, model and vendor strategy, cost control, hiring support and delivery governance across your AI roadmap.', format: '$15K–$25K / month retainers', bestFor: 'Founders and executives who need senior AI architecture ownership without a full-time hire.', cta: 'Discuss a retainer' },
      { letter: 'C', title: 'Technical Due Diligence & AI Code Audits', body: 'Five-day pre-acquisition reviews of AI codebases, infrastructure and data practices, delivered as a written risk and remediation report.', format: '5-day engagement · written report and debrief', bestFor: 'Investors, private-equity teams and acquirers evaluating an AI product or team.', cta: 'Request an audit' },
    ],
  },
  es: {
    eyebrow: 'Opciones de colaboración',
    title: 'Tres formas de trabajar juntos.',
    body: 'Cada colaboración se define en torno a un resultado en producción, no a un número de personas. Empieza con una consulta y te recomendaré el formato adecuado.',
    modality: 'Todas las opciones empiezan con una consulta. Las colaboraciones pueden convivir con un equipo existente, y los puestos permanentes de nivel staff se consideran en las mismas condiciones.',
    formatLabel: 'Formato', bestForLabel: 'Ideal para',
    options: [
      { letter: 'A', title: 'Ingeniería de sistemas B2B directa', body: 'Diseño y entrega práctica de sistemas agénticos en producción, plataformas RAG e infraestructura FastAPI / TypeScript, desde la arquitectura hasta el despliegue y la observabilidad.', format: 'Proyecto o contrato mensual · alcance fijo o capacidad retenida', bestFor: 'Equipos que necesitan un sistema de IA en producción entregado y operado, no un prototipo.', cta: 'Definir un proyecto' },
      { letter: 'B', title: 'CTO fraccional y gobernanza de arquitectura de IA', body: 'Liderazgo técnico continuo: decisiones de arquitectura, estrategia de modelos y proveedores, control de costes, apoyo en contratación y gobernanza de entrega en toda tu hoja de ruta de IA.', format: 'Retainers de 15.000–25.000 $ / mes', bestFor: 'Fundadores y directivos que necesitan responsabilidad sénior sobre la arquitectura de IA sin una contratación a tiempo completo.', cta: 'Hablar de un retainer' },
      { letter: 'C', title: 'Due diligence técnica y auditorías de código de IA', body: 'Revisiones de cinco días previas a una adquisición sobre bases de código de IA, infraestructura y prácticas de datos, entregadas como informe escrito de riesgos y remediación.', format: 'Colaboración de 5 días · informe escrito y sesión de cierre', bestFor: 'Inversores, equipos de private equity y compradores que evalúan un producto o equipo de IA.', cta: 'Solicitar una auditoría' },
    ],
  },
  fr: {
    eyebrow: 'Modes de collaboration',
    title: 'Trois façons de collaborer.',
    body: 'Chaque mission est cadrée autour d’un résultat en production, pas d’un effectif. Commencez par une consultation et je vous recommanderai le format adapté.',
    modality: 'Chaque option commence par une consultation. Les missions peuvent s’intégrer à une équipe existante, et les postes permanents de niveau staff sont étudiés sur la même base.',
    formatLabel: 'Format', bestForLabel: 'Idéal pour',
    options: [
      { letter: 'A', title: 'Ingénierie de systèmes B2B directe', body: 'Conception et livraison opérationnelle de systèmes agentiques en production, de plateformes RAG et d’infrastructures FastAPI / TypeScript, de l’architecture au déploiement et à l’observabilité.', format: 'Projet ou contrat mensuel · périmètre fixe ou capacité réservée', bestFor: 'Équipes qui ont besoin d’un système IA livré et exploité en production, pas d’un prototype.', cta: 'Cadrer un projet' },
      { letter: 'B', title: 'CTO fractionné et gouvernance d’architecture IA', body: 'Leadership technique continu : décisions d’architecture, stratégie modèles et fournisseurs, maîtrise des coûts, appui au recrutement et gouvernance de livraison sur votre feuille de route IA.', format: 'Retainers de 15 000–25 000 $ / mois', bestFor: 'Fondateurs et dirigeants qui ont besoin d’une responsabilité senior sur l’architecture IA sans recrutement à temps plein.', cta: 'Parler d’un retainer' },
      { letter: 'C', title: 'Due diligence technique et audits de code IA', body: 'Revues de cinq jours avant acquisition des bases de code IA, de l’infrastructure et des pratiques data, livrées sous forme de rapport écrit de risques et de remédiation.', format: 'Mission de 5 jours · rapport écrit et restitution', bestFor: 'Investisseurs, équipes de private equity et acquéreurs évaluant un produit ou une équipe IA.', cta: 'Demander un audit' },
    ],
  },
  zh: {
    eyebrow: '合作方式',
    title: '三种合作方式。',
    body: '每项合作都围绕生产成果来界定范围，而非人头数。先预约一次咨询，我会推荐最合适的形式。',
    modality: '每种方式都从一次咨询开始。合作可与现有团队并行，Staff 级长期职位也按同样标准考虑。',
    formatLabel: '形式', bestForLabel: '适合',
    options: [
      { letter: 'A', title: '直接 B2B 系统工程', body: '亲自设计并交付生产级智能体系统、RAG 平台与 FastAPI / TypeScript 基础设施，覆盖架构、部署与可观测性。', format: '项目制或月度合同 · 固定范围或预留产能', bestFor: '需要把 AI 系统真正交付并运营起来、而非停留在原型阶段的团队。', cta: '确定项目范围' },
      { letter: 'B', title: '兼职 CTO 与 AI 架构治理', body: '持续的技术领导：架构决策、模型与供应商策略、成本控制、招聘支持以及整条 AI 路线图的交付治理。', format: '每月 $15K–$25K 顾问费', bestFor: '需要资深 AI 架构负责人、但不想全职招聘的创始人与高管。', cta: '沟通顾问合作' },
      { letter: 'C', title: '技术尽调与 AI 代码审计', body: '为期五天的收购前审查，覆盖 AI 代码库、基础设施与数据实践，交付书面风险与整改报告。', format: '5 天合作 · 书面报告与汇报', bestFor: '评估 AI 产品或团队的投资人、私募团队与收购方。', cta: '申请审计' },
    ],
  },
};

const EngagementOptions: React.FC = () => {
  const { language } = useTranslation();
  const c = content[language];

  return (
    <section id="engage" className="scroll-mt-20 border-y border-slate-950 bg-slate-950 py-20 text-white sm:py-24" aria-labelledby="engagement-heading">
      <div className="container">
        <div className="grid gap-8 border-b border-slate-700 pb-10 lg:grid-cols-[1fr_.9fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">{c.eyebrow}</span>
            <h2 id="engagement-heading" className="cv-serif mt-5 text-4xl font-normal leading-[1.02] tracking-[-.04em] text-white sm:text-6xl">{c.title}</h2>
          </div>
          <p className="border-t border-slate-700 pt-5 text-lg leading-relaxed text-slate-300 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{c.body}</p>
        </div>

        <div className="grid border-l border-slate-700 lg:grid-cols-3">
          {c.options.map(option => (
            <article key={option.letter} className="flex flex-col border-b border-r border-slate-700 p-6 sm:p-8">
              <span className="cv-serif text-5xl font-semibold text-brand-200">{option.letter}</span>
              <h3 className="mt-5 font-display text-xl font-bold leading-tight text-white sm:text-2xl">{option.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{option.body}</p>
              <dl className="mt-6 border-t border-slate-700">
                <div className="border-b border-slate-800 py-4"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{c.formatLabel}</dt><dd className="mt-1 text-sm font-semibold text-white">{option.format}</dd></div>
                <div className="border-b border-slate-800 py-4"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{c.bestForLabel}</dt><dd className="mt-1 text-sm leading-6 text-slate-300">{option.bestFor}</dd></div>
              </dl>
              <Link to="/contact" className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 border-b border-brand-200 pt-6 text-sm font-bold text-white no-underline hover:border-white hover:text-white">{option.cta}<i className="fas fa-arrow-right text-xs" /></Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-start gap-3 text-sm font-semibold text-slate-300"><span className="mt-1.5 h-2 w-2 shrink-0 bg-emerald-400" aria-hidden />{c.modality}</p>
          <Link to="/contact" className="btn-primary shrink-0 bg-white text-slate-950 hover:bg-brand-50 hover:text-slate-950">{language === 'es' ? 'Reservar consulta' : language === 'fr' ? 'Réserver une consultation' : language === 'zh' ? '预约咨询' : 'Book a consultation'}<i className="fas fa-arrow-right text-sm" /></Link>
        </div>
      </div>
    </section>
  );
};

export default EngagementOptions;
