import { NavLink, Language, Skill, Tool, Project, Testimonial, Experience, ContactInfo, AdditionalProject } from './types';

export const NAV_LINKS: NavLink[] = [
    { href: '#about', key: 'nav.about' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#projects', key: 'nav.projects' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#contact', key: 'nav.contact' },
];

export const LANGUAGES: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
];

export const TECHNICAL_SKILLS: Skill[] = [
    { nameKey: 'skills.skillJsTs', level: 95 },
    { nameKey: 'skills.skillPythonMl', level: 90 },
    { nameKey: 'skills.skillFullStack', level: 85 },
];

export const TOOLS: Tool[] = [
    { nameKey: 'skills.toolReactNext' },
    { nameKey: 'skills.toolNodeExpress' },
    { nameKey: 'skills.toolDjangoFlask' },
    { nameKey: 'skills.toolTailwindSass' },
    { nameKey: 'skills.toolDockerK8s' },
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
        color: 'indigo',
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
        color: 'purple',
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
        color: 'yellow',
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
        color: 'blue',
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
        color: 'teal',
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
        color: 'cyan',
    }
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
    { icon: 'fas fa-bug-slash text-purple-500 mr-3', titleKey: 'additionalProjects.vuda.title', descriptionKey: 'additionalProjects.vuda.description' },
    { icon: 'fas fa-video text-red-500 mr-3', titleKey: 'additionalProjects.autovideo.title', descriptionKey: 'additionalProjects.autovideo.description' },
    { icon: 'fas fa-hospital-user text-blue-500 mr-3', titleKey: 'additionalProjects.apollomedical.title', descriptionKey: 'additionalProjects.apollomedical.description' },
    { icon: 'fas fa-user-md text-pink-500 mr-3', titleKey: 'additionalProjects.autodetectsurgery.title', descriptionKey: 'additionalProjects.autodetectsurgery.description' },
    { icon: 'fas fa-desktop text-green-500 mr-3', titleKey: 'additionalProjects.autocomputer.title', descriptionKey: 'additionalProjects.autocomputer.description' },
    { icon: 'fas fa-globe text-indigo-500 mr-3', titleKey: 'additionalProjects.autobrowser.title', descriptionKey: 'additionalProjects.autobrowser.description' },
    { icon: 'fas fa-user-tie text-yellow-500 mr-3', titleKey: 'additionalProjects.autoclient.title', descriptionKey: 'additionalProjects.autoclient.description' }
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
    { icon: 'fas fa-envelope text-indigo-600', labelKey: 'contact.emailLabel', value: 'sami@samihalawa.com', href: 'mailto:sami@samihalawa.com' },
    { icon: 'fas fa-phone text-indigo-600', labelKey: 'contact.phoneLabel', value: '+34 679 794 037', href: 'tel:+34679794037' },
    { icon: 'fas fa-map-marker-alt text-indigo-600', labelKey: 'contact.locationLabel', value: 'Madrid, Spain', href: 'https://maps.google.com/?q=Madrid,Spain' },
    { icon: 'fab fa-linkedin text-indigo-600', labelKey: 'contact.linkedinLabel', value: 'linkedin.com/in/samihalawa', href: 'https://www.linkedin.com/in/samihalawa/' }
];