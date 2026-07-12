import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

export type CaseId =
  | 'apolo-medical-framework'
  | 'radiology-ai'
  | 'autoclient'
  | 'attio-sequences'
  | 'banking-assistant'
  | 'spreadsheet-assistant'
  | 'proptech-analytics'
  | 'airbnb-intelligence'
  | 'autofunding-grants'
  | 'lanzadera-readiness';

type Props = { caseId: CaseId };

const validationMap: Record<CaseId, { problem: string; solution: string; outcome: string; serviceHref: string; serviceLabelKey: TranslationKey }> = {
  'apolo-medical-framework': {
    problem: 'Hospitals lacked explainable imaging AI without exposing PHI in cloud workflows.',
    solution: 'Two-stage VLM + LLM pipeline with local inference, DPO-tuned reasoning and audit logging.',
    outcome: 'Cut review time by 38% while meeting >99% non-diagnostic privacy constraints.',
    serviceHref: '/services/medical-ai',
    serviceLabelKey: 'services.medicalAI.name',
  },
  'radiology-ai': {
    problem: 'Radiology teams spent hours triaging ambiguous findings.',
    solution: 'RAG over imaging reports plus checklist prompts to surface edge cases automatically.',
    outcome: 'Reduced reread backlog by 42% and improved report consistency by 18% F1.',
    serviceHref: '/services/medical-ai',
    serviceLabelKey: 'services.medicalAI.name',
  },
  autoclient: {
    problem: 'Outbound reps were limited to manual list building and one-off personalization.',
    solution: 'Agentic enrichment + sequencing with human-in-the-loop approvals and CRM sync.',
    outcome: 'Lifted reply rates by 27% and saved ~22 hours per week per rep.',
    serviceHref: '/services/business-automation',
    serviceLabelKey: 'services.businessAutomation.name',
  },
  'attio-sequences': {
    problem: 'Sales ops lacked governed automations across Attio and marketing tools.',
    solution: 'Playbook-driven orchestrations with retries, observability, and safety budgets.',
    outcome: 'Rolled out 9 flows in 3 weeks with <0.2% error rate across 50k events.',
    serviceHref: '/services/agents-automation',
    serviceLabelKey: 'services.agentsAutomation.name',
  },
  'banking-assistant': {
    problem: 'Customers abandoned journeys because support answers were slow and inconsistent.',
    solution: 'Retriever grounded assistant with guardrails, escalation paths, and audit trails.',
    outcome: 'Cut average handle time by 31% and raised CSAT to 4.6/5 within two sprints.',
    serviceHref: '/services/advanced-ai',
    serviceLabelKey: 'services.advancedAI.name',
  },
  'spreadsheet-assistant': {
    problem: 'Analysts spent cycles cleaning CSVs and writing repetitive formulas.',
    solution: 'Sheet-side copilot with provenance, evals, and governed tool-calling.',
    outcome: 'Automated 65% of requests and reduced error tickets by 22%.',
    serviceHref: '/services/business-automation',
    serviceLabelKey: 'services.businessAutomation.name',
  },
  'proptech-analytics': {
    problem: 'Property teams lacked unified data for underwriting and alerts.',
    solution: 'Lakehouse ingestion + feature store powering valuation and risk dashboards.',
    outcome: 'Improved underwrite cycle time by 35% and surfaced 18% more at-risk assets.',
    serviceHref: '/services/proptech-analytics',
    serviceLabelKey: 'services.proptechAnalytics.name',
  },
  'airbnb-intelligence': {
    problem: 'Hosts priced blindly across seasons and events.',
    solution: 'Pricing ML with demand signals, anomaly detection, and automated recommendations.',
    outcome: 'Increased occupancy by 19% and ADR by 11% in pilot markets.',
    serviceHref: '/services/airbnb-analytics',
    serviceLabelKey: 'services.airbnbAnalytics.name',
  },
  'autofunding-grants': {
    problem: 'Founders missed non-dilutive funding windows due to fragmented requirements.',
    solution: 'Knowledge graph of grant criteria with auto-generated narratives and budgets.',
    outcome: 'Submitted 14 applications with 3 wins totaling €420k in six weeks.',
    serviceHref: '/services/ai-funding-grants',
    serviceLabelKey: 'services.aiFundingGrants.name',
  },
  'lanzadera-readiness': {
    problem: 'Startups lacked evidence-heavy decks for accelerator selection.',
    solution: 'Evidence-backed pitch with demoable AI prototype and objection handling scripts.',
    outcome: 'Advanced 2 cohorts with a 50% shorter prep cycle and higher partner scores.',
    serviceHref: '/services/accelerator-readiness',
    serviceLabelKey: 'services.acceleratorReadiness.name',
  },
};

const CaseStudyValidation: React.FC<Props> = ({ caseId }) => {
  const { t } = useTranslation();
  const entry = validationMap[caseId];
  if (!entry) return null;

  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-soft-xl">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{t('caseStudies.section.problem')}</div>
          <p className="mt-2 text-sm text-slate-700">{entry.problem}</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{t('caseStudies.section.solution')}</div>
          <p className="mt-2 text-sm text-slate-700">{entry.solution}</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{t('caseStudies.section.outcome')}</div>
          <p className="mt-2 text-sm text-slate-700">{entry.outcome}</p>
          <a className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline" href={entry.serviceHref}>
            {t('caseStudies.section.validatedBy')} {t(entry.serviceLabelKey)}
            <i className="fas fa-arrow-up-right-from-square text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyValidation;
