import React from 'react';
import { Link } from 'react-router-dom';

const workflow = [
  { number: '01', title: 'Research', body: 'Collect company context, current signals, key people and the facts needed for a useful account brief.' },
  { number: '02', title: 'Enrich', body: 'Normalize identities and add firmographic, contact and technology context without hiding the source.' },
  { number: '03', title: 'Qualify', body: 'Score fit, priority and next-best action so an operator can review the reasoning before engagement.' },
  { number: '04', title: 'Engage', body: 'Prepare email, WhatsApp or voice follow-up from the same account context rather than separate channel silos.' },
  { number: '05', title: 'Learn', body: 'Write activity and outcomes back to the CRM so later work starts from the latest operating state.' },
];

const systemAreas = [
  ['Research and enrichment', 'Account discovery, public-source context, contact normalization and structured briefs.'],
  ['CRM operating layer', 'Records, qualification state, tasks, follow-up history and a reviewable next action.'],
  ['Communication channels', 'Email, WhatsApp and voice integrations sharing the same account context.'],
  ['Reporting and control', 'Pipeline visibility, activity summaries and checkpoints before external action.'],
];

const productSurfaces = [
  { src: '/portfolio/autoclient-research-brief.webp', title: 'Find and qualify', body: 'ICP filters, daily lead volume, reply signals and a mobile handoff share one operating frame.' },
  { src: '/portfolio/autoclient-sequence-orchestration.webp', title: 'Orchestrate follow-up', body: 'Email, LinkedIn and WhatsApp steps connect to CRM write-back instead of living as isolated campaigns.' },
  { src: '/portfolio/autoclient-channel-rotation.webp', title: 'Coordinate channels', body: 'Marketing, sales and talent workflows can reuse a controlled inbox rotation and the same contact history.' },
];

