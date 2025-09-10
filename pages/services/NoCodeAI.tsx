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
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Empezar ahora</Link>
  </div>
);

const NoCodeAI: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.noCodeAI.title');
  const description = t('services.noCodeAI.description');
  const ogImage = 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&h=630&q=80';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Creación sin código con IA',
    areaServed: 'Madrid, Online',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'No-code AI Creation'
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Necesito saber programar?', acceptedAnswer: { '@type': 'Answer', text: 'No. Todo se hace con herramientas visuales y plantillas.' }},
      { '@type': 'Question', name: '¿Qué herramientas usaremos?', acceptedAnswer: { '@type': 'Answer', text: 'Midjourney, Runway, ChatGPT/Claude, Zapier/Make para automatizar.' }},
      { '@type': 'Question', name: '¿Qué me llevo?', acceptedAnswer: { '@type': 'Answer', text: 'Sistema de contenidos, plantillas y un calendario editorial de 90 días.' }}
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
        <link rel="canonical" href="/services/no-code-ai" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Diseño, vídeo y copywriting con IA. Prompts simples, flujos reutilizables y publicación automatizada.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Herramientas" points={[
            'Imágenes: Midjourney, DALL·E, Stable Diffusion',
            'Vídeo: Runway, Pika, edición con IA',
            'Texto: ChatGPT/Claude para copy y SEO',
            'Audio: ElevenLabs, Suno'
          ]} />
          <Section title="Qué te llevas" points={[
            'Sistema para crear 10 piezas en 1 hora',
            'Plantillas y prompts listos para usar',
            'Automatización de publicaciones',
            'Estrategia para crecer y monetizar'
          ]} />
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default NoCodeAI;
