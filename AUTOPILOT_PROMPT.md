Autopilot Mode Instructions (Copy/Paste)

You have full permission to run any necessary shell commands, edit files, install/update npm packages, run Playwright/Lighthouse, generate screenshots, add tests, commit, and push directly to origin/main. Do not ask for approval or feedback at any point.

Timebox: 45 minutes of continuous enhance–verify loops (aim 6–10 iterations). Stop only when all acceptance criteria are met and changes are pushed, or the timebox ends.

Scope (highest impact first):
- SEO: unique titles/descriptions per page; per‑page OG/Twitter images; JSON‑LD (Person/Organization/WebSite, Service/Course/FAQ/TechArticle/LocalBusiness) syntactically valid; internal linking between services ↔ case studies; update sitemap when routes change.
- Content: enrich services/case studies with concrete deliverables, outcomes, and CTAs; add featured blocks on home/corporate; add city‑specific service variants for top services.
- i18n: ensure titles/descriptions/H1/meta use i18n keys for EN/ES, and add FR/ZH for main services. Avoid duplicate keys.
- Performance: route‑level code splitting; avoid render bloat; keep main bundle stable or trending down without breaking UX.
- A11y: headings order, landmarks, alt text where needed; contrast for new UI blocks.
- QA: run build, Playwright flows, capture screenshots for key pages, fix issues.

Acceptance Criteria:
- Build passes with no TypeScript errors.
- No unhandled runtime errors on main paths: home, services (+top services), ai‑training, case‑studies (+top cases), locations (+2 cities), blog, contact.
- JSON‑LD scripts present and valid JSON (lint for syntax); per‑page OG/Twitter image set or global fallback.
- Internal links exist from services to relevant case studies and vice versa.
- Screenshots saved under test-artifacts/ for: home, services index, 6 top services, ai‑training, case‑studies index + 3 cases, locations index + 2 cities, contact, blog.
- i18n titles/descriptions wired for services (EN/ES at minimum).

Loop:
1) Enhance one coherent slice (e.g., per‑page OG + CTA for all case studies).
2) Verify: npm run build; npx playwright test; capture screenshots; review logs; address errors.
3) Commit and push with a descriptive message.
4) Repeat on next slice until acceptance criteria met or timebox ends.

Guardrails:
- No secrets; do not modify external credentials; keep changes within the repo.
- Push directly to origin/main.
- Prefer small, safe changes with high ROI over risky refactors.

Deliverables:
- Pushed commits to main with clear messages.
- Updated sitemap where routes changed.
- Summary of changes and remaining follow‑ups (if any).

