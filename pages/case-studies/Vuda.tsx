import React from 'react';
import { Link } from 'react-router-dom';
import SystemDiagram from '../../components/SystemDiagram';

const loop = [
  { label: 'Coding agent', detail: 'Claude Code, Codex or any MCP-compatible client hits a visual question it cannot answer from source alone.', tag: 'client' },
  { label: 'MCP tool call', detail: 'The agent calls one of VUDA’s 29 tools over standard input/output with a URL, selector or local file.', tag: 'stdio' },
  { label: 'Browser runtime', detail: 'Playwright drives a local Chromium, Browserbase, Anchor Browser or any CDP endpoint; every tool shares the same runtime.', tag: 'playwright' },
  { label: 'Capture & inspect', detail: 'Full-page, viewport, element or batch screenshots, an interactive-element map, rendered DOM, computed styles and console output.', tag: 'evidence' },
  { label: 'Agent reasoning', detail: 'The client’s own model reads the returned screenshot and structured data and decides the code change.', tag: 'client model' },
  { label: 'Fix & re-verify', detail: 'The agent edits the code, re-runs the workflow and compares the two rendered states as a visual diff.', tag: 'loop' },
];

const systemAreas = [
  ['Browser runtime', 'Playwright behind one selected runtime: a local Chromium-compatible browser, Browserbase, Anchor Browser or an existing CDP endpoint. No provider account is needed in local mode.'],
  ['Capture and inspection', 'Screenshots at full-page, viewport, element, local-file and batch scope; an interactive-element map; rendered DOM and computed styles; console monitoring and page-performance analysis.'],
  ['Workflows and verification', 'Multi-step UI workflows that preserve browser state, a visual diff between two rendered states, API endpoint checks, sitemap crawling and Playwright device emulation.'],
  ['Transport', 'A Model Context Protocol server over standard input/output with 29 tools, started with a single npx command or the published Docker image, and configured in any MCP client in a few lines.'],
];

const companions = [
  { name: 'email-smtp-imap-mcp', body: 'SMTP and IMAP transport for agents that need to send, read and triage mail as part of an operational workflow.', metric: '1,700+ npm installs', href: 'https://github.com/samihalawa/mcp-server-smtp' },
  { name: 'GOWA WhatsApp API / MCP', body: 'Go-based messaging, chat-history and media access for operational agents and customer workflows.', metric: 'Go · multi-device', href: 'https://github.com/samihalawa/gowa-whatsapp-api' },
  { name: 'Browser, shell & diff suite', body: 'Companion MCP utilities for browser control, shell execution and change review inside the same agent session.', metric: 'MCP utilities' },
  { name: 'Codex Chronicle / Screenpipe tooling', body: 'Context management and activity analysis so long AI-assisted development sessions keep their operating state.', metric: 'macOS context' },
];

const outcomes = [
  ['80+★ · 7 forks', 'GitHub adoption of visual-ui-debug-agent-mcp, the VUDA repository, as recorded in September 2026.'],
  ['900+', 'npm installs of the VUDA package in coding-agent workflows.'],
  ['1,700+', 'npm installs of email-smtp-imap-mcp, the companion mail server.'],
  ['2,500+', 'Combined open-source MCP tool installs across the two packages.'],
];

