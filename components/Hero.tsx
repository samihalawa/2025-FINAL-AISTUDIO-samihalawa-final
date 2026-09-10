import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, {
  eyebrow: string; name: string; title: string; intro: string; pillars: string; engage: string; available: string;
  proofTitle: string; proofBody: string; now: string; building: string[];
}> = {
  en: {
    eyebrow: 'Madrid · Europe · Remote',
    name: 'Sami Halawa —',
    title: 'Staff AI Engineer & Production AI Architect',
    intro: 'Specializing in Multi-Agent Orchestration, High-Throughput RAG Systems, and Production FastAPI/TypeScript Backends.',
    pillars: 'Explore Architectural Pillars', engage: 'Engage / Book Consultation',
    available: 'Available for Direct B2B Contracting, Fractional AI Leadership & Advisory, and open to staff-level full-time roles (Madrid · Europe · Remote | ES / EN / 中文)',
    proofTitle: 'At a glance', proofBody: 'Twelve-plus years in software and six-plus in Python. Built and operated OULANG, a marketplace for the Chinese community in Spain, and delivered pricing, revenue-operations and medical AI systems for clients.',
    now: 'Working model', building: ['Architecture, backend and deployment owned end to end', 'Human review designed into consequential external actions', 'Cost and observability designed in from day one']
  },
  es: {
    eyebrow: 'Madrid · Europa · Remoto',
    name: 'Sami Halawa —',
    title: 'Staff AI Engineer y arquitecto de IA en producción',
    intro: 'Especializado en orquestación multiagente, sistemas RAG de alto rendimiento y backends FastAPI/TypeScript en producción.',
    pillars: 'Explorar los pilares de arquitectura', engage: 'Colaborar / Reservar consulta',
    available: 'Disponible para contratación B2B directa, liderazgo de IA fraccional y asesoría, y abierto a puestos de nivel staff a jornada completa (Madrid · Europa · Remoto | ES / EN / 中文)',
    proofTitle: 'En pocas palabras', proofBody: 'Más de doce años en software y más de seis en Python. Construí y operé OULANG, un marketplace para la comunidad china en España, y entregué sistemas de pricing, operaciones comerciales e IA médica para clientes.',
    now: 'Forma de trabajar', building: ['Arquitectura, backend y despliegue con responsabilidad de principio a fin', 'Revisión humana integrada en las acciones externas con consecuencias', 'Coste y observabilidad diseñados desde el primer día']
  },
  fr: {
    eyebrow: 'Madrid · Europe · Télétravail',
    name: 'Sami Halawa —',
    title: 'Staff AI Engineer et architecte IA de production',
    intro: 'Spécialisé en orchestration multi-agents, systèmes RAG à haut débit et backends FastAPI/TypeScript en production.',
    pillars: 'Explorer les piliers d’architecture', engage: 'Collaborer / Réserver une consultation',
    available: 'Disponible pour contrats B2B directs, leadership IA fractionné et conseil, et ouvert aux postes staff à temps plein (Madrid · Europe · Télétravail | ES / EN / 中文)',
    proofTitle: 'En bref', proofBody: 'Plus de douze ans en logiciel et plus de six en Python. J’ai construit et exploité OULANG, une marketplace pour la communauté chinoise en Espagne, et livré des systèmes de pricing, d’opérations commerciales et d’IA médicale pour des clients.',
    now: 'Façon de travailler', building: ['Architecture, backend et déploiement pris en charge de bout en bout', 'Revue humaine intégrée aux actions externes à conséquences', 'Coût et observabilité conçus dès le premier jour']
  },
  zh: {
    eyebrow: '马德里 · 欧洲 · 远程',
    name: 'Sami Halawa —',
    title: 'Staff AI 工程师与生产级 AI 架构师',
    intro: '专注于多智能体编排、高吞吐 RAG 系统与生产级 FastAPI/TypeScript 后端。',
    pillars: '查看架构支柱', engage: '合作 / 预约咨询',
    available: '可承接直接 B2B 合同、兼职 AI 领导与顾问服务，也接受 Staff 级全职职位（马德里 · 欧洲 · 远程 | ES / EN / 中文）',
    proofTitle: '快速了解', proofBody: '十二年以上软件经验，六年以上 Python 经验。构建并运营了面向西班牙华人社区的市场平台 OULANG，并为客户交付定价、销售运营与医疗 AI 系统。',
    now: '工作方式', building: ['架构、后端与部署端到端负责', '对有实际影响的外部动作内置人工审核', '成本与可观测性从第一天起就纳入设计']
  }
};

const Hero: React.FC = () => {
  const { language } = useTranslation();
  const c = content[language];

  return (
    <section className="border-b border-slate-300 py-14 sm:py-20">
      <div className="container">
        <div className="flex flex-col gap-3 border-b border-slate-400 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-900">{c.eyebrow}</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><span className="h-2 w-2 bg-emerald-600"></span>{language === 'es' ? 'Disponible ahora' : language === 'fr' ? 'Disponible maintenant' : language === 'zh' ? '现可开始' : 'Available now'}</span>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(21rem,.75fr)] lg:gap-16 lg:py-14">
          <div>
            <h1 className="cv-serif max-w-5xl text-[clamp(2.8rem,6vw,6.2rem)] font-normal leading-[0.94] tracking-[-0.045em] text-slate-950">
              <span className="block text-slate-500">{c.name}</span>
              <span className="block">{c.title}</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-700">{c.intro}</p>
            <p className="mt-6 inline-flex max-w-3xl items-start gap-3 border-l-2 border-brand-700 pl-4 text-sm font-semibold leading-relaxed text-slate-700"><span className="mt-1.5 h-2 w-2 shrink-0 bg-emerald-600" aria-hidden />{c.available}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#pillars" className="btn-primary">{c.pillars}<i className="fas fa-arrow-down text-sm"></i></a>
              <Link to="/contact" className="btn-secondary">{c.engage}<i className="fas fa-arrow-right text-sm"></i></Link>
            </div>
          </div>

          <aside className="flex flex-col justify-end border-t border-slate-400 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="grid grid-cols-[6.25rem_1fr] items-start gap-5">
              <img src="/portfolio/sami-photo.webp" alt="Sami Halawa Ribas" width="184" height="178" className="h-[100px] w-[100px] border border-slate-400 object-cover object-top" />
              <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-900">{c.proofTitle}</p><p className="mt-2 text-sm leading-relaxed text-slate-600">{c.proofBody}</p></div>
            </div>
            <div className="mt-8 border-t border-slate-400 pt-5">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-600">{c.now}</p>
              <ol className="mt-3 border-t border-slate-300">
                {c.building.map((item, index) => <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-slate-300 py-3"><span className="font-mono text-xs font-bold text-brand-800">0{index + 1}</span><span className="font-semibold text-slate-800">{item}</span></li>)}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
