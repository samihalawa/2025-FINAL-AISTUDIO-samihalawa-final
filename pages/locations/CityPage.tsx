import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CityPage: React.FC<{ city: string; title: string; description: string; canonical: string }>=({ city, title, description, canonical })=>{
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `AI Training — ${city}`,
    areaServed: city,
    url: canonical,
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'AI Training and Consulting'
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Delivery formats?', acceptedAnswer: { '@type': 'Answer', text: 'Onsite workshops (1–2 days) and multi-week programs. Remote available.' }},
      { '@type': 'Question', name: 'Languages?', acceptedAnswer: { '@type': 'Answer', text: 'Spanish and English. Materials provided in both if needed.' }},
      { '@type': 'Question', name: 'Availability?', acceptedAnswer: { '@type': 'Answer', text: 'Typically available within 2–3 weeks. Contact for dates.' }}
    ]
  };
  const highlights = [
    { href: '/services/prompt-engineering', label: 'Prompt Engineering' },
    { href: '/services/rag-langchain', label: 'RAG & LangChain' },
    { href: '/services/agents-automation', label: 'AI Agents & Automation' },
    { href: '/services/ai-for-marketing', label: 'AI for Marketing' },
    { href: '/services/business-automation', label: 'Business Automation' },
    { href: '/services/medical-ai', label: 'Medical AI' },
  ];
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{description}</p>
        <div className="grid md:grid-cols-3 gap-4">
          {highlights.map(h => (
            <Link key={h.href} to={h.href} className="block bg-white p-4 rounded-md border border-slate-200 hover:shadow-md transition-all">
              <span className="font-semibold text-slate-800">{h.label}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Check availability</Link>
          <Link to="/ai-training" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">Browse programs</Link>
        </div>
      </div>
    </section>
  )
};

export default CityPage;

