import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyLocaleGate from '../../components/CaseStudyLocaleGate';
import SystemDiagram from '../../components/SystemDiagram';

const architecture = [
  { label: 'Client surfaces', detail: 'React web plus Expo iOS and Android apps built from one product system.', tag: 'product' },
  { label: 'Edge', detail: 'Cloudflare terminates TLS, routes traffic and bridges legacy static paths.', tag: 'cloudflare' },
  { label: 'Application', detail: 'Node/tRPC API and React delivery deployed by Coolify on Hetzner from GitHub main.', tag: 'coolify · hetzner' },
  { label: 'State & media', detail: 'MySQL on Hetzner for marketplace data; Hetzner Object Storage for listing media.', tag: 'mysql · s3' },
  { label: 'Intelligence', detail: 'Search, recommendations and the AI assistant, with cloud AI providers kept explicit and gated.', tag: 'search · ai' },
  { label: 'Operations', detail: 'PostHog analytics and workflows, RevenueCat subscriptions and payment flows.', tag: 'posthog · revenuecat' },
];

const OulangCase: React.FC = () => (
  <CaseStudyLocaleGate storyId="oulang">
  <article className="bg-[#f8f6f1] text-slate-800">
    <div className="container">
      <div className="mx-auto max-w-3xl py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Case study · Marketplace and local-life platform · 2024 – June 2026</p>
        <h1 className="cv-serif mt-5 text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl">OULANG: a Mandarin-first operating surface for life in Spain</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-600">How housing, jobs, services, community publishing and an AI assistant were brought into one product for the Chinese community in Spain, shipped on web, iOS and Android, and moved off managed cloud without losing the provider boundary.</p>
        <p className="mt-6 border-y border-slate-300 py-3 text-sm text-slate-500">Sami Halawa · product, engineering and operations lead · product remains live at <a href="https://oulang.ai" target="_blank" rel="noopener noreferrer" className="text-slate-800">oulang.ai</a></p>

        <figure className="mt-10">
          <img src="/portfolio/oulang-home.png" alt="OULANG mobile home screen with publishing, local services and community listings" className="mx-auto w-full max-w-sm border border-slate-300" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">The production home screen: publish, browse the directory, join the forum, and scan recommended listings by category.</figcaption>
        </figure>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">The problem</h2>
        <p className="mt-4 leading-8">Chinese residents in Spain were finding flats, jobs, services and community news across scattered WeChat groups, classified boards and word of mouth. Each channel solved one need and lost the context of the others. The goal was a single product where publishing, search, identity, saved state and contact feel like parts of the same system, in Mandarin first, on the devices people actually use.</p>
        <p className="mt-4 leading-8">The categories are different, but the recurring tasks are the same: publish an offer, find a home or a job, locate a service, join a discussion, and contact the right person without rebuilding context in another app. Every surface was designed around that next action.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What was built</h2>
        <p className="mt-4 leading-8">OULANG ships as a responsive React web app and as React Native and Expo applications for iOS and Android, migrated from an earlier Capacitor iteration. The four product areas share one interaction model:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li><strong>Housing</strong>: rental discovery with city, budget and property filters designed around the questions people actually ask.</li>
          <li><strong>Jobs</strong>: Chinese-language job discovery with role, location, salary context and a direct route to contact.</li>
          <li><strong>Local life</strong>: classifieds, services, local content and community publishing in one recognizable product system.</li>
          <li><strong>AI assistance</strong>: a contextual assistant for finding information, preparing messages and organizing the next step.</li>
        </ul>
        <p className="mt-4 leading-8">Underneath the visible flows sit structured marketplace data, authentication, subscriptions, payments, analytics and media storage. The interface is the last layer; the difficult work is keeping those systems aligned for the same community.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Architecture</h2>
        <p className="mt-4 leading-8">Six layers carry every marketplace action. The diagram shows the current production topology after the Cloud Run retirement; the figure beneath it is the migration plan as it was executed.</p>
        <div className="mt-6"><SystemDiagram title="Client, edge, application, state, intelligence, operations." nodes={architecture} caption="OULANG production topology: GitHub main → Dockerfile → Coolify on Hetzner, Cloudflare at the edge, MySQL and object storage on Hetzner." /></div>
        <figure className="mt-8">
          <img src="/case-study-media/oulang-hetzner-coolify-architecture.png" alt="OULANG platform migration diagram: GitHub main, Coolify on Hetzner, React and Node/tRPC application, Cloudflare edge, MySQL, Hetzner Object Storage and an explicit optional cloud AI boundary" loading="lazy" className="w-full border border-slate-300 bg-slate-950" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">Retiring Cloud Run without flattening the provider boundary: optional cloud AI stays explicit and gated rather than silently purged.</figcaption>
        </figure>
        <p className="mt-6 leading-8">The migration moved hosting, the MySQL database and listing media to Coolify on Hetzner, with Cloudflare at the edge. The managed-cloud footprint shrank to explicit, optional AI calls. No duplicate datastore was created, and the legacy static bridge stayed in place during cutover.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Operating the product, not just shipping it</h2>
        <p className="mt-4 leading-8">Behavioral recommendations run as a PostHog workflow: a listing-interest signal triggers live eligibility and factual checks, OULANG requests ranking, and delivery timing and channel are handled by the notification layer. The execution logs sit beside the graph, so product behavior can be inspected as an operating system rather than a black box.</p>
        <figure className="mt-6">
          <img src="/portfolio/oulang-behavioral-recommendations-workflow-public-2026-08-09.png" alt="OULANG PostHog behavioral-recommendations workflow with trigger, evaluation-and-dispatch node and execution logs" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">The workflow graph, the evaluation-and-dispatch action and completed execution timings, visible together.</figcaption>
        </figure>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Outcomes</h2>
        <p className="mt-4 leading-8">Platform figures are only useful if the definition is explicit. These are the three measures quoted for OULANG, exactly as the product records them, measured on 3 July 2026:</p>
        <table className="mt-4 w-full border-t border-slate-400 text-left text-sm">
          <tbody>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">17,262 registered users</th><td className="py-3 text-slate-600">Accounts created on the platform.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">38,857 listings</th><td className="py-3 text-slate-600">Published listings across housing, jobs, services and second-hand categories.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">89,913 contact reveals</th><td className="py-3 text-slate-600">Cumulative contact-unlock events, counted every time a user reveals a listing’s contact details.</td></tr>
          </tbody>
        </table>
        <p className="mt-6 leading-8">Web, iOS and Android are live in production. The product was built and led from 2024 to June 2026 and remains live.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What this demonstrates</h2>
        <p className="mt-4 leading-8">OULANG is not a collection of landing pages. It is a cross-platform marketplace whose categories, communication paths and operating systems have to work together for the same community. The work spans interface, infrastructure and operations, and every layer answers a practical question: what can I find, what do I know, who can I contact, and what should I do next.</p>

        <p className="mt-12 flex flex-wrap gap-4 border-t border-slate-300 pt-8 text-sm">
          <a href="https://oulang.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit OULANG<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
          <Link to="/case-studies" className="btn-secondary">All case studies<i className="fas fa-arrow-right text-xs" /></Link>
          <Link to="/contact" className="btn-primary">Discuss a marketplace product<i className="fas fa-arrow-right text-xs" /></Link>
        </p>
      </div>
    </div>
  </article>
  </CaseStudyLocaleGate>
);

export default OulangCase;
