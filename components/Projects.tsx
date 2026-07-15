import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_PROJECTS, categoryCopy, getProjectCopy, type PortfolioCategory } from '../portfolio';

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; proof: string; boundary: string }> = {
  en: { eyebrow: 'Complete project index', title: 'Products, agents, applied AI and earlier work.', body: 'Eighteen grouped entries recovered from current repositories, live products, public profiles, recorded work and the historical portfolio. Live and experimental work are labelled separately.', proof: 'Open proof', boundary: 'Evidence boundary' },
  es: { eyebrow: 'Índice completo', title: 'Productos, agentes, IA aplicada y trabajo anterior.', body: 'Dieciocho grupos recuperados de repositorios, productos vivos, perfiles públicos, grabaciones y el portfolio histórico. Lo vivo y lo experimental están separados.', proof: 'Abrir prueba', boundary: 'Límite de evidencia' },
  fr: { eyebrow: 'Index complet', title: 'Produits, agents, IA appliquée et travaux antérieurs.', body: 'Dix-huit groupes issus des dépôts, produits en ligne, profils publics et archives.', proof: 'Ouvrir la preuve', boundary: 'Limite de preuve' },
  zh: { eyebrow: '完整项目索引', title: '产品、智能体、应用 AI 与早期工作。', body: '从当前仓库、线上产品、公开资料、录像与历史作品中恢复的 18 个项目组。线上与实验性工作分别标注。', proof: '打开证据', boundary: '证据边界' }
};

const categoryOrder: PortfolioCategory[] = ['platforms', 'agents', 'applied', 'education'];

const Projects: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  return (
    <section id="projects" className="py-16 sm:py-20" aria-labelledby="projects-heading">
      <div className="container">
        <div className="max-w-4xl"><span className="badge-pill">{h.eyebrow}</span><h1 id="projects-heading" className="mt-5 font-display text-5xl font-bold tracking-[-.05em] text-slate-950 sm:text-6xl">{h.title}</h1><p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">{h.body}</p></div>
        {categoryOrder.map(category => {
          const items = PORTFOLIO_PROJECTS.filter(project => project.category === category);
          return <div key={category} className="mt-16"><div className="mb-6 flex items-center gap-4"><h2 className="text-2xl font-bold text-slate-950">{categoryCopy[category][language]}</h2><span className="h-px flex-1 bg-slate-200"></span><span className="text-sm font-bold text-slate-400">{String(items.length).padStart(2, '0')}</span></div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map((project, index) => { const c = getProjectCopy(project, language); return <article id={project.id} key={project.id} className="group scroll-mt-24 flex min-h-[420px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              {project.image ? <div className="h-52 overflow-hidden border-b border-slate-200 bg-slate-100"><img src={project.image} alt={`${project.name} interface`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]" style={{ objectPosition: project.imagePosition || 'center' }} loading="lazy" /></div> : <div className="flex h-36 items-end justify-between border-b border-slate-200 bg-slate-950 p-6 text-white"><span className="font-display text-5xl font-bold text-brand-200">{String(index + 1).padStart(2, '0')}</span><i className="fas fa-code-branch text-xl text-white/35"></i></div>}
              <div className="flex flex-1 flex-col p-6"><div className="text-xs font-bold uppercase tracking-[.16em] text-brand-700">{project.period}</div><h3 className="mt-2 text-xl font-bold text-slate-950">{project.name}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{c.description}</p><div className="mt-5 rounded-xl bg-slate-50 p-4"><div className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">{h.boundary}</div><p className="mt-1 text-xs leading-relaxed text-slate-600">{c.proof}</p></div><div className="mt-auto flex flex-wrap items-center gap-2 pt-5">{project.tags.map(tag => <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-bold text-brand-700 hover:bg-brand-50">{h.proof}<i className="fas fa-arrow-up-right-from-square text-xs"></i></a>}</div></div>
            </article>; })}</div>
          </div>;
        })}
      </div>
    </section>
  );
};

export default Projects;
