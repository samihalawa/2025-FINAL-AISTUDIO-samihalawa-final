---
title: "Building Multi-Market Pricing Intelligence Without Mixing the Evidence"
date: "2026-08-22"
author: "Sami Halawa"
summary: "A case study in turning fragmented marketplace observations into comparable product, price, and operator decisions."
slug: "autopricing-market-intelligence"
tags: ["Marketplace Intelligence", "Data Engineering", "Product Matching", "Pricing", "AI Systems"]
---

A pricing recommendation is only as useful as the evidence behind it. Marketplace data is fragmented: listings describe the same product differently, condition is inconsistent, and an attractive price can be stale, incomplete, or attached to the wrong variant.

I designed the AutoPricing workflow around that reality. The system brings market observations into one operator-facing workspace, preserves the source market and product context, and separates a comparable observation from a decision-ready recommendation.

![AutoPricing dashboard](/portfolio/autopricing-dashboard.png)

## Normalize before comparing

The first job is not to calculate an average. It is to construct a product record that can be compared responsibly: brand, model, storage or configuration, condition, channel, currency, and the source listing each stay visible. A near match is useful research, but it is not silently treated as the same SKU.

That distinction matters when information comes from multiple marketplaces. A low headline price may omit delivery, refer to a damaged unit, or describe a different configuration. **The workflow keeps raw market evidence separate from normalized attributes and the recommendation derived from them.**

![Wallapop operator workflow](/portfolio/autopricing-wallapop-operator.webp)

## Make the operator decision inspectable

The dashboard turns collected observations into a reviewable market view. It lets an operator compare channels, identify outliers, examine comparable records, and decide whether the available evidence is sufficient for a quote or catalogue action.

The core states remain explicit:

1. Source observation captured.
2. Product identity matched or flagged for review.
3. Comparable set assembled.
4. Proposed price reviewed before an operational write.

This is more robust than presenting a model output as a price. It makes uncertainty visible at the point where a human can correct the product match, exclude bad comparables, or defer the decision.

## The engineering boundary

AutoPricing spans marketplace intelligence, product matching, WhatsApp quote analysis, ERP-commerce workflows, and reporting. Those are connected but not interchangeable data products. A successfully captured listing does not prove a correct match; a generated recommendation does not prove that an offer was accepted; a dashboard render does not prove a catalogue write.

**The useful system is not the one that produces the most prices. It is the one that makes every price traceable back to the market evidence and product assumptions that produced it.**

## What I would measure next

The right production measures are matching precision, coverage by product family, time from observation to review, recommendation overrides, and the downstream result of approved price changes. Keeping those measures separate is how the product can improve without confusing activity with business impact.

