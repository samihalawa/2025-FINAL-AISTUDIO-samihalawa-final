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
  en: { eyebrow: 'Selected work', title: 'Three engineering stories, with the useful details left in.', body: 'A focused view of the operating problem, the system I built and the production evidence behind each story.', all: 'Explore the engineering portfolio', challenge: 'The problem', build: 'What I built', role: 'Role', open: 'Read the case study', visit: 'Visit the project' },
  es: { eyebrow: 'Trabajo seleccionado', title: 'Tres historias de ingeniería, con los detalles que importan.', body: 'Una vista enfocada del problema operativo, el sistema construido y la evidencia de producción de cada historia.', all: 'Explorar el portfolio de ingeniería', challenge: 'El problema', build: 'Qué construí', role: 'Rol', open: 'Leer el caso', visit: 'Visitar el proyecto' },
  fr: { eyebrow: 'Travaux sélectionnés', title: 'Trois récits d’ingénierie, avec les détails qui comptent.', body: 'Une vue ciblée du problème opérationnel, du système construit et des preuves de production de chaque récit.', all: 'Explorer le portfolio d’ingénierie', challenge: 'Le problème', build: 'Ce que j’ai construit', role: 'Rôle', open: 'Lire l’étude de cas', visit: 'Visiter le projet' },
  zh: { eyebrow: '精选作品', title: '三个工程案例，保留真正重要的细节。', body: '聚焦每个案例的运营问题、构建系统与生产证据。', all: '查看工程作品集', challenge: '问题', build: '构建内容', role: '角色', open: '阅读案例', visit: '访问项目' },
};

const selectedStoryIds = new Set(['oulang', 'autopricing', 'vuda']);

const FeaturedCaseStudies: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const featured = PORTFOLIO_STORIES.filter(story => selectedStoryIds.has(story.id));

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
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.14em]"><span className="text-slate-500">{copy.role}</span></div>
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
