import React from 'react';
import { Helmet } from 'react-helmet-async';

const AutoClientCase: React.FC = () => {
  const title = 'Case Study: AutoClient — Outreach & CRM Automation';
  const description = 'Automated prospect list building, outreach sequences, sentiment tagging, and CRM sync; delivered dashboards and production readiness plan.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'Sales Automation, AI Agents, CRM',
    author: { '@type': 'Person', name: 'Sami Halawa' },
    description,
  };
  const og = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/autoclient" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">From audits to a working system: built prospecting agents, outreach sequences, CRM integration and reporting. Created production readiness, test plans and runbooks.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Agent-driven prospecting and outreach</li>
          <li>Sentiment tagging and qualification</li>
          <li>CRM sync and dashboards</li>
          <li>QA, test plans and hardening checklist</li>
        </ul>
      </div>
    </section>
  );
};

export default AutoClientCase;
