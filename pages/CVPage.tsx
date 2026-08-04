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
    en: 'Technical AI / Full-Stack',
    es: 'IA técnica / Full-Stack',
    detailEn: 'Detailed technical edition covering AI, full-stack delivery, data, APIs and deployment, including current Databricks, LangChain and LangGraph qualifications.',
    detailEs: 'Edición técnica detallada sobre IA, desarrollo full-stack, datos, APIs y despliegue, con formación actual en Databricks, LangChain y LangGraph.'
  },
  {
    key: 'Archer_Agentic_AI_Architect_4446313187',
    en: 'Agentic AI Architect',
    es: 'Arquitectura de IA agéntica',
    detailEn: 'Enterprise agentic architecture, LangChain/LangGraph, MCP, RAG, voice and production delivery.',
    detailEs: 'Arquitectura agéntica empresarial, LangChain/LangGraph, MCP, RAG, voz y entrega en producción.'
  },
  {
    key: 'Zooplus_Agentic_Commerce',
    en: 'Agentic AI / Commerce',
    es: 'IA agéntica / Comercio',
    detailEn: 'Production AI services, commerce workflows, evaluation, observability and product delivery.',
    detailEs: 'Servicios de IA en producción, flujos de comercio, evaluación, observabilidad y entrega de producto.'
  }
];

const googleDataAnalyticsCourses = [
  { title: 'Foundations: Data, Data, Everywhere', id: 'V4FNLT216Q8B', file: 'foundations-data-data-everywhere-V4FNLT216Q8B.pdf' },
  { title: 'Ask Questions to Make Data-Driven Decisions', id: 'CLX6U7RJXKDZ', file: 'ask-questions-to-make-data-driven-decisions-CLX6U7RJXKDZ.pdf' },
  { title: 'Prepare Data for Exploration', id: '137FKE9U9IKK', file: 'prepare-data-for-exploration-137FKE9U9IKK.pdf' },
  { title: 'Process Data from Dirty to Clean', id: 'KC57MXBQZ1SX', file: 'process-data-from-dirty-to-clean-KC57MXBQZ1SX.pdf' },
  { title: 'Analyze Data to Answer Questions', id: 'YFQT024FPUVM', file: 'analyze-data-to-answer-questions-YFQT024FPUVM.pdf' },
  { title: 'Share Data Through the Art of Visualization', id: 'SJ76VZSHXMWV', file: 'share-data-through-visualization-SJ76VZSHXMWV.pdf' },
  { title: 'Introduction to Data Analysis Using Python', id: 'UBFYCZ59VCOI', file: 'introduction-to-data-analysis-using-python-UBFYCZ59VCOI.pdf' },
  { title: 'Google Data Analytics Capstone: Complete a Case Study', id: 'ZCQUM67FGISV', file: 'google-data-analytics-capstone-ZCQUM67FGISV.pdf' },
  { title: 'Accelerate Your Job Search with AI', id: 'HP5JK2INXV6R', file: 'accelerate-your-job-search-with-ai-HP5JK2INXV6R.pdf' }
];

const credentialBase = '/credentials/google-data-analytics';
const featuredCredentialBase = '/credentials/featured';

const featuredCredentials = [
  {
    rank: '01',
    title: 'IBM Generative AI Engineering',
    issuer: 'IBM',
    id: 'H21CWM4OU7XQ',
    image: 'ibm-generative-ai-engineering-H21CWM4OU7XQ.webp',
    pdf: 'ibm-generative-ai-engineering-H21CWM4OU7XQ.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/H21CWM4OU7XQ',
    detailEn: 'Twenty-course Professional Certificate spanning Python, machine learning, deep learning, transformers, fine-tuning, RAG, LangChain and production generative-AI applications.',
    detailEs: 'Certificado Profesional de veinte cursos sobre Python, machine learning, deep learning, transformers, fine-tuning, RAG, LangChain y aplicaciones de IA generativa en producción.'
  },
  {
    rank: '02',
    title: 'Google Data Analytics',
    issuer: 'Google',
    id: 'WMUDGIG7OY8D',
    image: 'google-data-analytics-WMUDGIG7OY8D.webp',
    pdf: 'google-data-analytics-WMUDGIG7OY8D.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/WMUDGIG7OY8D',
    detailEn: 'Nine-course Professional Certificate covering spreadsheets, SQL, Python, Tableau, data preparation, analysis, visualisation and a complete case study.',
    detailEs: 'Certificado Profesional de nueve cursos sobre hojas de cálculo, SQL, Python, Tableau, preparación, análisis y visualización de datos, con un caso práctico completo.'
  },
  {
    rank: '03',
    title: 'AI Foundations for Business Professionals',
    issuer: 'Saïd Business School, University of Oxford',
    id: 'LWTECCK71WBO',
    image: 'oxford-ai-foundations-LWTECCK71WBO.webp',
    pdf: 'oxford-ai-foundations-LWTECCK71WBO.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/LWTECCK71WBO',
    detailEn: 'Oxford programme in AI essentials, generative and agentic AI, governance, leadership and business application.',
    detailEs: 'Programa de Oxford sobre fundamentos de IA, IA generativa y agéntica, gobernanza, liderazgo y aplicación empresarial.'
  }
];

