import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const copy: Record<LanguageCode, { title: string; body: string; groups: { title: string; items: string[] }[] }> = {
  en: { title: 'Capabilities grounded in shipped work', body: 'Grouped by the systems where the tools were used—without arbitrary proficiency percentages.', groups: [
    { title: 'Agents & LLM systems', items: ['AI agents and multi-agent systems', 'Multi-agent orchestration', 'Model Context Protocol (MCP) and tool calling', 'Retrieval-Augmented Generation (RAG) and structured outputs', 'LangChain and LangGraph', 'Prompt engineering', 'Model routing and evaluation loops', 'Vector databases and embedding retrieval', 'Hugging Face models and fine-tuning'] },
    { title: 'Product engineering', items: ['Python and FastAPI', 'TypeScript and Node.js', 'React and Next.js', 'SQL, background jobs and document pipelines'] },
    { title: 'Operations & integrations', items: ['Docker, Kubernetes, Linux and CI/CD', 'AWS · GCP · Azure', 'CRM and ERP workflows', 'Email, WhatsApp and voice', 'Analytics, monitoring and cost control'] },
    { title: 'Product leadership', items: ['Zero-to-one architecture', 'Customer discovery', 'Technical communication', 'Teaching and delivery in Spanish, English and Mandarin (中文)'] }
  ]},
  es: { title: 'Capacidades basadas en trabajo publicado', body: 'Agrupadas por los sistemas donde se usaron, sin porcentajes arbitrarios.', groups: [
    { title: 'Agentes y LLM', items: ['Agentes de IA y sistemas multiagente', 'Orquestación multiagente', 'Model Context Protocol (MCP) y tool calling', 'Generación aumentada por recuperación (RAG) y salidas estructuradas', 'LangChain y LangGraph', 'Prompt engineering', 'Enrutado y evaluación', 'Bases de datos vectoriales y embeddings', 'Modelos y fine-tuning en Hugging Face'] },
    { title: 'Ingeniería de producto', items: ['Python y FastAPI', 'TypeScript y Node.js', 'React y Next.js', 'SQL, procesos y documentos'] },
    { title: 'Operaciones e integraciones', items: ['Docker, Kubernetes, Linux y CI/CD', 'AWS · GCP · Azure', 'CRM y ERP', 'Email, WhatsApp y voz', 'Analítica, monitorización y costes'] },
    { title: 'Liderazgo de producto', items: ['Arquitectura zero-to-one', 'Discovery', 'Comunicación técnica', 'Docencia y entrega en español, inglés y mandarín (中文)'] }
  ]},
  fr: { title: 'Capacités fondées sur des produits livrés', body: 'Regroupées par systèmes réels, sans pourcentages arbitraires.', groups: [
    { title: 'Agents & LLM', items: ['Agents IA et systèmes multi-agents', 'Multi-agents', 'Model Context Protocol (MCP) et outils', 'RAG (génération augmentée par récupération)', 'LangChain et LangGraph', 'Prompt engineering', 'Évaluation', 'Bases de données vectorielles et embeddings', 'Modèles et fine-tuning Hugging Face'] }, { title: 'Produit', items: ['Python/FastAPI', 'TypeScript/Node', 'React/Next', 'SQL et documents'] }, { title: 'Opérations', items: ['Docker/Kubernetes/Linux/CI/CD', 'AWS · GCP · Azure', 'CRM/ERP', 'Email/WhatsApp/voix', 'Analytique'] }, { title: 'Leadership', items: ['Architecture', 'Discovery', 'Communication', 'Formation multilingue (ES / EN / 中文)'] }
  ]},
  zh: { title: '来自真实交付的能力', body: '按实际系统分组，不使用任意熟练度百分比。', groups: [
    { title: '智能体与 LLM', items: ['AI 智能体与多智能体系统', '多智能体编排', 'Model Context Protocol (MCP) 与工具调用', '检索增强生成 (RAG) 与结构化输出', 'LangChain 与 LangGraph', '提示工程 (Prompt Engineering)', '路由与评估', '向量数据库与嵌入检索', 'Hugging Face 模型与微调'] }, { title: '产品工程', items: ['Python/FastAPI', 'TypeScript/Node', 'React/Next', 'SQL 与文档流程'] }, { title: '运营与集成', items: ['Docker/Kubernetes/Linux/CI/CD', 'AWS · GCP · Azure', 'CRM/ERP', '邮件/WhatsApp/语音', '分析与监控'] }, { title: '产品领导', items: ['从零到一架构', '用户发现', '技术沟通', '西班牙语 / 英语 / 中文 多语言教学与交付'] }
  ]}
};

const Skills: React.FC = () => {
  const { language } = useTranslation(); const c = copy[language];
  return <section id="skills" className="border-y border-slate-200 bg-white py-20"><div className="container"><div className="max-w-3xl"><h2 className="section-heading">{c.title}</h2><p className="section-subtitle mt-4">{c.body}</p></div><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{c.groups.map(group => <article key={group.title} className="bg-white p-6"><h3 className="text-lg font-bold text-slate-950">{group.title}</h3><ul className="mt-5 space-y-3">{group.items.map(item => <li key={item} className="flex items-start gap-2 text-sm text-slate-600"><i className="fas fa-check mt-1 text-xs text-brand-600"></i><span>{item}</span></li>)}</ul></article>)}</div></div></section>;
};

export default Skills;
