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
    detailEn: 'Telnyx and custom Voice APIs, multilingual agents, live CRM context and post-call automation.',
    detailEs: 'Telnyx y APIs de voz, agentes multilingües, contexto CRM en directo y automatización tras llamada.'
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
    detailEn: 'Detailed technical edition covering AI, full-stack delivery, data, APIs and deployment, including current Databricks, LangChain and LangGraph qualifications.',
    detailEs: 'Edición técnica detallada sobre IA, desarrollo full-stack, datos, APIs y despliegue, con formación actual en Databricks, LangChain y LangGraph.'
  }
];
const roleEditionFile = (key: string) => `${key}_Comprehensive_2026-07-29-v3`;

const CVPage: React.FC<CVPageProps> = ({ edition }) => {
  const { language } = useTranslation();
  const selected = edition || (language === 'es' ? 'es' : 'en');
  const spanish = selected === 'es';
  const pdf = spanish ? '/cv/Sami_Halawa_CV_ES_2026-07-29-v3.pdf' : '/cv/Sami_Halawa_CV_2026-07-29-v3.pdf';
  const ats = spanish ? '/cv/Sami_Halawa_CV_ES_ATS_2026-07-29-v3.txt' : '/cv/Sami_Halawa_CV_ATS_2026-07-29-v3.txt';
  const preview = spanish ? '/cv/Sami_Halawa_CV_ES_preview_2026-07-29-v4.png' : '/cv/Sami_Halawa_CV_preview_2026-07-29-v4.png';
  const description = spanish
    ? 'Una visión completa de productos, sistemas para clientes, open source, investigación y docencia, disponible en PDF y en formato ATS.'
    : 'A complete view of products, client systems, open source, research and teaching, available as a designed PDF and an ATS-ready edition.';
  const downloadLink = 'inline-flex min-h-11 items-center justify-between gap-6 border border-slate-950 px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-950 hover:text-white';
  return (
    <section className="border-b border-slate-300 bg-[#f8f6f1]">
      <div className="container py-10 sm:py-14 lg:py-16">
        <div className="flex items-center justify-between gap-6 border-b border-slate-400 pb-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
            {spanish ? 'Currículum · versión española' : 'Curriculum vitae · English edition'}
          </span>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.14em]">
            <Link to="/cv/en" aria-current={!spanish ? 'page' : undefined} className={`min-h-11 content-center border-b-2 px-1 ${!spanish ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400'}`}>EN</Link>
            <Link to="/cv/es" aria-current={spanish ? 'page' : undefined} className={`min-h-11 content-center border-b-2 px-1 ${spanish ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400'}`}>ES</Link>
          </div>
        </div>

        <header className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(19rem,.65fr)] lg:gap-16 lg:py-16">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-800">Sami Halawa Ribas</p>
            <h1 className="cv-serif max-w-5xl text-[clamp(2.8rem,6vw,5.8rem)] font-normal leading-[0.94] tracking-[-0.045em] text-slate-950">
              {spanish ? 'Productos, investigación y una trayectoria construida creando soluciones reales.' : 'Products, research and a career built through delivery.'}
            </h1>
          </div>
          <div className="flex flex-col justify-end border-t border-slate-400 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-lg leading-relaxed text-slate-700">{description}</p>
            <div className="mt-8 grid gap-2">
              <a href={pdf} download data-analytics-event="cv_download" className={`${downloadLink} bg-slate-950 text-white`}>
                <span>{spanish ? 'CV completo · PDF' : 'Complete CV · PDF'}</span><i className="fas fa-arrow-down text-xs" />
              </a>
              <a href={ats} download data-analytics-event="cv_download" className={downloadLink}>
                <span>{spanish ? 'Versión ATS · TXT' : 'ATS edition · TXT'}</span><i className="fas fa-arrow-down text-xs" />
              </a>
              <a href="https://www.linkedin.com/in/samihalawa" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-between gap-6 border-b border-slate-400 px-1 py-3 text-sm font-bold text-slate-800 hover:border-slate-950 hover:text-slate-950">
                <span>LinkedIn</span><i className="fas fa-arrow-up-right-from-square text-xs" />
              </a>
            </div>
          </div>
        </header>

        <section className="border-t border-slate-400 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(15rem,.55fr)_minmax(0,1.45fr)] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Ediciones por familia de rol' : 'Role-family editions'}</p>
              <h2 className="cv-serif mt-4 text-4xl font-normal leading-tight tracking-[-0.025em] text-slate-950">{spanish ? 'Un historial completo, seis énfasis.' : 'One complete record, six emphases.'}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-slate-700">{spanish ? 'Cada edición incluye un PDF visual de doce páginas y una versión ATS. Todas conservan la experiencia completa, el stack tecnológico, los 85 proyectos y colaboraciones profesionales, las 37 credenciales, la formación y los logros; solo cambia el énfasis inicial.' : 'Each edition includes a twelve-page visual PDF and an ATS version. Every edition retains the complete experience, technology stack, all 85 professional projects and engagements, all 37 credentials, coursework and achievements; only the opening emphasis changes.'}</p>
            </div>
            <ol className="border-t border-slate-400">
              {roleEditions.map((item, index) => (
                <li key={item.key} className="grid gap-4 border-b border-slate-300 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6">
                  <span className="font-mono text-xs font-bold text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="cv-serif text-2xl font-semibold text-slate-950">{spanish ? item.es : item.en}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{spanish ? item.detailEs : item.detailEn}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.12em]">
                    <a href={`/cv/variants/Sami_Halawa_CV_${roleEditionFile(item.key)}.pdf`} download data-analytics-event="cv_download" className="inline-flex min-h-11 items-center border-b border-slate-500 text-slate-800 hover:border-slate-950 hover:text-slate-950">PDF ↓</a>
                    <a href={`/cv/variants/Sami_Halawa_CV_${roleEditionFile(item.key)}_ATS.txt`} download data-analytics-event="cv_download" className="inline-flex min-h-11 items-center border-b border-slate-500 text-slate-800 hover:border-slate-950 hover:text-slate-950">ATS ↓</a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="grid gap-10 border-t border-slate-400 py-12 sm:py-16 lg:grid-cols-[minmax(16rem,.5fr)_minmax(0,1.5fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Formación profesional actual' : 'Current professional development'}</p>
            <h2 className="cv-serif mt-4 text-3xl font-normal leading-tight text-slate-950">{spanish ? 'IA agéntica, plataformas y gobernanza.' : 'Agentic AI, platforms and governance.'}</h2>
            <p className="mt-5 leading-relaxed text-slate-700">{spanish ? 'He completado 37 certificados de cursos y especializaciones en Coursera. Las credenciales más recientes incluyen Building Your First AI Agent with LangChain; Deploying AI Agents: LLMs, LangGraph, and Production APIs; y la especialización Building and Deploying AI Agents with LLMs and LangChain, junto con Databricks Mosaic AI, automatización, MLOps y gobernanza de IA.' : 'I have completed 37 Coursera course and specialization certificates. The newest credentials include Building Your First AI Agent with LangChain; Deploying AI Agents: LLMs, LangGraph, and Production APIs; and the Building and Deploying AI Agents with LLMs and LangChain Specialization, alongside Databricks Mosaic AI, automation, MLOps and AI governance.'}</p>
          </aside>
          <figure>
            <div className="border border-slate-400 bg-white p-2 shadow-[0_28px_70px_-42px_rgba(15,23,42,.55)] sm:p-4">
              <img src={preview} alt={spanish ? 'Primera página del CV completo' : 'First page of the complete CV'} className="block w-full bg-white" />
            </div>
            <figcaption className="mt-4 flex flex-col items-start justify-between gap-3 border-t border-slate-400 pt-4 text-sm text-slate-600 sm:flex-row sm:items-center">
              <span>{spanish ? 'Vista previa de la página 1 de 5.' : 'Preview of page 1 of 5.'}</span>
              <a href={pdf} target="_blank" rel="noopener noreferrer" data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 border-b border-slate-500 font-bold text-slate-800 hover:border-slate-950 hover:text-slate-950">{spanish ? 'Abrir las cinco páginas' : 'Open all five pages'}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
            </figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default CVPage;
