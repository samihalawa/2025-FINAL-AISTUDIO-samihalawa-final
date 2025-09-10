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

const AIFundingGrants: React.FC = () => {
  const title = 'AI Funding & Grants — Non‑Dilutive Financing for AI Projects';
  const description = 'Strategic support to identify and win grants for AI in healthcare and B2B. From scouting to application writing and budget planning.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'Funding & Grants Consulting',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    areaServed: 'Spain, EU, Online'
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which programs?', acceptedAnswer: { '@type': 'Answer', text: 'National and EU calls for AI, health tech, and innovation; non‑repayable options prioritized.' }},
      { '@type': 'Question', name: 'What do you deliver?', acceptedAnswer: { '@type': 'Answer', text: 'Eligibility screening, timelines, narrative writing, budget planning, and submission checklist.' }},
      { '@type': 'Question', name: 'Timeline?', acceptedAnswer: { '@type': 'Answer', text: 'Most applications can be prepared within 2–4 weeks once materials are gathered.' }}
    ]
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
        <link rel="canonical" href="/services/ai-funding-grants" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">We turn funding opportunities into wins: research, narrative drafting, budget modeling, and submission support. Specialized in AI and health tech.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Scope" points={[
            'Opportunity scouting and eligibility check',
            'Narrative writing and supporting docs',
            'Budget and milestones planning',
            'Submission and follow‑up'
          ]} />
          <Section title="Outcomes" points={[
            'Grant shortlist with timelines',
            'Complete application drafts',
            'Budget spreadsheet and Gantt',
            'Checklist and templates'
          ]} />
        </div>
        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Request funding scan</Link>
          <Link to="/case-studies/radiology-ai" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See healthcare case</Link>
        </div>
      </div>
    </section>
  );
};

export default AIFundingGrants;

