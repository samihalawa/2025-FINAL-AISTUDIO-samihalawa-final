import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  NOT_FOUND_METADATA,
  buildBlogPostMetadata,
  buildHeadMarkup,
  getRouteMetadata,
  normalizePath,
} from '../seo/siteMetadata';

type BlogManifestEntry = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author?: string;
  tags?: string[];
};

function applySeoHead(meta: Record<string, unknown>) {
  document.head.querySelectorAll('[data-seo-head="true"]').forEach((element) => element.remove());
  const template = document.createElement('template');
  template.innerHTML = buildHeadMarkup(meta);
  document.head.append(...Array.from(template.content.childNodes));
  document.documentElement.lang = String(meta.lang || 'en');
}

const SeoHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;
    const normalized = normalizePath(pathname);
    const staticMeta = getRouteMetadata(normalized);

    if (staticMeta) {
      applySeoHead(staticMeta);
      return () => {
        cancelled = true;
      };
    }

    if (normalized.startsWith('/blog/')) {
      const slug = decodeURIComponent(normalized.slice('/blog/'.length));
      void fetch('/blog/index.json', { cache: 'no-cache' })
        .then((response) => {
          if (!response.ok) throw new Error(`Blog manifest returned ${response.status}`);
          return response.json() as Promise<BlogManifestEntry[]>;
        })
        .then((entries) => {
          if (cancelled) return;
          const entry = entries.find((candidate) => candidate.slug === slug);
          applySeoHead(entry ? buildBlogPostMetadata(entry) : { ...NOT_FOUND_METADATA, path: normalized });
        })
        .catch(() => {
          if (!cancelled) applySeoHead({ ...NOT_FOUND_METADATA, path: normalized });
        });
    } else {
      applySeoHead({ ...NOT_FOUND_METADATA, path: normalized });
    }

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
};

export default SeoHead;
