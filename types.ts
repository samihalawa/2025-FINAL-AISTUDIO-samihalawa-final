import type { TranslationKey } from './i18n/translations';

export interface NavLink {
    href: string;
    key: TranslationKey;
}

export interface Language {
    code: string;
    name: string;
}

export interface Skill {
    nameKey: TranslationKey;
    level: number;
}

export interface Tool {
    nameKey: TranslationKey;
    icon: string;
}

export interface Project {
    id: string;
    image: string;
    titleKey: TranslationKey;
    descriptionKey: TranslationKey;
    demoUrl?: string;
    repoUrl?: string;
    featuresTitleKey: TranslationKey;
    features: TranslationKey[];
    summaryKey: TranslationKey;
    hasChat?: boolean;
}

export interface AdditionalProject {
    icon: string;
    titleKey: TranslationKey;
    descriptionKey: TranslationKey;
}

export interface Testimonial {
    quoteKey: TranslationKey;
    nameKey: TranslationKey;
    titleKey: TranslationKey;
    image: string;
}

export interface Experience {
    titleKey: TranslationKey;
    durationKey: TranslationKey;
    companyKey: TranslationKey | '';
    descriptionKey: TranslationKey;
}

export interface ContactInfo {
    icon: string;
    labelKey: TranslationKey;
    value: string;
    href: string;
}

export interface TrainingProgram {
    icon: string;
    titleKey: TranslationKey;
    descriptionKey: TranslationKey;
    audienceKey: TranslationKey;
}

export interface Partner {
    icon: string;
    name: string;
}

export interface Article {
    slug: string;
    title: string;
    date: string;
    summary: string;
    author: string;
    content: string;
}