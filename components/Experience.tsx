import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const copy: Record<LanguageCode, { title: string; roles: { years: string; title: string; company: string; body: string }[] }> = {
  en: { title: 'Professional chronology', roles: [
    { years: 'Jul 2025–present', title: 'Founding AI Engineer & Systems Architect', company: 'Agents AI Ltd', body: 'OULANG across web, iOS and Android; agentic and multi-agent systems with durable state, tool calling, structured outputs, evaluation and human review.' },
    { years: '2024–present', title: 'ML / LLMOps Engineer', company: 'Agents AI Ltd', body: 'Multilingual semantic search, embedding retrieval, FastAPI inference services, model routing, evaluation stacks and self-hosted ML infrastructure.' },
    { years: '2024–2025', title: 'Founder & Agentic AI Systems Architect', company: 'AutoClient AI', body: 'Multilingual outbound voice and outreach agents with live CRM context; selected by Lanzadera in 2025.' },
    { years: '2022–2025', title: 'AI Systems Architect & Independent Technical Advisor', company: 'Independent', body: 'Implementation-first AI, agents, MCP, automation, Python and product engineering for professionals and teams.' },
    { years: '2019–2023', title: 'Senior Full-Stack Engineer', company: 'Damehosting', body: 'Production web systems, Linux/server operations, CI/CD practices, reviews and mentoring.' },
    { years: '2009–2023', title: 'Web, Mobile, Growth & Education', company: 'Megawebs / Megacursos', body: 'Products, technical courses, digital-design instruction and acquisition work.' },
    { years: '2013–2017', title: 'Presenter, Model & Actor', company: 'China', body: 'Multilingual on-camera presentation, commercial production and cross-cultural communication.' }
  ]},
  es: { title: 'Cronología profesional', roles: [
    { years: 'Jul 2025–actualidad', title: 'Ingeniero Fundador de IA y Arquitecto de Sistemas', company: 'Agents AI Ltd', body: 'OULANG en web, iOS y Android; sistemas agénticos y multiagente con estado, tool calling, salidas estructuradas, evaluación y revisión humana.' },
    { years: '2024–actualidad', title: 'Ingeniero ML / LLMOps', company: 'Agents AI Ltd', body: 'Búsqueda semántica multilingüe, recuperación con embeddings, servicios de inferencia FastAPI, enrutado de modelos e infraestructura ML autogestionada.' },
    { years: '2024–2025', title: 'Fundador y Arquitecto de Sistemas de IA Agéntica', company: 'AutoClient AI', body: 'Agentes multilingües de voz y outreach con contexto CRM en vivo; seleccionado por Lanzadera en 2025.' },
    { years: '2022–2025', title: 'Arquitecto de Sistemas de IA y Asesor Técnico Independiente', company: 'Independiente', body: 'IA, agentes, MCP, automatización, Python y producto orientados a implementación.' },
    { years: '2019–2023', title: 'Ingeniero Full-Stack Sénior', company: 'Damehosting', body: 'Web en producción, Linux/servidores, CI/CD, revisiones y mentoring.' },
    { years: '2009–2023', title: 'Web, Móvil, Growth y Educación', company: 'Megawebs / Megacursos', body: 'Productos, cursos, docencia de diseño digital y adquisición.' },
    { years: '2013–2017', title: 'Presentador, Modelo y Actor', company: 'China', body: 'Presentación multilingüe, producción comercial y comunicación intercultural.' }
  ]},
  fr: { title: 'Chronologie professionnelle', roles: [
    { years: 'Juil. 2025–présent', title: 'Ingénieur IA fondateur & architecte systèmes', company: 'Agents AI Ltd', body: 'OULANG sur web, iOS et Android ; systèmes agentiques et multi-agents en production.' }, { years: '2024–présent', title: 'Ingénieur ML / LLMOps', company: 'Agents AI Ltd', body: 'Recherche sémantique multilingue, embeddings, services d\'inférence FastAPI et infrastructure ML.' }, { years: '2024–2025', title: 'Fondateur & architecte IA agentique', company: 'AutoClient AI', body: 'Agents vocaux multilingues avec contexte CRM ; sélectionné par Lanzadera en 2025.' }, { years: '2022–2025', title: 'Architecte IA & conseiller technique indépendant', company: 'Indépendant', body: 'Agents, MCP, automatisation, Python et produit.' }, { years: '2019–2023', title: 'Ingénieur full-stack senior', company: 'Damehosting', body: 'Web, Linux, CI/CD et mentoring.' }, { years: '2009–2023', title: 'Web, mobile, croissance & éducation', company: 'Megawebs / Megacursos', body: 'Produits et formation.' }, { years: '2013–2017', title: 'Présentateur, modèle & acteur', company: 'Chine', body: 'Communication multilingue.' }
  ]},
  zh: { title: '职业时间线', roles: [
    { years: '2025-07–至今', title: '创始 AI 工程师与系统架构师', company: 'Agents AI Ltd', body: 'OULANG 覆盖 Web、iOS 与 Android；生产级智能体与多智能体系统，含状态管理、工具调用、结构化输出与评估。' }, { years: '2024–至今', title: 'ML / LLMOps 工程师', company: 'Agents AI Ltd', body: '多语言语义搜索、向量检索、FastAPI 推理服务、模型路由与自托管 ML 基础设施。' }, { years: '2024–2025', title: '创始人与智能体 AI 系统架构师', company: 'AutoClient AI', body: '多语言语音与外联智能体，实时 CRM 上下文；2025 年入选 Lanzadera。' }, { years: '2022–2025', title: 'AI 系统架构师与独立技术顾问', company: '独立', body: '智能体、MCP、自动化、Python 与产品工程。' }, { years: '2019–2023', title: '高级全栈工程师', company: 'Damehosting', body: '生产 Web、Linux、CI/CD 与指导。' }, { years: '2009–2023', title: 'Web、移动、增长与教育', company: 'Megawebs / Megacursos', body: '产品与技术课程。' }, { years: '2013–2017', title: '主持、模特与演员', company: '中国', body: '多语言镜头沟通与商业制作。' }
  ]}
};

const Experience: React.FC = () => { const { language } = useTranslation(); const c = copy[language]; return <section id="experience" className="py-20"><div className="container"><h2 className="section-heading">{c.title}</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{c.roles.map(role => <article key={role.years} className="grid gap-3 py-6 md:grid-cols-[170px_1fr]"><div className="text-sm font-bold text-brand-700">{role.years}</div><div><h3 className="text-lg font-bold text-slate-950">{role.title} <span className="font-normal text-slate-400">·</span> <span className="text-brand-700">{role.company}</span></h3><p className="mt-2 text-slate-600">{role.body}</p></div></article>)}</div></div></section>; };

export default Experience;