const VudaCase: React.FC = () => (
  <article className="bg-[#f8f6f1] text-slate-800">
    <header className="border-b border-slate-300 py-16 sm:py-24">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Open source · agent developer tools · 2025–present</p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <h1 className="cv-serif max-w-5xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">Giving coding agents eyes on the interface they are changing.</h1>
          <p className="border-l border-slate-400 pl-6 text-lg leading-relaxed text-slate-600">VUDA, the Visual UI Debug Agent, gives any MCP-compatible client a real browser: screenshots, element maps, DOM inspection, workflow runs, console capture, API checks and visual comparison, alongside companion tools for mail, messaging and context.</p>
        </div>
      </div>
    </header>

    <section className="border-b border-slate-300 bg-slate-950 py-12 text-white sm:py-16" aria-label="VUDA annotated capture">
      <div className="container grid gap-10 lg:grid-cols-[.6fr_1.4fr] lg:items-center">
        <div className="mx-auto w-full max-w-[22rem] overflow-hidden border border-slate-700 bg-slate-900">
          <img src="/portfolio/vuda-annotated.png" alt="VUDA interactive-element map over a live interface capture" className="h-auto w-full" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">The problem</p>
          <h2 className="cv-serif mt-5 text-4xl font-normal leading-tight text-white sm:text-5xl">A text-only agent misses what is obvious on screen.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Coding agents read source, tests and logs fluently, but a clipped button, a broken focus ring or an overflowing card never appears in any of those. VUDA closes that gap by returning screenshots, an interactive-element map and rendered DOM state as tool results the agent can reason over and act on.</p>
          <dl className="mt-10 grid border-t border-slate-700 sm:grid-cols-3">
            {[
              ['Package', 'visual-ui-debug-agent-mcp'],
              ['Protocol', 'MCP over stdio · 29 tools · Playwright'],
              ['My role', 'Creator · maintainer'],
            ].map(([term, value], index) => <div key={term} className={`border-b border-slate-700 py-5 sm:px-5 ${index < 2 ? 'sm:border-r' : ''}`}><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{term}</dt><dd className="mt-2 text-sm leading-6 text-slate-200">{value}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="vuda-diagram-heading">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Architecture</p><h2 id="vuda-diagram-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">One capture-to-verification loop, exposed as tools.</h2></div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-600">Within a compatible MCP client, every stage is a tool call whose result is structured enough to drive the next code edit. VUDA supplies the evidence; the client model does the reasoning.</p>
        </div>
        <div className="mt-12">
          <SystemDiagram title="Call, capture, inspect, reason, fix, re-verify." nodes={loop} feedback="Capture, workflow runs and visual comparison can be repeated until the interface is right; every iteration leaves screenshots a human reviewer can inspect." caption="VUDA runtime loop as exposed to MCP-compatible coding agents, per the project README." />
        </div>
      </div>
    </section>

    <section className="border-y border-slate-300 bg-white py-16 sm:py-24" aria-labelledby="vuda-system-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">System anatomy</p><h2 id="vuda-system-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Four layers between a rendered pixel and a code fix.</h2><p className="mt-5 leading-7 text-slate-600">VUDA does not ship a model. The value comes from capturing the right browser state and returning it in a shape the client’s model can act on.</p></div>
        <div className="grid border-t border-slate-400 sm:grid-cols-2">{systemAreas.map(([title, body], index) => <article key={title} className={`border-b border-slate-300 py-6 sm:px-6 ${index % 2 === 0 ? 'sm:border-r' : ''}`}><h3 className="cv-serif text-2xl font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="vuda-companions-heading">
      <div className="container">
        <div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Companion tooling</p><h2 id="vuda-companions-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950 sm:text-5xl">The same pattern, applied to mail, messaging and context.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Each tool gives an operational agent a capability it would otherwise fake: a real mailbox, a real chat history, a real shell, a real memory of the session.</p></div>
        <div className="mt-12 grid border-l border-t border-slate-400 md:grid-cols-2">
          {companions.map(item => (
            <article key={item.name} className="flex flex-col border-b border-r border-slate-400 bg-white p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4"><h3 className="font-mono text-sm font-bold text-slate-950">{item.name}</h3><span className="text-xs font-bold uppercase tracking-[.12em] text-brand-800">{item.metric}</span></div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.body}</p>
              {item.href && <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 border-b border-slate-600 pt-4 text-sm font-bold text-slate-900 no-underline hover:border-slate-950">Repository<i className="fas fa-arrow-up-right-from-square text-xs" /></a>}
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-slate-300 bg-white py-16 sm:py-24" aria-labelledby="vuda-outcomes-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Production outcomes</p><h2 id="vuda-outcomes-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Adoption measured where developers actually install tools.</h2><p className="mt-5 leading-7 text-slate-600">Public package registries and repository activity provide transparent adoption signals for developer tooling. These are the figures as recorded on GitHub and npm in September 2026.</p></div>
        <dl className="border-t border-slate-400">
          {outcomes.map(([value, definition]) => (
            <div key={value} className="grid gap-2 border-b border-slate-300 py-6 sm:grid-cols-[14rem_1fr] sm:gap-6">
              <dt className="cv-serif text-3xl font-semibold text-slate-950">{value}</dt>
              <dd className="leading-7 text-slate-600">{definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">What this demonstrates</p><h2 className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Tooling that makes autonomous agents safer to trust.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The same discipline runs through the orchestration systems I ship: give the agent a real observation, return it in a structured form, and keep the human able to inspect what happened.</p></div>
        <aside className="border-l-2 border-brand-700 bg-white p-7 sm:p-9"><h2 className="font-display text-sm font-bold uppercase tracking-[.16em] text-slate-950">Built for the loop, not the demo</h2><p className="mt-4 leading-7 text-slate-600">Capture, inspection and comparison are only useful if the agent can repeat them cheaply until the interface is right. That constraint shaped every tool boundary.</p></aside>
      </div>
      <div className="container mt-14 flex flex-wrap gap-4 border-t border-slate-300 pt-8"><a href="https://github.com/samihalawa/visual-ui-debug-agent-mcp" target="_blank" rel="noopener noreferrer" className="btn-secondary">View VUDA on GitHub<i className="fas fa-arrow-up-right-from-square text-xs" /></a><Link to="/case-studies" className="btn-secondary">All case studies<i className="fas fa-arrow-right text-xs" /></Link><Link to="/contact" className="btn-primary">Discuss agent tooling<i className="fas fa-arrow-right text-xs" /></Link></div>
    </section>
  </article>
);

export default VudaCase;
