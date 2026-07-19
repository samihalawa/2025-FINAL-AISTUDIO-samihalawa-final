import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_PROJECTS, categoryCopy, getProjectCopy } from '../portfolio';

const copy: Record<LanguageCode, { eyebrow: string; title: string; body: string; all: string }> = {
  en: { eyebrow: 'Beyond the flagships', title: 'The work is wider than five case studies.', body: 'A selected cross-section of platforms, agent infrastructure, medical workflows, open source, language technology and public education.', all: 'Explore all 84 projects and collaborations' },
  es: { eyebrow: 'Más allá de los principales', title: 'El trabajo va mucho más allá de cinco casos.', body: 'Una selección de plataformas, infraestructura de agentes, flujos médicos, open source, tecnología lingüística y educación pública.', all: 'Explorar los 84 proyectos y colaboraciones' },
  fr: { eyebrow: 'Au-delà des projets phares', title: 'Le travail va bien au-delà de cinq études de cas.', body: 'Une sélection de plateformes, infrastructure d’agents, workflows médicaux, open source, technologies linguistiques et éducation publique.', all: 'Explorer les 84 projets et collaborations' },
  zh: { eyebrow: '旗舰之外', title: '这些工作远不止五个案例。', body: '精选平台、智能体基础设施、医疗工作流、开源、语言技术与公共教育项目。', all: '探索全部 84 个项目与合作' }
};

const selectedIds = ['autoclient', 'autopricing', 'crawlab-actors', 'mcp-suite', 'vibracode', 'oulang-world-cup', 'autoiol', 'recipes', 'autohsk', 'public-teaching', 'language-media', 'damesender'];

const AdditionalProjects: React.FC = () => {
  const { language } = useTranslation();
  const c = copy[language];
  const projects = selectedIds.map(id => PORTFOLIO_PROJECTS.find(project => project.id === id)).filter(Boolean) as typeof PORTFOLIO_PROJECTS;
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="max-w-3xl"><span className="badge-pill">{c.eyebrow}</span><h2 className="section-heading mt-5">{c.title}</h2><p className="section-subtitle mt-4">{c.body}</p></div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => { const text = getProjectCopy(project, language); return <Link to={`/projects#${project.id}`} key={project.id} className="group flex min-h-64 flex-col bg-white p-6 transition hover:bg-brand-50/60 sm:p-7"><div className="flex items-start justify-between gap-4"><span className="text-xs font-bold uppercase tracking-[.14em] text-brand-700">{categoryCopy[project.category][language]}</span><span className="font-mono text-xs font-bold text-slate-300">{String(index + 1).padStart(2, '0')}</span></div><h3 className="mt-5 text-xl font-bold text-slate-950">{project.name}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{text.description}</p><div className="mt-6 flex items-end justify-between gap-4"><div className="flex flex-wrap gap-2">{project.tags.slice(0, 2).map(tag => <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">{tag}</span>)}</div><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:bg-brand-700"><i className="fas fa-arrow-right text-xs" /></span></div></Link>; })}
        </div>
        <Link to="/projects" className="btn-secondary mt-8">{c.all}<i className="fas fa-arrow-right text-sm"></i></Link>
      </div>
    </section>
  );
};

export default AdditionalProjects;
