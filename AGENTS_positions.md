# INDEX

contact intake | Tally embeds replaced the existing native provider flow | use native contact/newsletter forms and emit conversions only after provider success | do not reintroduce embedded Tally forms or fire leads on button clicks | verify no Tally assets, provider response, rendered states and analytics reception
measurement provider proof | missing repo IDs were treated as proof that analytics did not exist | audit live bundle, credentials and actual GA4/GTM/Ads/PostHog/Tag Gateway providers | do not infer provider state from source grep or reuse another brand's IDs | verify exact property/container/project IDs, live events and provider readback
SEO route body and public authorship | generated heads still left crawler HTML empty and hub source labels leaked as authors | prerender every route/article and normalize public author identity | do not treat metadata-only HTML or delivery labels as indexable content | verify raw H1/article body, hydration, byline/JSON-LD agreement and live Lighthouse
SEO head delivery | client-only Helmet left crawler and social HTML empty | generate physical per-route heads from one metadata registry and keep runtime head in sync | do not reintroduce Helmet or same-URL hreflang | verify every raw route HTML, schema, sitemap, OG asset, 404 status and rendered routes
contact conversion surface | embedded scheduler can render a blank panel when the public event slug is gone | verify the event URL and rendered widget before publishing, otherwise use the working form/email path | do not treat script load or iframe creation as booking proof | verify contact page console, visible CTA/form and destination response on desktop/mobile
public portfolio content boundary | internal evidence debt and next-proof instructions appeared as visitor content | keep validation in the repo ledger and publish product value, scope and links | do not render agent checklists, provider backlog or proof-debt panels | verify public-copy grep plus rendered home/projects/case-studies/CV
portfolio evidence propagation | fixing /projects left stale OULANG and Hugging Face claims in Hero, evidence cards and downloadable ATS text | sweep every public component and CV asset for the same claim strings | do not treat one route or data file as the complete claim surface | verify repo-wide claim grep plus rendered home/projects/CV and downloadable files
blog content pipeline | hard-coded slug list + modal did not scale to daily hub-fed posts | glob public/blog/**/*.md at build into index.json + sitemap and render /blog/:slug | do not hand-edit constants.ts per post or reintroduce the modal-only flow; hub commits to public/blog/en/<slug>.md | verify live /blog, one /blog/<slug>, and sitemap blog URLs after a hub pages run
SPA production routes | public asset directories collide with client routes | serve file-shaped URLs as static files and everything else as the SPA shell | do not let Nginx treat route names as directories or leak port 8080 redirects | verify slash and non-slash routes plus real asset MIME types
Coolify Linux build | macOS lock can omit the Linux Rollup binary and Docker hosts differ between arm64 and x64 | install the build container's matching native Rollup GNU package | do not hardcode one CPU or infer deployability from the macOS Vite build | verify local container plus Coolify build the pushed commit and live routes
public portfolio | stock imagery and invented social proof replaced source evidence | use dated metrics, real screenshots and public links | do not publish placeholders, arbitrary percentages or unsupported impact | verify exact live route, image load, text and responsive layout

## 2026-07-22 — Contact intake stays native and provider-confirmed

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; contact and newsletter intake.
- **Mistake recovered:** two Tally embeds replaced the repository's existing native Static Forms flow, while analytics inferred conversion from a cross-window `Tally.FormSubmitted` message.
- **Superior approach:** keep accessible native forms for contact and newsletter, submit to the verified provider endpoint, and emit `generate_lead` only after a successful provider response.
- **Evidence:** source history commit `68e1eef`, current Static Forms API documentation, source/build/SEO checks, and 22 Jul 2026 desktop/mobile local browser proof showing real controls, HTML validation, zero iframes and zero Tally scripts.
- **Triggers / verification:** form, newsletter, lead, Tally, Static Forms, GA4 or PostHog changes; verify provider response shape, no Tally assets, required/error/success states, mobile layout, live delivery and analytics provider reception.
- **Do / don't:** do preserve the native provider-backed forms and post-success event contract; don't reintroduce third-party form embeds, count clicks as leads, or reuse another brand's PostHog project.