const ibmGenerativeCourses = [
  ['Introduction to Artificial Intelligence (AI)', 'QDZP4952G529'],
  ['Generative AI: Introduction and Applications', 'Z7OYZQ8R6JC1'],
  ['Generative AI: Prompt Engineering Basics', '1CQ1ZFB8WTJ7'],
  ['Python for Data Science, AI & Development', 'T9UGJSEZXDO6'],
  ['Developing AI Applications with Python and Flask', 'QJDTTTMUQ0LE'],
  ['Building Generative AI-Powered Applications with Python', 'OET9Y99RPDEB'],
  ['Generative AI and LLMs: Architecture and Data Preparation', 'N0OS7ZV1ZTQ1'],
  ['Gen AI Foundational Models for NLP & Language Understanding', '1V0QE5VLIUWU'],
  ['Generative AI Language Modeling with Transformers', '76HQW3YWTQTC'],
  ['Generative AI Engineering and Fine-Tuning Transformers', 'MLODQEU2VSJP'],
  ['Generative AI Advanced Fine-Tuning for LLMs', '0MTB497LTU5X'],
  ['Fundamentals of AI Agents Using RAG and LangChain', 'JF0OW4KZ2G96'],
  ['Project: Generative AI Applications with RAG and LangChain', 'AOX3WDKI145D'],
  ['Introduction to Deep Learning & Neural Networks with Keras', '7MUT0S0WTGV2'],
  ['Machine Learning with Python', 'MA12RUEA95L1'],
  ['Supervised Machine Learning: Regression', 'PYCV7XOO4LLK'],
  ['Supervised Machine Learning: Classification', 'UKPCHR2RICZS'],
  ['Unsupervised Machine Learning', 'G1VSALTXHPRU'],
  ['Exploratory Data Analysis for Machine Learning', 'QVXE8FP3W0XI'],
  ['Data Analysis with Python', 'WOD7TDCBN50J']
] as const;

const majorCredentials = [
  ['IBM Generative AI Engineering Professional Certificate', 'IBM', 'H21CWM4OU7XQ'],
  ['Google Data Analytics Professional Certificate', 'Google', 'WMUDGIG7OY8D'],
  ['AI Foundations for Business Professionals', 'Saïd Business School, University of Oxford', 'LWTECCK71WBO'],
  ['CompTIA SecAI+ (CY0-001) Certification Exam Prep', 'Packt', 'Q4IYZTSRNUTN'],
  ['Machine Learning Operations (MLOps)', 'Board Infinity', '3HZCX9EHMFMO'],
  ['Agentic AI Engineering', 'Edureka', 'GZ2Q50QNLE6N'],
  ['Building and Deploying AI Agents with LLMs and LangChain', 'Board Infinity', 'V7QS07EJVS93'],
  ['Investment Management with Python and Machine Learning', 'EDHEC Business School', 'EGOPNC45Z7X4'],
  ['Data Privacy, Ethics, and Responsible AI', 'Coursera', 'W4PPDYPHJKUR'],
  ['AI Automation Engineer with n8n', 'LearnKartS', 'YUNCHF6IXQJQ'],
  ['Managing AI Systems: Development, Deployment, and Governance', 'Board Infinity', 'HZ7XDA9WCE2I'],
  ['AI Governance & ISO 42001 Readiness for GRC, Audit, & Legal', 'British Standards Institution', 'UXUS7TQ36GF4']
] as const;

const roleEditionFile = (key: string) => `${key}_Comprehensive_2026-08-04`;

