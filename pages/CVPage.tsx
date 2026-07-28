import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

interface CVPageProps { edition?: 'en' | 'es' }

const roleEditions = [
  {
    key: 'Founding_Head_of_AI',
    en: 'Founding / Head of AI',
    es: 'Founding / Dirección de IA',
    detailEn: 'Product, architecture, leadership and end-to-end ownership.',
    detailEs: 'Producto, arquitectura, liderazgo y responsabilidad integral.'
  },
  {
    key: 'GenAI_RAG_Agents',
    en: 'GenAI / RAG / Agents',
    es: 'GenAI / RAG / Agentes',
    detailEn: 'Agentic systems, retrieval, MCP, tools and AI delivery.',
    detailEs: 'Sistemas agénticos, retrieval, MCP, herramientas y entrega de IA.'
  },
  {
    key: 'AI_Platform_MLOps',
    en: 'AI Platform / MLOps',
    es: 'Plataforma IA / MLOps',
    detailEn: 'APIs, data, infrastructure, CI/CD and observability.',
    detailEs: 'APIs, datos, infraestructura, CI/CD y observabilidad.'
  },
  {
    key: 'Voice_API_Automation',
    en: 'Voice / API Automation',
    es: 'Voz / APIs / Automatización',
    detailEn: 'Voice, messaging, CRM and integration workflows.',
    detailEs: 'Voz, mensajería, CRM y flujos de integración.'
  },
  {
    key: 'AI_Teaching_Governance',
    en: 'AI Teaching / Governance',
    es: 'Docencia / Gobernanza de IA',
    detailEn: 'Practical education, responsible AI and governance.',
    detailEs: 'Formación práctica, IA responsable y gobernanza.'
  },
  {
    key: 'Atos_Technical',
    en: 'Atos Technical Dossier',
    es: 'Dossier técnico para Atos',
    detailEn: 'A super-detailed AI, full-stack, data, API and deployment edition, including current Databricks Mosaic AI qualification.',
    detailEs: 'Edición superdetallada de IA, full-stack, datos, APIs y deployment, con la formación actual en Databricks Mosaic AI.'
  }
];
const roleEditionFile = (key: string) => key === 'Atos_Technical' ? key : `${key}_Comprehensive`;

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
        <section className="mt-12">
          <div className="max-w-3xl">
            <span className="badge-pill">{spanish ? 'Ediciones por familia de rol' : 'Role-family editions'}</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-.035em] text-slate-950">{spanish ? 'Un historial completo, seis énfasis claros.' : 'One complete record, six clear emphases.'}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{spanish ? 'Cada edición combina un PDF visual completo de doce páginas con una versión ATS en texto. Todas conservan la experiencia completa, el stack tecnológico detallado, los 90 proyectos, credenciales, formación y logros; solo cambia el énfasis inicial y el orden.' : 'Each edition pairs a comprehensive twelve-page visual PDF with a plain-text ATS version. Every edition retains the full experience, detailed technology stack, all 90 projects, credentials, coursework and achievements; only the opening emphasis and ordering change.'}</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roleEditions.map((item) => <article key={item.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display text-xl font-bold text-slate-950">{spanish ? item.es : item.en}</h3>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-slate-600">{spanish ? item.detailEs : item.detailEn}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`/cv/variants/Sami_Halawa_CV_${roleEditionFile(item.key)}.pdf`} download data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-900 px-4 text-sm font-bold text-white"><i className="fas fa-file-pdf"></i>PDF</a>
                <a href={`/cv/variants/Sami_Halawa_CV_${roleEditionFile(item.key)}_ATS.txt`} download data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700">ATS</a>
              </div>
            </article>)}
          </div>
        </section>
        <section className="mt-12 rounded-[1.5rem] border border-brand-200 bg-brand-50 p-6 sm:p-8">
          <span className="text-sm font-bold uppercase tracking-[.14em] text-brand-800">{spanish ? 'Formación profesional actual' : 'Current professional development'}</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-slate-950">{spanish ? 'IA agéntica, plataformas y gobernanza.' : 'Agentic AI, platforms and governance.'}</h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-slate-700">{spanish ? 'Certificados verificados de julio de 2026: Databricks Mosaic AI; AI Agent Architecture: Reasoning, Memory, and LangGraph; Designing Multi-Agent Systems; AI Automation Engineer with n8n; Managing AI Systems; Data Privacy, Ethics, and Responsible AI; y AI Governance & ISO 42001 Readiness.' : 'Verified July 2026 certificates: Databricks Mosaic AI; AI Agent Architecture: Reasoning, Memory, and LangGraph; Designing Multi-Agent Systems; AI Automation Engineer with n8n; Managing AI Systems; Data Privacy, Ethics, and Responsible AI; and AI Governance & ISO 42001 Readiness.'}</p>
        </section>
        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 p-3 shadow-sm sm:p-6">
          <img src={preview} alt={spanish ? 'Primera página del CV completo' : 'First page of the complete CV'} className="mx-auto block w-full max-w-3xl rounded-lg bg-white shadow-sm" />
          <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-3 border-t border-slate-200 px-1 pb-1 pt-5 text-sm text-slate-600 sm:flex-row sm:items-center">
            <span>{spanish ? 'Vista previa de la página 1 de 5.' : 'Preview of page 1 of 5.'}</span>
            <a href={pdf} target="_blank" rel="noopener noreferrer" data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 font-bold text-brand-700">{spanish ? 'Abrir las cinco páginas' : 'Open all five pages'}<i className="fas fa-arrow-up-right-from-square text-xs"></i></a>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default CVPage;
