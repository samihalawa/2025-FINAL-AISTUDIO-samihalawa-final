import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyLocaleGate from '../../components/CaseStudyLocaleGate';
import SystemDiagram from '../../components/SystemDiagram';

const loop = [
  { label: 'Coding agent', detail: 'Claude Code, Codex or any MCP-compatible client hits a visual question it cannot answer from source alone.', tag: 'client' },
  { label: 'MCP tool call', detail: 'The agent calls one of VUDA’s 29 tools over standard input/output with a URL, selector or local file.', tag: 'stdio' },
  { label: 'Browser runtime', detail: 'Playwright drives a local Chromium, Browserbase, Anchor Browser or any CDP endpoint; every tool shares the same runtime.', tag: 'playwright' },
  { label: 'Capture & inspect', detail: 'Full-page, viewport, element or batch screenshots, an interactive-element map, rendered DOM, computed styles and console output.', tag: 'evidence' },
  { label: 'Agent reasoning', detail: 'The client’s own model reads the returned screenshot and structured data and decides the code change.', tag: 'client model' },
  { label: 'Fix & re-verify', detail: 'The agent edits the code, re-runs the workflow and compares the two rendered states as a visual diff.', tag: 'loop' },
];

const VudaCase: React.FC = () => (
  <CaseStudyLocaleGate storyId="vuda">
  <article className="bg-[#f8f6f1] text-slate-800">
    <div className="container">
      <div className="mx-auto max-w-3xl py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Case study · Open source · agent developer tools · 2025–present</p>
        <h1 className="cv-serif mt-5 text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl">VUDA: giving coding agents eyes on the interface they are changing</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-600">How the Visual UI Debug Agent gives any MCP-compatible client a real browser: screenshots, element maps, DOM inspection, workflow runs, console capture, API checks and visual comparison, alongside companion tools for mail, messaging and context.</p>
        <p className="mt-6 border-y border-slate-300 py-3 text-sm text-slate-500">Sami Halawa · open-source creator and maintainer · 2025–present · package <a href="https://github.com/samihalawa/visual-ui-debug-agent-mcp" target="_blank" rel="noopener noreferrer" className="text-slate-800">visual-ui-debug-agent-mcp</a></p>

        <figure className="mt-10">
          <img src="/portfolio/vuda-element-map.png" alt="VUDA interactive-element map over an owner-built Spanish AutoMedical concept demo interface" className="mx-auto w-full max-w-sm border border-slate-300" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">A VUDA tool result as the agent receives it: under the heading “Annotated Screenshot with Interactive Elements”, the captured demo page carries a numbered red box on each interactive element, so the client model can name what it wants to click or fix.</figcaption>
        </figure>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">The problem</h2>
        <p className="mt-4 leading-8">A text-only agent misses what is obvious on screen. Coding agents read source, tests and logs fluently, but a clipped button, a broken focus ring or an overflowing card never appears in any of those. The agent can change the code that renders an interface without ever seeing the interface it is changing.</p>
        <p className="mt-4 leading-8">VUDA closes that gap by returning screenshots, an interactive-element map and rendered DOM state as tool results the agent can reason over and act on. The evidence arrives in the same session as the code, so the next edit is grounded in what actually rendered rather than in what the source suggests should have rendered.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What VUDA is</h2>
        <p className="mt-4 leading-8">VUDA, the Visual UI Debug Agent, is a Model Context Protocol server that gives Claude Code, Codex or any MCP-compatible client a real browser. It is published as the package visual-ui-debug-agent-mcp and exposes 29 tools over standard input/output, with Playwright as the browser layer. Four areas sit between a rendered pixel and a code fix:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li><strong>Browser runtime</strong>: Playwright behind one selected runtime: a local Chromium-compatible browser, Browserbase, Anchor Browser or an existing CDP endpoint. No provider account is needed in local mode.</li>
          <li><strong>Capture and inspection</strong>: screenshots at full-page, viewport, element, local-file and batch scope; an interactive-element map; rendered DOM and computed styles; console monitoring and page-performance analysis.</li>
          <li><strong>Workflows and verification</strong>: multi-step UI workflows that preserve browser state, a visual diff between two rendered states, API endpoint checks, sitemap crawling and Playwright device emulation.</li>
          <li><strong>Transport</strong>: a Model Context Protocol server over standard input/output with 29 tools, started with a single npx command or the published Docker image, and configured in any MCP client in a few lines.</li>
        </ul>
        <p className="mt-4 leading-8">VUDA does not ship a model; the client’s model does the reasoning. The value comes from capturing the right browser state and returning it in a shape the client’s model can act on.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">How the loop runs</h2>
        <p className="mt-4 leading-8">Within a compatible MCP client, every stage is a tool call whose result is structured enough to drive the next code edit. VUDA supplies the evidence; the client model does the reasoning. The diagram shows the loop as it is exposed to a coding agent, from the first tool call to the visual diff that confirms a fix.</p>
        <div className="mt-6"><SystemDiagram title="Call, capture, inspect, reason, fix, re-verify." nodes={loop} feedback="Capture, workflow runs and visual comparison can be repeated until the interface is right; every iteration leaves screenshots a human reviewer can inspect." caption="VUDA runtime loop as exposed to MCP-compatible coding agents, per the project README." /></div>
        <p className="mt-6 leading-8">Capture, inspection and comparison are only useful if the agent can repeat them cheaply until the interface is right. That constraint shaped every tool boundary: every tool shares the same browser runtime, workflows preserve state between steps, and each iteration leaves screenshots a human reviewer can inspect afterwards.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Companion tools</h2>
        <p className="mt-4 leading-8">The same pattern applies to mail, messaging and context. Each companion tool gives an operational agent a capability it would otherwise fake: a real mailbox, a real chat history, a real shell, a real memory of the session.</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li><strong><a href="https://github.com/samihalawa/mcp-server-smtp" target="_blank" rel="noopener noreferrer" className="text-slate-900">email-smtp-imap-mcp</a></strong>: SMTP and IMAP transport for agents that need to send, read and triage mail as part of an operational workflow. 1,700+ npm downloads.</li>
          <li><strong><a href="https://github.com/samihalawa/gowa-whatsapp-api" target="_blank" rel="noopener noreferrer" className="text-slate-900">GOWA WhatsApp API / MCP</a></strong>: Go-based, multi-device messaging, chat-history and media access for operational agents and customer workflows.</li>
          <li><strong>Browser, shell and diff suite</strong>: companion MCP utilities for browser control, shell execution and change review inside the same agent session.</li>
          <li><strong>Codex Chronicle / Screenpipe tooling</strong>: macOS context management and activity analysis so long AI-assisted development sessions keep their operating state.</li>
        </ul>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Adoption</h2>
        <p className="mt-4 leading-8">Public package registries and repository activity provide transparent adoption signals for developer tooling. These are the figures as recorded on GitHub and npm in September 2026:</p>
        <table className="mt-4 w-full border-t border-slate-400 text-left text-sm">
          <tbody>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">80+★ · 7 forks</th><td className="py-3 text-slate-600">GitHub adoption of visual-ui-debug-agent-mcp, the VUDA repository, as recorded in September 2026.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">900+</th><td className="py-3 text-slate-600">npm downloads of the VUDA package.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">1,700+</th><td className="py-3 text-slate-600">npm downloads of email-smtp-imap-mcp, the companion mail server.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">2,500+</th><td className="py-3 text-slate-600">Combined open-source MCP tool downloads across the two packages.</td></tr>
          </tbody>
        </table>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What this demonstrates</h2>
        <p className="mt-4 leading-8">VUDA is tooling that makes autonomous agents safer to trust. The same discipline runs through the orchestration systems I ship: give the agent a real observation, return it in a structured form, and keep the human able to inspect what happened. It is built for the loop, not the demo.</p>

        <p className="mt-12 flex flex-wrap gap-4 border-t border-slate-300 pt-8 text-sm">
          <a href="https://github.com/samihalawa/visual-ui-debug-agent-mcp" target="_blank" rel="noopener noreferrer" className="btn-secondary">View VUDA on GitHub<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
          <Link to="/case-studies" className="btn-secondary">All case studies<i className="fas fa-arrow-right text-xs" /></Link>
          <Link to="/contact" className="btn-primary">Discuss agent tooling<i className="fas fa-arrow-right text-xs" /></Link>
        </p>
      </div>
    </div>
  </article>
  </CaseStudyLocaleGate>
);

export default VudaCase;
