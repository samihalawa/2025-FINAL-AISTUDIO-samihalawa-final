import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Section: React.FC<{ title: string; children: React.ReactNode }>=({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="text-slate-700 space-y-4">{children}</div>
  </section>
);

const TrainingOverview: React.FC = () => {
  const title = 'AI Training Programs for Teams — Workshops, Bootcamps & Consulting';
  const description = 'Comprehensive AI training across prompting, RAG, agents, no‑code, marketing, medical and university programs. Onsite in Madrid or remote.';
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, url: '/services/prompt-engineering', name: 'Prompt Engineering' },
      { '@type': 'ListItem', position: 2, url: '/services/rag-langchain', name: 'RAG & LangChain' },
      { '@type': 'ListItem', position: 3, url: '/services/agents-automation', name: 'AI Agents & Automation' },
      { '@type': 'ListItem', position: 4, url: '/services/ai-for-marketing', name: 'AI for Marketing' },
      { '@type': 'ListItem', position: 5, url: '/services/business-automation', name: 'Business Automation' },
      { '@type': 'ListItem', position: 6, url: '/services/no-code-ai', name: 'No-code Creator' },
      { '@type': 'ListItem', position: 7, url: '/services/medical-ai', name: 'Medical AI' },
      { '@type': 'ListItem', position: 8, url: '/services/university-ml', name: 'University ML' },
      { '@type': 'ListItem', position: 9, url: '/services/family-ai', name: 'Family AI' },
      { '@type': 'ListItem', position: 10, url: '/services/advanced-ai', name: 'Advanced AI Projects' },
      { '@type': 'ListItem', position: 11, url: '/services/troubleshooting', name: 'AI Troubleshooting' },
    ]
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Delivery formats?', acceptedAnswer: { '@type': 'Answer', text: 'Onsite in Madrid or remote. 1–2 day workshops or multi-week programs.' }},
      { '@type': 'Question', name: 'Pricing?', acceptedAnswer: { '@type': 'Answer', text: 'Fixed price per workshop; multi-week programs are packaged by module/team size.' }},
      { '@type': 'Question', name: 'Languages?', acceptedAnswer: { '@type': 'Answer', text: 'Spanish and English. Materials available in both.' }}
    ]
  };
  const groups: Array<{name: string; items: Array<{href: string; title: string; desc: string}>}> = [
    {
      name: 'Core AI Skills',
      items: [
        { href: '/services/prompt-engineering', title: 'Prompt Engineering', desc: 'System prompts, tool-calling, evals and guardrails.' },
        { href: '/services/rag-langchain', title: 'RAG & LangChain', desc: 'Hybrid search, chunking, re‑ranking and evaluation.' },
        { href: '/services/agents-automation', title: 'AI Agents & Automation', desc: 'Patterns, orchestration and ops with no‑code tools.' },
      ]
    },
    {
      name: 'Business & Marketing',
      items: [
        { href: '/services/ai-for-marketing', title: 'AI for Marketing', desc: 'Content/SEO systems, ad creatives and analytics.' },
        { href: '/services/business-automation', title: 'Business Automation', desc: 'Lead gen, outreach, CRM and reporting automation.' },
        { href: '/services/no-code-ai', title: 'No-code Creator', desc: 'Create images, video and copy. Automate publishing.' },
      ]
    },
    {
      name: 'Specialized Programs',
      items: [
        { href: '/services/medical-ai', title: 'Medical AI', desc: 'Clinical ChatGPT, reporting, triage and imaging support.' },
        { href: '/services/university-ml', title: 'University ML', desc: 'Python, ML and TFG/TFM guidance with deliverables.' },
        { href: '/services/family-ai', title: 'Family AI', desc: 'Safe, age‑appropriate AI education for families.' },
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href="/ai-training" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Choose a ready‑to‑run workshop or a tailored program. All trainings include hands‑on labs, templates, and optional consulting to ship your first wins.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.flatMap(g => g.items.map(item => (
            <Link key={item.href} to={item.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h2>
              <p className="text-slate-700">{item.desc}</p>
            </Link>
          )))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Section title="Delivery & Formats">
            <ul className="list-disc list-inside space-y-1">
              <li>Onsite in Madrid or remote via Zoom</li>
              <li>1–2 day workshops or 4–6 week programs</li>
              <li>Spanish or English materials</li>
              <li>Templates, checklists and handoff docs included</li>
            </ul>
          </Section>
          <Section title="Outcomes & ROI">
            <ul className="list-disc list-inside space-y-1">
              <li>Measured impact (cost, latency, quality)</li>
              <li>Repeatable playbooks and prompt libraries</li>
              <li>Evals and safety guardrails in place</li>
              <li>Path to production with support options</li>
            </ul>
          </Section>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Get a training proposal</Link>
          <Link to="/services" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">Browse all services</Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingOverview;

