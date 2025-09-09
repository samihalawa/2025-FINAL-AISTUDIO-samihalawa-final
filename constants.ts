import { NavLink, Language, Skill, Tool, Project, Testimonial, Experience, ContactInfo, AdditionalProject, TrainingProgram, Partner } from './types';

export const NAV_LINKS: NavLink[] = [
    { href: '#about', key: 'nav.about' },
    { href: '#corporate', key: 'nav.corporate' },
    { href: '#projects', key: 'nav.projects' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#blog', key: 'nav.blog' },
    { href: '#contact', key: 'nav.contact' },
];

export const LANGUAGES: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
];

export const BLOG_POSTS: string[] = [
    'why-ai-is-the-future',
    'getting-started-with-gemini',
    '2025-guide-ai-agent-orchestration',
    'deep-dive-attio-api',
    'maximizing-learning-with-ai',
    'building-rag-with-gemini-langchain',
    'finetuning-vs-prompt-engineering',
    'ethics-of-ai-bias-fairness',
    'deploying-ml-models-docker-kubernetes',
    'multimodal-ai-explained',
    'ai-agents-automating-workflows',
    'react-server-vs-client-components',
    'securing-llm-powered-applications',
    'rise-of-ai-first-development',
    'ai-powered-code-generation-debugging',
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
    {
        icon: 'fas fa-chalkboard-teacher',
        titleKey: 'corporate.program1.title',
        descriptionKey: 'corporate.program1.description',
        audienceKey: 'corporate.program1.audience'
    },
    {
        icon: 'fas fa-cogs',
        titleKey: 'corporate.program2.title',
        descriptionKey: 'corporate.program2.description',
        audienceKey: 'corporate.program2.audience'
    },
    {
        icon: 'fas fa-robot',
        titleKey: 'corporate.program3.title',
        descriptionKey: 'corporate.program3.description',
        audienceKey: 'corporate.program3.audience'
    }
];

export const PARTNERS: Partner[] = [
    { icon: 'fab fa-aws', name: 'AWS' },
    { icon: 'fab fa-google', name: 'Google Cloud' },
    { icon: 'fab fa-microsoft', name: 'Microsoft Azure' }
];

export const TECHNICAL_SKILLS: Skill[] = [
    { nameKey: 'skills.skillJsTs', level: 95 },
    { nameKey: 'skills.skillPythonMl', level: 90 },
    { nameKey: 'skills.skillFullStack', level: 85 },
];

export const TOOLS: Tool[] = [
    { nameKey: 'skills.toolReactNext', icon: 'fab fa-react' },
    { nameKey: 'skills.toolNodeExpress', icon: 'fab fa-node-js' },
    { nameKey: 'skills.toolDjangoFlask', icon: 'fab fa-python' },
    { nameKey: 'skills.toolTailwindSass', icon: 'fab fa-sass' },
    { nameKey: 'skills.toolDockerK8s', icon: 'fas fa-server' },
];

