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
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Reserva sesión</Link>
  </div>
);

const FamilyAI: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.familyAI.title');
  const description = t('services.familyAI.description');
  const ogImage = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&h=630&q=80';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Programa de IA para familias',
    areaServed: 'Madrid, Online',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'Family AI Education'
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Edades recomendadas?', acceptedAnswer: { '@type': 'Answer', text: 'Programas por tramos: 10–13, 14–17 y adultos.' }},
      { '@type': 'Question', name: '¿Es seguro?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Contenidos adecuados y control parental con buenas prácticas.' }},
      { '@type': 'Question', name: '¿Modalidad?', acceptedAnswer: { '@type': 'Answer', text: 'Online o presencial en Madrid. Sesiones individuales o familiares.' }}
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
        <link rel="canonical" href="/services/family-ai" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Cada edad, su programa: creatividad con IA para niños, estudio eficiente para adolescentes y productividad para padres.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Section title="Niños (10-13)" points={[
            'Juegos y cuentos con IA',
            'Chatbots divertidos y seguros',
            'Programación visual tipo Scratch'
          ]} />
          <Section title="Adolescentes (14-17)" points={[
            'ChatGPT para estudiar más rápido',
            'Contenido creativo para redes',
            'Primer portfolio digital'
          ]} />
          <Section title="Padres" points={[
            'IA para el trabajo y la casa',
            'Automatización básica sin código',
            'Control parental e internet seguro'
          ]} />
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default FamilyAI;
