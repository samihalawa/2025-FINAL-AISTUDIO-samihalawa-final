import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_PROJECTS, getProjectCopy } from '../portfolio';

const copy: Record<LanguageCode, { eyebrow: string; title: string; body: string; all: string }> = {
  en: { eyebrow: 'Beyond the flagships', title: 'A broader system of work.', body: 'Agent infrastructure, pricing, messaging, medical workflow prototypes, education and multilingual product discovery.', all: 'Open complete project index' },
  es: { eyebrow: 'Más allá de los principales', title: 'Un sistema de trabajo más amplio.', body: 'Infraestructura de agentes, pricing, mensajería, prototipos médicos, educación y descubrimiento multilingüe.', all: 'Abrir índice completo' },
  fr: { eyebrow: 'Au-delà des projets phares', title: 'Un système de travail plus large.', body: 'Agents, pricing, messagerie, prototypes médicaux, éducation et découverte multilingue.', all: 'Ouvrir l’index complet' },
  zh: { eyebrow: '旗舰之外', title: '更完整的工作体系。', body: '智能体基础设施、定价、消息、医疗流程原型、教育与多语言产品发现。', all: '打开完整项目索引' }
};

const AdditionalProjects: React.FC = () => {
  const { language } = useTranslation();
  const c = copy[language];
  const projects = PORTFOLIO_PROJECTS.filter(project => !project.featured).slice(0, 8);
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="max-w-3xl"><span className="badge-pill">{c.eyebrow}</span><h2 className="section-heading mt-5">{c.title}</h2><p className="section-subtitle mt-4">{c.body}</p></div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-4">
          {projects.map(project => { const text = getProjectCopy(project, language); return <article key={project.id} className="flex min-h-52 flex-col bg-white p-6"><div className="text-xs font-bold uppercase tracking-[.16em] text-brand-700">{project.period}</div><h3 className="mt-3 text-lg font-bold text-slate-950">{project.name}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{text.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 2).map(tag => <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}</div></article>; })}
        </div>
        <Link to="/projects" className="btn-secondary mt-8">{c.all}<i className="fas fa-arrow-right text-sm"></i></Link>
      </div>
    </section>
  );
};

export default AdditionalProjects;