export const PROJECTS: Project[] = [
    {
        id: 'autoclient',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=800&q=80',
        titleKey: 'projects.autoclient.title',
        descriptionKey: 'projects.autoclient.description',
        demoUrl: '/demos/autoclient/index.html',
        featuresTitleKey: 'projects.autoclient.featuresTitle',
        features: ['projects.autoclient.feature1', 'projects.autoclient.feature2', 'projects.autoclient.feature3', 'projects.autoclient.feature4'],
        summaryKey: 'projects.autoclient.summary',
        hasChat: true
    },
    {
        id: 'spreadsheet',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80',
        titleKey: 'projects.spreadsheet.title',
        descriptionKey: 'projects.spreadsheet.description',
        demoUrl: '/demos/spreadsheet/index.html',
        featuresTitleKey: 'projects.spreadsheet.featuresTitle',
        features: ['projects.spreadsheet.feature1', 'projects.spreadsheet.feature2', 'projects.spreadsheet.feature3', 'projects.spreadsheet.feature4'],
        summaryKey: 'projects.spreadsheet.summary',
    },
    {
        id: 'cryptoagent',
        image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e9f1?auto=format&fit=crop&w=1200&h=800&q=80',
        titleKey: 'projects.cryptoagent.title',
        descriptionKey: 'projects.cryptoagent.description',
        demoUrl: '/demos/cryptoagent/index.html',
        featuresTitleKey: 'projects.cryptoagent.featuresTitle',
        features: ['projects.cryptoagent.feature1', 'projects.cryptoagent.feature2', 'projects.cryptoagent.feature3', 'projects.cryptoagent.feature4'],
        summaryKey: 'projects.cryptoagent.summary',
        hasChat: true
    },
    {
        id: 'banking',
        image: 'https://images.unsplash.com/photo-1556767576-cf63a644b5f2?auto=format&fit=crop&w=1200&h=800&q=80',
        titleKey: 'projects.banking.title',
        descriptionKey: 'projects.banking.description',
        demoUrl: '/demos/banking/index.html',
        featuresTitleKey: 'projects.banking.featuresTitle',
        features: ['projects.banking.feature1', 'projects.banking.feature2', 'projects.banking.feature3', 'projects.banking.feature4'],
        summaryKey: 'projects.banking.summary',
    },
    {
        id: 'apollomedical',
        image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&h=800&q=80',
        titleKey: 'projects.apollomedical.title',
        descriptionKey: 'projects.apollomedical.description',
        demoUrl: '/demos/apollomedical/index.html',
        featuresTitleKey: 'projects.apollomedical.featuresTitle',
        features: ['projects.apollomedical.feature1', 'projects.apollomedical.feature2', 'projects.apollomedical.feature3', 'projects.apollomedical.feature4'],
        summaryKey: 'projects.apollomedical.summary',
    },
    {
        id: 'autosite',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&h=800&q=80',
        titleKey: 'projects.autosite.title',
        descriptionKey: 'projects.autosite.description',
        repoUrl: 'https://github.com/samihalawa/2025-FINAL-AUTOSTUDIO-SAMIHALAWA.COM',
        featuresTitleKey: 'projects.autosite.featuresTitle',
        features: ['projects.autosite.feature1', 'projects.autosite.feature2', 'projects.autosite.feature3'],
        summaryKey: 'projects.autosite.summary',
    }
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
    { icon: 'fas fa-bug-slash text-slate-500 mr-3', titleKey: 'additionalProjects.vuda.title', descriptionKey: 'additionalProjects.vuda.description' },
    { icon: 'fas fa-video text-slate-500 mr-3', titleKey: 'additionalProjects.autovideo.title', descriptionKey: 'additionalProjects.autovideo.description' },
    { icon: 'fas fa-hospital-user text-slate-500 mr-3', titleKey: 'additionalProjects.apollomedical.title', descriptionKey: 'additionalProjects.apollomedical.description' },
    { icon: 'fas fa-user-md text-slate-500 mr-3', titleKey: 'additionalProjects.autodetectsurgery.title', descriptionKey: 'additionalProjects.autodetectsurgery.description' },
    { icon: 'fas fa-desktop text-slate-500 mr-3', titleKey: 'additionalProjects.autocomputer.title', descriptionKey: 'additionalProjects.autocomputer.description' },
    { icon: 'fas fa-globe text-slate-500 mr-3', titleKey: 'additionalProjects.autobrowser.title', descriptionKey: 'additionalProjects.autobrowser.description' },
    { icon: 'fas fa-user-tie text-slate-500 mr-3', titleKey: 'additionalProjects.autoclient.title', descriptionKey: 'additionalProjects.autoclient.description' }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quoteKey: 'testimonials.jane.quote',
        nameKey: 'testimonials.jane.name',
        titleKey: 'testimonials.jane.title',
        image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
        quoteKey: 'testimonials.john.quote',
        nameKey: 'testimonials.john.name',
        titleKey: 'testimonials.john.title',
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
        quoteKey: 'testimonials.emily.quote',
        nameKey: 'testimonials.emily.name',
        titleKey: 'testimonials.emily.title',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=256&h=256&q=80'
    },
];

export const EXPERIENCE: Experience[] = [
    {
        titleKey: 'experience.job1.title',
        durationKey: 'experience.job1.duration',
        companyKey: 'experience.job1.company',
        descriptionKey: 'experience.job1.description'
    },
    {
        titleKey: 'experience.job2.title',
        durationKey: 'experience.job2.duration',
        companyKey: 'experience.job2.company',
        descriptionKey: 'experience.job2.description'
    },
    {
        titleKey: 'experience.job3.title',
        durationKey: 'experience.job3.duration',
        companyKey: 'experience.job3.company',
        descriptionKey: 'experience.job3.description'
    },
    {
        titleKey: 'experience.job4.title',
        durationKey: 'experience.job4.duration',
        companyKey: '',
        descriptionKey: 'experience.job4.description'
    }
];

export const CONTACT_INFO: ContactInfo[] = [
    { icon: 'fas fa-envelope text-slate-500', labelKey: 'contact.emailLabel', value: 'sami@samihalawa.com', href: 'mailto:sami@samihalawa.com' },
    { icon: 'fas fa-phone text-slate-500', labelKey: 'contact.phoneLabel', value: '+34 679 794 037', href: 'tel:+34679794037' },
    { icon: 'fas fa-map-marker-alt text-slate-500', labelKey: 'contact.locationLabel', value: 'Madrid, Spain', href: 'https://maps.google.com/?q=Madrid,Spain' },
    { icon: 'fab fa-linkedin text-slate-500', labelKey: 'contact.linkedinLabel', value: 'linkedin.com/in/samihalawa', href: 'https://www.linkedin.com/in/samihalawa/' }
];
