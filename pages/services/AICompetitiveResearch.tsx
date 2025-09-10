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

const AICompetitiveResearch: React.FC = () => {
  const title = 'AI Research & Competitive Intelligence — Reverse Engineering & Blueprints';
  const description = 'Deep product analysis: behavior, data models, APIs and sequencing. Deliver replication blueprints and risk/effort estimates.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: title, serviceType: 'Product Research', provider: { '@type': 'Person', name: 'Sami Halawa' } };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <link rel="canonical" href="/services/ai-competitive-research" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">We unpack successful products so you can ship alternatives: sequence mechanics, event models, APIs, nudges, and metrics.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="What’s inside" points={[ 'UX and system behavior maps', 'Events, triggers and data models', 'API specs and examples', 'Risks, cost and timeline' ]} />
          <Section title="Deliverables" points={[ 'Blueprint doc and diagrams', 'MVP scope and milestones', 'Competitive matrix and GTM notes', 'Engineering checklist' ]} />
        </div>
        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Request research</Link>
          <Link to="/case-studies/attio-sequences" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See Attio case</Link>
        </div>
      </div>
    </section>
  );
};

export default AICompetitiveResearch;

