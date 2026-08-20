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
  kidsTitle: string;
  kids: string[];
  teensTitle: string;
  teens: string[];
  parentsTitle: string;
  parents: string[];
  primaryCta: string;
};

// The English route previously rendered Spanish body copy. Each locale now gets
// its own text; fr and zh fall back to English until they are authored.
const copy: Partial<Record<LanguageCode, Copy>> & { en: Copy } = {
  en: {
    intro: 'A different programme for each age: creative AI for children, efficient study technique for teenagers, and practical productivity for parents.',
    kidsTitle: 'Children (10–13)',
    kids: [
      'Games and storytelling with AI',
      'Fun, safely bounded chatbots',
      'Visual programming in the style of Scratch',
    ],
    teensTitle: 'Teenagers (14–17)',
    teens: [
      'Using AI assistants to study faster without outsourcing the thinking',
      'Creative content for social platforms',
      'A first digital portfolio',
    ],
    parentsTitle: 'Parents',
    parents: [
      'AI for work and for running a household',
      'Basic no-code automation',
      'Parental controls and safer internet habits',
    ],
    primaryCta: 'Book a session',
  },
  es: {
    intro: 'Cada edad, su programa: creatividad con IA para niños, estudio eficiente para adolescentes y productividad para padres.',
    kidsTitle: 'Niños (10-13)',
    kids: [
      'Juegos y cuentos con IA',
      'Chatbots divertidos y seguros',
      'Programación visual tipo Scratch',
    ],
    teensTitle: 'Adolescentes (14-17)',
    teens: [
      'Asistentes de IA para estudiar más rápido sin delegar el pensamiento',
      'Contenido creativo para redes',
      'Primer portfolio digital',
    ],
    parentsTitle: 'Padres',
    parents: [
      'IA para el trabajo y la casa',
      'Automatización básica sin código',
      'Control parental e internet seguro',
    ],
    primaryCta: 'Reserva sesión',
  },
};

const FamilyAI: React.FC = () => {
  const { t, language } = useTranslation();
  const title = t('services.familyAI.title');
  const c = copy[language] || copy.en;
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{c.intro}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Section title={c.kidsTitle} points={c.kids} />
          <Section title={c.teensTitle} points={c.teens} />
          <Section title={c.parentsTitle} points={c.parents} />
        </div>
        <ServiceDetail slug="family-ai" />
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{c.primaryCta}</Link>
        </div>
      </div>
    </section>
  );
};

export default FamilyAI;
