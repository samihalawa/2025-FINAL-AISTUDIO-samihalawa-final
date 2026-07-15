import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const copy: Record<LanguageCode, { title: string; roles: { years: string; title: string; company: string; body: string }[] }> = {
  en: { title: 'Professional chronology', roles: [
    { years: 'Jul 2025–present', title: 'Founder & AI Product Engineer', company: 'Agents AI Ltd', body: 'Founder-led platforms, agentic operations and specialist AI product delivery.' },
    { years: '2022–present', title: 'AI Instructor & Technical Consultant', company: 'Independent', body: 'Implementation-first AI, agents, MCP, automation, Python and product engineering.' },
    { years: '2019–2023', title: 'Senior Full-Stack Engineer', company: 'Damehosting', body: 'Production web systems, Linux/server operations, CI/CD practices, reviews and mentoring.' },
    { years: '2009–2023', title: 'Web, Mobile, Growth & Education', company: 'Megawebs / Megacursos', body: 'Products, technical courses, digital-design instruction and acquisition work.' },
    { years: '2013–2017', title: 'Presenter, Model & Actor', company: 'China', body: 'Multilingual on-camera presentation, commercial production and cross-cultural communication.' }
  ]},
  es: { title: 'Cronología profesional', roles: [
    { years: 'Jul 2025–actualidad', title: 'Fundador e Ingeniero de Producto IA', company: 'Agents AI Ltd', body: 'Plataformas, operaciones agénticas y entrega especializada de producto IA.' },
    { years: '2022–actualidad', title: 'Profesor de IA y Consultor Técnico', company: 'Independiente', body: 'IA, agentes, MCP, automatización, Python y producto orientados a implementación.' },
    { years: '2019–2023', title: 'Ingeniero Full-Stack Sénior', company: 'Damehosting', body: 'Web en producción, Linux/servidores, CI/CD, revisiones y mentoring.' },
    { years: '2009–2023', title: 'Web, Móvil, Growth y Educación', company: 'Megawebs / Megacursos', body: 'Productos, cursos, docencia de diseño digital y adquisición.' },
    { years: '2013–2017', title: 'Presentador, Modelo y Actor', company: 'China', body: 'Presentación multilingüe, producción comercial y comunicación intercultural.' }
  ]},
  fr: { title: 'Chronologie professionnelle', roles: [
    { years: 'Juil. 2025–présent', title: 'Fondateur & ingénieur produit IA', company: 'Agents AI Ltd', body: 'Plateformes IA et opérations agentiques.' }, { years: '2022–présent', title: 'Formateur IA & consultant', company: 'Indépendant', body: 'Agents, MCP, automatisation, Python et produit.' }, { years: '2019–2023', title: 'Ingénieur full-stack senior', company: 'Damehosting', body: 'Web, Linux, CI/CD et mentoring.' }, { years: '2009–2023', title: 'Web, mobile, croissance & éducation', company: 'Megawebs / Megacursos', body: 'Produits et formation.' }, { years: '2013–2017', title: 'Présentateur, modèle & acteur', company: 'Chine', body: 'Communication multilingue.' }
  ]},
  zh: { title: '职业时间线', roles: [
    { years: '2025-07–至今', title: '创始人与 AI 产品工程师', company: 'Agents AI Ltd', body: 'AI 平台、智能体运营与专业产品交付。' }, { years: '2022–至今', title: 'AI 讲师与技术顾问', company: '独立', body: '智能体、MCP、自动化、Python 与产品工程。' }, { years: '2019–2023', title: '高级全栈工程师', company: 'Damehosting', body: '生产 Web、Linux、CI/CD 与指导。' }, { years: '2009–2023', title: 'Web、移动、增长与教育', company: 'Megawebs / Megacursos', body: '产品与技术课程。' }, { years: '2013–2017', title: '主持、模特与演员', company: '中国', body: '多语言镜头沟通与商业制作。' }
  ]}
};

const Experience: React.FC = () => { const { language } = useTranslation(); const c = copy[language]; return <section id="experience" className="py-20"><div className="container"><h2 className="section-heading">{c.title}</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{c.roles.map(role => <article key={role.years} className="grid gap-3 py-6 md:grid-cols-[170px_1fr]"><div className="text-sm font-bold text-brand-700">{role.years}</div><div><h3 className="text-lg font-bold text-slate-950">{role.title} <span className="font-normal text-slate-400">·</span> <span className="text-brand-700">{role.company}</span></h3><p className="mt-2 text-slate-600">{role.body}</p></div></article>)}</div></div></section>; };

export default Experience;
