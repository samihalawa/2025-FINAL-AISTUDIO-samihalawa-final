import React from 'react';
import { Link } from 'react-router-dom';

const productAreas = [
  ['Housing', 'Rental discovery with city, budget and property filters designed around the questions people actually ask.'],
  ['Jobs', 'Chinese-language job discovery with role, location, salary context and a direct route to contact.'],
  ['Local life', 'Classifieds, services, local content and community publishing in one recognizable product system.'],
  ['AI assistance', 'A contextual assistant for finding information, preparing messages and organizing the next step.'],
];

const appSurfaces = [
  { src: '/portfolio/oulang-rent-search.webp', title: 'Rent search', body: 'City, budget and property-type filters lead directly into comparable listings.' },
  { src: '/portfolio/oulang-jobs.webp', title: 'Jobs', body: 'Role, salary and location context make opportunities easier to scan and act on.' },
  { src: '/portfolio/oulang-ai-assistant.webp', title: 'AI assistant', body: 'Search, writing and organization support stays connected to the marketplace.' },
  { src: '/portfolio/oulang-contact.webp', title: 'Contact', body: 'Phone, WeChat and in-product messaging meet at the listing decision point.' },
  { src: '/portfolio/oulang-local-content.webp', title: 'Local content', body: 'News, offers, media and local-life discovery broaden the product beyond listings.' },
];

