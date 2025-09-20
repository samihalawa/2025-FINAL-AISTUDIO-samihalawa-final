import { useMemo } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

interface PageMetaConfig {
  title: TranslationKey;
  description: TranslationKey;
}

const PAGE_META_MAP = {
  home: { title: 'meta.home.title', description: 'meta.home.description' },
  blog: { title: 'meta.blog.title', description: 'meta.blog.description' },
  contact: { title: 'meta.contact.title', description: 'meta.contact.description' },
  services: { title: 'meta.services.title', description: 'meta.services.description' },
  corporate: { title: 'meta.corporate.title', description: 'meta.corporate.description' },
  training: { title: 'meta.training.title', description: 'meta.training.description' },
  projects: { title: 'meta.projects.title', description: 'meta.projects.description' },
  caseStudies: { title: 'meta.caseStudies.title', description: 'meta.caseStudies.description' },
  locations: { title: 'meta.locations.title', description: 'meta.locations.description' },
  search: { title: 'meta.search.title', description: 'meta.search.description' },
} as const satisfies Record<string, PageMetaConfig>;

export type PageMetaKey = keyof typeof PAGE_META_MAP;

export const usePageMeta = (page: PageMetaKey) => {
  const { t } = useTranslation();

  return useMemo(() => {
    const config = PAGE_META_MAP[page];
    return {
      title: t(config.title),
      description: t(config.description),
    };
  }, [page, t]);
};
