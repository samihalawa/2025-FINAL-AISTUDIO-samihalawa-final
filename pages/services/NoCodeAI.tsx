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
  toolsTitle: string;
  tools: string[];
  outcomesTitle: string;
  outcomes: string[];
  primaryCta: string;
};

// The English route previously rendered Spanish body copy. Each locale now gets
// its own text; fr and zh fall back to English until they are authored.
const copy: Partial<Record<LanguageCode, Copy>> & { en: Copy } = {
  en: {
    intro: 'Design, video and copywriting with AI. Simple prompts, reusable workflows and automated publishing — with a review step before anything goes out.',
    toolsTitle: 'Tools',
    tools: [
      'Images: Midjourney, DALL·E, Stable Diffusion',
      'Video: Runway, Pika, AI-assisted editing',
      'Text: ChatGPT/Claude for copy and SEO',
      'Audio: ElevenLabs, Suno',
    ],
    outcomesTitle: 'What you take away',
    outcomes: [
      'A repeatable system for producing a batch of pieces in one working session',
      'Templates and prompts ready to use',
      'Publishing automation across your existing channels',
      'A plan for growing and monetising the output',
    ],
    primaryCta: 'Get started',
  },
  es: {
    intro: 'Diseño, vídeo y copywriting con IA. Prompts simples, flujos reutilizables y publicación automatizada, con un paso de revisión antes de publicar.',
    toolsTitle: 'Herramientas',
    tools: [
      'Imágenes: Midjourney, DALL·E, Stable Diffusion',
      'Vídeo: Runway, Pika, edición con IA',
      'Texto: ChatGPT/Claude para copy y SEO',
      'Audio: ElevenLabs, Suno',
    ],
    outcomesTitle: 'Qué te llevas',
    outcomes: [
      'Un sistema repetible para producir un lote de piezas en una sesión de trabajo',
      'Plantillas y prompts listos para usar',
      'Automatización de publicaciones en tus canales actuales',
      'Un plan para crecer y monetizar lo publicado',
    ],
    primaryCta: 'Empezar ahora',
  },
};

const NoCodeAI: React.FC = () => {
  const { t, language } = useTranslation();
  const title = t('services.noCodeAI.title');
  const c = copy[language] || copy.en;
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{c.intro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={c.toolsTitle} points={c.tools} />
          <Section title={c.outcomesTitle} points={c.outcomes} />
        </div>
        <ServiceDetail slug="no-code-ai" />
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{c.primaryCta}</Link>
        </div>
      </div>
    </section>
  );
};

export default NoCodeAI;
