import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../../i18n/LanguageContext';
import ServiceDetail from './ServiceDetail';

const Section: React.FC<{ title: string, points: string[] }>=({ title, points })=> (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

type Copy = {
  title: string;
  intro: string;
  fixesTitle: string;
  fixes: string[];
  processTitle: string;
  process: string[];
  primaryCta: string;
};

// The English route previously rendered Spanish body copy. Each locale now gets
// its own text; fr and zh fall back to English until they are authored.
const copy: Partial<Record<LanguageCode, Copy>> & { en: Copy } = {
  en: {
    title: 'AI & Automation Troubleshooting: rescuing ML projects and repairing broken workflows',
    intro: 'Project stuck? Automation misbehaving? I run a fast audit, find where it actually breaks, and leave it working with the monitoring needed to see the next failure coming.',
    fixesTitle: 'What I fix',
    fixes: [
      'Broken automations (Zapier / Make / n8n)',
      'Bugs and performance problems in LangChain and RAG pipelines',
      'Token overruns, LLM cost spikes and latency',
      'CRM and API integrations, including permissions and auth',
    ],
    processTitle: 'Express process',
    process: [
      'Day 1: audit and diagnosis, with a written plan',
      'Days 2–3: fixes and testing against real data',
      'Day 4 onwards: hardening, observability and handover',
      'Documentation and a maintenance checklist',
    ],
    primaryCta: 'Request help',
  },
  es: {
    title: 'Soporte y Troubleshooting: rescate de proyectos ML y arreglos de automatización',
    intro: '¿Proyecto atascado? ¿Automatización inestable? Hago una auditoría rápida, localizo dónde falla de verdad y lo dejo funcionando con la monitorización necesaria para ver venir el siguiente fallo.',
    fixesTitle: 'Qué soluciono',
    fixes: [
      'Automatizaciones rotas (Zapier/Make/n8n)',
      'Bugs y rendimiento en cadenas LangChain/RAG',
      'Desbordes de tokens, costes y latencias LLM',
      'Integración con CRMs/APIs y permisos',
    ],
    processTitle: 'Proceso express',
    process: [
      'Día 1: Auditoría y diagnóstico con plan claro',
      'Día 2-3: Correcciones y pruebas con datos reales',
      'Día 4+: Endurecimiento, observabilidad y handoff',
      'Documentación y checklists de mantenimiento',
    ],
    primaryCta: 'Solicitar ayuda',
  },
};

const Troubleshooting: React.FC = () => {
  const { language } = useTranslation();
  const c = copy[language] || copy.en;
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{c.title}</h1>
        <p className="text-lg text-slate-700 mb-8">{c.intro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={c.fixesTitle} points={c.fixes} />
          <Section title={c.processTitle} points={c.process} />
        </div>
        <ServiceDetail slug="troubleshooting" />
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{c.primaryCta}</Link>
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;
