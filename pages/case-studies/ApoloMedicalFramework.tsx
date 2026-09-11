import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyLocaleGate from '../../components/CaseStudyLocaleGate';

const ApoloMedicalFramework: React.FC = () => (
  <CaseStudyLocaleGate storyId="medical-systems">
  <article className="bg-[#f8f6f1] text-slate-800">
    <div className="container">
      <div className="mx-auto max-w-3xl py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Case study · Medical-image, reporting and clinical-learning prototypes · 2024–2026</p>
        <h1 className="cv-serif mt-5 text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl">APOLO: separating what the model sees from how the workflow reasons</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-600">How a family of medical-image, structured-reporting and clinical-learning prototypes was built around explicit human review, anchored by APOLO, a DeepSeek-VL2-tiny multimodal model for radiology and ophthalmology imaging published on Hugging Face.</p>
        <p className="mt-6 border-y border-slate-300 py-3 text-sm text-slate-500">Sami Halawa · technical lead · research and prototyping · 2024–2026</p>

        <figure className="mt-10">
          <img src="/portfolio/apolo-instruct-comparison.webp" alt="APOLO Medical Multimodal Instruct model-card figure: two chest radiographs, each followed by a Stage 1 structured visual description, a Stage 2 reasoning trace inside think tags and the final text output" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">The public model-card figure for APOLO Medical Multimodal Instruct: two chest radiographs side by side, each with its Stage 1 visual description, its Stage 2 reasoning trace and the resulting text output.</figcaption>
        </figure>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">The problem</h2>
        <p className="mt-4 leading-8">End-to-end image-to-answer systems can hide whether an error came from visual description, reasoning, context or report generation. When a single opaque step goes from pixels to conclusion, a clinician reviewing the output has no way to tell which part of the chain went wrong, and no clean place to intervene.</p>
        <p className="mt-4 leading-8">The research question behind this work was simple to state: can multimodal support stay inspectable? The goal was to explore useful multimodal assistance without collapsing image interpretation, reasoning and professional review into one opaque step. Everything in the project follows from that constraint.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">The APOLO model</h2>
        <p className="mt-4 leading-8">APOLO is a DeepSeek-VL2-tiny multimodal model for radiology and ophthalmology imaging, published on Hugging Face as APOLO Medical Multimodal Instruct under an Apache 2.0 licence with additional healthcare compliance provisions. The approach is to separate visual description from downstream reasoning, use structured outputs, and preserve an explicit review step.</p>
        <p className="mt-4 leading-8">The design has two stages. In Stage 1, the vision-language model reads the medical image and produces a structured visual description rather than a hidden conclusion: what is visible, where, and in what form. In Stage 2, a separate reasoning step works on those descriptions only and writes out an explainable reasoning trace before its final output. The reasoning stage has no access to the raw image. It can only argue from what Stage 1 described, which means the description and the reasoning can each be examined on their own terms.</p>
        <p className="mt-4 leading-8">That boundary is the point of the architecture. If a conclusion is wrong, a reviewer can look at the Stage 1 description and ask whether the model saw the image correctly, then look at the Stage 2 trace and ask whether it reasoned correctly from what it saw. The figure above shows the format as published: the image, the structured description, the reasoning inside <code className="rounded bg-slate-200 px-1 text-sm">&lt;think&gt;</code> tags, and the text output, all visible together instead of a single polished answer.</p>
        <p className="mt-4 leading-8">The workflow around the model follows the same shape:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li><strong>Ingest</strong>: bring a medical image and its available context into a controlled review workflow.</li>
          <li><strong>Describe</strong>: use the vision-language stage to produce a structured visual description instead of a hidden conclusion.</li>
          <li><strong>Reason</strong>: pass structured findings into a separate reasoning or report-generation stage.</li>
          <li><strong>Review</strong>: keep a professional checkpoint around interpretation, longitudinal comparison and final reporting.</li>
        </ul>
        <p className="mt-4 leading-8">My role covered the architecture, the model and workflow exploration, the local-processing design, the interface prototypes and technical leadership across the related tools. The project exposes the local-processing boundary, the instruction structure and the generated report so that each stage can be inspected rather than trusted.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Human review by design</h2>
        <p className="mt-4 leading-8">These are prototypes with explicit human review. Nothing in this family replaces a professional judgement; the workflow is built so that the professional checkpoint stays visible throughout, around interpretation, longitudinal comparison and final reporting. A reviewable path from image to report is the deliverable, not an autonomous answer.</p>
        <p className="mt-4 leading-8">The same research direction runs across several working surfaces. APOLO provides the public model and architecture artifacts for structured medical-image exploration. AutoIOL and the ophthalmology work cover image review, longitudinal tracking and structured-report experiments for ophthalmology workflows. AutoRad holds PACS/RIS-oriented workflow concepts for radiology review and report generation. In each case the source image stays beside the generated narrative so that comparison and review are part of the interface rather than an afterthought.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Umbramed and the clinical learning tools</h2>
        <p className="mt-4 leading-8">Umbramed translates the broader direction into tools people can actually navigate: clinical utilities, assisted documents and learning surfaces, built in Ionic and Capacitor with installable PWA delivery and app packaging. I was the technical lead, with Dr. Valerio Trigos as clinical lead. The work spans OPE exam ingestion, assisted document workflows, payment integration, arrhythmia simulation and retinography ML exploration.</p>
        <figure className="mt-6">
          <img src="/portfolio/umbramed-portal.webp" alt="Umbramed Portal Principal showing featured clinical tools: Asistente de Diabetes, Calculadora Pediátrica and Intérprete de Serologías, with an Academia panel" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">The Umbramed main portal: featured clinical tools (a diabetes assistant, a paediatric calculator and a serology interpreter) beside the Academia panel.</figcaption>
        </figure>
        <p className="mt-6 leading-8">The portal is a single entry point for calculators, interpreters, academy work and recent activity. The interface keeps source material, progress and specialist tools visible instead of hiding them behind a chat box. In the document viewer, a clinical guideline sits beside its highlights and session notes, so the source, the notes and any assisted interpretation remain together in one reviewable reading surface.</p>
        <figure className="mt-6">
          <img src="/portfolio/umbramed-document-viewer.webp" alt="Umbramed document viewer showing a clinical-guideline document with highlighted passages and a session-notes panel" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">Assisted document review: a clinical guideline with highlights and session notes kept on the same screen.</figcaption>
        </figure>
        <p className="mt-6 leading-8">Learning analytics close the loop for exam preparation. Simulacro scores and subject-level mastery turn repeated practice into visible feedback on progress, time and topic performance, following the same principle as the model work: show the evidence, not just the verdict.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What this demonstrates</h2>
        <p className="mt-4 leading-8">The family of prototypes shares one idea. Separate what the model sees from how the workflow reasons, make each stage produce an artifact a person can read, and keep the professional review step in the path rather than around it. APOLO shows it at the model level, with a published two-stage design whose reasoning never touches the raw image. The ophthalmology and radiology experiments show it at the workflow level. Umbramed shows it at the interface level, where clinicians and students can see their sources, their tools and their progress on the same screen.</p>

        <p className="mt-12 flex flex-wrap gap-4 border-t border-slate-300 pt-8 text-sm">
          <a href="https://huggingface.co/samihalawa/APOLO-medical-multimodal-instruct" target="_blank" rel="noopener noreferrer" className="btn-secondary">View APOLO on Hugging Face<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
          <Link to="/case-studies" className="btn-secondary">All case studies<i className="fas fa-arrow-right text-xs" /></Link>
          <Link to="/contact" className="btn-primary">Discuss a medical workflow<i className="fas fa-arrow-right text-xs" /></Link>
        </p>
      </div>
    </div>
  </article>
  </CaseStudyLocaleGate>
);

export default ApoloMedicalFramework;
