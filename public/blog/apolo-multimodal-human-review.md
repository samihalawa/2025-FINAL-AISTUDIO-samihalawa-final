---
title: "Building a Multimodal Research Workflow With Human Review at the Center"
date: "2026-08-22"
author: "Sami Halawa"
summary: "A research-engineering case study on structuring image-text exploration for reviewable medical and professional workflows."
slug: "apolo-multimodal-human-review"
tags: ["Multimodal AI", "Vision Language Models", "Human Review", "Research Engineering", "APOLO"]
---

Multimodal systems can make an image-text workflow faster, but speed is not a license to collapse research exploration into a clinical claim. I built APOLO as a research-oriented image-text workflow: inspect an input, compare model behaviour, assemble structured output, and keep a human reviewer in control of what any result means.

The project explored a public vision-language research artefact based on DeepSeek-VL2-tiny. Its purpose was to make multimodal interaction and review concrete—not to replace diagnosis, validate a medical device, or claim clinical performance.

![APOLO architecture](/portfolio/apolo-architecture.png)

## Separate model output from reviewed output

The central design choice was to treat the model response as an intermediate artefact. It can be helpful for describing an image, extracting a structured observation, comparing candidate prompts, or drafting a report-shaped response. It is not the final authority.

**A reviewable workflow records the input, model configuration, prompt or instruction, raw response, and the human decision separately.** That creates a path for investigation when the result is surprising and prevents a generated paragraph from being mistaken for a confirmed finding.

![Instruction comparison](/portfolio/apolo-instruct-comparison.webp)

## Evaluation needs a concrete interface

It is difficult to improve a multimodal prototype when every test is an isolated chat. APOLO made different instructions and outputs comparable in one place, so a reviewer could see how prompt structure changed the response and whether the result was useful for the intended professional workflow.

The evaluation questions were deliberately narrow:

- Is the input and instruction traceable?
- Is the model response understandable enough to review?
- Can a reviewer correct or reject it without losing context?
- Does the generated structure support a downstream report or learning workflow?

![Example structured report](/portfolio/apolo-report-example.webp)

## Why the boundary matters

For sensitive domains, the most dangerous product mistake is to use polished output as proof. A convincing summary can still be wrong, incomplete, out of scope, or unsuitable for a particular data source. The prototype therefore keeps its claim bounded: it is a multimodal research and review workflow.

That framing is also better engineering. It directs work toward datasets, evaluation protocols, reviewer experience, privacy constraints, and evidence capture—the things that must exist before a research prototype can ever be considered for a higher-stakes setting.

