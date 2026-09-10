import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_STORIES, getPeriodCopy, getProjectStoryCopy, getStoryIncludes } from '../portfolio';

const copy: Record<Exclude<LanguageCode, 'en'>, { eyebrow: string; note: string; challenge: string; build: string; role: string; readEnglish: string; back: string }> = {
  es: { eyebrow: 'Resumen del caso', note: 'El caso de estudio completo, con diagramas y resultados, se publica en inglés.', challenge: 'El problema', build: 'Qué construí', role: 'Rol', readEnglish: 'Leer el caso completo en inglés', back: 'Todos los casos' },
  fr: { eyebrow: 'Résumé de l’étude de cas', note: 'L’étude de cas complète, avec ses schémas et ses résultats, est publiée en anglais.', challenge: 'Le problème', build: 'Ce que j’ai construit', role: 'Rôle', readEnglish: 'Lire l’étude complète en anglais', back: 'Toutes les études de cas' },
  zh: { eyebrow: '案例摘要', note: '完整案例研究（含图示与成果）以英文发布。', challenge: '问题', build: '构建内容', role: '角色', readEnglish: '阅读英文完整案例', back: '全部案例' },
};

/** Long-form case studies are English editorial articles. Other locales get a genuine localized summary and a switch to the English study. */
const CaseStudyLocaleGate: React.FC<{ storyId: string; children: React.ReactNode }> = ({ storyId, children }) => {
  const { language, setLanguage } = useTranslation();
  if (language === 'en') return <>{children}</>;
  const story = PORTFOLIO_STORIES.find(item => item.id === storyId);
  if (!story) return <>{children}</>;
  const c = copy[language];
  const text = getProjectStoryCopy(story, language);
  return (
    <article className="bg-[#f8f6f1] text-slate-800">
      <header className="border-b border-slate-300 py-16 sm:py-24">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{c.eyebrow} · {getPeriodCopy(story.period, language)}</p>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <h1 className="cv-serif max-w-5xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">{story.name}</h1>
            <p className="border-l border-slate-400 pl-6 text-lg leading-relaxed text-slate-600">{text.description}</p>
          </div>
        </div>
      </header>
      <section className="py-14 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="aspect-[16/10] overflow-hidden border border-slate-300 bg-slate-100"><img src={story.image} alt={story.name} className="h-full w-full object-cover" style={{ objectPosition: story.imagePosition || 'center' }} /></div>
          <dl className="border-t border-slate-400">
            {[[c.challenge, text.challenge], [c.build, text.build], [c.role, text.role]].map(([term, value]) => (
              <div key={term} className="grid gap-2 border-b border-slate-300 py-6 sm:grid-cols-[11rem_1fr]"><dt className="font-display text-base font-bold text-slate-950">{term}</dt><dd className="leading-7 text-slate-600">{value}</dd></div>
            ))}
            <div className="py-5 text-xs font-semibold text-slate-500">{getStoryIncludes(story, language).join(' · ')}</div>
          </dl>
        </div>
        <div className="container mt-10 flex flex-wrap items-center gap-4 border-t border-slate-300 pt-8">
          <p className="w-full text-sm leading-6 text-slate-600 sm:w-auto sm:flex-1">{c.note}</p>
          <button type="button" onClick={() => setLanguage('en')} className="btn-primary">{c.readEnglish}<i className="fas fa-arrow-right text-xs" /></button>
          <Link to="/case-studies" className="btn-secondary">{c.back}<i className="fas fa-arrow-right text-xs" /></Link>
        </div>
      </section>
    </article>
  );
};

export default CaseStudyLocaleGate;
