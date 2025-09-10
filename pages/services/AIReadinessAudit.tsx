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

const AIReadinessAudit: React.FC = () => {
  const title = 'Enterprise AI Readiness Audit — Evals, Safety & Cost Controls';
  const description = 'A structured audit of your AI stack: prompts, chains, evals, guardrails, observability and cost/performance budgets with a hardening plan.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: title, serviceType: 'AI Audit', provider: { '@type': 'Person', name: 'Sami Halawa' } };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What’s evaluated?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt design, tool-calling, eval datasets, metrics, safety guardrails, logs and dashboards.' }},
    { '@type': 'Question', name: 'Deliverables?', acceptedAnswer: { '@type': 'Answer', text: 'Scorecard, prioritized fixes, and an implementation roadmap with quick wins.' }},
    { '@type': 'Question', name: 'Timeline?', acceptedAnswer: { '@type': 'Answer', text: '1–2 weeks depending on scope and access.' }} ] };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
        <link rel="canonical" href="/services/ai-readiness-audit" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Get a clear picture of risks and opportunities. We measure quality, reliability and costs — and ship fixes fast.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Assessment" points={[ 'Prompt and tool design review', 'Evals and datasets inspection', 'Safety and privacy guardrails', 'Observability and budgets' ]} />
          <Section title="Plan" points={[ 'Scorecard and risk matrix', 'Quick wins and phased roadmap', 'Hardening and regression plan', 'Handoff docs and training' ]} />
        </div>
        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Book an audit</Link>
          <Link to="/services/troubleshooting" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See troubleshooting</Link>
        </div>
      </div>
    </section>
  );
};

export default AIReadinessAudit;

