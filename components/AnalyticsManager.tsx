import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import {
  bootstrapAnalytics,
  getAnalyticsConsent,
  setAnalyticsConsent,
  trackPortfolioEvent,
  type AnalyticsConsent,
} from '../lib/analytics';

const consentCopy: Record<LanguageCode, { title: string; body: string; accept: string; reject: string }> = {
  en: {
    title: 'Site analytics',
    body: 'Allow analytics and advertising measurement so I can improve the portfolio and understand genuine enquiries.',
    accept: 'Allow',
    reject: 'Decline',
  },
  es: {
    title: 'Analítica del sitio',
    body: 'Permite la medición analítica y publicitaria para mejorar el portfolio y entender las consultas reales.',
    accept: 'Permitir',
    reject: 'Rechazar',
  },
  fr: {
    title: 'Analyse du site',
    body: 'Autorisez la mesure analytique et publicitaire pour améliorer le portfolio et comprendre les demandes réelles.',
    accept: 'Autoriser',
    reject: 'Refuser',
  },
  zh: {
    title: '网站分析',
    body: '允许分析与广告衡量，以便改进作品集并了解真实咨询。',
    accept: '允许',
    reject: '拒绝',
  },
};

const isContactHref = (href: string) => href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('wa.me/');
const isCvHref = (href: string) => href.includes('/cv/') && (href.endsWith('.pdf') || href.endsWith('.txt'));

const AnalyticsManager: React.FC = () => {
  const { language } = useTranslation();
  const location = useLocation();
  const firstRoute = useRef(true);
  const submittedIds = useRef(new Set<string>());
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    bootstrapAnalytics();
    setShowConsent(getAnalyticsConsent() === null);
  }, []);

  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }

    trackPortfolioEvent('page_view', {
      page_location: window.location.href,
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_title: document.title,
    });
  }, [location.hash, location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!target) return;
      const href = target.href || target.getAttribute('href') || '';

      if (isCvHref(href)) {
        trackPortfolioEvent('cv_download', {
          file_name: href.split('/').pop() || 'cv',
          link_url: href,
        });
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

  useEffect(() => {
    const handleTallySubmission = (event: MessageEvent) => {
      if (event.origin !== 'https://tally.so' || typeof event.data !== 'string' || !event.data.includes('Tally.FormSubmitted')) return;

      try {
        const message = JSON.parse(event.data) as { payload?: { id?: string; formId?: string; formName?: string } };
        const submissionId = message.payload?.id;
        if (!submissionId || submittedIds.current.has(submissionId)) return;
        submittedIds.current.add(submissionId);

        trackPortfolioEvent('generate_lead', {
          form_id: message.payload?.formId || 'tally',
          form_name: message.payload?.formName || 'portfolio contact',
          lead_type: message.payload?.formId === 'mY1V66' ? 'newsletter' : 'contact',
        });
      } catch {
        // Ignore unrelated cross-window messages that happen to contain the same text.
      }
    };

    window.addEventListener('message', handleTallySubmission);
    return () => window.removeEventListener('message', handleTallySubmission);
  }, []);

  const chooseConsent = (consent: AnalyticsConsent) => {
    void setAnalyticsConsent(consent);
    setShowConsent(false);
  };

  if (!showConsent) return null;
  const copy = consentCopy[language];

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:bottom-6 sm:left-6 sm:right-auto" aria-labelledby="analytics-consent-title">
      <h2 id="analytics-consent-title" className="text-base font-bold text-slate-950">{copy.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy.body}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => chooseConsent('granted')} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-800">{copy.accept}</button>
        <button type="button" onClick={() => chooseConsent('denied')} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">{copy.reject}</button>
      </div>
    </aside>
  );
};

export default AnalyticsManager;
