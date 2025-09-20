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

const RagLangChain: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.ragLangChain.title');
  const description = t('services.ragLangChain.description');
  const ogImage = 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&h=630&q=80';
  const jsonLdCourse = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'RAG & LangChain Workshop',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    description,
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Datastores covered?', acceptedAnswer: { '@type': 'Answer', text: 'Pinecone, PostgreSQL (pgvector), Qdrant, and local vector stores.' }},
      { '@type': 'Question', name: 'How do we evaluate?', acceptedAnswer: { '@type': 'Answer', text: 'Judges, QA pairs, retrieval metrics (precision@k), and regression suites.' }},
      { '@type': 'Question', name: 'Do we cover multimodal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, image and PDF pipelines with OCR and document loaders.' }}
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
        <link rel="canonical" href="/services/rag-langchain" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Go beyond hello-world. Configure chunking, hyDE, re-ranking, caching and observability to ship consistent results.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Topics" points={[
            'Embedding models, chunking strategies, hybrid and re-ranking',
            'LangChain components, LCEL, tracing and testing',
            'Private data ingestion pipelines and security',
            'Deployment to serverless and containers'
          ]} />
          <Section title="Deliverables" points={[
            'Production-ready RAG microservice',
            'Eval suite with datasets and judges',
            'Playbooks for scaling and monitoring',
            'Docs and handoff checklist'
          ]} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Book a workshop</Link>
          <Link to="/services/advanced-ai" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See advanced AI</Link>
        </div>
        <div className="mt-8 text-sm text-slate-700">
          <span className="font-semibold">{t('services.relatedCaseStudy')}</span>
          <a className="ml-2 underline" href="/case-studies/spreadsheet-assistant">AI Spreadsheet Assistant — NL to Formulas</a>
        </div>
      </div>
    </section>
  );
};

export default RagLangChain;
