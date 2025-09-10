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

const AIPatentsIP: React.FC = () => {
  const title = 'AI IP & Patents — Strategy, Drafting & Readiness';
  const description = 'Hands-on support for AI IP: prior art scan, claims strategy, drafting assistance and technical diagrams for filings.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: title, serviceType: 'AI IP Consulting', provider: { '@type': 'Person', name: 'Sami Halawa' } };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What do you cover?', acceptedAnswer: { '@type': 'Answer', text: 'Problem framing, novelty, claims, diagrams and implementation notes.' }},
    { '@type': 'Question', name: 'Deliverables?', acceptedAnswer: { '@type': 'Answer', text: 'Draft application materials and figures to hand off to your attorney.' }},
    { '@type': 'Question', name: 'Industries?', acceptedAnswer: { '@type': 'Answer', text: 'Healthcare, automation, agents and applied ML.' }} ] };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
        <link rel="canonical" href="/services/ai-ip-patents" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Align IP with product. We map prior art, shape claims, and assemble technical materials your counsel can file quickly.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Scope" points={[ 'Prior art and differentiation', 'Claim strategy and drafting support', 'System diagrams and flows', 'Evidence and evaluation notes' ]} />
          <Section title="Outcomes" points={[ 'Draft package for counsel', 'Review and iteration cycles', 'Filing readiness checklist', 'Roadmap for continuations' ]} />
        </div>
        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Discuss your IP</Link>
          <Link to="/case-studies/radiology-ai" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See RadiologyAI</Link>
        </div>
      </div>
    </section>
  );
};

export default AIPatentsIP;

