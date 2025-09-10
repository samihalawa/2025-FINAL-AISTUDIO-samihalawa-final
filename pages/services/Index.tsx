import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const cards = [
  { href: '/services/medical-ai', title: 'IA Médica', desc: 'Informes automáticos, triaje y diagnóstico asistido con IA clínica.' },
  { href: '/services/business-automation', title: 'Automatización con IA', desc: 'Flujos 24/7 con ChatGPT, Zapier y Make. Sin programar.' },
  { href: '/services/university-ml', title: 'Universidad: Python/ML', desc: 'Apoyo en asignaturas de IA, Python y TFG/TFM.' },
  { href: '/services/family-ai', title: 'IA para Familias', desc: 'Programas para niños, adolescentes y padres.' },
  { href: '/services/advanced-ai', title: 'Proyectos Avanzados', desc: 'LangChain, AutoGPT, agentes MCP y despliegue cloud.' },
  { href: '/services/no-code-ai', title: 'Creador No-Code', desc: 'Contenido y marketing con Midjourney, Runway, ChatGPT.' },
  { href: '/services/prompt-engineering', title: 'Prompt Engineering', desc: 'Buenas prácticas LLM: prompts, herramientas, evaluación y costes.' },
  { href: '/services/rag-langchain', title: 'RAG & LangChain', desc: 'Búsqueda con embeddings, chunking y evaluaciones de producción.' },
  { href: '/services/agents-automation', title: 'Agentes y Automatización', desc: 'Bootcamp para ventas/ops con Zapier/Make/n8n y LLMs.' },
  { href: '/services/ai-for-marketing', title: 'IA para Marketing', desc: 'Sistemas de contenido, SEO, creatividades de anuncios y analítica.' },
  { href: '/services/ai-readiness-audit', title: 'Auditoría AI Readiness', desc: 'Evals, seguridad, observabilidad y costes con plan de acción.' },
  { href: '/services/ai-competitive-research', title: 'Investigación Competitiva', desc: 'Reverse engineering y blueprints para productos de éxito.' },
  { href: '/services/ai-funding-grants', title: 'Financiación y Subvenciones', desc: 'Mapeo de oportunidades y redacción de propuestas para IA.' },
  { href: '/services/ai-ip-patents', title: 'Patentes e IP', desc: 'Estrategia de patentes, claims y materiales para abogado.' },
  { href: '/services/accelerator-readiness', title: 'Aceleradoras & Pitch', desc: 'Deck, demo y narrativa para selección e inversión.' },
  { href: '/services/data-science-training', title: 'Formación Data Science', desc: 'Estadística y ML con Python, evaluación y proyectos.' },
  { href: '/services/proptech-analytics', title: 'PropTech Analytics', desc: 'Pipelines inmobiliarios, valoración y dashboards.' },
  { href: '/services/airbnb-analytics', title: 'Airbnb Intelligence', desc: 'Pricing y ocupación con benchmarking y alertas.' },
  { href: '/services/ai-language-learning', title: 'Idiomas con IA', desc: 'Plan personalizado con SRS, conversación y progreso.' },
];

const ServicesIndex: React.FC = () => {
  return (
    <section className="py-8">
      <Helmet>
        <title>Servicios de IA | Sami Halawa</title>
        <meta name="description" content="Explora todos mis servicios: IA médica, automatización sin código, universidad (Python/ML), familias, proyectos avanzados y creación no-code." />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Servicios de Inteligencia Artificial</h1>
      <p className="text-slate-700 mb-8 max-w-3xl">Formación y desarrollo práctico para principiantes, empresas, médicos, universitarios y creadores. Elige tu camino y empezamos hoy.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <Link key={card.href} to={card.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h2>
            <p className="text-slate-700">{card.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesIndex;
