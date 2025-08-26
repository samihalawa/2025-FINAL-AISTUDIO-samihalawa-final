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
        image: 'https://picsum.photos/seed/autoclient/400/300',
        titleKey: 'projects.autoclient.title',
        descriptionKey: 'projects.autoclient.description',
        demoUrl: 'https://aistudio.google.com/app/drive/173S05u8e-MLh-eJ3L27VkWk5naaPEw-n',
        featuresTitleKey: 'projects.autoclient.featuresTitle',
        features: ['projects.autoclient.feature1', 'projects.autoclient.feature2', 'projects.autoclient.feature3', 'projects.autoclient.feature4'],
        summaryKey: 'projects.autoclient.summary',
        hasChat: true
    },
    {
        id: 'spreadsheet',
        image: 'https://picsum.photos/seed/spreadsheet/400/300',
        titleKey: 'projects.spreadsheet.title',
        descriptionKey: 'projects.spreadsheet.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1jD88o_uC5a432BCpUvOq6a_uY-3yQ9r4',
        featuresTitleKey: 'projects.spreadsheet.featuresTitle',
        features: ['projects.spreadsheet.feature1', 'projects.spreadsheet.feature2', 'projects.spreadsheet.feature3', 'projects.spreadsheet.feature4'],
        summaryKey: 'projects.spreadsheet.summary',
    },
    {
        id: 'cryptoagent',
        image: 'https://picsum.photos/seed/crypto/400/300',
        titleKey: 'projects.cryptoagent.title',
        descriptionKey: 'projects.cryptoagent.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1o0F4k4s5f8d9gH7k6j5e4d3c2b1a0z-y',
        featuresTitleKey: 'projects.cryptoagent.featuresTitle',
        features: ['projects.cryptoagent.feature1', 'projects.cryptoagent.feature2', 'projects.cryptoagent.feature3', 'projects.cryptoagent.feature4'],
        summaryKey: 'projects.cryptoagent.summary',
        hasChat: true
    },
    {
        id: 'banking',
        image: 'https://picsum.photos/seed/banking/400/300',
        titleKey: 'projects.banking.title',
        descriptionKey: 'projects.banking.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1z2Y3x4W5v6b7a8c9d0e1f2g3h4j5k-l',
        featuresTitleKey: 'projects.banking.featuresTitle',
        features: ['projects.banking.feature1', 'projects.banking.feature2', 'projects.banking.feature3', 'projects.banking.feature4'],
        summaryKey: 'projects.banking.summary',
    },
    {
        id: 'apollomedical',
        image: 'https://picsum.photos/seed/medical/400/300',
        titleKey: 'projects.apollomedical.title',
        descriptionKey: 'projects.apollomedical.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p2o3i4u5y6t7r8e9w0q-a1s2d3f4g5h',
        featuresTitleKey: 'projects.apollomedical.featuresTitle',
        features: ['projects.apollomedical.feature1', 'projects.apollomedical.feature2', 'projects.apollomedical.feature3', 'projects.apollomedical.feature4'],
        summaryKey: 'projects.apollomedical.summary',
    },
    {
        id: 'autosite',
        image: 'https://picsum.photos/seed/website/400/300',
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
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        quoteKey: 'testimonials.john.quote',
        nameKey: 'testimonials.john.name',
        titleKey: 'testimonials.john.title',
        image: 'https://randomuser.me/api/portraits/men/36.jpg'
    },
    {
        quoteKey: 'testimonials.emily.quote',
        nameKey: 'testimonials.emily.name',
        titleKey: 'testimonials.emily.title',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
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