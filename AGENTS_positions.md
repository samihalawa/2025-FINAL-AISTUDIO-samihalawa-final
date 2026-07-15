# INDEX

Coolify Linux build | macOS lock omitted the Rollup x64 GNU binary | install the matching native Rollup package inside the Linux builder | do not infer deployability from the macOS Vite build | verify Coolify builds the pushed commit and the live routes
public portfolio | stock imagery and invented social proof replaced source evidence | use dated metrics, real screenshots and public links | do not publish placeholders, arbitrary percentages or unsupported impact | verify exact live route, image load, text and responsive layout

## 2026-07-15 — Cross-platform Rollup build

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; Docker/Coolify build.
- **Mistake recovered:** the macOS build passed while the generated lock omitted `@rollup/rollup-linux-x64-gnu`; Coolify's glibc Node image then failed at Vite startup.
- **Superior approach:** keep the package manifest portable and install the matching Rollup native binary only inside the Linux build stage.
- **Evidence:** Coolify deployment `vzfbjrt753qkeyk0lmlxgknu` for commit `1ff6bf3`; build log failed after successful `npm ci` with the missing GNU module while the lock still declared it as an optional Rollup dependency.
- **Triggers:** Vite/Rollup upgrade, macOS lock regeneration, Dockerfile change or Coolify build failure.
- **Required verification:** local build plus a Coolify build of the pushed commit, followed by browser proof on `/`, `/projects` and `/cv`.

## 2026-07-15 — Evidence-first personal portfolio

- **Status:** CURRENT
- **Project/root:** `PROJECTS_ON_PROCESS/2025-FINAL-AISTUDIO-samihalawa-final`; homepage, projects, case studies and CV routes.
- **Mistake recovered:** the live portfolio used stock project images, placeholder testimonials, arbitrary 95/90/85 skill scores and unsupported 140+/18/94% headline metrics while omitting the strongest real work.
- **Superior approach:** use current real screenshots, dated OULANG/product figures, public GitHub/Hugging Face metadata and precise experimental/client boundaries; link every headline proof to its own surface.
- **Evidence:** live site/browser inspection, current source search, GitHub/Hugging Face APIs, OULANG reconciled appendix and recovered local product media.
- **Triggers:** homepage redesign, portfolio/project/case-study copy, CV publishing, social proof, metrics, testimonials or project media.
- **Required verification:** inspect 375/768/1024/1440 layouts; verify all local media and `/cv` routes; check no horizontal overflow; then verify the deployed URL at the same visible layer.
- **Do / don't:** do keep incomplete/experimental work accurately labelled; don't turn model cards, demos, old reports or client-facing screenshots into validation or impact claims.
