import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';

const Section: React.FC<{ title: string, points: string[] }>=({ title, points })=> (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

const CTA: React.FC=()=> (
  <div className="mt-10 flex flex-col sm:flex-row gap-4">
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Solicitar propuesta</Link>
    <Link to="/projects" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">Ver proyectos</Link>
  </div>
);

const AdvancedAI: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.advancedAI.title');
  const description = t('services.advancedAI.description');
  const ogImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desarrollo de proyectos de IA avanzados',
    areaServed: 'Madrid, Online',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'Advanced AI Development'
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Qué stack usas?', acceptedAnswer: { '@type': 'Answer', text: 'Python/TypeScript, LangChain/LlamaIndex, FastAPI/Node, Docker/K8s, Pinecone/Qdrant, AWS/GCP/Azure.' }},
      { '@type': 'Question', name: '¿Tiempo de entrega?', acceptedAnswer: { '@type': 'Answer', text: 'MVP en 2–4 semanas con sprints semanales y hitos claros.' }},
      { '@type': 'Question', name: '¿Cómo garantizas calidad?', acceptedAnswer: { '@type': 'Answer', text: 'Evals automáticos, trazas, monitoreo, límites de coste y seguridad de datos.' }}
    ]
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <link rel="canonical" href="/services/advanced-ai" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Para founders, equipos técnicos y empresas que necesitan soluciones IA robustas y escalables, con código y despliegue en producción.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Qué construiremos" points={[
            'Agentes autónomos con MCP que usan múltiples herramientas',
            'Sistemas RAG con bases vectoriales (Pinecone, Weaviate, Qdrant)',
            'Chains y tools con LangChain y LlamaIndex',
            'AutoGPT y arquitecturas recursivas de mejora continua'
          ]} />
          <Section title="Stack y entrega" points={[
            'Python/TypeScript, FastAPI/Node, Docker/Kubernetes',
            'Cloud: AWS/GCP/Azure • Observabilidad y seguridad',
            'APIs REST/GraphQL, streaming y websockets',
            'CI/CD y documentación completa'
          ]} />
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default AdvancedAI;