## 2026-07-22 — Measurement state requires provider proof

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; `samihalawa.com` measurement stack.
- **Mistake recovered:** repo/live-bundle absence was treated as provider absence, then a new portfolio stream was mistakenly created inside the existing AutoDate property and both GTM tags initially targeted that cross-brand measurement ID.
- **Superior approach:** classify every layer `present | wrong | missing` from its own current surface; verify picker account/property IDs before creating streams, and give the portfolio its own GA4 account/property plus GTM container.
- **Evidence:** 22 Jul 2026 GA picker proved AutoDate was `a400094799p544310841`; the corrected portfolio is `a401970297p546661717`, web stream `15302511642`, GTM `GTM-W2Z8DSVK` v4. The GTM payload proved both tags route correctly; `/metrics/healthy` stayed on Nginx until the apex/www DNS records were proxied through Cloudflare.
- **Triggers / verification:** analytics, tracking, conversions, GTM, GA4, Ads, PostHog or Tag Gateway; verify exact IDs, deployed bundle, network events, provider realtime/readback and consent state.
- **Do / don't:** do reopen every provider, read picker IDs, require proxied DNS for Tag Gateway, and verify live events; don't infer ownership from names, reuse cross-brand IDs, or trust setup screens/API flags without same-path readback.

## 2026-07-22 — SEO delivery includes the route body and public identity

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; all public app routes and blog articles.
- **Mistake recovered:** physical per-route heads were present, but every crawler response still had an empty React root; hub `sourceName` also appeared as the visible article author while JSON-LD named Sami.
- **Superior approach:** build-time render every route and full Markdown article into its physical HTML, hydrate that exact markup, and accept only explicit public author metadata with Sami as the fallback.
- **Evidence:** 22 Jul 2026 raw production baseline, generated-route verifier, `dist/blog/building-reliable-ai-agents/index.html`, Chrome desktop/mobile renders, and Lighthouse before/after reports.
- **Triggers / verification:** routing, SSR/prerender, hydration, blog frontmatter, author, build or SEO changes; verify raw `<main>` + `<h1>`, raw article body, no internal source label, matching visible/structured author, client hydration, and local/live Lighthouse.
- **Do / don't:** do treat crawler body, browser body and structured identity as one contract; don't close SEO from head tags, build success, or a content-hub delivery label alone.

## 2026-07-21 — SEO must exist in the delivered route HTML

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; every public route, article, sitemap and 404 response.
- **Mistake recovered:** dozens of page-local Helmet blocks implied complete SEO, but raw production HTML for every route contained only the generic home title and no description, canonical, OG, Twitter or JSON-LD; unknown URLs also rendered the homepage.
- **Superior approach:** define route metadata once in `seo/siteMetadata.js`, generate physical route HTML during the build, use the same registry for runtime navigation, and generate article metadata from the content manifest.
- **Evidence:** `scripts/verify-seo.mjs` checks all App routes and articles; production proof must still read literal tags/status from the pushed commit and visually render representative routes.
- **Triggers / verification:** route, metadata, blog, Nginx, Netlify, sitemap or social-card changes; verify raw HTML for every route, JSON-LD parsing, 1200x630 owned OG, sitemap inclusion/exclusion, a real 404 status, and rendered desktop/mobile routes.
- **Do / don't:** do keep crawler HTML and client navigation synchronized; don't reintroduce `react-helmet-async`, per-page duplicates, remote OG dependencies or hreflang links without real reciprocal localized URLs.

