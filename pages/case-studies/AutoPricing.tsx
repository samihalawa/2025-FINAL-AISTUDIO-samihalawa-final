import React from 'react';
import { Link } from 'react-router-dom';

const workflow = [
  { number: '01', title: 'Collect', body: 'Bring marketplace listings, quote inputs and inventory context into one operating view.' },
  { number: '02', title: 'Normalize', body: 'Match products and make source, condition and channel differences explicit.' },
  { number: '03', title: 'Evaluate', body: 'Apply pricing, stock and margin logic while preserving the underlying evidence.' },
  { number: '04', title: 'Review', body: 'Route exceptions and commercially sensitive actions through a human checkpoint.' },
  { number: '05', title: 'Act', body: 'Turn reviewed decisions into reports, sourcing work and operational follow-up.' },
];

const AutoPricingCase: React.FC = () => (
  <article className="bg-[#f8f6f1] text-slate-800">
    <header className="border-b border-slate-300 py-16 sm:py-24">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Client delivery · pricing intelligence · 2025–2026</p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <h1 className="cv-serif max-w-5xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">Turning fragmented resale signals into a reviewable pricing workflow.</h1>
          </div>
          <p className="border-l border-slate-400 pl-6 text-lg leading-relaxed text-slate-600">AutoPricing brought marketplace evidence, product matching, WhatsApp quote inputs and ERP context into a system designed for faster, more defensible commercial decisions.</p>
        </div>
      </div>
    </header>

    <section className="py-14 sm:py-20" aria-labelledby="case-context-heading">
      <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">The assignment</p>
          <h2 id="case-context-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">One decision flow across messy operating systems.</h2>
        </div>
        <div className="border-t border-slate-400">
          {[
            ['Business context', 'A refurbished-device operation needed to compare changing market prices, internal stock and incoming purchase opportunities without losing the evidence behind a recommendation.'],
            ['Operating environment', 'The workflow crossed public marketplaces, private quote conversations, product catalogues, inventory or ERP data and reporting surfaces.'],
            ['My role', 'My work covered product discovery and process mapping, system architecture, hands-on implementation and preparation of the demonstrated operating workflow.'],
          ].map(([title, body]) => <div key={title} className="grid gap-2 border-b border-slate-300 py-6 sm:grid-cols-[11rem_1fr]"><h3 className="font-display text-base font-bold text-slate-950">{title}</h3><p className="leading-7 text-slate-600">{body}</p></div>)}
        </div>
      </div>
    </section>

    <figure className="border-y border-slate-300 bg-white py-10 sm:py-14">
      <div className="container">
        <img src="/portfolio/autopricing-dashboard.png" alt="AutoPricing interface showing an executive pricing and sourcing dashboard" className="w-full border border-slate-300 bg-slate-50 object-cover object-top" />
        <figcaption className="mt-4 max-w-4xl text-sm leading-6 text-slate-500">Interface from the delivered demonstration archive. Figures visible inside the interface are demonstration data; they are not presented here as customer performance results.</figcaption>
      </div>
    </figure>

    <section className="py-16 sm:py-24" aria-labelledby="case-workflow-heading">
      <div className="container">
        <div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Process map</p><h2 id="case-workflow-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950 sm:text-5xl">Evidence moves forward. Authority stays visible.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The system separated signal collection and analysis from the actions that affect price, purchases or external contact.</p></div>
        <ol className="mt-12 grid border-t border-slate-500 sm:grid-cols-2 lg:grid-cols-5">
          {workflow.map((step, index) => <li key={step.number} className={`border-b border-slate-300 py-6 sm:px-5 ${index < workflow.length - 1 ? 'lg:border-r' : ''}`}><span className="font-mono text-xs font-bold text-brand-800">{step.number}</span><h3 className="cv-serif mt-8 text-2xl font-semibold text-slate-950">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p></li>)}
        </ol>
        <div className="mt-8 grid gap-6 border border-slate-400 bg-white p-6 sm:grid-cols-[12rem_1fr] sm:p-8"><h3 className="font-display text-sm font-bold uppercase tracking-[.16em] text-slate-950">Approval boundary</h3><p className="leading-7 text-slate-600">Automation prepared and traced the evidence. Exceptions, price changes, purchase decisions and external contact remained reviewable rather than disappearing into an opaque autonomous flow.</p></div>
      </div>
    </section>

    <section className="border-y border-slate-300 bg-slate-950 py-16 text-white sm:py-24" aria-labelledby="case-delivery-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">Delivery evidence</p><h2 id="case-delivery-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-white">What reached the demonstration stage.</h2></div>
        <div className="grid border-t border-slate-600 sm:grid-cols-2">
          {[
            ['Pricing and commerce', 'A database-backed commerce and dynamic quotation flow with stock and pricing controls.'],
            ['Market intelligence', 'Collection, product matching and decision reporting across multiple resale sources.'],
            ['Operational channels', 'Wallapop sourcing and contact flows plus structured extraction of WhatsApp quote inputs.'],
            ['Traceable artefacts', 'A 69-screen delivery archive across three workstreams, with selected flows traced from collection through database records to rendered reports.'],
          ].map(([title, body], index) => <article key={title} className={`border-b border-slate-700 py-6 sm:px-6 ${index % 2 === 0 ? 'sm:border-r' : ''}`}><h3 className="cv-serif text-2xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="case-boundary-heading">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">What this demonstrates</p><h2 className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Forward-deployed engineering as operating translation.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The core work was not a standalone model or dashboard. It was translating a commercial process across incomplete data, existing tools and human decision points—then turning that map into a system people could inspect and operate.</p></div>
        <aside className="border-l-2 border-brand-700 bg-white p-7 sm:p-9"><h2 id="case-boundary-heading" className="font-display text-sm font-bold uppercase tracking-[.16em] text-slate-950">Scope of this case study</h2><p className="mt-4 leading-7 text-slate-600">This page describes the contracted scope, initial paid engagement, delivered artefacts and demonstrated capabilities. It does not claim final client acceptance, final settlement, production-wide adoption or a post-deployment KPI improvement.</p></aside>
      </div>
      <div className="container mt-14 flex flex-wrap gap-4 border-t border-slate-300 pt-8"><Link to="/projects" className="btn-secondary">View more work<i className="fas fa-arrow-right text-sm" /></Link><Link to="/contact" className="btn-primary">Discuss a complex workflow<i className="fas fa-arrow-right text-sm" /></Link></div>
    </section>
  </article>
);

export default AutoPricingCase;
