import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';

const SpreadsheetAssistant: React.FC = () => {
  const title = 'Case Study: AI Spreadsheet Assistant — Natural Language to Formulas';
  const description = 'Enabled business users to query, clean and transform data using natural language, with anomaly flags and insights.';
  const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, about: 'Productivity, Data Analysis, NL2SQL', description, author: { '@type': 'Person', name: 'Sami Halawa' } };
  const og = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/spreadsheet-assistant" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">We built prompt patterns and guardrails for transformations, added anomaly detection, and introduced a review mode to ensure reliability across datasets.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Natural language to formulas and charts</li>
          <li>Reusable prompt templates with evals</li>
          <li>Anomaly flags and explanations</li>
          <li>Adoption playbook and training sessions</li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-slate-600">Related services: <a className="underline" href="/services/rag-langchain">RAG & LangChain</a> · <a className="underline" href="/services/prompt-engineering">Prompt Engineering</a></p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default SpreadsheetAssistant;
