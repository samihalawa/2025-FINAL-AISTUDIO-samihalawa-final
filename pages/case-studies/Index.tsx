import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../../i18n/LanguageContext';
import { PORTFOLIO_STORIES, getProjectStoryCopy } from '../../portfolio';

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; challenge: string; build: string; open: string }> = {
  en: { eyebrow: 'Case studies', title: 'Three real systems, examined in depth.', body: 'Follow the product decisions, interface work and system architecture behind three very different operating problems.', challenge: 'Operating problem', build: 'System delivered', open: 'Open case study' },
  es: { eyebrow: 'Casos de estudio', title: 'Tres sistemas reales, explicados en profundidad.', body: 'Descubre las decisiones de producto, el trabajo de interfaz y la arquitectura detrás de tres problemas operativos muy distintos.', challenge: 'Problema operativo', build: 'Sistema construido', open: 'Abrir caso' },
  fr: { eyebrow: 'Études de cas', title: 'Trois systèmes réels, étudiés en profondeur.', body: 'Découvrez les décisions produit, le travail d’interface et l’architecture derrière trois problèmes opérationnels très différents.', challenge: 'Problème opérationnel', build: 'Système construit', open: 'Ouvrir l’étude' },
  zh: { eyebrow: '案例研究', title: '深入拆解三个真实系统。', body: '深入了解三个不同运营问题背后的产品决策、界面工作与系统架构。', challenge: '运营问题', build: '构建系统', open: '打开案例' },
};

const ids = ['autopricing', 'autoclient', 'medical-systems'];

const CaseStudiesIndex: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const cases = ids.map(id => PORTFOLIO_STORIES.find(story => story.id === id)).filter(Boolean) as typeof PORTFOLIO_STORIES;

  return (
    <section className="bg-[#f8f6f1] py-16 sm:py-24">
      <div className="container">
        <header className="grid gap-8 border-b border-slate-400 pb-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.eyebrow}</span><h1 className="cv-serif mt-5 max-w-4xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">{h.title}</h1></div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-700 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{h.body}</p>
        </header>

        <div className="border-l border-slate-400">
          {cases.map((story, index) => {
            const copy = getProjectStoryCopy(story, language);
            return (
              <article key={story.id} className="grid border-b border-r border-slate-400 bg-white lg:grid-cols-[1.05fr_.95fr]">
                <div className={`aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto ${index % 2 ? 'lg:order-2' : ''}`}><img src={story.image} alt={`${story.name} ${story.imageKind === 'illustration' ? 'project cover' : 'interface'}`} className="h-full min-h-[22rem] w-full object-cover" style={{ objectPosition: story.imagePosition || 'center' }} /></div>
                <div className={`flex flex-col border-t border-slate-300 p-7 sm:p-10 lg:border-t-0 ${index % 2 ? 'lg:order-1 lg:border-r' : 'lg:border-l'}`}>
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-brand-800">{story.period} · {copy.role}</div>
                  <h2 className="cv-serif mt-5 text-4xl font-semibold leading-tight text-slate-950">{story.name}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{copy.description}</p>
                  <dl className="mt-7 border-t border-slate-300"><div className="border-b border-slate-300 py-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.challenge}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.challenge}</dd></div><div className="border-b border-slate-300 py-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.build}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.build}</dd></div></dl>
                  <Link to={story.caseStudy || `/projects#${story.id}`} className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 border-b border-slate-700 text-sm font-bold text-slate-950">{h.open}<i className="fas fa-arrow-right text-xs" /></Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesIndex;
