# samihalawa.com — Full Visual and Workflow Audit

**Audit date:** 3 August 2026
**Scope:** public website, navigation, projects, services, case studies, CV entry points and downloads, blog, search, contact, booking, newsletter, responsive layouts, route delivery and public-copy quality.

## Executive result

The site kept its strongest editorial homepage and CV direction, but four high-traffic sections had drifted back toward a generic AI-agency template: gradient or tinted panels, pill filters, repeated rounded cards, oversized sales framing and visually interchangeable layouts. The contact form also contained an irrelevant required US arbitration and marketing-consent field supplied by the form provider.

This audit corrected those class-wide issues rather than patching one page. Projects, Services, Blog and Contact now use the same warm editorial canvas, serif hierarchy, square controls, typographic rules and content-specific layouts as the strongest existing pages. The provider-level consent field was removed from the canonical Close form and the corrected form was published.

## Coverage and method

- Inspected the current repository, route registry, generated site, Git state and project operating ledger before changing source.
- Built and prerendered the complete site: **52 application routes** and **55 article routes**.
- Verified the generated metadata, JSON-LD, sitemap, Open Graph assets and physical 404 document with the repository verifier.
- Requested every **106 sitemap URLs** from the local production preview: **106 returned HTTP 200**.
- Inspected the live production sitemap and all 106 production routes before the changes; every route returned 200 with a rendered H1 and the unknown-route surface returned a real 404.
- Checked desktop and mobile rendering for Home, Projects, Services, Blog and Contact; checked representative CV, article, search, case-study and service routes through the generated-route verification and route crawler.
- Tested navigation open/close, the four-language selector, project search, blog search, Close form rendering and Calendly destinations.
- Audited all 135 public CV files against their source package. The seven HTML variants were content-equivalent; Cloudflare's email-protection rewrite accounted for their expected byte differences.
- Used Anchor Browser for an independent production probe. Its focused task returned the correct page title, primary H1 and navigation with no visible error. Its broad task returned only compressed aggregate indexes, so no defect claim in this report depends on that opaque output.

## Defects found and resolved

### 1. Cross-site visual inconsistency

**Observed:** Projects, Services, Blog and Contact used gradients, glass-like panels, pill filters, large rounded cards and generic agency compositions, while Home and CV used a sharper editorial system.

**Resolution:**

- Rebuilt Services as a numbered editorial index with concise service descriptions and related case studies.
- Rebuilt Blog as a publication index with an editorial masthead, square search control, underline filters and a two-column ruled article list.
- Rebuilt Contact around a two-column editorial introduction, factual company details, the provider form, newsletter, booking and next-step sequence.
- Reworked Projects across its hero, metrics, workstreams, project register, filters, chronology and CTA so the visual system is class-consistent rather than one isolated patch.

**Rendered proof:** desktop and mobile screenshots showed the serif hierarchy, rule-led sections, square controls and no horizontal overflow. At 1024px, Projects, Services, Blog and Contact stayed within a 1014px body width. At 375px, Contact and Blog stayed within a 365px body width.

### 2. Inappropriate legal and marketing consent in the contact form

**Observed on production:** the embedded Close form required visitors to agree to US TCPA arbitration and marketing calls/texts. This was provider-rendered public copy, not source code in the site.

**Resolution:** removed that exact Legal Agreement field from the canonical Close form and published it. The direct provider URL now renders only:

- Full name
- Email address
- Message
- Submit

**Provider proof:** Close returned `Form published successfully`; the public provider form no longer contains the consent text or a checkbox. The site keeps the same approved form ID and does not hide provider content with CSS.

### 3. Broken internal article links

**Observed:** one RAG article linked to three nonexistent article slugs:

- `/blog/advanced-rag-techniques`
- `/blog/llm-cost-optimization`
- `/blog/rag-vs-finetuning`

**Resolution:** replaced them with three existing canonical articles covering long context, fine-tuning versus prompting and LLM unit economics. The generated route verifier and sitemap crawl pass afterward.

### 4. Public copy exposed implementation-process wording

**Observed:** the portfolio described Umbramed with packaging/payment/funding “prep” wording and described VibraCode as “current repository work.” Contact copy also made generic compliance-ready and delivery-speed claims.

**Resolution:** rewrote these as professional descriptions of delivered scope, capabilities and product value. The business-automation and contact copy were corrected in English, Spanish, French and Chinese. A public-copy sweep now returns no internal-proof markers, process labels or Coursera-first credential copy in the site source.

### 5. Incorrect and stale footer details

**Observed:** the visible London registered-office address linked to a Madrid map query, and the footer still displayed 2025.

**Resolution:** the map now opens the registered London address, and all four language variants show 2026.

## Workflow verification

| Workflow | Result | Current proof |
|---|---|---|
| Primary desktop navigation | Pass | Home, Projects, Services, Case Studies, CV and Blog are visible in the header. |
| Mobile navigation | Pass | “Open menu” becomes “Close menu”; all main destinations are present; closing restores the original state. |
| Language selector | Pass | English, Español, Français and 中文 are available; selecting Español changed the Projects H1 to “Productos de IA, desde la primera decisión hasta la operación real.” English restoration was verified. |
| Project discovery | Pass | Searching `voice` returned one matching project, “Telnyx voice tooling,” without horizontal overflow. |
| Blog discovery | Pass | The blog loaded 55 articles; searching `LangChain` returned 2 articles on mobile. |
| Contact form | Pass at provider; site embed refresh rechecked after release | Canonical Close form published with name, email and message only; no form submission was made during testing. |
| Newsletter | Pass for rendered controls and HTML validation | Native email field and Subscribe action remain separate from Close; no real subscription was sent during testing. |
| Strategy booking | Pass | Calendly links resolve to `https://calendly.com/sami-halawa/30min`. |
| CV surfaces | Pass | Current site exposes seven complete role profiles, 85 project/engagement entries and 53 verified qualifications, with separate visual and ATS downloads. |
| Blog article delivery | Pass | 55 article routes are prerendered and included in route/SEO verification. |
| Unknown route | Pass in generated/production serving layer | Physical 404 document passed verification; production returned a real 404 before release. Vite preview itself always falls back to the SPA shell and is not used as 404 proof. |

## Public inventory reconciliation

- The detailed project inventory contains **85** professional projects and engagements.
- The visitor-facing Projects headline shows **84 verified projects and collaborations** because one historical inventory item remains approximate. These are intentionally different scopes, not an arithmetic defect.
- The CV surface currently states **53 verified qualifications** and retains separate role-oriented visual and ATS editions.
- No achievements or qualifications were removed in this redesign.

## Verification commands

- `git diff --check`
- `npm run build`
- `npm run seo:verify`
- 106-URL local sitemap request sweep
- Public-copy and generic-template class greps across the four redesigned surfaces
- Desktop and mobile rendered checks with interaction readback
- Direct Close provider form readback after publication

## Release proof

Release acceptance requires local `main` and `origin/main` equality, a terminal Coolify deployment for that same commit, and a fresh production check of the redesigned routes, embedded form, links, 404 and responsive layouts. The final task handoff records the immutable commit and deployment identifier because neither exists until this report and its audited source are committed.
