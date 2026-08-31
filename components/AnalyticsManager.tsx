import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { bootstrapAnalytics, trackPortfolioEvent } from '../lib/analytics';

const isContactHref = (href: string) => href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('wa.me/');
const isCvHref = (href: string) => href.includes('/cv/') && (href.endsWith('.pdf') || href.endsWith('.txt'));

const AnalyticsManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    bootstrapAnalytics();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    trackPortfolioEvent('page_view', {
      page_location: window.location.href,
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_title: document.title,
      page_referrer: document.referrer || null,
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_content: searchParams.get('utm_content'),
    });
  }, [location.hash, location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!target) return;
      const href = target.href || target.getAttribute('href') || '';

      if (isCvHref(href)) {
        trackPortfolioEvent('cv_download', { file_name: href.split('/').pop() || 'cv', link_url: href });
      } else if (isContactHref(href)) {
        const contactMethod = href.includes('wa.me/') ? 'whatsapp' : href.startsWith('tel:') ? 'phone' : 'email';
        trackPortfolioEvent('contact_click', {
          contact_method: contactMethod,
          link_url: href,
          link_text: target.textContent?.trim().slice(0, 120) || contactMethod,
        });
      } else if (target.dataset.analyticsEvent === 'project_view') {
        trackPortfolioEvent('project_view', {
          project_name: target.dataset.projectName || target.textContent?.trim().slice(0, 120) || 'portfolio project',
          link_url: href,
        });
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
};

export default AnalyticsManager;