## 2026-07-19 — Booking controls require destination proof

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; contact and consultation flow.
- **Mistake recovered:** the page loaded Cal.com's embed script for `samihalawa/schedule`, but the event URL returned 404 and the client threw `Cal is not defined`, leaving a 600px blank panel on mobile.
- **Superior approach:** publish a scheduler only after the public event resolves and the widget renders; otherwise route visitors through the existing contact form and direct email without promising unavailable slots.
- **Evidence:** 19 Jul 2026 production console, empty `#my-cal-inline-schedule`, direct Cal.com 404 checks and mobile screenshot of the blank card.
- **Triggers / verification:** calendar slug, embed-provider or contact-page changes; open the destination directly, then verify the rendered control and console on desktop and mobile.
- **Do / don't:** do prove the booking destination itself; don't infer availability from a loaded script, iframe, HTTP 200 asset or reserved blank area.

## 2026-07-19 — Keep operational validation out of visitor-facing copy

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; homepage, projects, case studies, services and CV.
- **Mistake recovered:** internal validation language—evidence debt, provider checks, next-proof sequences, publishability labels and missing-proof instructions—was rendered as the portfolio experience.
- **Superior approach:** keep validation, caveats and deployment follow-up in the project ledger or source data; publish concise product value, honest scope, real work, links and clear contact actions.
- **Evidence:** 19 Jul 2026 source sweep found the operational panels in `Projects.tsx` and repeated audit framing across `Hero.tsx`, `About.tsx`, `FeaturedCaseStudies.tsx`, `Testimonials.tsx`, case studies and CV copy; the live homepage visibly labelled work as “CURRENT PUBLIC PROOF”.
- **Triggers / verification:** redesign, claims audit, portfolio automation or new project cards; grep public components for operational instruction language, then render `/`, `/projects`, `/case-studies` and `/cv` at desktop and mobile sizes.
- **Do / don't:** do preserve factual scope in normal visitor language; don't expose agent TODOs, provider backlog, proof debt or publishing workflow as website sections.

## 2026-07-16 — Portfolio claims are a sitewide surface

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; home, projects, evidence cards and downloadable CV assets.
- **Mistake recovered:** the `/projects` ledger removed stale OULANG metrics and corrected Hugging Face counts, but the same unsupported numbers still existed in `Hero.tsx`, `Testimonials.tsx`, translations and both public ATS files.
- **Superior approach:** propagate every evidence decision by exact-string and concept sweep across all public components, translations, downloadable text/PDF/preview assets and generated pages.
- **Evidence:** 16 Jul 2026 `rg` found OULANG `17,262 / 38,857 / 89,913`, `30 posts / 19 Spaces / 5 collections`, and app-store completion language outside `/projects`; current master requires provider/store read-back before those claims.
- **Triggers / verification:** any metric, release state, client outcome, HF counter, CV regeneration or portfolio copy change; run repo-wide claim grep, then render `/`, `/projects`, `/cv` and inspect downloads. PDF/preview binaries must be regenerated, not assumed updated from ATS text.
- **Do / don't:** do treat the site and CV package as one claim graph; don't close after changing only `portfolio.ts` or one route.

## 2026-07-15 — Blog fed by the central content hub

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; blog subsystem.
- **Context:** the blog read `public/blog/<slug>.md` with a hard-coded `BLOG_POSTS` list in `constants.ts` and rendered posts in a modal (no per-article URL) — it could not receive daily hub-delivered posts or be indexed per article.
- **Superior approach:** the central content hub (`2026-ALL-ACTORS-oupin-huatong-crawlab`) commits English Markdown to `public/blog/en/<slug>.md` (fail-closed on `sites:["samihalawa"]`). A build-time `scripts/generate-blog-manifest.mjs` globs `public/blog/**/*.md`, normalises legacy + hub frontmatter into `public/blog/index.json`, and refreshes the `/blog/<slug>` sitemap URLs. `Blog.tsx` loads the manifest (falls back to `BLOG_POSTS`); `pages/BlogArticlePage.tsx` renders `/blog/:slug` with canonical/OG/BlogPosting JSON-LD.
- **Evidence:** hub env `CONTENT_HUB_GITHUB_TARGETS` includes `samihalawa|samihalawa/2025-FINAL-AISTUDIO-samihalawa-final|public/blog`; 22 `sites:["samihalawa"]` specs in the hub's `pages.config.json`; daily `content-hub-worker` pages run.
- **Triggers:** editing the blog reader, adding a post source, changing the build script, or touching the sitemap.
- **Required verification:** `npm run build` green; live `/blog` lists posts, one `/blog/<slug>` renders real body + correct `<title>`/canonical (Googlebot UA), and `sitemap.xml` contains the article URLs — after a hub pages run has committed to this repo.
- **Do / don't:** do let the build script + manifest own the post list; don't hand-edit `constants.ts` per post, don't restore the modal-only navigation, and don't feed this blog the Chinese-diaspora news (it is `samihalawa`-scoped, English).
- **SEO delivery:** superseded the page-local Helmet/direct-DOM split with the current centralized build-time + runtime SEO registry. Keep article metadata generated from the manifest and verify it in raw route HTML; do not restore Helmet.

