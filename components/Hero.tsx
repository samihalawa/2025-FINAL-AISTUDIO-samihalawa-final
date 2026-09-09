import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, {
  eyebrow: string; name: string; title: string; intro: string; pillars: string; engage: string; available: string;
  proofTitle: string; proofBody: string; now: string; building: string[];
}> = {
  en: {
    eyebrow: 'Staff AI Engineer · Production AI Architect · Madrid · Europe · Remote',
    name: 'Sami Halawa —',
    title: 'Staff AI Engineer & Production AI Architect',
    intro: 'Specializing in Multi-Agent Orchestration, High-Throughput RAG Systems, and Production FastAPI/TypeScript Backends.',
    pillars: 'Explore Architectural Pillars', engage: 'Engage / Book Consultation',
    available: 'Available for Direct B2B Contracting, Fractional AI Leadership & Advisory (Madrid · Europe · Remote | ES / EN / 中文)',
    proofTitle: 'At a glance', proofBody: 'I design, ship and operate production AI systems end to end — architecture, backend, model routing, deployment and observability — and take ownership of the outcome. Every engagement runs in Spanish, English or Mandarin (中文).',
    now: 'Core architectures', building: ['Multi-agent orchestration & custom MCP tooling', 'High-throughput RAG and hybrid search', 'Production FastAPI / TypeScript backends']
  },
  es: {
    eyebrow: 'Staff AI Engineer · Arquitecto de IA en producción · Madrid · Europa · Remoto',
    name: 'Sami Halawa —',
    title: 'Staff AI Engineer y arquitecto de IA en producción',
    intro: 'Especializado en orquestación multiagente, sistemas RAG de alto rendimiento y backends FastAPI/TypeScript en producción.',
    pillars: 'Explorar los pilares de arquitectura', engage: 'Colaborar / Reservar consulta',
    available: 'Disponible para contratación B2B directa, liderazgo de IA fraccional y asesoría (Madrid · Europa · Remoto | ES / EN / 中文)',
    proofTitle: 'En pocas palabras', proofBody: 'Diseño, entrego y opero sistemas de IA en producción de principio a fin — arquitectura, backend, enrutado de modelos, despliegue y observabilidad — y asumo la responsabilidad del resultado. Cada colaboración se desarrolla en español, inglés o mandarín (中文).',
    now: 'Arquitecturas principales', building: ['Orquestación multiagente y tooling MCP a medida', 'RAG de alto rendimiento y búsqueda híbrida', 'Backends FastAPI / TypeScript en producción']
  },
  fr: {
    eyebrow: 'Staff AI Engineer · Architecte IA de production · Madrid · Europe · Télétravail',
    name: 'Sami Halawa —',
    title: 'Staff AI Engineer et architecte IA de production',
    intro: 'Spécialisé en orchestration multi-agents, systèmes RAG à haut débit et backends FastAPI/TypeScript en production.',
    pillars: 'Explorer les piliers d’architecture', engage: 'Collaborer / Réserver une consultation',
    available: 'Disponible pour contrats B2B directs, leadership IA fractionné et conseil (Madrid · Europe · Télétravail | ES / EN / 中文)',
    proofTitle: 'En bref', proofBody: 'Je conçois, livre et exploite des systèmes IA en production de bout en bout — architecture, backend, routage de modèles, déploiement et observabilité — et j’assume la responsabilité du résultat. Chaque mission se déroule en espagnol, anglais ou mandarin (中文).',
    now: 'Architectures principales', building: ['Orchestration multi-agents et outillage MCP sur mesure', 'RAG à haut débit et recherche hybride', 'Backends FastAPI / TypeScript en production']
  },
  zh: {
    eyebrow: 'Staff AI 工程师 · 生产级 AI 架构师 · 马德里 · 欧洲 · 远程',
    name: 'Sami Halawa —',
    title: 'Staff AI 工程师与生产级 AI 架构师',
    intro: '专注于多智能体编排、高吞吐 RAG 系统与生产级 FastAPI/TypeScript 后端。',
    pillars: '查看架构支柱', engage: '合作 / 预约咨询',
    available: '可承接直接 B2B 合同、兼职 AI 领导与顾问服务（马德里 · 欧洲 · 远程 | ES / EN / 中文）',
    proofTitle: '快速了解', proofBody: '我端到端设计、交付并运营生产级 AI 系统——架构、后端、模型路由、部署与可观测性——并对结果负责。每项合作均可用西班牙语、英语或中文进行。',
    now: '核心架构', building: ['多智能体编排与定制 MCP 工具', '高吞吐 RAG 与混合搜索', '生产级 FastAPI / TypeScript 后端']
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
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><span className="h-2 w-2 bg-emerald-600"></span>ES / EN / 中文</span>
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
