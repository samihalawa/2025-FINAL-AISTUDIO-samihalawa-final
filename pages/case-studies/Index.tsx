import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const cases = [
  { href: '/case-studies/radiology-ai', title: 'RadiologyAI — Clinical Reporting & Triage', desc: 'Reduced report time by 70% with clinical ChatGPT and imaging support.' },
  { href: '/case-studies/autoclient', title: 'AutoClient — Outreach & CRM Automation', desc: 'Automated prospecting, outreach and CRM sync with an AI agent.' },
  { href: '/case-studies/attio-sequences', title: 'Attio Sequences — Reverse Engineering', desc: 'Deep-dive analysis and replication roadmap for a sequencing platform.' },
  { href: '/case-studies/banking-assistant', title: 'Banking Assistant — Self‑Service & Personalization', desc: 'Conversational banking to increase self‑service and NPS.' },
  { href: '/case-studies/spreadsheet-assistant', title: 'AI Spreadsheet Assistant — NL to Formulas', desc: 'Natural language transforms with evals and anomaly flags.' },
  { href: '/case-studies/proptech-analytics', title: 'PropTech Analytics — Pipelines & Valuation', desc: 'Data pipelines, valuation models and dashboards.' },
  { href: '/case-studies/airbnb-intelligence', title: 'Airbnb Intelligence — Pricing & Occupancy', desc: 'Market intelligence and dashboards for STR portfolios.' },
];

const CaseStudiesIndex: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>AI Case Studies | Sami Halawa</title>
        <meta name="description" content="Selected AI case studies across healthcare, sales automation and product research with measurable impact and deliverables." />
        <link rel="canonical" href="/case-studies" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Case Studies</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map(c => (
            <Link key={c.href} to={c.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{c.title}</h2>
              <p className="text-slate-700">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesIndex;