## 2026-07-15 — SPA routes versus public asset directories

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; Nginx/Coolify serving layer.
- **Mistake recovered:** `try_files $uri $uri/ /index.html` treated `/cv` and `/blog` as the real `dist/cv` and `dist/blog` directories, redirected to public port `8080`, then returned `403` for the directory.
- **Superior approach:** serve URLs whose final segment is file-shaped from `dist`; route every extensionless URL, with or without a trailing slash, to the SPA shell.
- **Evidence:** production deployment `pgbxalu0ygrn3a3gx221vvni` returned `Location: http://samihalawa.com:8080/cv/`; `/cv/` and `/blog/` returned `403` while nested client routes still rendered.
- **Triggers:** adding a public asset directory with the same name as a client route, changing Nginx, or seeing `301`, `403`, or an internal-port redirect.
- **Required verification:** check `/cv`, `/cv/`, `/blog`, `/blog/`, all named client routes, and direct PDF/TXT/PNG/Markdown files for the correct status and MIME type.
- **Do / don't:** do test the deployed proxy boundary; don't infer route correctness from Vite preview or a successful container rollout.

## 2026-07-15 — Cross-platform Rollup build

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; Docker/Coolify build.
- **Mistake recovered:** the macOS build passed while the generated lock omitted `@rollup/rollup-linux-x64-gnu`; Coolify's glibc Node image then failed at Vite startup.
- **Superior approach:** keep the package manifest portable and install the Rollup GNU package matching `process.arch` only inside the Linux build stage.
- **Evidence:** Coolify deployment `vzfbjrt753qkeyk0lmlxgknu` for commit `1ff6bf3` lacked the x64 GNU module; on 21 Jul 2026 a local `linux/arm64` container rejected the later hardcoded x64 repair with `wanted cpu x64` / `Actual cpu arm64`.
- **Triggers:** Vite/Rollup upgrade, macOS lock regeneration, Dockerfile change or Coolify build failure.
- **Required verification:** local architecture container build plus a Coolify x64 build of the pushed commit, followed by browser proof on `/`, `/projects` and `/cv`.

## 2026-07-15 — Evidence-first personal portfolio

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; homepage, projects, case studies and CV routes.
- **Mistake recovered:** the live portfolio used stock project images, placeholder testimonials, arbitrary 95/90/85 skill scores and unsupported 140+/18/94% headline metrics while omitting the strongest real work.
- **Superior approach:** use current real screenshots, dated OULANG/product figures, public GitHub/Hugging Face metadata and precise experimental/client boundaries; link every headline proof to its own surface.
- **Evidence:** live site/browser inspection, current source search, GitHub/Hugging Face APIs, OULANG reconciled appendix and recovered local product media.
- **Triggers:** homepage redesign, portfolio/project/case-study copy, CV publishing, social proof, metrics, testimonials or project media.
- **Required verification:** inspect 375/768/1024/1440 layouts; verify all local media and `/cv` routes; check no horizontal overflow; then verify the deployed URL at the same visible layer.
- **Do / don't:** do keep incomplete/experimental work accurately labelled; don't turn model cards, demos, old reports or client-facing screenshots into validation or impact claims.
