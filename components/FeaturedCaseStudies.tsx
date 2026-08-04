import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_STORIES, getProjectStoryCopy } from '../portfolio';

const headings: Record<LanguageCode, {
  eyebrow: string;
  title: string;
  body: string;
  all: string;
  challenge: string;
  build: string;
  role: string;
  open: string;
  visit: string;
}> = {
  en: { eyebrow: 'Selected work', title: 'Real products, with the useful details left in.', body: 'Each project shows the operating problem, what I built and the interface or project-specific cover behind the work.', all: 'Explore every project story', challenge: 'The problem', build: 'What I built', role: 'Role', open: 'Read the case study', visit: 'Visit the project' },
  es: { eyebrow: 'Trabajo seleccionado', title: 'Productos reales, con los detalles que importan.', body: 'Cada proyecto muestra el problema operativo, lo que construí y la interfaz o portada específica detrás del trabajo.', all: 'Explorar todos los proyectos', challenge: 'El problema', build: 'Qué construí', role: 'Rol', open: 'Leer el caso', visit: 'Visitar el proyecto' },
  fr: { eyebrow: 'Travaux sélectionnés', title: 'Des produits réels, avec les détails qui comptent.', body: 'Chaque projet présente le problème opérationnel, ce que j’ai construit et son interface ou visuel dédié.', all: 'Explorer tous les projets', challenge: 'Le problème', build: 'Ce que j’ai construit', role: 'Rôle', open: 'Lire l’étude de cas', visit: 'Visiter le projet' },
  zh: { eyebrow: '精选作品', title: '真实产品，也保留真正重要的细节。', body: '每个项目都展示实际问题、我的构建内容，以及对应界面或专属封面。', all: '查看全部项目故事', challenge: '问题', build: '构建内容', role: '角色', open: '阅读案例', visit: '访问项目' },
};

const FeaturedCaseStudies: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const featured = PORTFOLIO_STORIES.filter(story => story.featured);

  return (
    <section className="border-y border-slate-300 bg-white py-20 sm:py-24" id="case-studies" aria-labelledby="home-case-studies-heading">
      <div className="container">
        <div className="grid items-end gap-8 border-b border-slate-400 pb-10 md:grid-cols-[1fr_auto]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.eyebrow}</span>
            <h2 id="home-case-studies-heading" className="cv-serif mt-5 max-w-4xl text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl">{h.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.body}</p>
          </div>
          <Link to="/projects" className="btn-secondary">{h.all}<i className="fas fa-arrow-right text-sm" /></Link>
        </div>

        <div className="grid border-l border-slate-300 md:grid-cols-2 xl:grid-cols-3">
          {featured.map(story => {
            const copy = getProjectStoryCopy(story, language);
            const action = story.caseStudy || story.href;
            return (
              <article key={story.id} className="group flex min-h-full flex-col border-b border-r border-slate-300 bg-[#f8f6f1]">
                <div className="aspect-[16/10] overflow-hidden border-b border-slate-300 bg-slate-100">
                  <img src={story.image} alt={`${story.name} ${story.imageKind === 'illustration' ? 'project cover' : 'product interface'}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]" style={{ objectPosition: story.imagePosition || 'center' }} loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[.14em]"><span className="text-brand-800">{story.period}</span><span className="text-slate-500">{copy.role}</span></div>
                  <h3 className="cv-serif mt-4 text-3xl font-semibold leading-tight text-slate-950">{story.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{copy.description}</p>
                  <dl className="mt-6 border-t border-slate-300">
                    <div className="border-b border-slate-300 py-4"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.challenge}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.challenge}</dd></div>
                    <div className="border-b border-slate-300 py-4"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.build}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.build}</dd></div>
                  </dl>
                  <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-3 pt-6">
                    <span className="sr-only">{h.role}: {copy.role}</span>
                    <span className="text-xs font-semibold text-slate-500">{story.includes.join(' · ')}</span>
                    {action && (story.caseStudy
                      ? <Link to={story.caseStudy} className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-600 text-sm font-bold text-slate-900">{h.open}<i className="fas fa-arrow-right text-xs" /></Link>
                      : <a href={story.href} target="_blank" rel="noopener noreferrer" data-analytics-event="project_view" data-project-name={story.name} className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-600 text-sm font-bold text-slate-900">{h.visit}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
