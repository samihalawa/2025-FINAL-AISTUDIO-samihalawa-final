import type { LanguageCode } from '../../i18n/LanguageContext';

// Long-form service detail lives here rather than in i18n/translations.ts:
// it is page body, not interface chrome, and every service needs the same
// seven blocks (buyer, problem, scope, exclusions, deliverables, duration,
// related work) so a reader can tell these twenty pages apart.
//
// Every claim below is grounded in delivered work — OULANG, AutoClient,
// AutoPricing/IWAKY, APOLO, the VUDA MCP tooling and 125+ hours of delivered
// AI instruction. No client names beyond those, no invented metrics, no
// outcome guarantees.

export type ServiceDetail = {
  audience: string;
  problem: string;
  scope: string[];
  exclusions: string[];
  deliverables: string[];
  duration: string;
  related: Array<{ href: string; label: string }>;
};

export type DetailLabels = {
  audience: string;
  problem: string;
  scope: string;
  exclusions: string;
  deliverables: string;
  duration: string;
  related: string;
};

const LABELS: Record<'en' | 'es', DetailLabels> = {
  en: {
    audience: 'Who this is for',
    problem: 'The operating problem',
    scope: 'What the engagement covers',
    exclusions: 'What it does not cover',
    deliverables: 'What you receive',
    duration: 'Typical duration',
    related: 'Related case study',
  },
  es: {
    audience: 'Para quién es',
    problem: 'El problema operativo',
    scope: 'Qué cubre el trabajo',
    exclusions: 'Qué no cubre',
    deliverables: 'Qué recibes',
    duration: 'Duración habitual',
    related: 'Caso de estudio relacionado',
  },
};

