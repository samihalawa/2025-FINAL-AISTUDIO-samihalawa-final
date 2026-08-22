---
title: "Building Agentic Outreach Around Evidence, Not Autonomy"
date: "2026-08-22"
author: "Sami Halawa"
summary: "A technical case study on turning broad market intent into owned, reviewable, stateful outreach workflows across Exa, CRM, and email systems."
slug: "autoclient-evidence-carrying-agent-workflows"
tags: ["AI Agents", "Sales Automation", "Exa", "CRM", "Workflow Engineering"]
---

An outreach agent earns trust by preserving the evidence between a target market, a discovered account, a real contact, an approved message, a send action, and the resulting CRM state.

I built AutoClient around that chain. It converts a natural-language market brief into an Exa Webset, enriches the resulting companies and people, normalizes them into CRM records, and gives an operator a reviewable path into multichannel outreach. Autonomy is scoped. Ownership, validation, and state remain explicit.

![AutoClient evidence-carrying workflow](/case-study-media/autoclient-evidence-pipeline.png)

## From a request to a bounded research set

The starting input can be broad: find companies in a region, industry, size range, or technology category. AutoClient converts that intent into a structured Webset specification rather than launching an unbounded search loop. The research provider then returns a traceable set of entities and enrichments.

Before those results are synchronized, the backend verifies two things: the caller is authenticated, and the requested Webset belongs to that user. That second check is easy to miss in agentic products. A valid external identifier is not proof that the current account owns the data behind it.

![AutoClient lead search interface](/portfolio/autoclient-lead-search.webp)

The synchronization layer normalizes company and contact fields, attaches enrichment, and updates an existing record when the identity matches. A refresh improves the matching record instead of creating a duplicate log of API responses.

## Review is a workflow state

In the operator-led campaign path, review exists in the interface and the request state. The campaign modal moves through three stages:

1. Enrich the selected contacts.
2. Preview and test the generated content.
3. Schedule and send.

Selected contact IDs travel with the operation. The interface validates that enrichment and content exist before continuing. If campaign content falls back to a generic variant, the operator receives an explicit confirmation instead of a silent send.

![AutoClient research brief and evidence](/portfolio/autoclient-research-brief.webp)

The diagram's "no silent send" invariant applies to the operator-led campaign flow. AutoClient also contains configurable workflow automation, including an optional welcome-email action. When enabled, it is an explicit workflow setting. Keeping the two paths separate prevents a campaign-screen safeguard from being overstated as a universal backend rule.

## State matters more than generation

The workflow records more than copy. It carries the research source, normalized contact identity, ownership boundary, selected audience, content state, sequence configuration, and write-back result. Each transition can therefore answer a concrete question:

- Why is this company in the list?
- Which source produced or enriched this contact?
- Does the current user own the underlying research set?
- Is this a new record or an update?
- Which contacts are selected for the campaign?
- Was the message previewed, scheduled, sent, or merely generated?

Those distinctions prevent the common agent-demo failure where “the AI wrote an email” is reported as “the campaign ran.” Drafted, scheduled, sent, delivered, replied, and converted are different states and should remain different in both the UI and the data model.

![AutoClient sequence orchestration](/portfolio/autoclient-sequence-orchestration.webp)

## A pragmatic production stack

AutoClient combines a Vite and React interface with Exa Websets, CRM synchronization, enrichment, and email workflow services. Its production Express service uses MySQL for the deployed authentication and health path. Broader application data services still use Supabase in parts of the codebase.

That mixed state is worth stating plainly. “The production health check says MySQL” does not prove that every application table was migrated. The architecture is being evolved by verifying each boundary, not by renaming the entire stack after one successful database connection.

The current deployment is tied to commit `d24e73bb`. The public endpoint `https://autoclient.ai/api/health` returns HTTP `200` with both service status and `database: "mysql"`. That proves the deployed application can reach its production auth database; it does not manufacture evidence about downstream email delivery or CRM conversion.

## What I require from an agent workflow

An agent workflow needs enough structure for every consequential action to be understood and corrected.

AutoClient's production principles are therefore straightforward:

- Start from a bounded research specification.
- Keep source evidence attached to discovered entities.
- Verify authentication and resource ownership before synchronization.
- Normalize and update records instead of multiplying duplicates.
- Represent operator review as actual workflow state.
- Keep configured automatic actions explicit and separately testable.
- Write results back with statuses that match what really happened.

The result is a system that can automate research and execution while an operator can still explain why a contact exists, what the system plans to do, and what state the campaign has reached.

**Live product:** [autoclient.ai](https://autoclient.ai)
