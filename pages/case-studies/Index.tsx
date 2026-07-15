import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../../i18n/LanguageContext';
import { PORTFOLIO_PROJECTS, getProjectCopy } from '../../portfolio';

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; open: string }> = {
  en: { eyebrow: 'Evidence notes', title: 'Case studies without invented outcomes.', body: 'Each entry separates the observed product, the real artifact and the claim boundary. Deeper implementation notes will be added only when the source can support them.', open: 'Open project evidence' },
  es: { eyebrow: 'Notas de evidencia', title: 'Casos sin resultados inventados.', body: 'Cada entrada separa el producto observado, el artefacto real y el límite de la afirmación.', open: 'Abrir evidencia' },
  fr: { eyebrow: 'Notes de preuve', title: 'Cas sans résultats inventés.', body: 'Chaque entrée sépare le produit observé, l’artefact réel et la limite de la preuve.', open: 'Ouvrir la preuve' },
  zh: { eyebrow: '证据说明', title: '不虚构结果的案例。', body: '每个条目分别标注可观察产品、真实工件与声明边界。', open: '打开项目证据' }
};

const ids = ['oulang', 'huatong', 'vuda', 'autoclient', 'autopricing', 'apolo'];

const CaseStudiesIndex: React.FC = () => {
  const { language } = useTranslation(); const h = headings[language];
  const cases = ids.map(id => PORTFOLIO_PROJECTS.find(project => project.id === id)).filter(Boolean) as typeof PORTFOLIO_PROJECTS;
  return <section className="py-16 sm:py-20"><Helmet><title>{h.title}</title><meta name="description" content={h.body} /><meta property="og:image" content="https://samihalawa.com/portfolio/vuda-annotated.png" /><meta name="twitter:image" content="https://samihalawa.com/portfolio/vuda-annotated.png" /><link rel="canonical" href="https://samihalawa.com/case-studies" /></Helmet><div className="container"><div className="max-w-4xl"><span className="badge-pill">{h.eyebrow}</span><h1 className="mt-5 font-display text-5xl font-bold tracking-[-.05em] text-slate-950 sm:text-6xl">{h.title}</h1><p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">{h.body}</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cases.map(project => { const c = getProjectCopy(project, language); return <article key={project.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">{project.image && <div className="h-48 overflow-hidden border-b border-slate-200"><img src={project.image} alt={`${project.name} evidence`} className="h-full w-full object-cover" style={{ objectPosition: project.imagePosition || 'center' }} /></div>}<div className="p-6"><div className="text-xs font-bold uppercase tracking-[.16em] text-brand-700">{project.period}</div><h2 className="mt-2 text-xl font-bold text-slate-950">{project.name}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{c.description}</p><div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">{c.proof}</div><Link to={`/projects#${project.id}`} className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-brand-700">{h.open}<i className="fas fa-arrow-right text-xs"></i></Link></div></article>; })}</div></div></section>;
};

export default CaseStudiesIndex;
