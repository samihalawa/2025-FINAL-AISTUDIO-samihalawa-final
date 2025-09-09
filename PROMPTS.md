Master Production Prompt — Portfolio Demos, Assets, and URLs

Objective: Generate a cohesive set of production-ready demo pages and asset references for a multi-language AI consulting portfolio. The outputs must be real, stable, and suitable for embedding and public sharing. No placeholders. Every element must be fully described and implemented with realistic data, behavior, and design consistent with a premium consulting brand.

Brand and Site Context
- Brand: “Sami Halawa — AI Training & Solutions for Businesses.” Voice: expert, direct, helpful.
- Visual style: Clean, accessible, TailwindCSS-based. Neutral palette: slate/white; accent via subtle indigo.
- Typography: System stack via Tailwind defaults for performance.
- Target: Decision makers (C‑level, Directors) and technical teams (Engineering, Data, Product).

Global Requirements
- Accessibility: Semantic HTML, alt text for images, visible focus states, sufficient color contrast.
- Performance: Lightweight pages, no oversized images, defer nonessential JS, cache-friendly headers.
- Security: No third‑party script that blocks iframe embedding; avoid external content that sets `X-Frame-Options: DENY`.
- Embedding: Each demo must be embeddable in an iframe and fully functional as a standalone page.
- Realism: Seed with realistic sample data (names, companies, KPIs) and deterministic behavior (no random placeholders).

Deliverables
1) Six standalone demos, hosted at:
   - /demos/autoclient/index.html — Client outreach agent demo (email sequencing + CRM signals)
   - /demos/spreadsheet/index.html — AI spreadsheet assistant demo (NL → formulas → insights)
   - /demos/cryptoagent/index.html — Trading assistant demo with paper P/L and live-feel chart
   - /demos/banking/index.html — Personal finance concierge (budget insights + alerts)
   - /demos/apollomedical/index.html — Clinical decision support vignette (case triage UI)
   - /demos/autosite/index.html — Meta showcase of AI-first web delivery pipeline

2) Project card images: stable Unsplash image IDs sized via images.unsplash.com with `auto=format&fit=crop&w=1200&h=800&q=80`.

3) Testimonial avatars: stable Unsplash portrait image IDs sized `w=256&h=256&crop=faces` with descriptive alts.

4) Update constants to use internal demo URLs above and real image URLs; remove any Picsum/random placeholders; ensure alt text is provided via existing i18n titles.

5) Keep all content coherent with site copy and translations; do not introduce conflicting terminology.

Detailed Demo Specifications

Demo 1 — AutoClient (Client Outreach Agent)
- Purpose: Show an enterprise agent orchestrating client follow‑ups, sentiment classification, and CRM enrichment.
- Structure: Header (product + SLA badge), KPI band (Open Rate, Replies, Meetings), Sequences table (status, SLA, last touch), Right drawer (Lead profile with enrichment and last 5 signals), Footer CTA (“Book a Consultation”).
- Behavior: 
  - “Simulate Next Step” runs deterministic state transitions: PENDING → SENT → OPENED → REPLIED.
  - “Classify Sentiment” applies a simple rule to the most recent message and updates a pill label.
  - “Push to CRM” shows a non-blocking toast “Synced to HubSpot: contact_id=HS-982341.”
- Data: Sample contacts (Acme Robotics, TerraBank, Helio Health), real-looking email subjects, timestamps (ISO‑8601 displayed as local), SLA targets.

Demo 2 — AI Spreadsheet Assistant
- Purpose: Demonstrate NL to formula, typed cells, and insight cards.
- Structure: Toolbar (prompt input, ‘Explain’, ‘Insert Formula’), Grid (A1:K20), Insight panel (3 cards: trend, anomaly, forecast note).
- Behavior: 
  - Input: “Show monthly MRR growth and flag anomalies where churn > 4%.”
  - Action: Fills formula cells in a visible column, highlights anomaly rows, and renders 3 cards with plain‑English explanations.

Demo 3 — CryptoAgent
- Purpose: Present a risk‑aware trading assistant with paper trades and a responsive sparkline.
- Structure: Header (symbol selector BTC/ETH/SOL), Price panel (last price, 24h change), Chart (Chart.js line pre-seeded), Trade panel (size selector, Buy/Sell), Positions table (avg price, P/L), Footer risk notice.
- Behavior: Faked data seeded via deterministic arrays; Buy/Sell updates a paper position and P/L instantly.

Demo 4 — Banking Concierge
- Purpose: Personal finance insights and proactive alerts.
- Structure: Budget donuts (Spend vs Plan by category), Transactions table (last 10), Right rail (alerts), Micro chat (3 canned messages with CTA to full site).
- Behavior: Clicking an alert scrolls and highlights related transactions.

Demo 5 — ApolloMedical
- Purpose: Triage/decision support with evidence capture.
- Structure: Patient banner (MRN, age, vitals), Differential list with likelihood %, Evidence panel (labs + imaging thumbnail from Wikimedia stable asset), Action buttons (Order Labs, Discharge, Admit). All non-destructive.
- Behavior: Selecting a differential updates evidence notes; “Generate Summary” composes a concise assessment & plan in-page.

Demo 6 — AutoSite (Meta)
- Purpose: Showcase ops excellence: CI build, i18n, accessibility, performance.
- Structure: Cards for “Build Pipeline,” “i18n Coverage,” “Accessibility,” “Performance,” each with clear acceptance checks and green statuses.

Asset URLs (Images)
- autoclient: https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=800&q=80
- spreadsheet: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80
- cryptoagent: https://images.unsplash.com/photo-1569025690938-a00729c9e9f1?auto=format&fit=crop&w=1200&h=800&q=80
- banking: https://images.unsplash.com/photo-1556767576-cf63a644b5f2?auto=format&fit=crop&w=1200&h=800&q=80
- apollomedical: https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&h=800&q=80
- autosite: https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&h=800&q=80

Avatar URLs (Testimonials)
- Jane Doe: https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=256&h=256&q=80
- John Smith: https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&h=256&q=80
- Emily White: https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=256&h=256&q=80

Output Commit Instructions
- Update `constants.ts` with the demo URLs and image/avatar URLs above.
- Add all demo pages under `public/demos/*/index.html`, each self-contained and iframe‑embeddable.
- Keep existing i18n keys for titles/descriptions; no breaking changes.
- Build, commit with message “feat: production demos, assets, and URLs”, push.

Now produce the outputs exactly as specified above.

