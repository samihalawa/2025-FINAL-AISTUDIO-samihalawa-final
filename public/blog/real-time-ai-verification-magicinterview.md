---
title: "How I Made a Real-Time Voice AI Prove What It Heard"
date: "2026-08-22"
author: "Sami Halawa"
summary: "A technical case study on semantic transcript routing, bounded model fallbacks, account isolation, and replayable verification in MagicInterview."
slug: "real-time-ai-verification-magicinterview"
tags: ["Voice AI", "AI Engineering", "TypeScript", "Gemini", "Production Systems"]
---

Real-time voice AI is easy to demo and difficult to trust. A microphone can appear active while the transcript arrives late. A model can answer the wrong speaker. A fallback can hide a provider failure. A polished interface can conceal cross-session state. The engineering problem in MagicInterview was therefore not simply to generate a useful answer. It was to make every important step observable and testable.

MagicInterview is a practice and mock-interview coach. It listens to an interview simulation, separates interviewer prompts from the candidate's own speech, and generates concise coaching support. The product is deliberately scoped to preparation and rehearsal—not covert assistance in a live assessment.

![MagicInterview verification architecture](/case-study-media/magicinterview-verification-architecture.png)

## The failure mode: treating every transcript as a prompt

The first tempting design is also the most fragile: send each new transcript fragment to a language model and display the answer. That ignores how speech systems actually behave. Transcripts are partial, revised, duplicated, delayed, and interleaved across speakers. A candidate may repeat a question before answering it. An interviewer may clarify a prompt in the next segment. A rhetorical sentence may contain a question mark without being a request for help.

I replaced that fragment-by-fragment model with an ordered transcript router. It evaluates the accumulated conversation, speaker context, revisions, and recent semantic state before deciding whether a segment should open a new coaching turn, update an existing one, or be ignored. The classification stays semantic; there is no brittle list of question-mark or keyword rules pretending to understand conversation.

The core path is:

1. Capture audio and create speaker-aware transcript segments.
2. Preserve their order and revision history.
3. Route the conversation semantically into candidate speech, interviewer prompts, clarifications, and duplicate revisions.
4. Call a bounded provider chain only when the state warrants a new answer.
5. persist the session and coach output under the authenticated account.

That ordering matters. A good model cannot repair a bad event model after the wrong text has already been classified as a new question.

## Provider resilience without invisible failure

The answer path supports Gemini and OpenRouter, but resilience is bounded. Each provider attempt has a defined timeout and a known failure state. If the preferred provider is unavailable, the system can try the configured alternative; it does not spin forever or report a synthetic success.

This made the interface more honest. Provider exhaustion becomes a visible operational state. Authentication failures remain authentication failures. An anonymous request returns `401` rather than inheriting another browser session. The health endpoint exposes the deployed release and whether AI, authentication, and database configuration are present without leaking credentials.

## Replay as an engineering instrument

Live microphones are a poor regression fixture: the room, device, speaker timing, and operating-system permissions change between runs. I added recorded-audio replay so the same meeting can exercise the same transcription and coaching pipeline repeatedly.

The debug view below is a real replay trace captured during development. It binds the audio fixture, segment counts, provider, and latency to one run. That makes it possible to ask a precise question: what entered the pipeline, what was transcribed, which segments were replayed, and when did the answer arrive?

![MagicInterview replay pipeline trace](/case-study-media/magicinterview-pipeline-trace-2026-08-21.webp)

The release verification and this later debug trace are separate runs. For release 1.14.2, a 4.8 MB MP3 produced 40 chronological segments across two speakers in 11,215 ms. The later trace shown above contains 107 source segments, replays 24 of them, and records an 18,718 ms end-to-end coaching latency. Keeping those measurements separate is important: combining them would manufacture a benchmark that never occurred.

## Verification at the layers users actually depend on

Release 1.14.2 was tied to commit `7add5a18`. Verification covered more than a green build:

- 12 automated checks passed alongside the production build and source validation.
- 14 of 14 semantic routing scenarios passed, including duplicate revisions, truncated speech, candidate read-back, rhetorical phrasing, Spanish prompts, and follow-up clarifications.
- Two authenticated users were exercised independently to verify session isolation.
- An anonymous request was confirmed to return `401`.
- The responsive product was checked across six viewport sizes.
- The deployed `/api/health` endpoint was read back with release `1.14.2` and current service configuration.

Several failures during verification were useful. A Chromium shim was initially invalid, a missing `Origin` header produced a legitimate `403`, and the health route still reported an older release until it was corrected. None of those failures meant the main system was broken, but each exposed a gap between a local check and the production contract.

![MagicInterview live replay with transcript and coach answer](/case-study-media/magicinterview-live-replay-2026-08-21.webp)

## What changed in my approach

The most important result was not a single model choice. It was the decision to make the system evidence-carrying:

- Conversation meaning is derived from ordered state rather than isolated strings.
- Provider fallbacks terminate and surface their outcome.
- Recorded fixtures turn audio into a repeatable regression input.
- Debug output links input, transcript, routing, model call, latency, and display.
- Account isolation is tested with two real users, not inferred from a schema.
- The production release identifies itself through a live endpoint.

This is the standard I now use for real-time AI: the interface should not merely look alive. The system should be able to prove what it heard, why it acted, where the answer came from, and which user owns the result.

**Live product:** [magicinterview.megawebs.com](https://magicinterview.megawebs.com)
