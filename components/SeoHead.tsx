import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  NOT_FOUND_METADATA,
  buildHeadMarkup,
  getRouteMetadata,
  normalizePath,
} from '../seo/siteMetadata';

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
    const normalized = normalizePath(pathname);
    const staticMeta = getRouteMetadata(normalized);
    applySeoHead(staticMeta || { ...NOT_FOUND_METADATA, path: normalized });
  }, [pathname]);

  return null;
};

export default SeoHead;
