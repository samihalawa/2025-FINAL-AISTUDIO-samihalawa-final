import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';

const RadiologyAI: React.FC = () => {
  const title = 'Case Study: RadiologyAI — Clinical Reporting & Triage';
  const description = 'Reduced report time by ~70% with clinical ChatGPT, structured templates, and triage; groundwork for imaging support and IP strategy.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'Medical AI, Radiology, Clinical Reporting',
    author: { '@type': 'Person', name: 'Sami Halawa' },
    description,
  };
  const og = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/radiology-ai" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">Built clinical prompting templates, triage flows, and reporting automation. Drafted IP strategy and patent prep for AutoRad with a clean handoff package for regulatory and deployment.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Structured clinical ChatGPT prompts with guardrails</li>
          <li>Triage flows integrating hospital processes</li>
          <li>Imaging support groundwork (PACS compatibility)</li>
          <li>Patent application prep and IP strategy</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">Related services: <a className="underline" href="/services/medical-ai">Medical AI</a> · <a className="underline" href="/services/advanced-ai">Advanced AI Projects</a></p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default RadiologyAI;
