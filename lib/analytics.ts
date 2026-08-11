/// <reference types="vite/client" />

import type { PostHog } from 'posthog-js';

export const POSTHOG_HOST = 'https://posthog.megawebs.com';
export const ANALYTICS_CONSENT_KEY = 'samihalawa.analytics-consent';

export type AnalyticsConsent = 'granted' | 'denied';
export type PortfolioEventName =
  | 'page_view'
  | 'generate_lead'
  | 'contact_click'
  | 'cv_download'
  | 'project_view';

type EventProperties = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const posthogKey = (import.meta.env.VITE_POSTHOG_KEY as string | undefined)?.trim();
let posthog: PostHog | null = null;
let posthogPromise: Promise<PostHog | null> | null = null;

export const getAnalyticsConsent = (): AnalyticsConsent | null => {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  return value === 'granted' || value === 'denied' ? value : null;
};

const updateGoogleConsent = (consent: AnalyticsConsent) => {
  const storage = consent === 'granted' ? 'granted' : 'denied';
  window.gtag?.('consent', 'update', {
    analytics_storage: storage,
    ad_storage: storage,
    ad_user_data: storage,
    ad_personalization: storage,
  });
};

const initializePostHog = async (): Promise<PostHog | null> => {
  if (typeof window === 'undefined' || !posthogKey || getAnalyticsConsent() !== 'granted') return null;
  if (posthog) return posthog;
  if (posthogPromise) return posthogPromise;

  posthogPromise = import('posthog-js').then(({ default: client }) => {
    client.init(posthogKey, {
      api_host: POSTHOG_HOST,
      ui_host: POSTHOG_HOST,
      defaults: '2026-06-25',
      autocapture: true,
      capture_pageview: false,
      capture_pageleave: true,
      capture_performance: true,
      capture_exceptions: true,
      enable_recording_console_log: true,
      disable_session_recording: false,
      rageclick: true,
      capture_dead_clicks: true,
      person_profiles: 'identified_only',
      session_recording: {
        maskAllInputs: true,
        blockSelector: '[data-private], [data-sensitive]',
      },
    });
    posthog = client;
    return client;
  }).catch(() => null);

  return posthogPromise;
};

export const setAnalyticsConsent = async (consent: AnalyticsConsent) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ANALYTICS_CONSENT_KEY, consent);
  updateGoogleConsent(consent);

  if (consent === 'granted') {
    const client = await initializePostHog();
    client?.opt_in_capturing();
  } else if (posthog) {
    posthog.opt_out_capturing();
  }
};

export const bootstrapAnalytics = () => {
  if (typeof window === 'undefined') return;
  const consent = getAnalyticsConsent();
  if (consent) updateGoogleConsent(consent);
  if (consent === 'granted') void initializePostHog();
};

export const trackPortfolioEvent = (event: PortfolioEventName, properties: EventProperties = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...properties });

  if (getAnalyticsConsent() === 'granted') {
    void initializePostHog().then(client => client?.capture(event, properties));
  }
};
