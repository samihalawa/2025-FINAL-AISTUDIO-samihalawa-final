---
title: "Moving OULANG from Cloud Run to Hetzner and Coolify"
date: "2026-08-22"
author: "Sami Halawa"
summary: "How I retired OULANG's Cloud Run hosting path, moved storage and deployment to Hetzner and Coolify, and kept optional AI providers explicit."
slug: "oulang-cloud-run-to-hetzner-coolify"
tags: ["Cloud Migration", "Coolify", "Hetzner", "React", "Node.js"]
---

Deleting a Cloud Run service does not migrate a product. Static files, proxy routes, database configuration, preview builds, and provider SDKs keep their own assumptions. OULANG combined a React client, Node and tRPC services, MySQL, static media, WeChat integration, and optional cloud AI capabilities. I moved the primary web-hosting path without flattening the provider boundaries that still mattered.

The result is a simpler production route: GitHub `main` builds through a Dockerfile, Coolify deploys it on Hetzner, Cloudflare remains at the edge, MySQL runs on Hetzner, and static media is served from Hetzner Object Storage through `static.oulang.ai`.

![OULANG Hetzner and Coolify architecture](/case-study-media/oulang-hetzner-coolify-architecture.png)

## The real boundary was larger than compute

Retiring Cloud Run alone would have left the application split across deployment scripts, preview paths, static assets, proxy services, and database assumptions. I first mapped those dependencies and moved them in a sequence that kept the product usable:

- Static assets moved to Hetzner Object Storage.
- A temporary legacy asset bridge kept old paths available during the transition.
- The Cloud Run web and preview path was removed from the active deployment flow.
- Local and deployed configuration were pointed at the Coolify-managed database route.
- The WeChat proxy moved to Hetzner.
- Stale Cloud Run cleanup artifacts were removed after the new path was established.

The repository history makes that sequence auditable. The storage move began in commit `cbb5abf4`; the legacy bridge followed in `dd439199`; commit `f98bdee5` retired the Cloud Run web path and removed the old preview/build configuration; `1d69250c` moved local database configuration; `ce385a34` moved the WeChat proxy; and `d5451018` removed the remaining stale cleanup path.

## One deployable unit, explicit external services

OULANG's current web stack is React 19, Vite 6, TypeScript, Tailwind 4, tRPC 11, and Node/Express. Packaging the web application as one Docker build gives the deployment a single contract. Coolify owns that contract: build the repository, inject scoped runtime configuration, connect to the existing database and storage services, and expose the application through the production domain.

This reduced operational ambiguity. The source branch, build recipe, target service, health endpoint, and public domain now form one traceable path. Cloudflare handles the edge, but it is not mistaken for the application host. Object storage serves media, but it is not mistaken for the database. Each component has one job and one verification surface.

![OULANG live product on 22 August 2026](/case-study-media/oulang-live-product-2026-08-22.png)

## The remaining provider boundary

OULANG still has optional Vertex AI capabilities behind feature and configuration boundaries, and a small isolated Vercel route remains for `/tv`. These are product-provider decisions. The primary Cloud Run web path is retired.

That distinction matters both technically and financially. The defensible claim is that the primary web, deployment, database, storage, and WeChat proxy paths moved to Hetzner and Coolify. It would be inaccurate to say that the codebase has no optional external AI provider, or that every workload runs on one machine.

I also do not attach a percentage saving to this case study. The migration was driven by a major cost and operational reduction, but a public percentage would require a like-for-like billing window tied to the same traffic, storage, and model usage. Without that bounded evidence, a precise number would be marketing rather than engineering.

## Production verification

A migration is not proved by deleting `cloudbuild.yaml` or by receiving a successful Docker build. I verified the current system at the public boundary:

- The repository uses GitHub `main` and a Dockerfile as the primary deployment path.
- The production service responds at `oulang.ai` through the expected edge.
- `https://oulang.ai/api/health` returns HTTP `200` with `{"status":"ok"}`.
- The live interface loads product data and media from the migrated topology.
- Database, object storage, application hosting, and optional AI services remain separately identifiable.

The screenshot above is a live product capture, not a generated dashboard. The architecture image is deliberately a diagram: it explains the provider boundary without pretending to be production telemetry.

## What changed operationally

The migration changed the operating questions. The deploy path is now clear. Stateful services have named owners. Optional providers are named instead of being hidden inside the hosting story.

The public health route gives an immediate production check. That is the result I wanted: a system whose hosting and dependency boundaries can be inspected without reading a pile of old deployment scripts.

**Live product:** [oulang.ai](https://oulang.ai)
