import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Solicitar ayuda</Link>
  </div>
);

const Troubleshooting: React.FC = () => {
  const title = 'Soporte y Troubleshooting: rescate de proyectos ML y arreglos de automatización';
  const description = 'Auditoría, diagnóstico y solución de incidencias en proyectos de IA y automatización. Debug urgente, estabilidad y buenas prácticas.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Soporte y Troubleshooting IA',
    areaServed: 'Madrid, Online',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'AI Troubleshooting'
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Qué tipo de incidencias?', acceptedAnswer: { '@type': 'Answer', text: 'Fallos de automatización, errores en chains/RAG, permisos API, costes/latencias.' }},
      { '@type': 'Question', name: '¿Tiempo de respuesta?', acceptedAnswer: { '@type': 'Answer', text: 'Diagnóstico en 24–48h, con plan de acción y estimación.' }},
      { '@type': 'Question', name: '¿Cómo se entrega?', acceptedAnswer: { '@type': 'Answer', text: 'Correcciones, checklist de hardening y documentación de mantenimiento.' }}
    ]
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <link rel="canonical" href="/services/troubleshooting" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">¿Proyecto atascado? ¿Automatización inestable? Hago auditoría rápida, localizo cuellos de botella y dejo todo funcionando con buenas prácticas.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Qué soluciono" points={[
            'Automatizaciones rotas (Zapier/Make/n8n)',
            'Bugs y rendimiento en cadenas LangChain/RAG',
            'Desbordes de tokens, costes y latencias LLM',
            'Integración con CRMs/APIs y permisos'
          ]} />
          <Section title="Proceso express" points={[
            'Día 1: Auditoría y diagnóstico con plan claro',
            'Día 2-3: Correcciones y pruebas con datos reales',
            'Día 4+: Endurecimiento, observabilidad y handoff',
            'Documentación y checklists de mantenimiento'
          ]} />
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default Troubleshooting;
