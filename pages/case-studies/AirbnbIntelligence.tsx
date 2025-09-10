import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';

const AirbnbIntelligence: React.FC = () => {
  const title = 'Case Study: Airbnb Market Intelligence — Pricing & Occupancy';
  const description = 'Collected and analyzed listings to optimize pricing and occupancy for short‑term rentals with dashboards and alerts.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, about: 'STR, Pricing, Occupancy', description, author: { '@type': 'Person', name: 'Sami Halawa' } };
  const og = 'https://images.unsplash.com/photo-1429704658776-3d38c9990511?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/airbnb-intelligence" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">We built a clean data pipeline, benchmarking models and KPI dashboards to power acquisition and dynamic pricing decisions.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Listings collection and cleaning</li>
          <li>Pricing and occupancy models</li>
          <li>Competitor benchmarking</li>
          <li>Dashboards and alerts for decisions</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">Related services: <a className="underline" href="/services/airbnb-analytics">Airbnb Intelligence</a> · <a className="underline" href="/services/proptech-analytics">PropTech Analytics</a></p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default AirbnbIntelligence;
