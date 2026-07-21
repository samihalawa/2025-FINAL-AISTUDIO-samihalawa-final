import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../../i18n/LanguageContext';
import { PORTFOLIO_PROJECTS, getProjectCopy } from '../../portfolio';

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; open: string }> = {
  en: { eyebrow: 'Case studies', title: 'A closer look at selected products and systems.', body: 'Explore the product challenge, interface and technical direction behind representative work across platforms, agents and applied AI.', open: 'Open case study' },
  es: { eyebrow: 'Casos de estudio', title: 'Una mirada más cercana a productos y sistemas seleccionados.', body: 'Explora el reto de producto, la interfaz y la dirección técnica de trabajos representativos en plataformas, agentes e IA aplicada.', open: 'Abrir caso' },
  fr: { eyebrow: 'Études de cas', title: 'Un regard détaillé sur des produits et systèmes sélectionnés.', body: 'Découvrez le défi produit, l’interface et la direction technique de travaux représentatifs en plateformes, agents et IA appliquée.', open: 'Ouvrir le cas' },
  zh: { eyebrow: '案例研究', title: '深入了解精选产品与系统。', body: '探索平台、智能体和应用型 AI 代表作品背后的产品挑战、界面与技术方向。', open: '打开案例' }
};

const ids = ['oulang', 'huatong', 'vuda', 'autoclient', 'autopricing', 'apolo'];

const CaseStudiesIndex: React.FC = () => {
  const { language } = useTranslation(); const h = headings[language];
  const cases = ids.map(id => PORTFOLIO_PROJECTS.find(project => project.id === id)).filter(Boolean) as typeof PORTFOLIO_PROJECTS;
  return <section className="py-16 sm:py-20">
<div className="container"><div className="max-w-4xl"><span className="badge-pill">{h.eyebrow}</span><h1 className="mt-5 font-display text-5xl font-bold tracking-[-.05em] text-slate-950 sm:text-6xl">{h.title}</h1><p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">{h.body}</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cases.map(project => { const c = getProjectCopy(project, language); return <article key={project.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">{project.image && <div className="h-48 overflow-hidden border-b border-slate-200"><img src={project.image} alt={`${project.name} interface`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" style={{ objectPosition: project.imagePosition || 'center' }} /></div>}<div className="p-6"><div className="text-xs font-bold uppercase tracking-[.16em] text-brand-700">{project.period}</div><h2 className="mt-2 text-xl font-bold text-slate-950">{project.name}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{c.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 3).map(tag => <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}</div><Link to={`/projects#${project.id}`} className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-brand-700">{h.open}<i className="fas fa-arrow-right text-xs"></i></Link></div></article>; })}</div></div></section>;
};

export default CaseStudiesIndex;
