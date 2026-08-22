---
title: "Designing Location-Aware Recommendations for an International Marketplace"
date: "2026-08-22"
author: "Sami Halawa"
summary: "How I approached multilingual discovery, local intent, and recommendation workflow design for OULANG."
slug: "oulang-location-aware-recommendations"
tags: ["Recommendations", "Multilingual AI", "Marketplace", "Product Engineering", "OULANG"]
---

International discovery is not a translation problem. A user’s language, city, category, and behaviour all change what a useful recommendation looks like. A generic ranking can be technically valid and still feel irrelevant because it ignores the local context that made the query meaningful.

For OULANG, I treated recommendation as a product workflow rather than a single model call: establish the user context, retrieve relevant local inventory and content, present an explainable next action, and measure what happened afterwards.

![OULANG behavioural recommendations workflow](/portfolio/oulang-behavioral-recommendations-workflow-public-2026-08-09.png)

## Context is part of the query

The system needs more than a keyword. It benefits from a context envelope that includes language, location, category, intent signals, and recent interactions. That envelope can guide retrieval without becoming a hidden black box.

**The recommendation should be able to answer “why this?” in product terms:** it matches the place, the user’s stated need, the available inventory, or a recognised behavioural signal. This gives users a reason to trust the result and gives the team a useful debugging surface.

## Local content and marketplace inventory are different inputs

Local editorial content can help explain a category or a neighbourhood. Marketplace inventory is an operational object with availability, owner, price, and action state. Combining them in one page can be powerful, but only when the product preserves where each result came from.

![OULANG local content experience](/portfolio/oulang-local-content.webp)

The implementation therefore treats retrieval sources separately before the interface composes them. A local guide can establish intent and context; a live listing can enable an action. If either source is stale or missing, the product should degrade visibly rather than inventing a recommendation.

## A recommendation is an experiment

I frame ranking changes as testable product hypotheses, not permanent truth. The important loop is:

1. Capture the context used for retrieval.
2. Record the candidates and the reason each was eligible.
3. Present a clear user action.
4. Observe the resulting click, contact, save, or later conversion as its own event.

This separates a generated result from an outcome. It also makes iteration practical: if results look locally relevant but do not produce actions, the team can inspect the context, retrieval set, and presentation independently.

## What this design avoids

The hard failures are predictable: translating a global catalogue and calling it local discovery; using historical behaviour without respecting the current query; or reporting an impression as a successful match. The architecture makes those boundaries explicit so multilingual product intelligence can improve through evidence rather than vague model confidence.

