import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Section: React.FC<{ title: string, points: string[] }>=({ title, points })=> (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

const PromptEngineering: React.FC = () => {
  const title = 'Prompt Engineering & LLM Best Practices — Training for Teams';
  const description = 'Hands-on course on system prompts, tools, evaluation, safety and cost control. Ship reliable features with ChatGPT/Claude/Gemini.';
  const jsonLdCourse = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Prompt Engineering & LLM Best Practices',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    description,
    hasCourseInstance: [{
      '@type': 'CourseInstance',
      courseMode: 'Onsite/Online',
      location: { '@type': 'Place', name: 'Madrid / Remote' }
    }]
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Who is this for?', acceptedAnswer: { '@type': 'Answer', text: 'Product, engineering, data and ops teams who ship LLM features.' }},
      { '@type': 'Question', name: 'What will we build?', acceptedAnswer: { '@type': 'Answer', text: 'A prompt library with evals, guardrails, and a cost/perf dashboard.' }},
      { '@type': 'Question', name: 'How long is it?', acceptedAnswer: { '@type': 'Answer', text: '1–2 days workshop or 4-week program (2h/week).' }}
    ]
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLdCourse)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <link rel="canonical" href="/services/prompt-engineering" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Design robust prompts, tool-calling and evaluation. Learn prompt patterns, chain-of-thought alternatives, and safety strategies that scale.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Curriculum" points={[
            'System prompts, roles, memory and tool calling',
            'Hallucination control and constrained decoding',
            'Prompt evals: golden sets, rubrics, metrics',
            'Cost, latency and reliability dashboards'
          ]} />
          <Section title="Outcomes" points={[
            'Reusable prompt library and templates',
            'Automated evals integrated in CI/CD',
            'Guardrails for safety and privacy',
            'Playbooks for future features'
          ]} />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Request syllabus</Link>
          <Link to="/blog" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">Read related posts</Link>
        </div>
      </div>
    </section>
  );
};

export default PromptEngineering;