const CVPage: React.FC<CVPageProps> = ({ edition }) => {
  const { language } = useTranslation();
  const selected = edition || (language === 'es' ? 'es' : 'en');
  const spanish = selected === 'es';
  const pdf = spanish ? '/cv/Sami_Halawa_CV_ES_2026-08-04.pdf' : '/cv/Sami_Halawa_CV_2026-08-04.pdf';
  const ats = spanish ? '/cv/Sami_Halawa_CV_ES_ATS_2026-08-04.txt' : '/cv/Sami_Halawa_CV_ATS_2026-08-04.txt';
  const preview = spanish ? '/cv/Sami_Halawa_CV_ES_preview_2026-08-04.png' : '/cv/Sami_Halawa_CV_preview_2026-08-04.png';
  const primaryCredential = featuredCredentials[0];
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,.9fr)] lg:gap-14">
            <div className="overflow-hidden border border-slate-400 bg-white p-2 shadow-[0_28px_70px_-42px_rgba(15,23,42,.55)] sm:p-4">
              <img
                src={`${featuredCredentialBase}/${primaryCredential.image}`}
                alt={spanish ? `Diploma de ${primaryCredential.title}` : `${primaryCredential.title} diploma`}
                className="block h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Credencial principal · agosto de 2026' : 'Lead credential · August 2026'}</p>
                <h2 className="cv-serif mt-4 text-[clamp(2.3rem,5vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.04em] text-slate-950">{primaryCredential.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">{spanish ? primaryCredential.detailEs : primaryCredential.detailEn}</p>
                <dl className="mt-7 grid grid-cols-2 border-y border-slate-300 py-5 text-sm">
                  <div><dt className="font-bold uppercase tracking-[0.12em] text-slate-500">{spanish ? 'Emisor' : 'Issuer'}</dt><dd className="mt-1 text-lg font-semibold text-slate-950">{primaryCredential.issuer}</dd></div>
                  <div><dt className="font-bold uppercase tracking-[0.12em] text-slate-500">{spanish ? 'Credencial' : 'Credential'}</dt><dd className="mt-1 font-mono text-base font-semibold text-slate-950">{primaryCredential.id}</dd></div>
                </dl>
              </div>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                <a href={`${featuredCredentialBase}/${primaryCredential.pdf}`} target="_blank" rel="noopener noreferrer" className={`${downloadLink} bg-slate-950 text-white`}>
                  <span>{spanish ? 'Abrir diploma' : 'Open diploma'}</span><i className="fas fa-arrow-up-right-from-square text-xs" />
                </a>
                <a href={primaryCredential.url} target="_blank" rel="noopener noreferrer" className={downloadLink}>
                  <span>{spanish ? 'Ver credencial' : 'View credential'}</span><i className="fas fa-arrow-up-right-from-square text-xs" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-slate-400 pt-8 lg:grid-cols-2">
            {featuredCredentials.slice(1).map((credential) => (
              <article key={credential.id} className="grid gap-6 border-b border-slate-300 pb-8 sm:grid-cols-[minmax(11rem,.8fr)_minmax(0,1.2fr)] lg:border-b-0 lg:pb-0">
                <a href={`${featuredCredentialBase}/${credential.pdf}`} target="_blank" rel="noopener noreferrer" className="overflow-hidden border border-slate-400 bg-white p-2">
                  <img src={`${featuredCredentialBase}/${credential.image}`} alt={`${credential.title} diploma`} className="block h-full w-full object-contain" />
                </a>
                <div>
                  <p className="font-mono text-xs font-bold text-brand-800">{credential.rank} · {credential.issuer}</p>
                  <h3 className="cv-serif mt-3 text-3xl font-semibold leading-tight text-slate-950">{credential.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{spanish ? credential.detailEs : credential.detailEn}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-[0.1em]">
                    <a href={`${featuredCredentialBase}/${credential.pdf}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border-b border-slate-500 text-slate-800 hover:border-slate-950">{spanish ? 'Abrir diploma' : 'Open diploma'}</a>
                    <a href={credential.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border-b border-slate-500 text-slate-800 hover:border-slate-950">{spanish ? 'Ver credencial' : 'View credential'}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-400">
            <div className="grid gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'IBM Generative AI Engineering' : 'IBM Generative AI Engineering'}</p>
                <h3 className="cv-serif mt-3 text-3xl font-normal text-slate-950">{spanish ? 'Veinte cursos, cada uno con su credencial oficial.' : 'Twenty courses, each with its official credential.'}</h3>
              </div>
              <span className="font-mono text-sm font-bold text-slate-500">20 + 01</span>
            </div>
            <ol className="grid border-t border-slate-300 md:grid-cols-2 md:gap-x-10">
              {ibmGenerativeCourses.map(([title, id], index) => (
                <li key={id} className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-300 py-4">
                  <span className="font-mono text-xs font-bold text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-snug text-slate-950">{title}</h4>
                    <p className="mt-1 font-mono text-xs text-slate-500">{id}</p>
                  </div>
                  <a href={`https://www.coursera.org/account/accomplishments/records/${id}`} target="_blank" rel="noopener noreferrer" aria-label={`${spanish ? 'Ver credencial' : 'View credential'}: ${title}`} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-slate-400 text-slate-800 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white">
                    <i className="fas fa-arrow-up-right-from-square text-xs" />
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 border-t border-slate-400">
            <div className="grid gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Diplomas de los nueve cursos' : 'Nine course diplomas'}</p>
                <h3 className="cv-serif mt-3 text-3xl font-normal text-slate-950">{spanish ? 'Cada curso, con su credencial oficial.' : 'Every course, with its official credential.'}</h3>
              </div>
              <span className="font-mono text-sm font-bold text-slate-500">09 + 01</span>
            </div>
            <ol className="grid border-t border-slate-300 md:grid-cols-2 md:gap-x-10">
              {googleDataAnalyticsCourses.map((course, index) => (
                <li key={course.id} className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-300 py-4">
                  <span className="font-mono text-xs font-bold text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-snug text-slate-950">{course.title}</h4>
                    <p className="mt-1 font-mono text-xs text-slate-500">{course.id}</p>
                  </div>
                  <a href={`${credentialBase}/${course.file}`} target="_blank" rel="noopener noreferrer" aria-label={`${spanish ? 'Abrir diploma' : 'Open diploma'}: ${course.title}`} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-slate-400 text-slate-800 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white">
                    <i className="fas fa-arrow-up-right-from-square text-xs" />
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 border-t border-slate-400">
            <div className="grid gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Inventario completo' : 'Complete inventory'}</p>
                <h3 className="cv-serif mt-3 text-3xl font-normal text-slate-950">{spanish ? '12 programas avanzados · 84 credenciales verificadas.' : '12 advanced programmes · 84 verified credentials.'}</h3>
              </div>
              <span className="font-mono text-sm font-bold text-slate-500">12 / 84</span>
            </div>
            <ol className="grid border-t border-slate-300 md:grid-cols-2 md:gap-x-10">
              {majorCredentials.map(([title, issuer, id], index) => (
                <li key={id} className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-300 py-4">
                  <span className="font-mono text-xs font-bold text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-snug text-slate-950">{title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{issuer} · <span className="font-mono">{id}</span></p>
                  </div>
                  <a href={`https://www.coursera.org/account/accomplishments/specialization/${id}`} target="_blank" rel="noopener noreferrer" aria-label={`${spanish ? 'Ver credencial' : 'View credential'}: ${title}`} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-slate-400 text-slate-800 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white">
                    <i className="fas fa-arrow-up-right-from-square text-xs" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-slate-400 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(15rem,.55fr)_minmax(0,1.45fr)] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Perfiles profesionales' : 'Professional profiles'}</p>
              <h2 className="cv-serif mt-4 text-4xl font-normal leading-tight tracking-[-0.025em] text-slate-950">{spanish ? 'Elige el perfil más cercano a la oportunidad.' : 'Choose the profile closest to the opportunity.'}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-slate-700">{spanish ? 'Todos presentan la trayectoria completa, el stack tecnológico, 85 proyectos y colaboraciones, 84 credenciales profesionales y los logros principales, situando primero las capacidades más relevantes para cada función.' : 'Every profile presents the complete career history, technology stack, 85 projects and engagements, 84 professional credentials and major achievements, with the most relevant capabilities first.'}</p>
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
            <p className="mt-5 leading-relaxed text-slate-700">{spanish ? 'Mis 84 credenciales profesionales abarcan ingeniería de IA generativa de IBM; análisis de datos de Google; estrategia y gobernanza de IA de Saïd Business School, University of Oxford; ingeniería de IA agéntica; arquitectura de IA segura y preparación SecAI+ de Packt; MLOps de producción; Databricks Mosaic AI; automatización con n8n; ISO 42001; y métodos cuantitativos.' : 'My 84 professional credentials span IBM generative-AI engineering; Google data analytics; AI strategy and governance from Saïd Business School, University of Oxford; agentic AI engineering; secure-AI architecture and SecAI+ exam preparation; production MLOps; Databricks Mosaic AI; n8n automation; ISO 42001; and quantitative methods.'}</p>
          </aside>
          <figure>
            <div className="border border-slate-400 bg-white p-2 shadow-[0_28px_70px_-42px_rgba(15,23,42,.55)] sm:p-4">
              <img src={preview} alt={spanish ? 'Primera página del CV completo' : 'First page of the complete CV'} className="block w-full bg-white" />
            </div>
            <figcaption className="mt-4 flex flex-col items-start justify-between gap-3 border-t border-slate-400 pt-4 text-sm text-slate-600 sm:flex-row sm:items-center">
              <span>{spanish ? 'Vista previa de la página 1 de 8.' : 'Preview of page 1 of 8.'}</span>
              <a href={pdf} target="_blank" rel="noopener noreferrer" data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 border-b border-slate-500 font-bold text-slate-800 hover:border-slate-950 hover:text-slate-950">{spanish ? 'Abrir las ocho páginas' : 'Open all eight pages'}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
            </figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default CVPage;
