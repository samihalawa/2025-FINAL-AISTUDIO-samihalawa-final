import { NavLink, Language, ContactInfo, TrainingProgram, Partner, ServiceMenuSection } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '/', key: 'nav.about' },
  { href: '/projects', key: 'nav.projects' },
  { href: '/services', key: 'nav.services' },
  { href: '/case-studies', key: 'nav.caseStudies' },
  { href: '/cv', key: 'nav.cv' },
  { href: '/blog', key: 'nav.blog' },
  { href: '/contact', key: 'nav.contact' },
];

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
];

export const SERVICE_MENU_SECTIONS: ServiceMenuSection[] = [
  {
    titleKey: 'header.services.core',
    items: [
      { href: '/services/prompt-engineering', labelKey: 'services.promptEngineering.name' },
      { href: '/services/rag-langchain', labelKey: 'services.ragLangChain.name' },
      { href: '/services/agents-automation', labelKey: 'services.agentsAutomation.name' },
      { href: '/services/ai-readiness-audit', labelKey: 'services.aiReadinessAudit.name' },
    ]
  },
  {
    titleKey: 'header.services.business',
    items: [
      { href: '/services/business-automation', labelKey: 'services.businessAutomation.name' },
      { href: '/services/ai-for-marketing', labelKey: 'services.aiForMarketing.name' },
      { href: '/services/medical-ai', labelKey: 'services.medicalAI.name' },
      { href: '/ai-training', labelKey: 'nav.training' },
    ]
  },
  {
    titleKey: 'header.services.specialized',
    items: [
      { href: '/services/advanced-ai', labelKey: 'services.advancedAI.name' },
      { href: '/services/no-code-ai', labelKey: 'services.noCodeAI.name' },
      { href: '/services/troubleshooting', labelKey: 'services.troubleshooting.name' },
      { href: '/services', labelKey: 'header.services.viewAll' },
    ]
  }
];

export const BLOG_POSTS: string[] = [
  'why-ai-is-the-future', 'getting-started-with-gemini', '2025-guide-ai-agent-orchestration',
  'deep-dive-attio-api', 'maximizing-learning-with-ai', 'building-rag-with-gemini-langchain',
  'finetuning-vs-prompt-engineering', 'ethics-of-ai-bias-fairness', 'deploying-ml-models-docker-kubernetes',
  'multimodal-ai-explained', 'ai-agents-automating-workflows', 'react-server-vs-client-components',
  'securing-llm-powered-applications', 'rise-of-ai-first-development', 'ai-powered-code-generation-debugging',
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  { icon: 'fas fa-chalkboard-teacher', titleKey: 'corporate.program1.title', descriptionKey: 'corporate.program1.description', audienceKey: 'corporate.program1.audience' },
  { icon: 'fas fa-cogs', titleKey: 'corporate.program2.title', descriptionKey: 'corporate.program2.description', audienceKey: 'corporate.program2.audience' },
  { icon: 'fas fa-robot', titleKey: 'corporate.program3.title', descriptionKey: 'corporate.program3.description', audienceKey: 'corporate.program3.audience' }
];

export const PARTNERS: Partner[] = [
  { icon: 'fab fa-aws', name: 'AWS' },
  { icon: 'fab fa-google', name: 'Google Cloud' },
  { icon: 'fab fa-microsoft', name: 'Microsoft Azure' }
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: 'fas fa-envelope text-slate-500', labelKey: 'contact.emailLabel', value: 'sami@oulang.ai', href: 'mailto:sami@oulang.ai' },
  { icon: 'fas fa-phone text-slate-500', labelKey: 'contact.phoneLabel', value: '+34 679 794 037', href: 'tel:+34679794037' },
  { icon: 'fas fa-map-marker-alt text-slate-500', labelKey: 'contact.locationLabel', value: 'Madrid, Spain', valueKey: 'contact.locationValue', href: 'https://maps.google.com/?q=Madrid%2C%20Spain' },
  { icon: 'fas fa-file-contract text-slate-500', labelKey: 'contact.registrationLabel', value: 'Agents AI Ltd · 16570822', valueKey: 'contact.registrationValue', href: 'https://find-and-update.company-information.service.gov.uk/company/16570822' }
];
