import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyLocaleGate from '../../components/CaseStudyLocaleGate';

const AutoClientCase: React.FC = () => (
  <CaseStudyLocaleGate storyId="autoclient">
  <article className="bg-[#f8f6f1] text-slate-800">
    <div className="container">
      <div className="mx-auto max-w-3xl py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Case study · Product system · Revenue operations · Mar 2024–Jul 2025</p>
        <h1 className="cv-serif mt-5 text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl">AutoClient: one account context from first research to the next follow-up</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-600">How account research, enrichment, qualification, CRM work and multi-channel follow-up were connected in one operator-led system, so that revenue operations no longer ran on five disconnected versions of the customer.</p>
        <p className="mt-6 border-y border-slate-300 py-3 text-sm text-slate-500">Sami Halawa · product and engineering lead · Mar 2024–Jul 2025</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">The problem</h2>
        <p className="mt-4 leading-8">In most sales teams, research, contact data, CRM history and channel conversations live apart. An operator reads about a company in one place, finds the contact in another, checks what was said last time in a third, and then writes the next message in a fourth. Every decision starts by rebuilding context that already existed somewhere in the stack, and the result is five disconnected versions of the same customer.</p>
        <p className="mt-4 leading-8">The challenge was to keep research, qualification and follow-up connected while preserving a clear operator checkpoint before any external action. Automation that skips that checkpoint is not an operating system; it is an outreach screen with a faster send button.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What was built</h2>
        <p className="mt-4 leading-8">AutoClient is an agentic operating system for researching accounts, preparing actions and keeping CRM state current across communication channels. It combines agentic research, enrichment, scoring, personalised outreach and CRM follow-up across email, WhatsApp and voice. I led product direction, system architecture, integrations, implementation and the operating workflows around the product.</p>
        <p className="mt-4 leading-8">The workflow starts with a precise search rather than a blank CRM record. A useful account brief combines who to find, why the company fits and which facts still need enrichment. The first action is grounded in that brief, and the later channel history remains attached to it.</p>
        <figure className="mt-8">
          <img src="/portfolio/autoclient-lead-search.webp" alt="AutoClient lead search screen titled Find Your Ideal Customers, with People Criteria (Holds a senior decision-making role), Company Criteria (Employed at a company headquartered in Spain; Company has publicly indicated an urgent need for AI training), Enrichments chips for Email, Phone Number, LinkedIn Profile, Company Size and Industry, and a Find Leads button" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">The search specification screen, “Find Your Ideal Customers”: people criteria (a senior decision-making role), company criteria (headquartered in Spain, with a publicly stated urgent need for AI training) and the requested enrichments (email, phone number, LinkedIn profile, company size, industry) are visible before “Find Leads” runs.</figcaption>
        </figure>
        <p className="mt-6 leading-8">Underneath that first screen, the product is organised into four connected operating areas. The value is in the connection between them, not in any one of them as an isolated tool:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li><strong>Research and enrichment</strong>: account discovery, public-source context, contact normalization and structured briefs.</li>
          <li><strong>CRM operating layer</strong>: records, qualification state, tasks, follow-up history and a reviewable next action.</li>
          <li><strong>Communication channels</strong>: email, WhatsApp and voice integrations sharing the same account context.</li>
          <li><strong>Reporting and control</strong>: pipeline visibility, activity summaries and checkpoints before external action.</li>
        </ul>
        <p className="mt-4 leading-8">In engineering terms this meant research and scoring workers, CRM synchronization, reporting, and the email, WhatsApp and voice integrations that read from and write back to the same record. Follow-up steps across email, LinkedIn and WhatsApp connect to CRM write-back instead of living as isolated campaigns, and marketing, sales and talent workflows can reuse a controlled inbox rotation and the same contact history.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">How the workflow runs</h2>
        <p className="mt-4 leading-8">The operating flow is simple to state: research once, then carry the context forward. Evidence and operator judgment stay connected as an account moves from discovery to engagement, in five steps.</p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7">
          <li><strong>Research.</strong> Collect company context, current signals, key people and the facts needed for a useful account brief.</li>
          <li><strong>Enrich.</strong> Normalize identities and add firmographic, contact and technology context without hiding the source.</li>
          <li><strong>Qualify.</strong> Score fit, priority and next-best action so an operator can review the reasoning before engagement.</li>
          <li><strong>Engage.</strong> Prepare email, WhatsApp or voice follow-up from the same account context rather than separate channel silos.</li>
          <li><strong>Learn.</strong> Write activity and outcomes back to the CRM so later work starts from the latest operating state.</li>
        </ol>
        <p className="mt-4 leading-8">The checkpoint sits between qualification and engagement. Scoring produces a recommended next action with its reasoning attached; a person reviews it before anything leaves the system. Once a message or call has happened, the outcome is written back, so the next pass through the loop begins from what actually occurred rather than from a stale record.</p>
        <p className="mt-4 leading-8">AutoClient is a product line rather than a one-off automation. It extended earlier outreach product work and connected it to reusable messaging, mailbox and voice tooling: DameSender, the earlier email and acquisition product that established the lineage; GOWA and mailbox tools, the reusable WhatsApp, chat-history, media, SMTP and IMAP integration work; and telephony integrations that carry voice and conversation state so the same account context extends beyond text channels.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Outcomes</h2>
        <p className="mt-4 leading-8">The product was built and led from March 2024 to July 2025. A public LinkedIn recommendation credits the system with 200+ qualified contacts in two weeks and a 30% lift in sales conversion. Those are the figures as the recommendation states them; they are attributed to that source rather than to an internal dashboard.</p>
        <p className="mt-4 leading-8">The operational outcome is harder to put in a number but easier to feel: operators stop rebuilding context before every decision, because research, qualification state, channel history and the next action all live on the same record.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What this demonstrates</h2>
        <p className="mt-4 leading-8">AutoClient is not another isolated outreach screen. It is an operator-led system in which research, enrichment, qualification, CRM work and multi-channel follow-up share one account context, with a human checkpoint before external action and CRM write-back after it. The work spans product direction, system architecture, integrations across email, WhatsApp and voice, and the operating workflows that make those integrations useful to the people running the pipeline.</p>

        <p className="mt-12 flex flex-wrap gap-4 border-t border-slate-300 pt-8 text-sm">
          <Link to="/projects" className="btn-secondary">Explore project stories<i className="fas fa-arrow-right text-xs" /></Link>
          <Link to="/case-studies" className="btn-secondary">All case studies<i className="fas fa-arrow-right text-xs" /></Link>
          <Link to="/contact" className="btn-primary">Discuss revenue operations<i className="fas fa-arrow-right text-xs" /></Link>
        </p>
      </div>
    </div>
  </article>
  </CaseStudyLocaleGate>
);

export default AutoClientCase;
