import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';

const ProptechAnalytics: React.FC = () => {
  const title = 'Case Study: PropTech Analytics — Pipelines, Valuation & KPIs';
  const description = 'Built real estate data pipelines, valuation models and dashboards to surface opportunities and trends.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, about: 'PropTech, Real Estate Analytics', description, author: { '@type': 'Person', name: 'Sami Halawa' } };
  const og = 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/proptech-analytics" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">End‑to‑end pipeline from ingestion to dashboards, including cleaning, scoring and alerting to prioritize the best opportunities.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Consolidated multi‑source property data</li>
          <li>Valuation and opportunity scoring</li>
          <li>Market trends and geo insights</li>
          <li>Dashboards and alerting playbooks</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">Related services: <a className="underline" href="/services/proptech-analytics">PropTech Analytics</a> · <a className="underline" href="/services/airbnb-analytics">Airbnb Intelligence</a></p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default ProptechAnalytics;
