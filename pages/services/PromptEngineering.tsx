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

const PromptEngineering: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.promptEngineering.title');
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Design robust prompts, tool-calling and evaluation. Learn prompt patterns, chain-of-thought alternatives, and safety strategies that scale.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Curriculum" points={[
            'System prompts, roles, memory and tool calling',
            'Hallucination control and constrained decoding',
            'Prompt evals: golden sets, rubrics, metrics',
            'Cost, latency and reliability dashboards'
          ]} />
          <Section title="Outcomes" points={[
            'Reusable prompt library and templates',
            'Automated evals integrated in CI/CD',
            'Guardrails for safety and privacy',
            'Playbooks for future features'
          ]} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Request syllabus</Link>
          <Link to="/blog" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">Read related posts</Link>
        </div>
      </div>
    </section>
  );
};

export default PromptEngineering;
