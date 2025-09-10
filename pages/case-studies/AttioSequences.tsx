import React from 'react';
import { Helmet } from 'react-helmet-async';

const AttioSequences: React.FC = () => {
  const title = 'Case Study: Attio Sequences — Reverse Engineering & Replication Plan';
  const description = 'Analyzed Attio Sequences: event model, triggers, actions, and API design. Produced an open-source replication blueprint and migration plan.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'Product Research, Reverse Engineering, APIs',
    author: { '@type': 'Person', name: 'Sami Halawa' },
    description,
  };
  const og = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/attio-sequences" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">Reverse engineered core sequence mechanics, defined data models, triggers, and action catalogs. Outlined implementation risks and a step-by-step ship plan.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Deliverables</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Architecture and data model</li>
          <li>Open-source replacement blueprint</li>
          <li>API specs with examples</li>
          <li>MVP scope and milestones</li>
        </ul>
      </div>
    </section>
  );
};

export default AttioSequences;