const OulangCase: React.FC = () => (
  <article className="bg-[#f8f6f1] text-slate-800">
    <header className="border-b border-slate-300 py-16 sm:py-24">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Founder-built platform · marketplace and local life · 2026–present</p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <h1 className="cv-serif max-w-5xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">A Mandarin-first operating surface for life in Spain.</h1>
          <p className="border-l border-slate-400 pl-6 text-lg leading-relaxed text-slate-600">OULANG brings housing, jobs, services, community publishing and practical AI assistance into one product for the Chinese community in Spain.</p>
        </div>
      </div>
    </header>

    <figure className="border-b border-slate-300 bg-slate-950">
      <img src="/portfolio/oulang-case-study-cover.webp" alt="OULANG rent search, AI assistant and local-content mobile interfaces" className="mx-auto block aspect-[16/9] w-full max-w-[1600px] object-cover" />
      <figcaption className="container py-4 text-sm leading-6 text-slate-400">OULANG across three connected mobile journeys: finding a home, asking for assistance and discovering local content.</figcaption>
    </figure>

    <section className="border-b border-slate-300 bg-slate-950 py-12 sm:py-16" aria-label="OULANG mobile product interface">
      <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
        <div className="mx-auto w-full max-w-[25rem] overflow-hidden border border-slate-700 bg-slate-900">
          <img src="/portfolio/oulang-home.png" alt="OULANG mobile home with publishing, local services and community listings" className="h-auto w-full" />
        </div>
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">The product</p>
          <h2 className="cv-serif mt-5 text-4xl font-normal leading-tight text-white sm:text-5xl">One home for publishing, discovery and local action.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">The interface prioritizes the recurring tasks of a local community: publish an offer, find a home or job, locate a service, join a discussion and contact the right person without rebuilding context in another app.</p>
          <dl className="mt-10 grid border-t border-slate-700 sm:grid-cols-3">
            {[
              ['Surfaces', 'Web · iOS · Android'],
              ['Languages', 'Mandarin-first · multilingual'],
              ['My role', 'Founder · product · engineering · operations'],
            ].map(([term, value], index) => <div key={term} className={`border-b border-slate-700 py-5 sm:px-5 ${index < 2 ? 'sm:border-r' : ''}`}><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{term}</dt><dd className="mt-2 text-sm leading-6 text-slate-200">{value}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="oulang-system-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">System anatomy</p><h2 id="oulang-system-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Several local needs, one coherent interaction model.</h2><p className="mt-5 leading-7 text-slate-600">The categories are different, but publishing, search, identity, saved state and contact should feel like parts of the same product.</p></div>
        <div className="grid border-t border-slate-400 sm:grid-cols-2">{productAreas.map(([title, body], index) => <article key={title} className={`border-b border-slate-300 py-6 sm:px-6 ${index % 2 === 0 ? 'sm:border-r' : ''}`}><h3 className="cv-serif text-2xl font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
      </div>
    </section>

    <section className="border-y border-slate-300 bg-white py-16 sm:py-24" aria-labelledby="oulang-app-heading">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Mobile journey</p><h2 id="oulang-app-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Five surfaces, designed as one product.</h2></div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-600">The mobile set shows the complete loop: discover a need, inspect the context, ask for help, contact the source and return for relevant local content.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">
          {appSurfaces.map((surface) => (
            <figure key={surface.title} className="border border-slate-300 bg-[#f8f6f1] p-2 sm:p-3">
              <img src={surface.src} alt={`OULANG ${surface.title.toLowerCase()} mobile screen`} loading="lazy" className="h-auto w-full" />
              <figcaption className="px-1 pb-2 pt-4"><strong className="font-display text-sm text-slate-950">{surface.title}</strong><p className="mt-2 text-xs leading-5 text-slate-600">{surface.body}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-950 py-16 text-white sm:py-24" aria-labelledby="oulang-platform-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">Platform delivery</p><h2 id="oulang-platform-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-white">The interface sits on shared marketplace infrastructure.</h2></div>
        <div className="border-t border-slate-600">{[
          ['Product layer', 'Responsive React interfaces and shared patterns across marketplace, publishing, account and community surfaces.'],
          ['Application layer', 'Web delivery plus Capacitor-based iOS and Android applications from the same product system.'],
          ['Operating layer', 'Structured marketplace data, authentication, subscriptions, payments, analytics and media storage behind the visible flows.'],
        ].map(([title, body]) => <div key={title} className="grid gap-2 border-b border-slate-700 py-6 sm:grid-cols-[12rem_1fr]"><h3 className="cv-serif text-xl font-semibold text-white">{title}</h3><p className="leading-7 text-slate-300">{body}</p></div>)}</div>
      </div>
    </section>

    <figure className="border-b border-slate-300 bg-white">
      <div className="container py-12 sm:py-16">
        <div className="grid gap-6 border-t border-slate-400 pt-6 lg:grid-cols-[.58fr_1.42fr] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Recent operating work</p><h2 className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Behavioral recommendations, observed in the workflow that runs them.</h2></div>
          <p className="text-lg leading-relaxed text-slate-600">This PostHog workflow connects an interest signal to an evaluation-and-dispatch step, with execution logs visible beside the flow so product behavior can be inspected as an operating system rather than a black box.</p>
        </div>
        <img src="/portfolio/oulang-behavioral-recommendations-workflow-public-2026-08-09.png" alt="OULANG PostHog behavioral-recommendations workflow with trigger, evaluation-and-dispatch node and execution logs" loading="lazy" className="mt-10 h-auto w-full border border-slate-300 bg-slate-50 object-contain" />
        <figcaption className="mt-4 text-sm leading-6 text-slate-500">A working operations view: the workflow graph, the evaluation-and-dispatch action and completed execution timings are visible together.</figcaption>
      </div>
    </figure>

    <section className="py-16 sm:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">What this demonstrates</p><h2 className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Product depth across interface, infrastructure and operations.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">OULANG is not a collection of landing pages. It is a cross-platform marketplace whose categories, communication paths and operating systems have to work together for the same community.</p></div>
        <aside className="border-l-2 border-brand-700 bg-white p-7 sm:p-9"><h2 className="font-display text-sm font-bold uppercase tracking-[.16em] text-slate-950">Built around the next action</h2><p className="mt-4 leading-7 text-slate-600">Every surface answers a practical question: what can I find, what do I know, who can I contact and what should I do next?</p></aside>
      </div>
      <div className="container mt-14 flex flex-wrap gap-4 border-t border-slate-300 pt-8"><a href="https://oulang.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit OULANG<i className="fas fa-arrow-up-right-from-square text-xs" /></a><Link to="/projects" className="btn-secondary">Explore project stories<i className="fas fa-arrow-right text-xs" /></Link><Link to="/contact" className="btn-primary">Discuss a marketplace product<i className="fas fa-arrow-right text-xs" /></Link></div>
    </section>
  </article>
);

export default OulangCase;
