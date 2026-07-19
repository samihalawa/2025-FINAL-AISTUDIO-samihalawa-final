import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_PROJECTS, getProjectCopy } from '../portfolio';

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; all: string; proof: string }> = {
  en: { eyebrow: 'Selected work', title: 'Products with real interfaces and operating depth.', body: 'A few representative platforms and tools spanning marketplaces, agent systems, mobile products and open source.', all: 'View the full portfolio', proof: 'Visit project' },
  es: { eyebrow: 'Trabajo seleccionado', title: 'Productos con interfaz real y profundidad operativa.', body: 'Una selección de plataformas y herramientas: marketplaces, agentes, producto móvil y open source.', all: 'Ver el portfolio completo', proof: 'Visitar proyecto' },
  fr: { eyebrow: 'Travaux sélectionnés', title: 'Des produits avec de vraies interfaces et une profondeur opérationnelle.', body: 'Une sélection de plateformes et d’outils : marketplaces, agents, mobile et open source.', all: 'Voir le portfolio complet', proof: 'Visiter le projet' },
  zh: { eyebrow: '精选作品', title: '拥有真实界面与运营深度的产品。', body: '精选市场平台、智能体系统、移动产品与开源工具。', all: '查看完整作品集', proof: '访问项目' }
};

const FeaturedCaseStudies: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const featured = PORTFOLIO_PROJECTS.filter(project => project.featured);
  return (
    <section className="border-y border-slate-200 bg-white py-20 sm:py-24" id="case-studies" aria-labelledby="home-case-studies-heading">
      <div className="container">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div><span className="badge-pill">{h.eyebrow}</span><h2 id="home-case-studies-heading" className="section-heading mt-5">{h.title}</h2><p className="section-subtitle mt-4">{h.body}</p></div>
          <Link to="/projects" className="btn-secondary">{h.all}<i className="fas fa-arrow-right text-sm"></i></Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map(project => {
            const c = getProjectCopy(project, language);
            return <article key={project.id} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 text-white shadow-sm">
              {project.image ? <div className="h-64 overflow-hidden border-b border-white/10 bg-slate-800"><img src={project.image} alt={`${project.name} product interface`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" style={{ objectPosition: project.imagePosition || 'center' }} loading="lazy" /></div> : <div className="flex h-64 items-end justify-between border-b border-white/10 bg-[radial-gradient(circle_at_75%_20%,rgba(45,212,191,.22),transparent_30%),linear-gradient(135deg,#020617,#0f172a)] p-7"><span className="font-display text-5xl font-bold text-teal-200">{project.name.slice(0, 2).toUpperCase()}</span><i className="fas fa-diagram-project text-2xl text-white/30" /></div>}
              <div className="p-6"><span className="text-xs font-bold uppercase tracking-[.16em] text-brand-300">{project.period}</span><h3 className="mt-3 text-xl font-bold text-white">{project.name}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{c.description}</p><div className="mt-5 flex flex-wrap items-center gap-2">{project.tags.slice(0, 2).map(tag => <span key={tag} className="rounded-full border border-white/15 px-2.5 py-1 text-xs font-semibold text-white/70">{tag}</span>)}{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex min-h-11 items-center gap-2 font-bold text-brand-200 hover:text-white">{h.proof}<i className="fas fa-arrow-up-right-from-square text-xs"></i></a>}</div></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
