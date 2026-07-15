import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const copy: Record<LanguageCode, { title: string; body: string; groups: { title: string; items: string[] }[] }> = {
  en: { title: 'Capabilities grounded in shipped work', body: 'Grouped by the systems where the tools were used—without arbitrary proficiency percentages.', groups: [
    { title: 'Agents & LLM systems', items: ['Multi-agent orchestration', 'MCP and tool calling', 'RAG and structured outputs', 'Model routing and evaluation loops'] },
    { title: 'Product engineering', items: ['Python and FastAPI', 'TypeScript and Node.js', 'React and Next.js', 'SQL, background jobs and document pipelines'] },
    { title: 'Operations & integrations', items: ['Docker, Linux and CI/CD', 'CRM and ERP workflows', 'Email, WhatsApp and voice', 'Analytics, monitoring and cost control'] },
    { title: 'Product leadership', items: ['Zero-to-one architecture', 'Customer discovery', 'Technical communication', 'Teaching in Spanish, English and Mandarin'] }
  ]},
  es: { title: 'Capacidades basadas en trabajo publicado', body: 'Agrupadas por los sistemas donde se usaron, sin porcentajes arbitrarios.', groups: [
    { title: 'Agentes y LLM', items: ['Orquestación multiagente', 'MCP y tool calling', 'RAG y salidas estructuradas', 'Enrutado y evaluación'] },
    { title: 'Ingeniería de producto', items: ['Python y FastAPI', 'TypeScript y Node.js', 'React y Next.js', 'SQL, procesos y documentos'] },
    { title: 'Operaciones e integraciones', items: ['Docker, Linux y CI/CD', 'CRM y ERP', 'Email, WhatsApp y voz', 'Analítica, monitorización y costes'] },
    { title: 'Liderazgo de producto', items: ['Arquitectura zero-to-one', 'Discovery', 'Comunicación técnica', 'Docencia en español, inglés y mandarín'] }
  ]},
  fr: { title: 'Capacités fondées sur des produits livrés', body: 'Regroupées par systèmes réels, sans pourcentages arbitraires.', groups: [
    { title: 'Agents & LLM', items: ['Multi-agents', 'MCP et outils', 'RAG', 'Évaluation'] }, { title: 'Produit', items: ['Python/FastAPI', 'TypeScript/Node', 'React/Next', 'SQL et documents'] }, { title: 'Opérations', items: ['Docker/Linux/CI/CD', 'CRM/ERP', 'Email/WhatsApp/voix', 'Analytique'] }, { title: 'Leadership', items: ['Architecture', 'Discovery', 'Communication', 'Formation multilingue'] }
  ]},
  zh: { title: '来自真实交付的能力', body: '按实际系统分组，不使用任意熟练度百分比。', groups: [
    { title: '智能体与 LLM', items: ['多智能体编排', 'MCP 与工具调用', 'RAG', '路由与评估'] }, { title: '产品工程', items: ['Python/FastAPI', 'TypeScript/Node', 'React/Next', 'SQL 与文档流程'] }, { title: '运营与集成', items: ['Docker/Linux/CI/CD', 'CRM/ERP', '邮件/WhatsApp/语音', '分析与监控'] }, { title: '产品领导', items: ['从零到一架构', '用户发现', '技术沟通', '多语言教学'] }
  ]}
};

const Skills: React.FC = () => {
  const { language } = useTranslation(); const c = copy[language];
  return <section id="skills" className="border-y border-slate-200 bg-white py-20"><div className="container"><div className="max-w-3xl"><h2 className="section-heading">{c.title}</h2><p className="section-subtitle mt-4">{c.body}</p></div><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{c.groups.map(group => <article key={group.title} className="bg-white p-6"><h3 className="text-lg font-bold text-slate-950">{group.title}</h3><ul className="mt-5 space-y-3">{group.items.map(item => <li key={item} className="flex items-start gap-2 text-sm text-slate-600"><i className="fas fa-check mt-1 text-xs text-brand-600"></i><span>{item}</span></li>)}</ul></article>)}</div></div></section>;
};

export default Skills;