const AutoClientCase: React.FC = () => (
  <article className="bg-[#f8f6f1] text-slate-800">
    <header className="border-b border-slate-300 py-16 sm:py-24">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Product system · revenue operations · 2024–present</p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <h1 className="cv-serif max-w-5xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">One account context from first research to the next follow-up.</h1>
          <p className="border-l border-slate-400 pl-6 text-lg leading-relaxed text-slate-600">AutoClient connects account research, enrichment, qualification, CRM work and multi-channel follow-up in one operator-led system.</p>
        </div>
      </div>
    </header>

    <figure className="border-b border-slate-300 bg-slate-950">
      <img src="/portfolio/autoclient-operations-cover.webp" alt="Illustrated AutoClient revenue-operations workflow across research, CRM, email, WhatsApp and voice" className="mx-auto block aspect-[16/9] w-full max-w-[1600px] object-cover" />
      <figcaption className="container py-4 text-sm leading-6 text-slate-400">Project cover showing the connected operating model: account research, CRM review and coordinated follow-up channels.</figcaption>
    </figure>

    <section className="py-14 sm:py-20" aria-labelledby="autoclient-context-heading">
      <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Product context</p><h2 id="autoclient-context-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Revenue operations without five disconnected versions of the customer.</h2></div>
        <div className="border-t border-slate-400">
          {[
            ['The product', 'An agentic operating system for researching accounts, preparing actions and keeping CRM state current across communication channels.'],
            ['The problem', 'Research, contact data, CRM history and channel conversations often live apart, forcing operators to rebuild context before every decision.'],
            ['My role', 'Founder responsible for product direction, system architecture, integrations, implementation and the operating workflows around the product.'],
          ].map(([title, body]) => <div key={title} className="grid gap-2 border-b border-slate-300 py-6 sm:grid-cols-[11rem_1fr]"><h3 className="font-display text-base font-bold text-slate-950">{title}</h3><p className="leading-7 text-slate-600">{body}</p></div>)}
        </div>
      </div>
    </section>

    <section className="border-y border-slate-300 bg-white py-16 sm:py-24" aria-labelledby="autoclient-surfaces-heading">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Product surfaces</p>
            <h2 id="autoclient-surfaces-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">The workflow starts with a precise search, not a blank CRM record.</h2>
          </div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-600">A useful account brief combines who to find, why the company fits and which facts still need enrichment. The first action is grounded in that brief, and the later channel history remains attached to it.</p>
        </div>
        <figure className="mt-12 border border-slate-300 bg-[#f8f6f1] p-4 sm:p-7">
          <img src="/portfolio/autoclient-lead-search.webp" alt="AutoClient lead search with people criteria, company criteria and selected enrichment fields" loading="lazy" className="w-full border border-slate-200 bg-white object-cover object-top" />
          <figcaption className="mt-5 grid gap-2 sm:grid-cols-[12rem_1fr]">
            <strong className="font-display text-sm text-slate-950">Search specification</strong>
            <span className="text-sm leading-6 text-slate-600">People criteria, company evidence and requested enrichment fields are visible before the search runs.</span>
          </figcaption>
        </figure>
        <div className="mt-6 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">
          {productSurfaces.map((surface) => (
            <figure key={surface.title} className="bg-white p-4 sm:p-6">
              <img src={surface.src} alt={`AutoClient product concept for ${surface.title.toLowerCase()}`} loading="lazy" className="aspect-square w-full border border-slate-200 bg-slate-50 object-cover" />
              <figcaption className="mt-5">
                <strong className="cv-serif text-xl font-semibold text-slate-950">{surface.title}</strong>
                <p className="mt-2 text-sm leading-6 text-slate-600">{surface.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="autoclient-flow-heading">
      <div className="container"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Operating flow</p><h2 id="autoclient-flow-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950 sm:text-5xl">Research once. Carry the context forward.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The workflow keeps evidence and operator judgment connected as an account moves from discovery to engagement.</p></div>
        <ol className="mt-12 grid border-t border-slate-500 sm:grid-cols-2 lg:grid-cols-5">{workflow.map((step, index) => <li key={step.number} className={`border-b border-slate-300 py-6 sm:px-5 ${index < workflow.length - 1 ? 'lg:border-r' : ''}`}><span className="font-mono text-xs font-bold text-brand-800">{step.number}</span><h3 className="cv-serif mt-8 text-2xl font-semibold text-slate-950">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p></li>)}</ol>
      </div>
    </section>

    <section className="bg-slate-950 py-16 text-white sm:py-24" aria-labelledby="autoclient-system-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">System anatomy</p><h2 id="autoclient-system-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-white">One product, four connected operating areas.</h2><p className="mt-5 leading-7 text-slate-300">The value is in the connection between these areas—not another isolated outreach screen.</p></div>
        <div className="grid border-t border-slate-600 sm:grid-cols-2">{systemAreas.map(([title, body], index) => <article key={title} className={`border-b border-slate-700 py-6 sm:px-6 ${index % 2 === 0 ? 'sm:border-r' : ''}`}><h3 className="cv-serif text-2xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{body}</p></article>)}</div>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="autoclient-lineage-heading">
      <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Product lineage</p><h2 id="autoclient-lineage-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">A product line, not a one-off automation.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">AutoClient continues earlier outreach product work and now connects to reusable messaging, mailbox and voice tooling.</p></div>
        <div className="border-t border-slate-400">{[
          ['DameSender', 'The earlier email and acquisition product that established the product lineage.'],
          ['GOWA and mailbox tools', 'Reusable WhatsApp, chat-history, media, SMTP and IMAP integration work.'],
          ['Voice and conversation state', 'Telephony integrations that extend the same account context beyond text channels.'],
        ].map(([title, body]) => <div key={title} className="grid gap-2 border-b border-slate-300 py-6 sm:grid-cols-[12rem_1fr]"><h3 className="cv-serif text-xl font-semibold text-slate-950">{title}</h3><p className="leading-7 text-slate-600">{body}</p></div>)}</div>
      </div>
      <div className="container mt-14 flex flex-wrap gap-4 border-t border-slate-300 pt-8"><Link to="/projects" className="btn-secondary">Explore project stories<i className="fas fa-arrow-right text-sm" /></Link><Link to="/contact" className="btn-primary">Discuss revenue operations<i className="fas fa-arrow-right text-sm" /></Link></div>
    </section>
  </article>
);

export default AutoClientCase;
