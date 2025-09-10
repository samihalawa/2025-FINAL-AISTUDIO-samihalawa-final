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
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Plan de estudio</Link>
    <a href="/blog" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">Leer artículos</a>
  </div>
);

const UniversityML: React.FC = () => {
  const title = 'Universidad: Python y Machine Learning, apoyo TFG/TFM y estadística aplicada';
  const description = 'Clases prácticas de IA/ML para universitarios: Python, Scikit-learn, TensorFlow, redes neuronales y apoyo integral para TFG/TFM.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Clases de Machine Learning para universitarios',
    areaServed: 'Madrid, Online',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'University ML Tutoring',
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' }
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <link rel="canonical" href="/services/university-ml" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Desde cero hasta avanzado. Ejercicios reales de tu asignatura, explicación por pasos y materiales listos para examen.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Temario práctico" points={[
            'Python científico: NumPy, Pandas, Matplotlib',
            'Modelos ML: árboles, KNN, regresión, métricas',
            'Deep Learning: CNN, RNN/LSTM, transfer learning',
            'Estadística aplicada, PCA, clustering, series temporales'
          ]} />
          <Section title="TFG/TFM completo" points={[
            'Elección de tema y estado del arte',
            'Implementación reproducible y clara',
            'Experimentos y resultados en informe',
            'Presentación que impresiona al tribunal'
          ]} />
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default UniversityML;

