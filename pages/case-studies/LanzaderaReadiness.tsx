import React from 'react';
import { Helmet } from 'react-helmet-async';
import HireCTA from '../../components/HireCTA';

const LanzaderaReadiness: React.FC = () => {
  const title = 'Case Study: Accelerator Readiness — Lanzadera Selection';
  const description = 'Prepared investor materials, demo and narrative for accelerator selection (Lanzadera): deck, prototype and GTM plan with clear metrics.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, about: 'Accelerators, Pitch, GTM', description, author: { '@type': 'Person', name: 'Sami Halawa' } };
  const og = 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/lanzadera-readiness" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">Delivered the materials and structure to pass selection: investor deck, demo/prototype, narrative and a crisp GTM strategy with measurable KPIs.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Investor deck and one‑pager</li>
          <li>Clickable demo or prototype</li>
          <li>Narrative and Q&A prep</li>
          <li>GTM plan and metric tracking</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">Related services: <a className="underline" href="/services/accelerator-readiness">Accelerator Readiness</a> · <a className="underline" href="/services/ai-competitive-research">AI Competitive Research</a></p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default LanzaderaReadiness;

