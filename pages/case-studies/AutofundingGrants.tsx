import React from 'react';
import { Helmet } from 'react-helmet-async';
import HireCTA from '../../components/HireCTA';

const AutofundingGrants: React.FC = () => {
  const title = 'Case Study: AI Funding & Grants — Non‑Dilutive Financing Wins';
  const description = 'Mapped programs, wrote narratives, built budgets and submission packets to secure non‑dilutive funding for AI/Health projects.';
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'TechArticle', headline: title,
    about: 'Funding, Grants, AI Health', description, author: { '@type': 'Person', name: 'Sami Halawa' }
  };
  const og = 'https://images.unsplash.com/photo-1554224155-3a589877462f?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/autofunding-grants" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">Delivered an actionable funding roadmap, eligibility screening, narratives, budget spreadsheets and a submission checklist — enabling on‑time applications.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Funding scan with timelines and scoring</li>
          <li>Narrative drafting aligned with program criteria</li>
          <li>Budget and milestones plan</li>
          <li>Submission checklist with roles</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">Related services: <a className="underline" href="/services/ai-funding-grants">Funding & Grants</a> · <a className="underline" href="/services/ai-ip-patents">IP & Patents</a></p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default AutofundingGrants;

