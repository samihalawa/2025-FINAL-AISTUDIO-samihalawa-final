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

const AILanguageLearning: React.FC = () => {
  const title = 'AI for Language Learning — Curriculum, Tools & Practice';
  const description = 'Design a personalized language learning stack: spaced repetition, pronunciation aids, and AI conversation partners with safe prompts.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: title, serviceType: 'Language Learning with AI', provider: { '@type': 'Person', name: 'Sami Halawa' } };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <link rel="canonical" href="/services/ai-language-learning" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">From HSK planning to daily conversation: use AI to accelerate vocabulary, listening, and speaking with a safe, structured system.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="System" points={[ 'Spaced repetition pipeline', 'Pronunciation and tone drills', 'AI conversation partners', 'Reading/listening loops' ]} />
          <Section title="Deliverables" points={[ 'Personalized plan and tools', 'Daily/weekly routines', 'Prompt and safety guidelines', 'Progress tracking templates' ]} />
        </div>
        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Build your plan</Link>
          <Link to="/services/family-ai" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See family programs</Link>
        </div>
      </div>
    </section>
  );
};

export default AILanguageLearning;

