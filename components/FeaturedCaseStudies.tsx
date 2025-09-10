import React from 'react';

const items = [
  { href: '/case-studies/autoclient', title: 'AutoClient — Outreach & CRM Automation', desc: 'AI agent for prospecting, outreach, sentiment and CRM sync.' },
  { href: '/case-studies/radiology-ai', title: 'RadiologyAI — Clinical Reporting & Triage', desc: 'Clinical prompting, reporting automation and IP readiness.' },
  { href: '/case-studies/banking-assistant', title: 'Banking Assistant — Self‑Service & Personalization', desc: 'Secure, compliant assistant with measurable KPI uplift.' },
];

const FeaturedCaseStudies: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" aria-label="Featured Case Studies">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900">Featured Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <a key={item.href} href={item.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-700">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;