export function detailLabels(language: LanguageCode): DetailLabels {
  return language === 'es' ? LABELS.es : LABELS.en;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'medical-ai': {
    audience: 'Clinical research groups, hospital innovation units and health-tech founders who need a medical AI workflow built by someone who treats human review as part of the architecture rather than a disclaimer bolted on at the end.',
    problem: 'A model produces plausible clinical prose, and nobody can trace which pixels, measurements or prior findings it was actually derived from. Without that trace there is no way for a clinician to accept or reject a specific claim, so the whole output gets discarded and the pipeline never leaves the pilot.',
    scope: [
      'Separating structured visual description from interpretation, so each stage can be inspected independently',
      'Multimodal prompt and schema design that forces the model to cite what it observed',
      'A review interface where a named clinician accepts, edits or rejects each section before it counts',
      'Evaluation sets built from de-identified prior cases, plus disagreement tracking between model and reviewer',
    ],
    exclusions: [
      'No regulatory submission, CE marking or clinical validation work — that belongs with your regulatory advisers',
      'No diagnostic claims, and no deployment configuration that lets output reach a patient unreviewed',
      'No handling of identifiable patient data on my infrastructure; de-identification stays on your side',
    ],
    deliverables: [
      'A working prototype pipeline in your stack, with the review gate wired in',
      'Prompt, schema and evaluation artefacts, versioned and re-runnable',
      'A written architecture note covering failure modes and where the human boundary sits',
      'A handover session with the clinical and engineering owners together',
    ],
    duration: 'Six to ten weeks for a reviewable prototype; discovery alone runs two weeks.',
    related: [{ href: '/case-studies/apolo-medical-framework', label: 'APOLO — multimodal medical workflow with human review' }],
  },

  'business-automation': {
    audience: 'Operations, sales and customer-support leads at small and mid-sized companies where a critical process is held together by one person, a spreadsheet, and a rule everybody knows but nobody wrote down.',
    problem: 'Work is being retyped between systems that could talk to each other: a form into a CRM, a CRM into a quote, a quote into an invoice, an invoice into a Monday-morning report. Each hop is small, all of them together consume a role, and the existing partial automation is trusted so little that someone checks every run anyway.',
    scope: [
      'Walking the real process screen by screen with the people who run it, not the documented version',
      'Building the automation against your actual systems, with an explicit approval step wherever a mistake is expensive',
      'Observability: a way to see that a run happened, what it changed, and what it skipped',
      'Failure handling — retries, dead letters and a defined behaviour when an upstream API is down',
    ],
    exclusions: [
      'No replacing tooling that already works simply because it is not the tool I would have picked',
      'No fully autonomous sending, invoicing or publishing without a human approval boundary',
      'No ongoing operation of your accounts — you keep the credentials and the ownership',
    ],
    deliverables: [
      'Working automations in your own accounts, with runbook documentation written for the operator',
      'A process map of the workflow as it actually runs, before and after',
      'Monitoring and alerting so a silent failure stops being silent',
      'A handover session plus a defined support window',
    ],
    duration: 'Two to six weeks depending on how many systems the workflow crosses.',
    related: [{ href: '/case-studies/autoclient', label: 'AutoClient — account research, CRM and multi-channel follow-up' }],
  },

  'university-ml': {
    audience: 'University students and early-career engineers working through Python, machine learning or a final-year project, plus supervisors who want the student to actually understand the code they submit.',
    problem: 'The gap is rarely the theory. It is that a notebook runs on the laptop and nowhere else, results cannot be reproduced two weeks later, and the write-up describes an experiment that the code does not quite perform. That gap is exactly what a viva exposes.',
    scope: [
      'Working through your own coursework and dataset rather than a generic teaching example',
      'Reproducibility: environment, seeds, data splits and a script that regenerates every figure in the report',
      'Explaining each modelling decision well enough that you can defend it under questioning',
      'Structuring the written report so method, results and limitations line up with what the code does',
    ],
    exclusions: [
      'No writing or submitting work on your behalf — the sessions are teaching, and authorship stays yours',
      'No guaranteed grades or outcomes',
      'No access to your institution’s systems or submission portals',
    ],
    deliverables: [
      'A reproducible repository with a clean environment and documented run instructions',
      'Annotated notebooks explaining why each step exists, not only what it does',
      'A defence-preparation session covering the questions your method invites',
      'Written feedback on the report structure and its claims',
    ],
    duration: 'Weekly sessions across a term, or an intensive block before a deadline.',
    related: [{ href: '/services/data-science-training', label: 'Data science and model evaluation training' }],
  },

  'family-ai': {
    audience: 'Parents who want their children to use AI tools competently and safely, and who would rather learn the tools themselves than police something they do not understand.',
    problem: 'AI arrived in the house before any rules did. A teenager is using it for homework in ways nobody can evaluate, a younger child is talking to a chatbot with no idea what it is, and the adults are getting advice from headlines that alternate between miracle and catastrophe.',
    scope: [
      'Age-appropriate sessions: creative and playful for younger children, study technique for teenagers, practical productivity for adults',
      'What these systems actually are and where they are confidently wrong, explained without jargon',
      'Household agreements on acceptable use for schoolwork, with the reasoning the school will recognise',
      'Privacy settings, account hygiene and what not to type into a chat box',
    ],
    exclusions: [
      'No monitoring or surveillance software, and no reading your children’s conversations',
      'No claims about educational outcomes or exam performance',
      'No replacement for school policy — the sessions complement it',
    ],
    deliverables: [
      'A short written household guide in Spanish or English',
      'A per-age tool list with the reasoning for each inclusion and exclusion',
      'Prompt examples that support study rather than replace it',
      'A follow-up session once the household has lived with the agreement for a few weeks',
    ],
    duration: 'A single half-day session, or three shorter sessions split by age group.',
    related: [{ href: '/services/ai-language-learning', label: 'AI language learning systems for structured practice' }],
  },

  'advanced-ai': {
    audience: 'Founders and technical teams who have proved an idea with a prototype and now need it to survive real users, real load and a real on-call rotation.',
    problem: 'The prototype works because a person is standing next to it. In production the same system calls an API that times out, gets a tool response in the wrong shape, hits a rate limit mid-conversation, or quietly costs four times what the forecast assumed — and nothing in the codebase tells anyone which of those just happened.',
    scope: [
      'Agent and tool architecture: what the model is allowed to call, and what happens when the call fails',
      'Retrieval and context design, including how retrieval failure is surfaced instead of hidden',
      'Evaluation harnesses that run on every change, built from your own traffic',
      'Observability, cost attribution and deployment — containers, CI/CD and rollback',
    ],
    exclusions: [
      'No model training from scratch where an existing model plus good retrieval solves the problem',
      'No autonomous write access to production systems without an approval boundary',
      'No long-term managed operation; the goal is a system your team owns',
    ],
    deliverables: [
      'Production code in your repository, with tests and deployment configuration',
      'An evaluation suite wired into CI, plus a baseline you can regress against',
      'Traces, dashboards and per-feature cost visibility',
      'Architecture documentation and a working session with the team that inherits it',
    ],
    duration: 'Four to twelve weeks depending on how much already exists.',
    related: [
      { href: '/case-studies/autoclient', label: 'AutoClient — agent system with operator handoffs' },
      { href: '/case-studies/oulang', label: 'OULANG — production platform across web, iOS and Android' },
    ],
  },

  'no-code-ai': {
    audience: 'Marketing teams, solo operators and small studios producing a constant stream of content who need volume without the output looking like it was generated by a machine on a deadline.',
    problem: 'AI tools got adopted one at a time, so every piece of content is a fresh improvisation. Nothing is reusable, quality swings between publishable and embarrassing, and the time saved on drafting is spent again on fixing.',
    scope: [
      'A tool stack chosen for your actual output, with the reason each tool is in or out',
      'Reusable prompt and template systems rather than one-off prompts',
      'A review gate before publication, because the fastest way to lose the time saved is to publish something wrong',
      'Scheduling and publication automation across the channels you already use',
    ],
    exclusions: [
      'No engagement, reach or revenue guarantees',
      'No content produced on your behalf beyond the worked examples built in session',
      'No tool subscriptions purchased or managed for you',
    ],
    deliverables: [
      'A documented content pipeline from brief to published piece',
      'A prompt and template library you own and can extend',
      'Automation for the repetitive publishing steps',
      'A quality checklist tuned to your brand and its failure modes',
    ],
    duration: 'One to three weeks, usually a workshop plus a build follow-up.',
    related: [{ href: '/services/ai-for-marketing', label: 'AI for marketing, SEO and analytics workflows' }],
  },

  'prompt-engineering': {
    audience: 'Product engineers, support leads and technical teams who already ship an LLM feature and now need its behaviour to be repeatable rather than lucky.',
    problem: 'Prompts are edited in a text box, regressions are discovered by users, and nobody can say whether last week’s change made the feature better or worse because there is nothing to measure against. Tool calls fail quietly with the wrong shape, and the model’s confidence is identical whether it is right or wrong.',
    scope: [
      'System prompt design, roles, and the difference between instruction and context',
      'Tool calling and structured outputs, including what to do with a malformed response',
      'Building a golden set from your own transcripts, plus rubrics and automated scoring',
      'Cost, latency and reliability instrumentation for the feature in production',
    ],
    exclusions: [
      'No promise of a specific accuracy number — the evaluation set is what tells you where you are',
      'No fine-tuning where prompt and retrieval work has not been exhausted first',
      'No vendor lock-in advice; the patterns are model-agnostic',
    ],
    deliverables: [
      'A prompt library and template set in your repository',
      'A working evaluation harness running on every change',
      'Guardrail patterns for safety, privacy and refusal handling',
      'A written playbook for the next feature the team builds',
    ],
    duration: 'A two-day intensive, or a four-session programme spread across a month.',
    related: [{ href: '/case-studies/apolo-medical-framework', label: 'APOLO — structured outputs a reviewer can check' }],
  },

  'rag-langchain': {
    audience: 'Engineering teams building retrieval over their own documents — support knowledge bases, contracts, product catalogues, internal wikis — who need answers that can be checked against a source.',
    problem: 'The demo answered three questions correctly and everyone relaxed. In use, the retriever returns plausible-looking chunks, the model writes fluently over whichever ones it got, and there is no signal distinguishing a well-grounded answer from a confident invention. Nobody can tell whether a change to chunking helped.',
    scope: [
      'Ingestion, chunking and metadata design against your real corpus, not a sample',
      'Hybrid search and reranking, with the trade-offs measured rather than assumed',
      'Making retrieval failure visible — abstention, citation and confidence surfaces',
      'Evaluation across retrieval and generation separately, so you know which half broke',
    ],
    exclusions: [
      'No claim that RAG is the right answer if your corpus is small enough for direct context',
      'No data migration or corpus cleaning beyond what the pipeline needs',
      'No managed hosting of your vector store',
    ],
    deliverables: [
      'A working retrieval pipeline in your stack with configuration documented',
      'An evaluation set and harness covering retrieval and answer quality',
      'Observability hooks so a bad answer can be traced to the chunks behind it',
      'A written note on scaling, cost and what to re-measure as the corpus grows',
    ],
    duration: 'One intensive workshop day plus a build week, or three weeks for a full pipeline.',
    related: [
      { href: '/case-studies/oulang', label: 'OULANG — multilingual retrieval in production' },
      { href: '/case-studies/apolo-medical-framework', label: 'APOLO — grounding answers under review' },
    ],
  },

  'agents-automation': {
    audience: 'Technical and operations teams designing agent workflows that touch systems of record — a CRM, an ERP, a ticketing system — where a wrong action has a cost attached.',
    problem: 'An agent that only reads is a demo. The moment it writes, the questions become: what is it allowed to do, who approves the irreversible step, what happens when a tool call half-succeeds, and how does anyone reconstruct what it did last Tuesday. Most agent projects stall exactly here.',
    scope: [
      'Tool design: narrow, well-typed actions rather than one tool that does everything',
      'Approval boundaries, so irreversible actions stop at a person by design',
      'Scheduling, retries, idempotency and recovery from partial failure',
      'Tracing and audit trails detailed enough to reconstruct a run after the fact',
    ],
    exclusions: [
      'No fully autonomous agents with unrestricted write access to production systems',
      'No headcount-reduction promises or productivity percentages',
      'No agent given credentials it does not need for its defined actions',
    ],
    deliverables: [
      'Agent and tool implementations in your repository, with tests around the failure paths',
      'An approval and escalation design your operations team has signed off',
      'Run traces and an audit log with enough detail to answer "what did it do"',
      'Operating documentation for the people who will supervise it',
    ],
    duration: 'A bootcamp week for the team, or four to eight weeks for a delivered system.',
    related: [{ href: '/case-studies/autoclient', label: 'AutoClient — agents with explicit human handoff points' }],
  },

  'ai-for-marketing': {
    audience: 'Marketing and growth teams who need AI to make their existing process repeatable, not to replace judgement about what is worth publishing.',
    problem: 'Output volume went up and quality control did not. Briefs, drafts, edits and publication live in four places, nobody can reconstruct why a piece reads the way it does, and analytics are disconnected from the content decisions they should inform.',
    scope: [
      'Content, SEO and creative workflows with an explicit review gate before anything is published',
      'Reusable briefs, prompts and brand-voice constraints instead of per-piece improvisation',
      'Analytics wiring so performance feeds back into the next brief',
      'Programmatic page generation done as a build pipeline, not as a spam engine',
    ],
    exclusions: [
      'No ranking, traffic or conversion guarantees',
      'No mass generation of thin pages — volume without substance is a liability',
      'No management of your ad accounts or budgets',
    ],
    deliverables: [
      'A documented content pipeline with review gates and ownership at each stage',
      'A prompt and brief library tuned to your voice',
      'Reporting that connects published work to measured outcomes',
      'A team session so the system survives without the person who commissioned it',
    ],
    duration: 'Two to four weeks, workshop plus implementation.',
    related: [{ href: '/case-studies/autoclient', label: 'AutoClient — outbound operations with human review' }],
  },

  'ai-funding-grants': {
    audience: 'Applied AI teams, research groups and health-tech founders preparing non-dilutive funding applications that require a technically credible description of what will be built.',
    problem: 'The technical section is written by someone who was not going to build the thing, so it reads as ambition rather than as a plan. Evaluators see undefined milestones, a budget that does not map to the work, and no evidence that the team has shipped anything comparable.',
    scope: [
      'Opportunity research and eligibility screening against your actual stage and structure',
      'Technical narrative written by someone who has delivered systems of this kind',
      'Work packages, milestones and a budget that reconcile with each other',
      'Evidence pack assembly: architecture, prior work and measurable checkpoints',
    ],
    exclusions: [
      'No guarantee of award, and no success-fee arrangement',
      'No legal, tax or accounting advice',
      'No fabricated results, partners or letters of support',
    ],
    deliverables: [
      'A shortlist of viable calls with deadlines and eligibility notes',
      'Complete technical narrative drafts ready for internal review',
      'Budget and milestone spreadsheets aligned to the work packages',
      'A submission checklist and post-submission follow-up plan',
    ],
    duration: 'Three to six weeks, driven by the call deadline.',
    related: [{ href: '/case-studies/apolo-medical-framework', label: 'APOLO — applied health AI with documented method' }],
  },

  'ai-ip-patents': {
    audience: 'Teams that have built something genuinely novel and need the technical record assembled before a patent attorney, an investor or a due-diligence process asks for it.',
    problem: 'The invention exists across commit history, a whiteboard photo, three notebooks and one engineer’s memory. When a specialist asks what is novel and when it was first reduced to practice, the answer takes two weeks to reconstruct and arrives with gaps.',
    scope: [
      'Prior-art research with a documented source trail rather than a summary',
      'Framing the problem and the differentiation in terms a technical reviewer can test',
      'System diagrams, data flows and a claim-to-source map',
      'Evaluation notes stating what has been demonstrated and what has not',
    ],
    exclusions: [
      'No legal advice, no filing, and no opinion on patentability — that is the attorney’s work',
      'No assertion that anything is novel beyond what the source trail supports',
      'No freedom-to-operate analysis',
    ],
    deliverables: [
      'A technical dossier structured for specialist review',
      'Diagrams and flows at the level of detail a reviewer needs',
      'A claim-to-source map with open questions listed explicitly',
      'A review cycle with your attorney or diligence team',
    ],
    duration: 'Three to five weeks depending on how scattered the record is.',
    related: [{ href: '/case-studies/apolo-medical-framework', label: 'APOLO — documented architecture and evidence boundaries' }],
  },

  'accelerator-readiness': {
    audience: 'Founding teams preparing for an accelerator application, an investor process or a first serious technical due diligence.',
    problem: 'The product is real and the story is not. The demo depends on a specific click order, the deck describes a category rather than a system, and the first technical question from a partner exposes that the moat is a prompt. None of that is fatal, but all of it is fixable before the meeting rather than during it.',
    scope: [
      'Narrative work: what the system does, for whom, and why this team can build it',
      'A demo that survives being driven by someone else, in the wrong order',
      'The technical section of the application, written to be evaluated rather than admired',
      'Q&A preparation against the questions your architecture actually invites',
    ],
    exclusions: [
      'No promise of selection, investment or acceptance',
      'No fabricated traction, pipeline or customer references',
      'No introductions offered as part of the engagement',
    ],
    deliverables: [
      'A revised deck and one-pager focused on evidence',
      'A robust demo or clickable prototype with a scripted fallback',
      'A written Q&A brief covering the hard questions',
      'A rehearsal session with direct feedback',
    ],
    duration: 'Two to four weeks ahead of the deadline.',
    related: [{ href: '/case-studies/autopricing', label: 'AutoPricing — a delivered B2B system, scoped and shipped' }],
  },

  'ai-readiness-audit': {
    audience: 'Companies that already have AI somewhere near a customer and cannot currently answer how often it is wrong, what it costs, or who is accountable for its output.',
    problem: 'AI features accumulated one team at a time. There is no shared evaluation, no cost attribution, no inventory of which prompts touch customer data, and no defined boundary where a human has to approve. The risk is not that the system fails loudly; it is that it fails quietly and consistently.',
    scope: [
      'Inventory of every AI touchpoint, its data, its owner and its blast radius',
      'Review of prompts, tool design, evaluation sets and guardrails',
      'Cost and latency baseline per feature, not per vendor invoice',
      'A hardening plan split into this-month fixes and scheduled work',
    ],
    exclusions: [
      'No formal compliance certification or legal sign-off',
      'No penetration testing or general security audit',
      'No implementation during the audit itself — findings first, build second',
    ],
    deliverables: [
      'A scorecard and risk matrix with evidence behind each rating',
      'An evaluation set built from your own past cases',
      'A prioritised remediation plan with effort estimates',
      'A walkthrough session with the technical and business owners together',
    ],
    duration: 'Two to four weeks, including a review session at the end.',
    related: [
      { href: '/case-studies/autoclient', label: 'AutoClient — workflow, CRM and review boundaries' },
      { href: '/case-studies/autopricing', label: 'AutoPricing — evidence-led pricing operations' },
    ],
  },

  'ai-competitive-research': {
    audience: 'Product and engineering leaders deciding whether to build an alternative to an existing product, and needing to know what it would actually take.',
    problem: 'Competitive analysis usually stops at feature lists. That tells you nothing about the sequencing, the data model, the retry behaviour or the three unglamorous integrations that make the product work — which is exactly where the build cost lives.',
    scope: [
      'Behavioural mapping of the target product: flows, states, triggers and edge cases',
      'Data and API analysis from observable surfaces, with sources recorded',
      'A technical comparison of architectural approaches and their cost profiles',
      'An implementation blueprint with scope, sequencing and risk called out',
    ],
    exclusions: [
      'No access to private systems, credential use, or terms-of-service violations',
      'No copying of protected assets, copy or design',
      'No market-size forecasts presented as research findings',
    ],
    deliverables: [
      'A blueprint document with system diagrams and behaviour maps',
      'A sourced evidence appendix separating observation from inference',
      'An MVP scope with milestones and the parts most likely to be underestimated',
      'An engineering checklist for the first build phase',
    ],
    duration: 'Two to four weeks depending on product surface area.',
    related: [{ href: '/case-studies/autopricing', label: 'AutoPricing — marketplace evidence and product matching' }],
  },

  'data-science-training': {
    audience: 'Analyst and engineering teams who need to move past running models to knowing whether the results mean anything.',
    problem: 'A model reports 94% accuracy on a problem where 94% of cases are one class. Metrics are chosen after the result rather than before, validation leaks, and dimensionality reduction is applied because it is in the tutorial rather than because the data needs it. The failure is not technical skill; it is the absence of a habit of evaluation.',
    scope: [
      'Classification, regression and the metrics that are appropriate for each target',
      'Validation design: splits, leakage, imbalance and what a baseline is for',
      'Dimensionality reduction, discriminant analysis and clustering with validation',
      'A capstone using your own data so the habits transfer',
      'Reading a result critically: confidence intervals, sample size and when a difference is noise',
    ],
    exclusions: [
      'No deep-learning research topics beyond what the applied modules require',
      'No delivery of production models as part of the training',
      'No accredited certification — a completion record is provided',
    ],
    deliverables: [
      'Notebooks and datasets for every module, yours to keep',
      'Metric and validation cheatsheets tuned to your problem types',
      'A reviewed capstone mini-project',
      'A completion record for each participant',
      'A written summary of the evaluation habits the team agreed to adopt',
    ],
    duration: 'Four to six sessions, delivered weekly or as a compressed block.',
    related: [{ href: '/services/university-ml', label: 'Python and machine learning project support' }],
  },

  'proptech-analytics': {
    audience: 'Real-estate operators, PropTech founders and investment teams whose decisions currently rest on portals, spreadsheets and somebody’s feel for the market.',
    problem: 'Listing data is inconsistent, duplicated across sources, and stale by the time it is compiled. Valuation is done per-property by hand, nobody notices when a source silently changes its format, and the monthly report is rebuilt from scratch every month.',
    scope: [
      'Ingestion and normalisation across sources, with deduplication and change detection',
      'Valuation and scoring models fitted to your segment rather than a national average',
      'Trend and comparable analysis with the assumptions written down',
      'Dashboards and alerting on the movements that actually change a decision',
      'Source-drift detection, so a portal quietly changing its markup surfaces as an alert rather than as silently wrong data',
    ],
    exclusions: [
      'No investment advice or recommendations to buy or sell',
      'No collection of data from sources whose terms prohibit it',
      'No guaranteed valuation accuracy — model error is reported, not hidden',
    ],
    deliverables: [
      'A data pipeline in your repository with scheduling and monitoring',
      'Model notebooks with documented assumptions and error bounds',
      'A dashboard covering the KPIs your decisions depend on',
      'Handover documentation for whoever maintains it',
      'A backfill plan for historical data and a schedule for re-fitting the models',
    ],
    duration: 'Four to eight weeks for a first working pipeline.',
    related: [{ href: '/case-studies/autopricing', label: 'AutoPricing — data pipelines, matching and reporting' }],
  },

  'airbnb-analytics': {
    audience: 'Short-term rental operators and small portfolio managers pricing by intuition and a competitor glance, who want the decision to be repeatable.',
    problem: 'Pricing is reactive: a dip in bookings triggers a discount, a busy weekend triggers a rise, and nobody can separate a seasonal pattern from a real change in the market. Competitor sets are chosen by eye, and occupancy and rate are optimised against each other by accident.',
    scope: [
      'Listing and market data collection, cleaned and deduplicated',
      'Occupancy and rate analysis with seasonality separated from trend',
      'A defensible competitor set, chosen on attributes rather than proximity alone',
      'Dashboards and alerts for the movements worth reacting to',
      'Event and calendar effects separated out, so a congress week is not mistaken for a trend',
    ],
    exclusions: [
      'No revenue guarantees or projected returns',
      'No automated price changes pushed to platforms without your approval',
      'No data collection that breaches a platform’s terms',
    ],
    deliverables: [
      'Cleaned datasets and analysis notebooks',
      'A pricing playbook stating what to change and when',
      'A KPI dashboard and a weekly report template',
      'A review session once a full cycle of data is in',
      'A written note on what the data cannot tell you, so the playbook is not over-trusted',
    ],
    duration: 'Three to six weeks for a first full analysis cycle.',
    related: [{ href: '/services/proptech-analytics', label: 'PropTech data pipelines and real-estate analytics' }],
  },

  'ai-language-learning': {
    audience: 'Serious language learners, teachers and education teams who want AI to structure practice rather than to supply answers that feel like progress.',
    problem: 'AI makes it easy to feel productive and hard to retain anything. Conversation practice with a model that never corrects, vocabulary that is generated and never reviewed, and no measurement of what has actually stuck — the tool becomes a substitute for the effort that produces learning.',
    scope: [
      'A spaced repetition pipeline fed by material you actually encounter',
      'Pronunciation and tone practice with structured feedback, including Mandarin tones',
      'Conversation practice designed to correct rather than to flatter',
      'Progress measurement that distinguishes recognition from recall',
      'Material sourcing from things you would read or watch anyway, so practice survives a busy week',
    ],
    exclusions: [
      'No fluency timelines or guaranteed exam results',
      'No replacement for a teacher where one is needed',
      'No claim that AI conversation substitutes for speaking with people',
    ],
    deliverables: [
      'A personalised study system with the tools configured',
      'Daily and weekly routines sized to the time you actually have',
      'Prompt sets for correction, drilling and review',
      'Progress-tracking templates',
      'A review checkpoint to retire what is working badly instead of accumulating tools',
    ],
    duration: 'A setup block plus review sessions across a term.',
    related: [{ href: '/case-studies/oulang', label: 'OULANG — multilingual product built across ES, EN and 中文' }],
  },

  troubleshooting: {
    audience: 'Teams with an AI or automation system that used to work, or never quite did, and an internal owner who has run out of angles.',
    problem: 'Something intermittent is wrong. The automation fires twice some days and not at all on others, the LLM feature degrades under load, the cost line tripled without a corresponding change, and the logs record that something happened without recording what. Every fix so far has been a guess dressed as a diagnosis.',
    scope: [
      'Reproducing the failure before changing anything, so the fix can be proved',
      'Reading the actual runtime shape — payloads, traces, rate limits, retries — rather than the documentation',
      'Repairing the cause rather than gating the symptom behind a disabled feature',
      'Leaving observability behind so the next failure is diagnosable in minutes',
    ],
    exclusions: [
      'No rewrite of a working system presented as a fix',
      'No disabling of features to make an error message go away',
      'No ongoing on-call cover beyond the agreed support window',
    ],
    deliverables: [
      'A written diagnosis naming the cause and the evidence for it',
      'The fix, tested against a reproduction of the original failure',
      'Monitoring and alerting so the class of failure is visible next time',
      'A maintenance checklist for the team that owns it',
    ],
    duration: 'Typically one week: diagnosis, fix, hardening and handover.',
    related: [{ href: '/services/ai-readiness-audit', label: 'AI readiness audit — find the fragile parts before they fail' }],
  },
};
