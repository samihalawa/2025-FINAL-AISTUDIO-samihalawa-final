/// <reference types="vite/client" />

import type { PostHog } from 'posthog-js';

export const POSTHOG_HOST = 'https://posthog.megawebs.com';

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
  }
}

const posthogKey = (import.meta.env.VITE_POSTHOG_KEY as string | undefined)?.trim();
let posthog: PostHog | null = null;
let posthogPromise: Promise<PostHog | null> | null = null;

const initializePostHog = async (): Promise<PostHog | null> => {
  if (typeof window === 'undefined' || !posthogKey) return null;
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
        blockSelector: null,
        maskAllInputs: false,
        maskTextSelector: null,
        maskAllElementAttributes: false,
        recordHeaders: true,
        recordBody: true,
        recordCrossOriginIframes: true,
        collectFonts: true,
        inlineStylesheet: true,
        sampleRate: 1,
      },
    });
    posthog = client;
    return client;
  }).catch(() => null);

  return posthogPromise;
};

export const bootstrapAnalytics = () => {
  if (typeof window !== 'undefined') void initializePostHog();
};

export const trackPortfolioEvent = (event: PortfolioEventName, properties: EventProperties = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...properties });
  void initializePostHog().then(client => client?.capture(event, properties));
};
