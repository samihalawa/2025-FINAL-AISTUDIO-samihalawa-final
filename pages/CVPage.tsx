import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

interface CVPageProps { edition?: 'en' | 'es' }

const roleEditions = [
  {
    key: 'Founding_AI_Product',
    en: 'Founding AI / Product — English',
    es: 'Fundador técnico / Producto IA — inglés',
    detailEn: 'Technical founder, AI product engineering and end-to-end product ownership.',
    detailEs: 'Fundador técnico, ingeniería de producto IA y responsabilidad integral.'
  },
  {
    key: 'Founding_AI_Product_ES',
    en: 'Founding AI / Product — Spanish',
    es: 'Fundador técnico / Producto IA — español',
    detailEn: 'Spanish application edition for product, engineering and technical-leadership roles.',
    detailEs: 'Edición en español para producto, ingeniería y liderazgo técnico.'
  },
  {
    key: 'GenAI_Agents_Automation',
    fileVersion: '2026-08-10-v7',
    en: 'GenAI / Agents / Voice / Automation',
    es: 'GenAI / Agentes / Voz / Automatización',
    detailEn: 'Python and TypeScript systems across RAG, LangGraph, MCP, structured outputs, voice, deployment, observability and human review.',
    detailEs: 'Sistemas Python y TypeScript con RAG, LangGraph, MCP, salidas estructuradas, voz, despliegue, observabilidad y revisión humana.'
  },
  {
    key: 'AI_Platform_Product_Engineering',
    en: 'AI Platform / Product Engineering / MLOps',
    es: 'Plataforma IA / Ingeniería de producto / MLOps',
    detailEn: 'APIs, data, infrastructure, full-stack product delivery, CI/CD and observability.',
    detailEs: 'APIs, datos, infraestructura, entrega full-stack, CI/CD y observabilidad.'
  },
  {
    key: 'Clinical_AI_Healthcare',
    en: 'Clinical AI / Healthcare',
    es: 'IA clínica / Salud',
    detailEn: 'Medical-learning products, ophthalmology workflows, multimodal review and human oversight.',
    detailEs: 'Productos de aprendizaje médico, flujos oftalmológicos, revisión multimodal y supervisión humana.'
  },
  {
    key: 'AI_Teaching_Governance',
    en: 'AI Teaching / Technical Communication / Governance',
    es: 'Docencia IA / Comunicación técnica / Gobernanza',
    detailEn: 'Implementation-first education, stakeholder communication, responsible AI and governance.',
    detailEs: 'Formación práctica, comunicación con stakeholders, IA responsable y gobernanza.'
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
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    id: 'RFQT2RK02F2E',
    image: 'google-ai-professional-RFQT2RK02F2E.webp',
    pdf: 'google-ai-professional-RFQT2RK02F2E.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/RFQT2RK02F2E',
    detailEn: 'Seven-course Professional Certificate covering practical AI for research, planning, communication, content, data analysis and application building.',
    detailEs: 'Certificado Profesional de siete cursos sobre IA aplicada a investigación, planificación, comunicación, contenido, análisis de datos y creación de aplicaciones.'
  },
  {
    rank: '02',
    title: 'AI in Healthcare Specialization',
    issuer: 'Stanford University',
    id: '7XCTV3Q16K04',
    image: 'stanford-ai-healthcare-7XCTV3Q16K04.webp',
    pdf: 'stanford-ai-healthcare-7XCTV3Q16K04.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/7XCTV3Q16K04',
    detailEn: 'Five-course Stanford specialization covering clinical data, machine learning for healthcare and evaluation of AI applications, completed with a capstone.',
    detailEs: 'Especialización de Stanford de cinco cursos sobre datos clínicos, machine learning sanitario y evaluación de aplicaciones de IA, con proyecto final.'
  },
  {
    rank: '03',
    title: 'Microsoft Generative AI Engineering Professional Certificate',
    issuer: 'Microsoft',
    id: '4F55T94ZR1DH',
    image: 'microsoft-generative-ai-engineering-4F55T94ZR1DH.webp',
    pdf: 'microsoft-generative-ai-engineering-4F55T94ZR1DH.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/4F55T94ZR1DH',
    detailEn: 'Five-course Professional Certificate in Azure generative AI, foundation models, large language models, multimodal systems, MLOps and responsible AI.',
    detailEs: 'Certificado Profesional de cinco cursos sobre IA generativa en Azure, modelos fundacionales, LLM, sistemas multimodales, MLOps e IA responsable.'
  },
  {
    rank: '04',
    title: 'Microsoft AI & ML Engineering Professional Certificate',
    issuer: 'Microsoft',
    id: 'G39IMP9491N8',
    image: 'microsoft-ai-ml-engineering-G39IMP9491N8.webp',
    pdf: 'microsoft-ai-ml-engineering-G39IMP9491N8.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/G39IMP9491N8',
    detailEn: 'Professional Certificate covering machine-learning engineering, Azure AI services, production data workflows and responsible deployment.',
    detailEs: 'Certificado Profesional sobre ingeniería de machine learning, servicios de Azure AI, flujos de datos en producción y despliegue responsable.'
  },
  {
    rank: '05',
    title: 'IBM Machine Learning Professional Certificate',
    issuer: 'IBM',
    id: 'TRO88CF6Y826',
    image: 'ibm-machine-learning-TRO88CF6Y826.webp',
    pdf: 'ibm-machine-learning-TRO88CF6Y826.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/TRO88CF6Y826',
    detailEn: 'Six-course Professional Certificate spanning exploratory analysis, supervised and unsupervised learning, deep learning and a machine-learning capstone.',
    detailEs: 'Certificado Profesional de seis cursos sobre análisis exploratorio, aprendizaje supervisado y no supervisado, deep learning y proyecto final de machine learning.'
  },
  {
    rank: '06',
    title: 'IBM Generative AI Engineering Professional Certificate',
    issuer: 'IBM',
    id: 'H21CWM4OU7XQ',
    image: 'ibm-generative-ai-engineering-H21CWM4OU7XQ.webp',
    pdf: 'ibm-generative-ai-engineering-H21CWM4OU7XQ.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/H21CWM4OU7XQ',
    detailEn: 'Official 16-course Professional Certificate spanning Python, machine learning, deep learning, transformers, fine-tuning, RAG, LangChain and production generative-AI applications, supported by 20 archived IBM course credentials.',
    detailEs: 'Certificado Profesional oficial de 16 cursos sobre Python, machine learning, deep learning, transformers, fine-tuning, RAG, LangChain y aplicaciones de IA generativa en producción, respaldado por 20 credenciales IBM de cursos archivadas.'
  },
  {
    rank: '07',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    id: 'WMUDGIG7OY8D',
    image: 'google-data-analytics-WMUDGIG7OY8D.webp',
    pdf: 'google-data-analytics-WMUDGIG7OY8D.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/WMUDGIG7OY8D',
    detailEn: 'Nine-course Professional Certificate covering spreadsheets, SQL, Python, Tableau, data preparation, analysis, visualisation and a complete case study.',
    detailEs: 'Certificado Profesional de nueve cursos sobre hojas de cálculo, SQL, Python, Tableau, preparación, análisis y visualización de datos, con un caso práctico completo.'
  },
  {
    rank: '08',
    title: 'AI Foundations for Business Professionals',
    issuer: 'Saïd Business School, University of Oxford',
    id: 'LWTECCK71WBO',
    image: 'oxford-ai-foundations-LWTECCK71WBO.webp',
    pdf: 'oxford-ai-foundations-LWTECCK71WBO.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/LWTECCK71WBO',
    detailEn: 'Oxford programme in AI essentials, generative and agentic AI, governance, leadership and business application.',
    detailEs: 'Programa de Oxford sobre fundamentos de IA, IA generativa y agéntica, gobernanza, liderazgo y aplicación empresarial.'
  },
  {
    rank: '09',
    title: 'Agentic AI Engineering Specialization',
    issuer: 'Edureka',
    id: 'GZ2Q50QNLE6N',
    image: 'agentic-ai-engineering-GZ2Q50QNLE6N.webp',
    pdf: 'agentic-ai-engineering-GZ2Q50QNLE6N.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/GZ2Q50QNLE6N',
    detailEn: 'Four-course specialization in LangChain, LangGraph and MCP, covering reasoning, tools, memory, stateful workflows, validation and observability.',
    detailEs: 'Especialización de cuatro cursos en LangChain, LangGraph y MCP sobre razonamiento, herramientas, memoria, flujos con estado, validación y observabilidad.'
  },
  {
    rank: '10',
    title: 'Machine Learning Operations (MLOps) Specialization',
    issuer: 'Board Infinity',
    id: '3HZCX9EHMFMO',
    image: 'mlops-3HZCX9EHMFMO.webp',
    pdf: 'mlops-3HZCX9EHMFMO.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/3HZCX9EHMFMO',
    detailEn: 'Three-course specialization in ML CI/CD, cloud deployment, containerised model serving, production APIs, scalability and operating trade-offs.',
    detailEs: 'Especialización de tres cursos en CI/CD para ML, despliegue cloud, serving de modelos en contenedores, APIs de producción, escalabilidad y decisiones operativas.'
  },
  {
    rank: '11',
    title: 'Managing AI Systems: Development, Deployment, and Governance',
    issuer: 'Board Infinity',
    id: 'HZ7XDA9WCE2I',
    image: 'managing-ai-systems-HZ7XDA9WCE2I.webp',
    pdf: 'managing-ai-systems-HZ7XDA9WCE2I.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/HZ7XDA9WCE2I',
    detailEn: 'Three-course specialization connecting RAG and LLM architecture with MLOps, LLMOps, production scaling, audit and AI-governance foundations.',
    detailEs: 'Especialización de tres cursos que conecta arquitectura RAG y LLM con MLOps, LLMOps, escalado en producción, auditoría y fundamentos de gobernanza de IA.'
  },
  {
    rank: '12',
    title: 'AI Governance & ISO 42001 Readiness for GRC, Audit, & Legal',
    issuer: 'British Standards Institution',
    id: 'UXUS7TQ36GF4',
    image: 'bsi-ai-governance-UXUS7TQ36GF4.webp',
    pdf: 'bsi-ai-governance-UXUS7TQ36GF4.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/UXUS7TQ36GF4',
    detailEn: 'Five-course BSI specialization in AI concepts, impact assessment, ISO 42001 and ISO 23894, the EU AI Act, trust and responsible governance.',
    detailEs: 'Especialización de BSI de cinco cursos sobre conceptos de IA, evaluación de impacto, ISO 42001 e ISO 23894, Reglamento de IA de la UE, confianza y gobernanza responsable.'
  },
  {
    rank: '13',
    title: 'AI Automation Engineer with n8n Specialization',
    issuer: 'LearnKartS',
    id: 'YUNCHF6IXQJQ',
    image: 'n8n-ai-automation-YUNCHF6IXQJQ.webp',
    pdf: 'n8n-ai-automation-YUNCHF6IXQJQ.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/YUNCHF6IXQJQ',
    detailEn: 'Seven-course specialization in n8n workflow logic, AI-model integration, secure APIs, RAG memory, MCP, multi-agent systems, testing and deployment.',
    detailEs: 'Especialización de siete cursos sobre lógica de flujos n8n, integración de modelos, APIs seguras, memoria RAG, MCP, sistemas multiagente, pruebas y despliegue.'
  },
  {
    rank: '14',
    title: 'Data Privacy, Ethics, and Responsible AI Specialization',
    issuer: 'Professionals in the Industry',
    id: 'W4PPDYPHJKUR',
    image: 'data-privacy-responsible-ai-W4PPDYPHJKUR.webp',
    pdf: 'data-privacy-responsible-ai-W4PPDYPHJKUR.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/W4PPDYPHJKUR',
    detailEn: 'Six-course specialization in trustworthy chatbots, impact assessment, AI literacy, prompt-injection risks, privacy standards and European AI law.',
    detailEs: 'Especialización de seis cursos sobre chatbots fiables, evaluación de impacto, alfabetización en IA, riesgos de prompt injection, estándares de privacidad y derecho europeo de IA.'
  },
  {
    rank: '15',
    title: 'CompTIA SecAI+ (CY0-001) Certification Exam Prep',
    issuer: 'Packt',
    id: 'Q4IYZTSRNUTN',
    image: 'comptia-secai-prep-Q4IYZTSRNUTN.webp',
    pdf: 'comptia-secai-prep-Q4IYZTSRNUTN.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/Q4IYZTSRNUTN',
    detailEn: 'Three-course preparation specialization in secure AI foundations, security architecture and controls, defensive operations, automation, governance and compliance.',
    detailEs: 'Especialización preparatoria de tres cursos sobre fundamentos de IA segura, arquitectura y controles de seguridad, defensa, automatización, gobernanza y cumplimiento.'
  },
  {
    rank: '16',
    title: 'Building and Deploying AI Agents with LLMs and LangChain',
    issuer: 'Board Infinity',
    id: 'V7QS07EJVS93',
    image: 'building-deploying-ai-agents-V7QS07EJVS93.webp',
    pdf: 'building-deploying-ai-agents-V7QS07EJVS93.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/V7QS07EJVS93',
    detailEn: 'Three-course specialization in agent architecture, persistent memory, LangGraph, PydanticAI, multi-agent collaboration and production API deployment.',
    detailEs: 'Especialización de tres cursos sobre arquitectura de agentes, memoria persistente, LangGraph, PydanticAI, colaboración multiagente y despliegue mediante APIs de producción.'
  },
  {
    rank: '17',
    title: 'Investment Management with Python and Machine Learning',
    issuer: 'EDHEC Business School',
    id: 'EGOPNC45Z7X4',
    image: 'investment-management-python-ml-EGOPNC45Z7X4.webp',
    pdf: 'investment-management-python-ml-EGOPNC45Z7X4.pdf',
    url: 'https://www.coursera.org/account/accomplishments/specialization/EGOPNC45Z7X4',
    detailEn: 'Four-course specialization in portfolio construction, quantitative analysis, Python, machine learning for asset management and alternative data.',
    detailEs: 'Especialización de cuatro cursos sobre construcción de carteras, análisis cuantitativo, Python, machine learning para gestión de activos y datos alternativos.'
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

const standaloneCredentials = [
  ['中级商务汉语——商务活动篇', 'Peking University', 'OG02CJKE43H4'],
  ['Databricks Mosaic AI', 'Databricks', 'RRXO8HSACR29'],
  ['Foundations of AI Governance and Responsible Development', 'LearnQuest', '8STVBR62T6CY']
] as const;

const legacyCertifications = [
  ['Microsoft Certified: Azure AI Fundamentals', 'AI-900'],
  ['Adobe Certified Expert', 'After Effects']
] as const;

const roleEditionFile = (item: (typeof roleEditions)[number]) => `${item.key}_${item.fileVersion ?? '2026-08-09-v6'}`;

const CVPage: React.FC<CVPageProps> = ({ edition }) => {
  const { language } = useTranslation();
  const selected = edition || (language === 'es' ? 'es' : 'en');
  const spanish = selected === 'es';
  const pdf = spanish ? '/cv/Sami_Halawa_CV_ES_2026-08-09-v6.pdf' : '/cv/Sami_Halawa_CV_2026-08-09-v6.pdf';
  const ats = spanish ? '/cv/Sami_Halawa_CV_ES_ATS_2026-08-09-v6.txt' : '/cv/Sami_Halawa_CV_ATS_2026-08-09-v6.txt';
  const preview = spanish ? '/cv/Sami_Halawa_CV_ES_preview_2026-08-09-v6.png' : '/cv/Sami_Halawa_CV_preview_2026-08-09-v6.png';
  const primaryCredential = featuredCredentials[0];
  const description = spanish
    ? 'Un registro completo de productos de IA, ingeniería en producción, sistemas agénticos, open source, investigación y docencia, con PDF, versión ATS y perfiles de candidatura.'
    : 'A complete record of AI products, production engineering, agent systems, open source, research and teaching, with PDF, ATS and focused application profiles.';
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
              {spanish ? 'Ingeniero fundador de IA que construye sistemas agénticos, RAG y productos en producción.' : 'Founding AI engineer building agentic AI, RAG and production systems.'}
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
                <h3 className="cv-serif mt-3 text-3xl font-normal text-slate-950">{spanish ? 'Programa oficial de 16 cursos · 20 credenciales IBM archivadas.' : 'Official 16-course programme · 20 archived IBM course credentials.'}</h3>
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
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Registro de programas completados' : 'Completed programme register'}</p>
                <h3 className="cv-serif mt-3 text-3xl font-normal text-slate-950">{spanish ? '17 programas completados · 114 credenciales.' : '17 completed programmes · 114 credentials.'}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{spanish ? 'Los 17 títulos principales se muestran aquí con su diploma. El PDF completo y la versión ATS conservan el registro íntegro de 114 IDs de credencial.' : 'All 17 programme awards are shown here with their diploma. The complete PDF and ATS edition retain the full ledger of 114 credential IDs.'}</p>
              </div>
              <span className="font-mono text-sm font-bold text-slate-500">17 / 114</span>
            </div>
            <ol className="grid border-t border-slate-300 md:grid-cols-2 md:gap-x-10">
              {featuredCredentials.map((credential) => (
                <li key={credential.id} className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-300 py-4">
                  <span className="font-mono text-xs font-bold text-slate-500">{credential.rank}</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-snug text-slate-950">{credential.title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{credential.issuer} · <span className="font-mono">{credential.id}</span></p>
                  </div>
                  <a href={credential.url} target="_blank" rel="noopener noreferrer" aria-label={`${spanish ? 'Ver credencial' : 'View credential'}: ${credential.title}`} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-slate-400 text-slate-800 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white">
                    <i className="fas fa-arrow-up-right-from-square text-xs" />
                  </a>
                </li>
              ))}
            </ol>
            <div className="grid gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Credenciales independientes' : 'Standalone credentials'}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{spanish ? 'Formación adicional verificada fuera de los 17 programas.' : 'Additional verified learning outside the 17 programmes.'}</p>
              </div>
              <ol className="border-t border-slate-300">
                {standaloneCredentials.map(([title, issuer, id]) => (
                  <li key={id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-300 py-4">
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold leading-snug text-slate-950">{title}</h4>
                      <p className="mt-1 text-xs text-slate-500">{issuer} · <span className="font-mono">{id}</span></p>
                    </div>
                    <a href={`https://www.coursera.org/account/accomplishments/records/${id}`} target="_blank" rel="noopener noreferrer" aria-label={`${spanish ? 'Ver credencial' : 'View credential'}: ${title}`} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-slate-400 text-slate-800 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white">
                      <i className="fas fa-arrow-up-right-from-square text-xs" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid gap-4 border-t border-slate-300 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'Certificaciones anteriores' : 'Earlier certifications'}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{spanish ? 'Dos certificaciones históricas de LinkedIn sin ID público de credencial.' : 'Two historical LinkedIn certifications without a public credential ID.'}</p>
              </div>
              <div>
                <ol className="border-t border-slate-300">
                  {legacyCertifications.map(([title, detail]) => (
                    <li key={`${title}-${detail}`} className="border-b border-slate-300 py-4">
                      <h4 className="text-sm font-semibold leading-snug text-slate-950">{title}</h4>
                      <p className="mt-1 text-xs text-slate-500">{detail}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 flex flex-wrap gap-5 text-sm font-bold">
                  <a href={pdf} target="_blank" rel="noopener noreferrer" data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 border-b border-slate-500 text-slate-800 hover:border-slate-950 hover:text-slate-950">{spanish ? 'Abrir CV completo' : 'Open complete CV'}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
                  <a href={ats} target="_blank" rel="noopener noreferrer" data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 border-b border-slate-500 text-slate-800 hover:border-slate-950 hover:text-slate-950">{spanish ? 'Abrir versión ATS' : 'Open ATS edition'}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-400 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(15rem,.55fr)_minmax(0,1.45fr)] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{spanish ? 'CV de candidatura' : 'Application resumes'}</p>
              <h2 className="cv-serif mt-4 text-4xl font-normal leading-tight tracking-[-0.025em] text-slate-950">{spanish ? 'Elige el perfil que mejor encaja con la oportunidad.' : 'Choose the profile that best matches the opportunity.'}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-slate-700">{spanish ? 'Cada edición presenta la experiencia, los proyectos y las credenciales más relevantes para su especialidad. El CV maestro ofrece la trayectoria y el portfolio completos.' : 'Each edition presents the experience, projects and credentials most relevant to its specialty. The master CV provides the complete career and portfolio record.'}</p>
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
                    <a href={`/cv/variants/Sami_Halawa_CV_${roleEditionFile(item)}.pdf`} download data-analytics-event="cv_download" className="inline-flex min-h-11 items-center border-b border-slate-500 text-slate-800 hover:border-slate-950 hover:text-slate-950">PDF ↓</a>
                    <a href={`/cv/variants/Sami_Halawa_CV_${roleEditionFile(item)}_ATS.txt`} download data-analytics-event="cv_download" className="inline-flex min-h-11 items-center border-b border-slate-500 text-slate-800 hover:border-slate-950 hover:text-slate-950">ATS ↓</a>
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
            <p className="mt-5 leading-relaxed text-slate-700">{spanish ? 'Mis 114 credenciales profesionales abarcan ingeniería de IA generativa y machine learning de IBM y Microsoft; IA aplicada de Google; IA sanitaria de Stanford University; estrategia y gobernanza de IA de Saïd Business School, University of Oxford; ingeniería de IA agéntica; MLOps; Databricks Mosaic AI; automatización con n8n; ISO 42001; métodos cuantitativos y chino comercial.' : 'My 114 professional credentials span IBM and Microsoft generative-AI engineering and machine learning; applied AI from Google; healthcare AI from Stanford University; AI strategy and governance from Saïd Business School, University of Oxford; agentic AI engineering; MLOps; Databricks Mosaic AI; n8n automation; ISO 42001; quantitative methods and business Chinese.'}</p>
          </aside>
          <figure>
            <div className="border border-slate-400 bg-white p-2 shadow-[0_28px_70px_-42px_rgba(15,23,42,.55)] sm:p-4">
              <img src={preview} alt={spanish ? 'Primera página del CV completo' : 'First page of the complete CV'} className="block w-full bg-white" />
            </div>
            <figcaption className="mt-4 flex flex-col items-start justify-between gap-3 border-t border-slate-400 pt-4 text-sm text-slate-600 sm:flex-row sm:items-center">
              <span>{spanish ? 'Vista previa de la página 1 de 10.' : 'Preview of page 1 of 10.'}</span>
              <a href={pdf} target="_blank" rel="noopener noreferrer" data-analytics-event="cv_download" className="inline-flex min-h-11 items-center gap-2 border-b border-slate-500 font-bold text-slate-800 hover:border-slate-950 hover:text-slate-950">{spanish ? 'Abrir las diez páginas' : 'Open all ten pages'}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
            </figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default CVPage;
