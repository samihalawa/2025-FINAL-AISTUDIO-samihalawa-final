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

const AgentsAutomation: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.agentsAutomation.title');
  const description = t('services.agentsAutomation.description');
  const ogImage = 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&h=630&q=80';
  const relatedCaseStudies = [
    { href: '/case-studies/autoclient', label: t('caseStudies.index.case.autoclient.title') },
    { href: '/case-studies/banking-assistant', label: t('caseStudies.index.case.banking.title') }
  ];
  const jsonLdCourse = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI Agents & Automation Bootcamp',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    description,
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do I need to code?', acceptedAnswer: { '@type': 'Answer', text: 'No. We cover no-code tools and optional code paths.' }},
      { '@type': 'Question', name: 'What use cases?', acceptedAnswer: { '@type': 'Answer', text: 'Lead gen, outreach, CRM sync, reporting, and tier-1 support.' }},
      { '@type': 'Question', name: 'How do we keep it safe?', acceptedAnswer: { '@type': 'Answer', text: 'Scopes, approvals, budget caps, and robust error handling.' }}
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
        <script type="application/ld+json">{JSON.stringify(jsonLdCourse)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <link rel="canonical" href="/services/agents-automation" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Ship reliable automations for marketing, sales and ops. With or without code — documented and observable.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Bootcamp" points={[
            'Agent patterns: planner, worker, reviewer',
            'Human-in-the-loop approvals and SLAs',
            'Zapier/Make/n8n for orchestration',
            'Observability, retries and budgets'
          ]} />
          <Section title="Business impact" points={[
            'Reduce manual work 50–80%',
            'Improve speed and data quality',
            'Track ROI with dashboards',
            'Documented runbooks for ops'
          ]} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Get a proposal</Link>
          <Link to="/services/business-automation" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See automation service</Link>
        </div>
        <div className="mt-8 text-sm text-slate-700">
          <span className="font-semibold">{t('services.relatedCaseStudies')}</span>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {relatedCaseStudies.map(cs => (
              <li key={cs.href}>
                <a className="underline" href={cs.href}>{cs.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AgentsAutomation;
