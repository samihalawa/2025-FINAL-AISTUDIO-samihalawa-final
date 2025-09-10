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

const AgentsAutomation: React.FC = () => {
  const title = 'AI Agents & Automation Bootcamp — From Idea to Ops';
  const description = 'Design agent workflows, scheduling and guardrails. Build sales/ops automation with Zapier/Make/n8n and LLM tool-calling.';
  const jsonLdCourse = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI Agents & Automation Bootcamp',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    description,
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do I need to code?', acceptedAnswer: { '@type': 'Answer', text: 'No. We cover no-code tools and optional code paths.' }},
      { '@type': 'Question', name: 'What use cases?', acceptedAnswer: { '@type': 'Answer', text: 'Lead gen, outreach, CRM sync, reporting, and tier-1 support.' }},
      { '@type': 'Question', name: 'How do we keep it safe?', acceptedAnswer: { '@type': 'Answer', text: 'Scopes, approvals, budget caps, and robust error handling.' }}
    ]
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLdCourse)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <link rel="canonical" href="/services/agents-automation" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Ship reliable automations for marketing, sales and ops. With or without code — documented and observable.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Bootcamp" points={[
            'Agent patterns: planner, worker, reviewer',
            'Human-in-the-loop approvals and SLAs',
            'Zapier/Make/n8n for orchestration',
            'Observability, retries and budgets'
          ]} />
          <Section title="Business impact" points={[
            'Reduce manual work 50–80%',
            'Improve speed and data quality',
            'Track ROI with dashboards',
            'Documented runbooks for ops'
          ]} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Get a proposal</Link>
          <Link to="/services/business-automation" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See automation service</Link>
        </div>
      </div>
    </section>
  );
};

export default AgentsAutomation;

