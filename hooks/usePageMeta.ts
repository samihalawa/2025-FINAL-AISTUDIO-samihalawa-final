import { useEffect, useMemo } from 'react';
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

  const meta = useMemo(() => {
    const config = PAGE_META_MAP[page];
    return {
      title: t(config.title),
      description: t(config.description),
    };
  }, [page, t]);

  useEffect(() => {
    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        element.dataset.pageMeta = 'true';
        document.head.appendChild(element);
      }
      element.content = content;
    };
    const canonicalUrl = `https://samihalawa.com${window.location.pathname}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.dataset.pageMeta = 'true';
      document.head.appendChild(canonical);
    }

    document.title = meta.title;
    canonical.href = canonicalUrl;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
  }, [meta]);

  return meta;
};
