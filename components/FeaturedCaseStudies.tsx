import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_PROJECTS, getProjectCopy } from '../portfolio';

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; all: string; proof: string }> = {
  en: { eyebrow: 'Flagship evidence', title: 'Real products, shown at the user layer.', body: 'These are not concept cards. The imagery comes from the current products and each claim links to its live or public evidence.', all: 'See all 18 project groups', proof: 'Open evidence' },
  es: { eyebrow: 'Evidencia principal', title: 'Productos reales, mostrados en la capa del usuario.', body: 'No son tarjetas conceptuales. Las imágenes proceden de los productos actuales y cada afirmación enlaza su prueba.', all: 'Ver los 18 grupos de proyectos', proof: 'Abrir evidencia' },
  fr: { eyebrow: 'Preuves phares', title: 'Des produits réels, visibles au niveau utilisateur.', body: 'Les images viennent des produits actuels et chaque affirmation renvoie à une preuve publique.', all: 'Voir les 18 groupes', proof: 'Ouvrir la preuve' },
  zh: { eyebrow: '旗舰证据', title: '真实产品，在用户层展示。', body: '这些不是概念卡片；图像来自当前产品，每项声明均链接公开证据。', all: '查看 18 个项目组', proof: '打开证据' }
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
              <div className="h-64 overflow-hidden border-b border-white/10 bg-slate-800"><img src={project.image} alt={`${project.name} product interface`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" style={{ objectPosition: project.imagePosition || 'center' }} loading="lazy" /></div>
              <div className="p-6"><div className="flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase tracking-[.16em] text-brand-300">{project.period}</span><span className="text-xs font-bold text-white/55">{project.proof[language].split('·')[0]}</span></div><h3 className="mt-3 text-xl font-bold text-white">{project.name}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{c.description}</p>{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-brand-200 hover:text-white">{h.proof}<i className="fas fa-arrow-up-right-from-square text-xs"></i></a>}</div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
