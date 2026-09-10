import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyLocaleGate from '../../components/CaseStudyLocaleGate';
import SystemDiagram from '../../components/SystemDiagram';

const architecture = [
  { label: 'Sources', detail: 'Amazon, Back Market, CeX, Swappie and Wallapop listings, WhatsApp quote messages, catalogue and ERP records.', tag: 'inputs' },
  { label: 'Ingestion', detail: 'Collectors and structured extraction normalise each source into one product-offer schema with provenance.', tag: 'pipelines' },
  { label: 'Product identity', detail: 'Matching by model, storage, condition and channel so unlike devices are never compared as equals.', tag: 'matching' },
  { label: 'Pricing engine', detail: 'Margin, stock age, target price and market position computed per SKU with the evidence retained.', tag: 'evaluation' },
  { label: 'Operator review', detail: 'Exceptions, price changes, purchases and outbound contact queue for a human decision.', tag: 'checkpoint' },
  { label: 'Outputs', detail: 'Decision reports, sourcing actions, ERP commerce updates and the executive dashboard.', tag: 'actions' },
];

const AutoPricingCase: React.FC = () => (
  <CaseStudyLocaleGate storyId="autopricing">
  <article className="bg-[#f8f6f1] text-slate-800">
    <div className="container">
      <div className="mx-auto max-w-3xl py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">Case study · Client delivery · Pricing intelligence · 2025–2026</p>
        <h1 className="cv-serif mt-5 text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl">AutoPricing: turning fragmented resale signals into a reviewable pricing workflow</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-600">How marketplace evidence, product matching, WhatsApp quote inputs and ERP context were brought into one system for a refurbished-device operation, so that commercial decisions became faster and more defensible without removing the human who signs off on them.</p>
        <p className="mt-6 border-y border-slate-300 py-3 text-sm text-slate-500">Sami Halawa · product discovery, system architecture and hands-on implementation · delivered as AutoPricing / IWAKY across three workstreams</p>

        <figure className="mt-10">
          <img src="/portfolio/autopricing-dashboard.png" alt="AutoPricing executive dashboard showing catalogue coverage, market signals and the pricing and sourcing cases that need operator attention" className="w-full border border-slate-300 bg-slate-50" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">The executive pricing and sourcing view: catalogue coverage, market signals and the cases that need operator attention, in one screen.</figcaption>
        </figure>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">The problem</h2>
        <p className="mt-4 leading-8">A refurbished-device operation needed to compare changing market prices, its own stock and incoming purchase opportunities without losing the evidence behind a recommendation. The information existed, but it was spread across public marketplaces, private quote conversations, product catalogues, inventory or ERP data and reporting surfaces. Each of those surfaces answered part of the question, and none of them carried the context of the others.</p>
        <p className="mt-4 leading-8">The hard part is that the same phone is not the same commercial offer. Each marketplace expresses condition, seller, warranty, storage and configuration differently, and a comparison that flattens those differences produces a confident number with nothing underneath it. The assignment was one decision flow across messy operating systems: collect the signals, keep them honest, and put a reviewable recommendation in front of the person who owns the commercial outcome.</p>
        <p className="mt-4 leading-8">My work covered product discovery and process mapping, system architecture, hands-on implementation and preparation of the demonstrated operating workflow.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What was built</h2>
        <p className="mt-4 leading-8">AutoPricing is a pricing-intelligence and decision-reporting workflow. The dashboard is the last layer; the difficult work is keeping market, product and operating context aligned underneath it. Four areas carry that context:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li><strong>Market inputs</strong>: resale listings, sourcing opportunities and changing market prices across multiple public sources.</li>
          <li><strong>Product identity</strong>: matching by model, storage, condition and channel so unlike devices are not compared as equivalents.</li>
          <li><strong>Commercial context</strong>: inventory, quotations, stock age, target margin and ERP or catalogue data in the same decision view.</li>
          <li><strong>Operator output</strong>: a review queue, decision reports and sourcing actions that retain the source behind the recommendation.</li>
        </ul>
        <p className="mt-4 leading-8">The market inputs are real product pages, not abstractions. Amazon contributes new and refurbished catalogue context, seller position and the current offer structure. Back Market contributes condition, warranty and specialist-refurbisher pricing in a structured product page. CeX is a second-hand retail reference with device grade, configuration and store pricing, and Swappie expresses refurbished-device configuration, condition and battery options as commercial variables. The workflow keeps those differences visible before any comparison or recommendation is made.</p>
        <figure className="mt-8">
          <img src="/portfolio/autopricing-market-amazon.webp" alt="Amazon.es product page for a refurbished iPhone 15 128 GB used as a pricing reference" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">Amazon: the same iPhone 15 128 GB as a catalogue listing, with seller position and offer structure alongside the price.</figcaption>
        </figure>
        <figure className="mt-8">
          <img src="/portfolio/autopricing-market-backmarket.webp" alt="Back Market product page for a refurbished iPhone 15 128 GB used as a pricing reference" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">Back Market: condition grade and warranty are part of the offer, so they are captured as fields rather than lost in a single number.</figcaption>
        </figure>
        <p className="mt-6 leading-8">Around those signals sit the commercial pieces: a database-backed commerce and dynamic quotation flow with stock and pricing controls, collection and product matching with decision reporting across multiple resale sources, and the operational channels of Wallapop sourcing and contact plus structured extraction of WhatsApp quote inputs.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Architecture</h2>
        <p className="mt-4 leading-8">Six stages take a public listing to a reviewed action. Evidence flows left to right through the diagram. Authority does not: nothing changes a price, buys stock or contacts a seller until it has passed the operator checkpoint.</p>
        <div className="mt-6"><SystemDiagram title="Sources, ingestion, identity, pricing, review, outputs." nodes={architecture} feedback="Reviewed outcomes are written back to the ERP and catalogue, so the next pricing pass starts from the latest commercial state." caption="AutoPricing / IWAKY system architecture as delivered across the three workstreams." /></div>
        <p className="mt-6 leading-8">In operating terms the same flow reads as five steps. <strong>Collect</strong> brings marketplace listings, quote inputs and inventory context into one operating view. <strong>Normalize</strong> matches products and makes source, condition and channel differences explicit. <strong>Evaluate</strong> applies pricing, stock and margin logic while preserving the underlying evidence. <strong>Review</strong> routes exceptions and commercially sensitive actions through a human checkpoint. <strong>Act</strong> turns reviewed decisions into reports, sourcing work and operational follow-up.</p>
        <p className="mt-4 leading-8">The system deliberately separated signal collection and analysis from the actions that affect price, purchases or external contact. Automation prepared and traced the evidence. Exceptions, price changes, purchase decisions and external contact remained reviewable rather than disappearing into an opaque autonomous flow.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">The operator loop</h2>
        <p className="mt-4 leading-8">Wallapop is both a market signal and an operating channel. Discovery and contact sit beside each other: filtered listings retain price, model, condition and recency context, and when a listing is worth pursuing the sourcing conversation stays attached to the listing and to the prepared action. The message remains visible before it leaves the operator's hands.</p>
        <figure className="mt-6">
          <img src="/portfolio/autopricing-market-wallapop.webp" alt="Wallapop search results for iPhone 15 128 GB listings with price, condition and recency visible on each card" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">Discover: Wallapop results filtered to comparable iPhone 15 128 GB listings, with price, condition and recency on each card.</figcaption>
        </figure>
        <figure className="mt-8">
          <img src="/portfolio/autopricing-wallapop-operator.webp" alt="Wallapop inbox showing a sourcing conversation with an operator-prepared message ready for review" loading="lazy" className="w-full border border-slate-300 bg-white" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-500">Review: the Wallapop inbox with a prepared sourcing message, still under the operator's control before it is sent.</figcaption>
        </figure>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">Outcomes</h2>
        <p className="mt-4 leading-8">The delivery brought four things into one operating model, and each is documented in the delivery archive rather than described from memory:</p>
        <table className="mt-4 w-full border-t border-slate-400 text-left text-sm">
          <tbody>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">Pricing and commerce</th><td className="py-3 text-slate-600">A database-backed commerce and dynamic quotation flow with stock and pricing controls.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">Market intelligence</th><td className="py-3 text-slate-600">Collection, product matching and decision reporting across multiple resale sources.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">Operational channels</th><td className="py-3 text-slate-600">Wallapop sourcing and contact flows plus structured extraction of WhatsApp quote inputs.</td></tr>
            <tr className="border-b border-slate-300"><th className="py-3 pr-4 font-semibold text-slate-950">Delivery archive</th><td className="py-3 text-slate-600">Sixty-nine screens across three workstreams, covering collection, database records, operator controls and rendered reports.</td></tr>
          </tbody>
        </table>
        <p className="mt-6 leading-8">Reviewed outcomes are written back to the ERP and catalogue, so each pricing pass starts from the latest commercial state instead of from a stale export.</p>

        <h2 className="cv-serif mt-14 text-3xl font-semibold text-slate-950">What this demonstrates</h2>
        <p className="mt-4 leading-8">The core work was not a standalone model or a dashboard. It was forward-deployed engineering as operating translation: taking a commercial process that ran across incomplete data, existing tools and human decision points, mapping it, and turning that map into a system people could inspect and operate.</p>
        <p className="mt-4 leading-8">Human review is there by design. Pricing, purchases and external contact stay visible to an operator. Automation assembles and explains the decision context; it does not erase commercial authority.</p>

        <p className="mt-12 flex flex-wrap gap-4 border-t border-slate-300 pt-8 text-sm">
          <Link to="/projects" className="btn-secondary">View more work<i className="fas fa-arrow-right text-xs" /></Link>
          <Link to="/case-studies" className="btn-secondary">All case studies<i className="fas fa-arrow-right text-xs" /></Link>
          <Link to="/contact" className="btn-primary">Discuss a complex workflow<i className="fas fa-arrow-right text-xs" /></Link>
        </p>
      </div>
    </div>
  </article>
  </CaseStudyLocaleGate>
);

export default AutoPricingCase;
