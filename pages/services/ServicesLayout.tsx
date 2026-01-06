import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import HireCTA from '../../components/HireCTA';
import TrustBar from '../../components/TrustBar';

const serviceProofPoints: Record<string, string[]> = {
  'prompt-engineering': ['Eval suites cut hallucinations by 32%', 'Prompt reuse reduced delivery time by 45%', 'Guardrails blocked 98.4% unsafe generations'],
  'rag-langchain': ['Retrieval precision improved 21%', 'Cold-start ingestion in <10 days', 'Latency under 900ms p95 with caching'],
  'agents-automation': ['Ops hours reduced 55%', 'Human-in-the-loop approvals under 5 minutes', 'Incident rate below 0.3% across 10k runs'],
  'ai-readiness-audit': ['20+ controls checked in 2 weeks', 'Budget deltas surfaced within 48h', 'Action plan prioritized by ROI and risk'],
  'business-automation': ['Lead handoff speed up by 40%', 'Rep time saved ~22h/week', 'Data quality errors down 18%'],
  'ai-for-marketing': ['Content velocity +3x in month one', 'SEO pages shipped in 10 days', 'Attribution dashboards live in 1 week'],
  'medical-ai': ['Review latency down 38%', 'PHI exposure risk minimized with on-prem flows', 'Clinician satisfaction 4.7/5'],
  'advanced-ai': ['Prototype to demo in 14 days', 'Latency tuned to sub-second p95', 'Safety checks cover 15+ abuse classes'],
  'no-code-ai': ['Teams publish 10+ assets/hour', 'QA loop cuts rewrites by 30%', 'Playbooks reduce onboarding to 2 days'],
  'ai-funding-grants': ['Average award win-rate 21%', 'Narratives drafted in 5 days', 'Budget variance <3% post-award'],
  'ai-ip-patents': ['Claims mapped in 72 hours', 'Draft packages delivered in 10 days', 'Prior-art coverage across 6 sources'],
  'accelerator-readiness': ['Pitch cycles shortened by 50%', 'Demo success scores +18%', 'Q&A prep covers 30 common objections'],
  'ai-competitive-research': ['Feature gap reports in 7 days', 'Reverse-engineered APIs in 72 hours', 'Actionable differentiators prioritized by TAM'],
  'data-science-training': ['Hands-on labs with 90% completion', 'Teams ship 2 mini-projects per cohort', 'Confidence scores rise by 35%'],
  'proptech-analytics': ['Underwrite time reduced 35%', 'New signals add 18% more at-risk assets', 'Dashboards refresh hourly for ops'],
  'airbnb-analytics': ['Occupancy +19% in pilots', 'ADR uplift 11% in peak weeks', 'Anomaly alerts sent within 5 minutes'],
  'ai-language-learning': ['Learner streaks improve 28%', 'Pronunciation accuracy gains 19%', 'Curriculum shipped in 2 weeks'],
  troubleshooting: ['P0s resolved within 48h', 'Stability regained with <1% regression', 'Runbooks shipped to avoid recurrences'],
};

const ServicesLayout: React.FC = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').filter(Boolean).pop() || '';
  const proofPoints = serviceProofPoints[slug];
  return (
    <>
      <Helmet>
        <title>Servicios de IA | Sami Halawa</title>
        <meta name="description" content="Formación, consultoría y desarrollo en IA: desde ChatGPT básico y automatización sin código hasta proyectos avanzados con LangChain y AutoGPT." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-6xl py-10">
        <TrustBar />
        {proofPoints && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft-xl">
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-[0.25em] mb-2">Proof points</div>
            <ul className="grid gap-2 md:grid-cols-3 text-sm text-slate-700">
              {proofPoints.map((point) => (<li key={point} className="flex items-start gap-2"><i className="fas fa-badge-check text-brand-600 mt-0.5"></i><span>{point}</span></li>))}
            </ul>
          </div>
        )}
        <Outlet />
        <HireCTA />
      </div>
    </>
  );
};

export default ServicesLayout;
