---
title: "Building a Career Opportunity System Inside Twenty CRM"
date: "2026-08-28"
author: "Sami Halawa"
summary: "A production case study on turning fragmented recruiter email, meetings, recordings, CV evidence, and follow-up ownership into one stateful Twenty CRM operating system."
slug: "twenty-native-career-opportunity-system"
tags: ["AI Agents", "Twenty CRM", "Career Operations", "Workflow Engineering", "Human-in-the-Loop"]
---

A career workflow becomes unreliable when the inbox, calendar, CV library, interview notes, and application tracker each tell a different story. The expensive failure is not a missing summary. It is acting from the wrong state: following up after someone already replied, treating a draft as sent, losing the role behind a calendar event, or generating a polished document from evidence that does not belong to that opportunity.

I built my career opportunity system inside Twenty CRM so every automation starts from the same graph of people, companies, opportunities, messages, meetings, tasks, and generated artifacts. The design objective is simple: an agent should be able to help at high speed without erasing provenance or confusing an attempted action with a completed one.

## The CRM graph is the operating system

The central record is an opportunity, connected to the relevant person and company. Email participants, calendar events, tasks, notes, and generated candidate artifacts attach to that graph instead of living as isolated AI outputs.

That changes the unit of work. The system no longer asks, “What does the latest email say?” It asks:

- Which opportunity and people does this message belong to?
- What happened before and after it?
- Who owns the next action?
- Is there a scheduled event or deadline?
- Which evidence is approved for this role?
- Was an action drafted, sent, acknowledged, or completed?

Those questions are resolved before the system recommends or performs a next step. The result is a workflow that can survive duplicate drafts, stale unread flags, forwarded messages, rescheduled interviews, and several simultaneous hiring processes.

## Native intake, not a second integration layer

Inbound opportunity email is captured by a native Twenty workflow. A message-participant event triggers only for external senders, then an AI step classifies the evidence and links or creates the minimum required CRM records. A deterministic code step checks the result shape before the workflow completes.

The intake agent is deliberately constrained. It can create and connect evidence-backed records, but it cannot send messages, invent tasks, delete data, or turn weak inference into a new company or opportunity. The workflow therefore improves the CRM graph without silently expanding its authority.

I kept this logic inside Twenty rather than rebuilding a webhook bridge in a product repository. That avoids two competing sources of truth and keeps versioning, execution history, retries, and record permissions next to the data they govern.

## One graph, several bounded workflows

The system separates jobs that are often collapsed into one opaque “career agent”:

1. **Capture relevant email** connects new inbound evidence to people, companies, and opportunities.
2. **Reconcile relationships** repairs missing links and duplicate-looking identities without merging records merely because their names are similar.
3. **Prepare a meeting brief** assembles the role, participants, prior conversation, open questions, and strongest relevant experience before a scheduled call.
4. **Review an interview recording** converts the completed conversation into structured evidence and next actions while preserving the source recording.
5. **Generate a candidate package** produces role-specific material from canonical career evidence and stores the resulting artifact with its source opportunity.

Each workflow owns one transition. That makes failures local and observable. A meeting brief can be regenerated without re-ingesting the email thread; a candidate artifact can be reviewed without changing ball-in-court ownership; relationship reconciliation can run without sending anything externally.

## Repairing the runtime without changing the contract

During a production check, the inbound email workflow was failing because its configured AI agent no longer existed. The trigger and downstream validator were still correct, so the smallest safe repair was a new published workflow version with a replacement native agent.

I preserved the external-sender filter, the intake instructions, the output contract, the retry behavior, and the deterministic code step. Before activation, I validated the graph with zero workflow errors or warnings. After activation, I read back the published version and confirmed the exact trigger-to-agent-to-validator chain.

This is the same standard I use for application and messaging systems: a successful edit is not proof of a working runtime. The right proof layers are the published workflow graph, a valid execution, and the resulting CRM records. The first two structural layers are now active; the next qualifying real inbound message supplies the non-synthetic execution proof.

## State distinctions are product features

The most valuable engineering in this system is not the prose generation. It is the refusal to blur operational states.

The CRM distinguishes discovered, drafted, attempted, sent, delivered, replied, scheduled, submitted, acknowledged, interviewing, under review, offered, and closed. It also records who owes the next action. These states prevent duplicate follow-ups and make it possible to prioritize warm recruiter activity over cold discovery.

Generated files follow the same discipline. A candidate package is not complete because a model returned text. The artifact must be associated with the exact opportunity, traceable to canonical evidence, readable after storage, and separately distinguished from anything uploaded or submitted to a hiring platform.

## Channel boundaries stay explicit

Email and Twenty-native records are within the currently verified boundary. WhatsApp is designed as another evidence source, but I do not count it as connected until the authenticated QR-paired account remains online and a real message can be read back in the CRM with the correct contact and opportunity.

That boundary matters. “The QR code was scanned,” “the provider reports connected,” and “the message is visible in the opportunity timeline” are three different facts. The architecture is ready to preserve that distinction rather than claiming channel coverage from a setup screen.

## What this demonstrates

This system combines CRM data modeling, agent constraints, workflow versioning, deterministic validation, and human-readable artifacts into one production operating model. It is designed for the messy reality of hiring: many channels, overlapping timelines, incomplete evidence, high-value deadlines, and actions that should never be duplicated.

The outcome is not an autonomous job-search demo. It is a stateful career operations system where automation can move quickly because the evidence, authority, ownership, and completion criteria are visible at every transition.
