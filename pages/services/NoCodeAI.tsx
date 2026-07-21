import React from 'react';
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
  return (
    <section className="py-16 bg-white">
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
