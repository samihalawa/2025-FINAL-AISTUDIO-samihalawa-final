import React from 'react';
import { Link } from 'react-router-dom';

const stages = [
  ['01', 'Ingest', 'Bring a medical image and its available context into a controlled review workflow.'],
  ['02', 'Describe', 'Use the vision-language stage to produce a structured visual description instead of a hidden conclusion.'],
  ['03', 'Reason', 'Pass structured findings into a separate reasoning or report-generation stage.'],
  ['04', 'Review', 'Keep a professional checkpoint around interpretation, longitudinal comparison and final reporting.'],
];

const clinicalSurfaces = [
  { src: '/portfolio/umbramed-portal.webp', title: 'Clinical tool portal', body: 'A single entry point for calculators, interpreters, academy work and recent activity.' },
  { src: '/portfolio/umbramed-document-viewer.webp', title: 'Assisted document review', body: 'Source material, notes and assisted interpretation remain together in a reviewable reading surface.' },
  { src: '/portfolio/umbramed-performance.webp', title: 'Learning analytics', body: 'Progress, time and topic-level performance turn repeated practice into visible feedback.' },
];

const ApoloMedicalFramework: React.FC = () => (
  <article className="bg-[#f8f6f1] text-slate-800">
    <header className="border-b border-slate-300 py-16 sm:py-24">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Research and prototyping · medical workflows · 2024–2026</p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <h1 className="cv-serif max-w-5xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">Separating what the model sees from how the workflow reasons.</h1>
          <p className="border-l border-slate-400 pl-6 text-lg leading-relaxed text-slate-600">APOLO and related medical prototypes explore structured image review, reporting and learning tools with the human checkpoint visible throughout.</p>
        </div>
      </div>
    </header>

    <figure className="border-b border-slate-300 bg-white py-10 sm:py-14">
      <div className="container"><img src="/portfolio/apolo-architecture.png" alt="APOLO two-stage multimodal medical-image workflow architecture" className="mx-auto block max-h-[52rem] w-full border border-slate-300 bg-white object-contain" /><figcaption className="mt-4 text-sm leading-6 text-slate-500">Two-stage architecture: structured visual description first, reviewable reasoning and reporting second.</figcaption></div>
    </figure>

    <section className="py-16 sm:py-24" aria-labelledby="apolo-context-heading">
      <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Research question</p><h2 id="apolo-context-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Can multimodal support stay inspectable?</h2></div>
        <div className="border-t border-slate-400">{[
          ['The problem', 'End-to-end image-to-answer systems can hide whether an error came from visual description, reasoning, context or report generation.'],
          ['The approach', 'Separate visual description from downstream reasoning, use structured outputs and preserve an explicit review step.'],
          ['My role', 'Architecture, model and workflow exploration, local-processing design, interface prototypes and technical leadership across related tools.'],
        ].map(([title, body]) => <div key={title} className="grid gap-2 border-b border-slate-300 py-6 sm:grid-cols-[11rem_1fr]"><h3 className="font-display text-base font-bold text-slate-950">{title}</h3><p className="leading-7 text-slate-600">{body}</p></div>)}</div>
      </div>
    </section>

    <section className="border-y border-slate-300 bg-white py-16 sm:py-24" aria-labelledby="apolo-flow-heading">
      <div className="container"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Workflow</p><h2 id="apolo-flow-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950 sm:text-5xl">A reviewable path from image to report.</h2></div>
        <ol className="mt-12 grid border-t border-slate-500 sm:grid-cols-2 lg:grid-cols-4">{stages.map(([number, title, body], index) => <li key={number} className={`border-b border-slate-300 py-6 sm:px-6 ${index < stages.length - 1 ? 'lg:border-r' : ''}`}><span className="font-mono text-xs font-bold text-brand-800">{number}</span><h3 className="cv-serif mt-8 text-2xl font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></li>)}</ol>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="apolo-evidence-heading">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Model evidence</p>
            <h2 id="apolo-evidence-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">Architecture, instruction and output shown as separate artifacts.</h2>
          </div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-600">The project does not reduce the work to a single polished answer. It exposes the local-processing boundary, the instruction structure and the generated report so each stage can be examined on its own terms.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <figure className="border border-slate-300 bg-white p-4 sm:p-6">
            <img src="/portfolio/apolo-local-workflow.webp" alt="APOLO local clinical workflow with a privacy barrier between image processing and reasoning" loading="lazy" className="aspect-square w-full object-contain" />
            <figcaption className="mt-4 text-sm leading-6 text-slate-600"><strong className="text-slate-950">Local workflow.</strong> Image inputs, structured descriptions and doctor-facing reasoning are visibly separated.</figcaption>
          </figure>
          <figure className="border border-slate-300 bg-white p-4 sm:p-6">
            <img src="/portfolio/apolo-report-example.webp" alt="Example medical image beside an APOLO-generated structured report" loading="lazy" className="aspect-[2/1] w-full object-contain" />
            <figcaption className="mt-4 text-sm leading-6 text-slate-600"><strong className="text-slate-950">Report surface.</strong> The source image stays beside the generated narrative for comparison and review.</figcaption>
          </figure>
        </div>
        <figure className="mt-6 border border-slate-300 bg-white p-4 sm:p-7">
          <img src="/portfolio/apolo-instruct-comparison.webp" alt="APOLO instruction example comparing model responses to two chest radiographs" loading="lazy" className="mx-auto max-h-[48rem] w-full object-contain" />
          <figcaption className="mt-5 grid gap-2 sm:grid-cols-[12rem_1fr]">
            <strong className="font-display text-sm text-slate-950">Instruction artifact</strong>
            <span className="text-sm leading-6 text-slate-600">A visible comparison format makes the prompt, image pair and response structure easier to inspect.</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="bg-slate-950 py-16 text-white sm:py-24" aria-labelledby="medical-family-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-200">Related product family</p><h2 id="medical-family-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-white">One research direction across several working surfaces.</h2></div>
        <div className="grid border-t border-slate-600 sm:grid-cols-2">{[
          ['APOLO', 'Public model and architecture artifacts based on the DeepSeek-VL2 family for structured medical-image exploration.'],
          ['AutoIOL and ophthalmology', 'Image review, longitudinal tracking and structured-report experiments for ophthalmology workflows.'],
          ['AutoRad', 'PACS/RIS-oriented workflow concepts for radiology review and report generation.'],
          ['Umbramed', 'Installable learning and clinical-tool surfaces spanning exam ingestion, assisted documents and specialist utilities.'],
        ].map(([title, body], index) => <article key={title} className={`border-b border-slate-700 py-6 sm:px-6 ${index % 2 === 0 ? 'sm:border-r' : ''}`}><h3 className="cv-serif text-2xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{body}</p></article>)}</div>
      </div>
    </section>

    <section className="py-16 sm:py-24" aria-labelledby="clinical-surfaces-heading">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">From research to interface</p><h2 id="clinical-surfaces-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">The model work connects to tools people can actually navigate.</h2></div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-600">Umbramed translates the broader direction into clinical utilities, assisted documents and learning surfaces. The interface keeps source material, progress and specialist tools visible instead of hiding them behind a chat box.</p>
        </div>
        <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 lg:grid-cols-3">
          {clinicalSurfaces.map((surface) => (
            <figure key={surface.title} className="bg-white p-4 sm:p-6">
              <img src={surface.src} alt={`Umbramed ${surface.title.toLowerCase()} interface`} loading="lazy" className="aspect-[5/4] w-full border border-slate-200 bg-slate-50 object-cover object-top" />
              <figcaption className="mt-5"><strong className="cv-serif text-xl font-semibold text-slate-950">{surface.title}</strong><p className="mt-2 text-sm leading-6 text-slate-600">{surface.body}</p></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-300 pt-8"><a href="https://huggingface.co/samihalawa/APOLO-medical-multimodal-instruct" target="_blank" rel="noopener noreferrer" className="btn-secondary">View APOLO artifacts<i className="fas fa-arrow-up-right-from-square text-xs" /></a><Link to="/contact" className="btn-primary">Discuss a medical workflow<i className="fas fa-arrow-right text-xs" /></Link></div>
      </div>
    </section>
  </article>
);

export default ApoloMedicalFramework;
