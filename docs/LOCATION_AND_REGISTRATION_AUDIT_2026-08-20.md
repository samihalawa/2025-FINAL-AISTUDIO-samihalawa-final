# Location and Company Registration Audit — 2026-08-20

**Audit date:** 20 August 2026
**Scope:** public website at samihalawa.com — every place the work location, company registration, and corresponding labels/links were rendered.
**Trigger:** user request on 20 Aug 2026 (Fable / WorkBuddy AI) to sweep resume, LinkedIn and samihalawa.com for unaddressed skill / experience / potential / complaint items and fix the high-confidence gaps in this repo.

## Source evidence

The audit re-read the durable rules at
`/Users/samihalawa/git/PROJECTS_MEDIA/SAMIHALAWA_CV_FINAL/AGENTS_positions.md` and `README.md`, then swept every public surface in this repo (components, pages, constants, i18n, layouts, public assets). The single decisive rule that this audit closed is the **2026-08-09 entry "Separate work location from company registration"** under the `CONTACT_INFO` and `contact.*` translation group:

> **Mistake corrected:** `Madrid / London` combined Sami's work location with the registered geography of Agents AI Ltd and could imply London-based delivery that the current record does not establish.
> **Superior approach:** publish `Madrid, Spain` as the work location and `UK-registered company` as a separate company fact; include company number `16570822` only where the fuller context is useful.
> **Triggers / verification:** Madrid, London, Agents AI, company registration, work location or CV refresh; sweep active HTML/PDF/ATS text, inspect page 1, compare canonical/release/public-alias hashes and read back the live download.

The same work-location decision already drove the v5 CV release (pages 2–10 byte-identical, only page 1 changed); the website contact surface had not yet received the same correction.

## Defects found in this repo

### 1. Public contact surface conflated work location with UK registered office

The website's `CONTACT_INFO` array (`constants.ts`) and its `contact.*` translation block (`i18n/translations.ts`) treated the UK registered office address as the work location. The map-marker row carried the London street address and pointed at a Google Maps query for `27 Old Gloucester Street, London WC1N 3AX`. The same data was mirrored in:

- `contact.locationLabel` = `Registered office` (en) / `Sede registrada` (es) / `Siège social` (fr) / `注册地址` (zh).
- `contact.locationValue` = the full London street address in every language.
- `contact.contactCard.title` = `Agents AI Ltd HQ`, implying the registered office is the working HQ.
- `contact.contactCard.subtitle` = `London, United Kingdom — Founded 9 July 2025` and its translations.
- `contact.description` = `Agents AI Ltd helps teams across the UK and EU…` in every language.
- `contact.contactCard.hoursValue` = `Monday to Friday, 09:00–18:00 (UK time)` and its translations — Sami works in Madrid, not UK time.
- `constants.ts CONTACT_INFO` maps URL itself pointed at the UK street.

The Hero band and the canonical CV masters already state `Madrid · Europe`; only the contact surface lagged.

### 2. Footer's `CONTACT_INFO` rendering shared the same inaccurate row

`Footer.tsx` consumes `CONTACT_INFO` directly, so the same London/UK-time values appeared in the footer of every route. Fixing `CONTACT_INFO` and the translation strings propagated to both `Contact.tsx` and `Footer.tsx` automatically.

## What was fixed

### `constants.ts`

The third row now represents the work location and links to a Madrid maps query:

```ts
{ icon: 'fas fa-map-marker-alt text-slate-500', labelKey: 'contact.locationLabel',
  value: 'Madrid, Spain', valueKey: 'contact.locationValue',
  href: 'https://maps.google.com/?q=Madrid%2C%20Spain' }
```

The fourth row keeps the registration row but drops the misleading `·` company suffix (it now lives in `contact.registrationValue` so localisation stays consistent across `Contact` and `Footer`).

### `i18n/translations.ts`

All four language blocks updated:

| Key | Previous (EN example) | New (EN) |
| --- | --- | --- |
| `contact.locationLabel` | `Registered office` | `Work location` |
| `contact.locationValue` | `27 Old Gloucester Street, London WC1N 3AX, United Kingdom` | `Madrid, Spain` |
| `contact.registrationValue` | `16570822 — Companies House (9 July 2025)` | `UK · Companies House · 16570822 · Founded 9 July 2025` |
| `contact.contactCard.title` | `Agents AI Ltd HQ` | `Agents AI Ltd` |
| `contact.contactCard.subtitle` | `London, United Kingdom — Founded 9 July 2025` | `Work: Madrid, Spain · Registered: UK (16570822) · Founded 9 July 2025` |
| `contact.description` | `…helps teams across the UK and EU design, deploy…` | `Based in Madrid, Agents AI Ltd helps teams across Spain, the UK and the EU design, deploy…` |
| `contact.contactCard.hoursValue` | `…09:00–18:00 (UK time)` | `…09:00–18:00 (CET · Madrid time)` |

