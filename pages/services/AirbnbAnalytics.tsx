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

const AirbnbAnalytics: React.FC = () => {
  const title = 'Airbnb Market Intelligence — Pricing & Occupancy Insights';
  const description = 'Collect, clean and analyze listings to optimize pricing and occupancy. Build dashboards and alerting for short-term rentals.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: title, serviceType: 'Market Intelligence', provider: { '@type': 'Person', name: 'Sami Halawa' } };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <link rel="canonical" href="/services/airbnb-analytics" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Data-driven decisions for STR portfolios. From acquisition to dynamic pricing with clear dashboards and alerts.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Scope" points={[ 'Data collection and cleaning', 'Pricing and occupancy models', 'Competitor benchmarking', 'Dashboards and monitoring' ]} />
          <Section title="Deliverables" points={[ 'Datasets and notebooks', 'Pricing playbooks', 'KPI dashboards', 'Weekly report template' ]} />
        </div>
        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Start a pilot</Link>
          <Link to="/services/proptech-analytics" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See PropTech</Link>
        </div>
      </div>
    </section>
  );
};

export default AirbnbAnalytics;

