import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';

const Section: React.FC<{ title: string, points: string[] }>=({ title, points })=> (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

const AIForMarketing: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.aiForMarketing.title');
  const description = t('services.aiForMarketing.description');
  const ogImage = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&h=630&q=80';
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'AI Marketing Training',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    areaServed: 'Madrid, Online'
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What tools do we use?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT/Claude for copy, Midjourney/Runway for creatives, Sheets/Looker for analytics.' }},
      { '@type': 'Question', name: 'Will we get templates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — prompts, briefs, and campaign/reporting templates are provided.' }},
      { '@type': 'Question', name: 'Team size?', acceptedAnswer: { '@type': 'Answer', text: 'Ideal for 3–20 people. Larger groups on request.' }}
    ]
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLdService)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <link rel="canonical" href="/services/ai-for-marketing" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Turn AI into a repeatable growth engine: content calendars, SEO briefs, ad variants and reports — created and updated in hours, not weeks.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Modules" points={[
            'Content system: briefs, outlines, drafts and edits',
            'Programmatic SEO with guardrails',
            'Creative generation for ads and social',
            'Analytics setup and KPI dashboards'
          ]} />
          <Section title="Deliverables" points={[
            'Templates and prompt libraries',
            'Automation recipes (no-code)',
            'Editorial calendar for 90 days',
            'Measurement plan and reports'
          ]} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Request a training plan</Link>
          <Link to="/services/no-code-ai" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See no-code creator</Link>
        </div>
        <div className="mt-8 text-sm text-slate-700">
          <span className="font-semibold">Related case study:</span>
          <a className="ml-2 underline" href="/case-studies/autoclient">AutoClient — Outreach & CRM Automation</a>
        </div>
      </div>
    </section>
  );
};

export default AIForMarketing;