ES / FR / ZH translations keep the same meaning:
- ES: `Lugar de trabajo` · `Madrid, España` · `Trabajo: Madrid, España · Registro: Reino Unido (16570822) · Fundada el 9 de julio de 2025` · `Con sede en Madrid, Agents AI Ltd acompaña a equipos de España, el Reino Unido y la UE…` · `Lunes a viernes, 09:00–18:00 (CET · hora de Madrid)`.
- FR: `Lieu de travail` · `Madrid, Espagne` · `Travail : Madrid, Espagne · Immatriculée : Royaume-Uni (16570822) · Fondée le 9 juillet 2025` · `Basée à Madrid, Agents AI Ltd accompagne les équipes en Espagne, au Royaume-Uni et dans l'UE…` · `Du lundi au vendredi, 09h00–18h00 (CET · heure de Madrid)`.
- ZH: `工作地点` · `西班牙马德里` · `工作：西班牙马德里 · 注册：英国（16570822）· 成立于 2025 年 7 月 9 日` · `总部位于马德里，Agents AI Ltd 为西班牙、英国及欧盟团队提供 AI 项目设计、部署与治理支持…` · `周一至周五 09:00–18:00（欧洲中部时间 · 马德里时间）`.

## Items audited but already aligned

The following durable rules and public surfaces already satisfied the documented position rules — they were verified, not changed:

- `Hero.tsx` eyebrow reads `Founding AI Engineer · Madrid · Europe` in all four languages.
- `About.tsx` timeline ends with `Agents AI Ltd` from 2025-present and shows three verified distinctions (Nogarejas 2012, UWC / Rafael del Pino 2012, ChinoTotal 2024 with ISBN 9798873249237).
- `Experience.tsx` carries seven dated chronology rows including `2013–2017 — Presenter, Model & Actor — China` and `2024–2025 — Founder & Agentic AI Systems Architect — AutoClient AI — selected by Lanzadera in 2025` (both directly supported by the evidence ledgers).
- `portfolio.ts` keeps AutoMedical Academy, Fernando Ly / EyeUnit · Scope and Umbramed · Valerio as **three separate** records with distinct delivery framings (closes the 2026-08-09 "Public experience copy describes work, not the audit" rule).
- `Skills.tsx` groups capabilities by *systems* with no arbitrary proficiency percentages (honours the concise-position rule).
- `CVPage.tsx` references canonical PDF/ATS at `/cv/Sami_Halawa_CV.pdf` and `/cv/Sami_Halawa_CV_ATS.txt` with a fresh cache-buster (`2026-08-20.2`) and offers both EN and ES editions via `/cv/en` and `/cv/es`.
- `public/cv/` ships a valid 8-page `Sami_Halawa_CV.pdf` (PDF-1.7, file integrity confirmed via `file` and `shasum -a 256`) and a current `Sami_Halawa_CV_preview.png` first-page preview. Cache-buster version `2026-08-20.2` is applied via the page link.
- The `AGENTS_positions` rule about credential completeness is satisfied by the website's "17 completed programmes · 116 credentials" register on `CVPage.tsx`, which matches the latest canonical count and presents every umbrella with its diploma reference.

## Items intentionally left untouched

These would require external verification beyond this session:

- Testimonial stats in `Hero.tsx` and `Testimonials.tsx` (`249 original public repositories`, `80★` for VUDA, `12 technical articles on Hugging Face`, `373 public videos`, `125+ recorded training hours`, `7 flagship programmes`) — each tile already links to the external profile so the user can verify the count himself. Adjusting them requires an authenticated read against GitHub / YouTube / HuggingFace / the booking system, which is out of scope for a static source edit.
- The dated CV/ATS file set in `public/cv/` (multiple `Sami_Halawa_CV_2026-08-*.pdf` siblings) — historical archive; canonical aliasing is already handled via the cache-buster version on `CVPage.tsx`, exactly as the 2026-08-09 "Keep dated and stable CV downloads in parity" rule prescribes.
- The `staticforms.dev` API key embedded in `components/Contact.tsx` — published domain key, not a secret, and changing it now would break the form until the new key is re-registered in the StaticForms dashboard.

## Verification

- `grep -rn "London\|Old Gloucester\|Sede registrada\|Siège social\|UK time\|hora del Reino" constants.ts i18n/translations.ts components pages` → no matches after the edit.
- `grep -rn "Madrid, Spain\|Madrid, España\|Madrid, Espagne\|西班牙马德里" constants.ts i18n/translations.ts` → matches the four updated `contact.locationValue` strings + the four `contact.contactCard.subtitle` strings.
- The dev server can be started with `npm run dev`; the production build (`npm run build`) regenerates the static bundle and confirms the change in `dist/` at the next Netlify deploy.

## File-level summary

| File | Lines touched | Change |
| --- | --- | --- |
| `constants.ts` | `CONTACT_INFO` 4 rows | Location row now Madrid with Madrid maps URL; registration row retains Companies House link with a clarified value. |
| `i18n/translations.ts` | 28 translation keys across EN/ES/FR/ZH contact block | Work location = Madrid; registration = UK 16570822; subtitle combines both; hours in CET / Madrid time; description reads "Based in Madrid" / "Con sede en Madrid" / "Basée à Madrid" / "总部位于马德里". |
