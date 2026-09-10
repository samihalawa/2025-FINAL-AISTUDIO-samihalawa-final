import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

interface CVPageProps { edition?: 'en' | 'es' }

const strengths: { en: { title: string; body: string }; es: { title: string; body: string } }[] = [
  {
    en: { title: 'AI product engineering', body: 'LLM/RAG and agentic systems, model and provider integration, context engineering, evaluation, observability, latency and cost.' },
    es: { title: 'Ingeniería de producto de IA', body: 'Sistemas LLM/RAG y agénticos, integración de modelos y proveedores, ingeniería de contexto, evaluación, observabilidad, latencia y coste.' },
  },
  {
    en: { title: 'Full-stack & backend', body: 'Python, TypeScript and Node.js, React, REST/APIs, SQL and databases, authentication and application architecture.' },
    es: { title: 'Full-stack y backend', body: 'Python, TypeScript y Node.js, React, REST/APIs, SQL y bases de datos, autenticación y arquitectura de aplicaciones.' },
  },
  {
    en: { title: 'Integration & ERP', body: 'System and ERP/Odoo integration, data flows and migrations, automation and tool integration across services.' },
    es: { title: 'Integración y ERP', body: 'Integración de sistemas y ERP/Odoo, flujos de datos y migraciones, automatización e integración de herramientas entre servicios.' },
  },
  {
    en: { title: 'Delivery & operations', body: 'End-to-end delivery: deployment, CI/CD, monitoring, reliability, diagnostics and production operation.' },
    es: { title: 'Entrega y operaciones', body: 'Entrega de principio a fin: despliegue, CI/CD, monitorización, fiabilidad, diagnóstico y operación en producción.' },
  },
  {
    en: { title: 'Leadership & communication', body: 'Technical leadership and mentoring, clear trade-off communication, trilingual work in Spanish, English and Mandarin (中文).' },
    es: { title: 'Liderazgo y comunicación', body: 'Liderazgo técnico y mentoring, comunicación clara de compromisos, trabajo trilingüe en español, inglés y mandarín (中文).' },
  },
];

const CVPage: React.FC<CVPageProps> = ({ edition }) => {
  const { language } = useTranslation();
  const selected = edition || (language === 'es' ? 'es' : 'en');
  const spanish = selected === 'es';

  const notice = !spanish && language === 'fr'
    ? 'Ce CV détaillé est actuellement disponible en anglais. Une version en espagnol est également disponible.'
    : !spanish && language === 'zh'
      ? '这份详细简历目前仅提供英文版本，另有西班牙语版本可选。'
      : null;

  return (
    <section className="border-b border-slate-300 bg-[#f8f6f1]">
      {notice && <p className="border-b border-slate-300 bg-white px-6 py-3 text-center text-sm text-slate-600" role="note">{notice} <Link to="/cv/es" className="border-b border-slate-500 text-slate-800 no-underline hover:border-slate-950">{language === 'fr' ? 'CV en espagnol' : '西班牙语简历'}</Link></p>}
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between gap-6 border-b border-slate-400 pb-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
            {spanish ? 'Perfil profesional' : 'Professional profile'}
          </span>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.14em]">
            <Link to="/cv/en" aria-current={!spanish ? 'page' : undefined} className={`min-h-11 content-center border-b-2 px-1 ${!spanish ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400'}`}>EN</Link>
            <Link to="/cv/es" aria-current={spanish ? 'page' : undefined} className={`min-h-11 content-center border-b-2 px-1 ${spanish ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400'}`}>ES</Link>
          </div>
        </div>

        <header className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(19rem,.65fr)] lg:gap-16 lg:py-16">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-800">Sami Halawa Ribas</p>
            <h1 className="cv-serif max-w-5xl text-[clamp(2.6rem,5.5vw,5.2rem)] font-normal leading-[0.95] tracking-[-0.045em] text-slate-950">
              {spanish ? 'Staff AI Engineer y arquitecto de IA en producción que lleva sistemas agénticos de la arquitectura a producción.' : 'Staff AI Engineer & Production AI Architect taking agentic systems from architecture to production.'}
            </h1>
          </div>
          <div className="flex flex-col justify-end border-t border-slate-400 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-lg leading-relaxed text-slate-700">
              {spanish
                ? 'Staff AI Engineer y arquitecto de IA en producción en Madrid. Diseño y entrego sistemas de IA en producción de principio a fin — orquestación multiagente, RAG, backends FastAPI y TypeScript, despliegue y operación — combinando ingeniería de IA, desarrollo full-stack e integración de sistemas.'
                : 'Staff AI Engineer and Production AI Architect in Madrid. I design and deliver production AI systems end to end — multi-agent orchestration, RAG, FastAPI and TypeScript backends, deployment and operation — combining AI engineering, full-stack development and systems integration.'}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-600">
              {spanish
                ? 'Disponible ahora · contratación B2B directa, liderazgo de IA fraccional y asesoría, o puestos de nivel staff · Madrid · Europa · remoto.'
                : 'Available now · direct B2B contracting, fractional AI leadership & advisory, or staff-level roles · Madrid · Europe · remote.'}
            </p>
          </div>
        </header>

        <div className="border-t border-slate-400 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Fortalezas principales' : 'Core strengths'}</p>
          <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, index) => (
              <div key={item.en.title} className="border-t border-slate-300 pt-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-brand-800">0{index + 1}</span>
                  <h2 className="font-bold text-slate-950">{spanish ? item.es.title : item.en.title}</h2>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{spanish ? item.es.body : item.en.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-400 py-12 sm:py-16">
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            {spanish
              ? 'Para una vacante concreta preparo un CV enfocado a lo que busca el equipo, con las referencias o evidencias que necesites. Escríbeme y te envío la versión relevante.'
              : 'For a specific opening I prepare a CV focused on what the team is looking for, with any references or evidence you need. Get in touch and I will send the relevant version.'}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">{spanish ? 'Contactar' : 'Get in touch'}<i className="fas fa-arrow-right text-sm" /></Link>
            <a href="https://www.linkedin.com/in/samihalawa" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn<i className="fas fa-arrow-up-right-from-square text-sm" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVPage;
