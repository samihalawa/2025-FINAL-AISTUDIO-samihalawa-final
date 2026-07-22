import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

interface CVPageProps { edition?: 'en' | 'es' }

const CVPage: React.FC<CVPageProps> = ({ edition }) => {
  const { language } = useTranslation();
  const selected = edition || (language === 'es' ? 'es' : 'en');
  const spanish = selected === 'es';
  const pdf = spanish ? '/cv/Sami_Halawa_CV_ES.pdf' : '/cv/Sami_Halawa_CV.pdf';
  const ats = spanish ? '/cv/Sami_Halawa_CV_ES_ATS.txt' : '/cv/Sami_Halawa_CV_ATS.txt';
  const preview = spanish ? '/cv/Sami_Halawa_CV_ES_preview.png' : '/cv/Sami_Halawa_CV_preview.png';
  const description = spanish
    ? 'Una visión completa de productos, sistemas para clientes, open source, investigación y docencia, disponible en PDF y en formato ATS.'
    : 'A complete view of products, client systems, open source, research and teaching, available as a designed PDF and an ATS-ready edition.';
  return <>
<section className="py-14 sm:py-20">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl"><span className="badge-pill">{spanish ? 'CV · versión española' : 'CV · English edition'}</span><h1 className="mt-5 font-display text-5xl font-bold tracking-[-.05em] text-slate-950 sm:text-6xl">{spanish ? 'Productos, investigación y una trayectoria construida haciendo.' : 'Products, research and a career built by making.'}</h1><p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">{description}</p></div>
          <div className="flex flex-wrap gap-2"><Link to="/cv/en" className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-bold ${!spanish ? 'bg-slate-900 text-white' : 'border border-slate-300 bg-white text-slate-700'}`}>English</Link><Link to="/cv/es" className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-bold ${spanish ? 'bg-slate-900 text-white' : 'border border-slate-300 bg-white text-slate-700'}`}>Español</Link></div>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href={pdf} download data-analytics-event="cv_download" className="btn-primary"><i className="fas fa-file-pdf"></i>{spanish ? 'Descargar CV completo PDF' : 'Download complete PDF'}</a><a href={ats} download data-analytics-event="cv_download" className="btn-secondary"><i className="fas fa-file-lines"></i>{spanish ? 'Descargar versión ATS' : 'Download ATS edition'}</a><a href="https://www.linkedin.com/in/samihalawa" target="_blank" rel="noopener noreferrer" className="btn-secondary"><i className="fab fa-linkedin"></i>LinkedIn</a></div>
        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 p-3 shadow-sm sm:p-6">
          <img src={preview} alt={spanish ? 'Primera página del CV completo' : 'First page of the complete CV'} className="mx-auto block w-full max-w-3xl rounded-lg bg-white shadow-sm" />
          <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-3 border-t border-slate-200 px-1 pb-1 pt-5 text-sm text-slate-600 sm:flex-row sm:items-center">
            <span>{spanish ? 'Vista previa de la página 1 de 4.' : 'Preview of page 1 of 4.'}</span>
            <a href={pdf} target="_blank" rel="noopener noreferrer" data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 font-bold text-brand-700">{spanish ? 'Abrir las cuatro páginas' : 'Open all four pages'}<i className="fas fa-arrow-up-right-from-square text-xs"></i></a>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default CVPage;
