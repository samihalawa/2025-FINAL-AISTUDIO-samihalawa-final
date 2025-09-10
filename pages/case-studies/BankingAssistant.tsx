import React from 'react';
import { Helmet } from 'react-helmet-async';

const BankingAssistant: React.FC = () => {
  const title = 'Case Study: Intelligent Banking Assistant — Self-Service & Personalization';
  const description = 'Deployed a conversational banking assistant to improve self-service, deliver personalized insights, and reduce support costs.';
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'TechArticle', headline: title,
    about: 'Banking AI, Conversational AI, Personal Finance', description,
    author: { '@type': 'Person', name: 'Sami Halawa' }
  };
  const og = 'https://images.unsplash.com/photo-1556767576-cf63a644b5f2?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href="/case-studies/banking-assistant" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-700 mb-6">We delivered a secure, compliance‑aware assistant with clear guardrails, tailored prompts and KPI dashboards. Outcomes: higher self‑service rate, shorter handle time, and improved NPS.</p>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>Personalized budgeting and insights</li>
          <li>Fraud alerts and smart notifications</li>
          <li>Secure integration with banking APIs</li>
          <li>Evaluation pipeline and cost controls</li>
        </ul>
      </div>
    </section>
  );
};

export default BankingAssistant;

