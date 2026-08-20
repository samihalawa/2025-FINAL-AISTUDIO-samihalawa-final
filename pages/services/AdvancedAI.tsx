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
  intro: string;
  buildTitle: string;
  build: string[];
  stackTitle: string;
  stack: string[];
  primaryCta: string;
  secondaryCta: string;
};

// The English route previously rendered Spanish body copy. Each locale now gets
// its own text; fr and zh fall back to English until they are authored.
const copy: Partial<Record<LanguageCode, Copy>> & { en: Copy } = {
  en: {
    intro: 'For founders, technical teams and companies that need AI systems robust enough to run in production — with code, deployment and the operational surfaces that keep them running.',
    buildTitle: 'What we build',
    build: [
      'Autonomous agents over MCP that coordinate multiple tools',
      'RAG systems on vector stores (Pinecone, Weaviate, Qdrant)',
      'Chains and tools with LangChain and LlamaIndex',
      'Autonomous multi-agent systems with evaluation loops',
    ],
    stackTitle: 'Stack and delivery',
    stack: [
      'Python/TypeScript, FastAPI/Node, Docker/Kubernetes',
      'Cloud: AWS/GCP/Azure • observability and security',
      'REST/GraphQL APIs, streaming and websockets',
      'CI/CD and complete documentation',
    ],
    primaryCta: 'Request a proposal',
    secondaryCta: 'View projects',
  },
  es: {
    intro: 'Para founders, equipos técnicos y empresas que necesitan soluciones IA robustas y escalables, con código y despliegue en producción.',
    buildTitle: 'Qué construiremos',
    build: [
      'Agentes autónomos con MCP que usan múltiples herramientas',
      'Sistemas RAG con bases vectoriales (Pinecone, Weaviate, Qdrant)',
      'Chains y tools con LangChain y LlamaIndex',
      'Sistemas multiagente autónomos con bucles de evaluación',
    ],
    stackTitle: 'Stack y entrega',
    stack: [
      'Python/TypeScript, FastAPI/Node, Docker/Kubernetes',
      'Cloud: AWS/GCP/Azure • Observabilidad y seguridad',
      'APIs REST/GraphQL, streaming y websockets',
      'CI/CD y documentación completa',
    ],
    primaryCta: 'Solicitar propuesta',
    secondaryCta: 'Ver proyectos',
  },
};

const AdvancedAI: React.FC = () => {
  const { t, language } = useTranslation();
  const title = t('services.advancedAI.title');
  const c = copy[language] || copy.en;
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{c.intro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={c.buildTitle} points={c.build} />
          <Section title={c.stackTitle} points={c.stack} />
        </div>
        <ServiceDetail slug="advanced-ai" />
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{c.primaryCta}</Link>
          <a href="/projects" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{c.secondaryCta}</a>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAI;
