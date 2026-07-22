import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CONTACT_INFO } from '../constants';
import { trackPortfolioEvent } from '../lib/analytics';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';
type LeadType = 'contact' | 'newsletter';

const STATIC_FORMS_ENDPOINT = 'https://api.staticforms.dev/submit';
const STATIC_FORMS_API_KEY = 'b67e8125-1a1a-4712-9c3a-f2dedb36a100';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const formTitle = t('contact.formTitle');
    const newsletterTitle = t('contact.newsletterTitle');
    const [contactStatus, setContactStatus] = useState<SubmissionStatus>('idle');
    const [newsletterStatus, setNewsletterStatus] = useState<SubmissionStatus>('idle');

    const submitForm = async (event: React.FormEvent<HTMLFormElement>, leadType: LeadType) => {
        event.preventDefault();
        const form = event.currentTarget;
        const setStatus = leadType === 'contact' ? setContactStatus : setNewsletterStatus;
        const formData = new FormData(form);
        const email = formData.get('email');

        setStatus('sending');
        formData.set('apiKey', STATIC_FORMS_API_KEY);
        formData.set('subject', leadType === 'contact' ? 'New Contact from Portfolio Website' : 'New Portfolio Newsletter Subscription');
        formData.set('form_type', leadType === 'contact' ? 'Portfolio contact' : 'Portfolio newsletter');
        if (typeof email === 'string') formData.set('replyTo', email);

        try {
            const response = await fetch(STATIC_FORMS_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });
            const result = await response.json().catch(() => null) as { success?: boolean; error?: string } | null;
            if (!response.ok || result?.success === false) throw new Error(result?.error || 'Form submission failed');

            trackPortfolioEvent('generate_lead', {
                form_id: `portfolio-${leadType}`,
                form_name: leadType === 'contact' ? 'portfolio contact' : 'portfolio newsletter',
                lead_type: leadType,
            });
            form.reset();
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    const supportOptions = [
        {
            icon: 'fas fa-lightbulb',
            title: t('contact.support.strategy.title'),
            description: t('contact.support.strategy.copy'),
            href: '#contact-form',
        },
        {
            icon: 'fas fa-diagram-project',
            title: t('contact.support.projects.title'),
            description: t('contact.support.projects.copy'),
            href: '#contact-form',
        },
        {
            icon: 'fas fa-headset',
            title: t('contact.support.support.title'),
            description: t('contact.support.support.copy'),
            href: 'mailto:info@AgentsAI.ltd',
        },
    ];

    const steps = [
        {
            number: '01',
            title: t('contact.steps.discovery.title'),
            description: t('contact.steps.discovery.copy'),
        },
        {
            number: '02',
            title: t('contact.steps.design.title'),
            description: t('contact.steps.design.copy'),
        },
        {
            number: '03',
            title: t('contact.steps.launch.title'),
            description: t('contact.steps.launch.copy'),
        },
    ];

    const serviceMetrics = [
        { label: t('contact.contactCard.hoursLabel'), value: t('contact.contactCard.hoursValue') },
        { label: t('contact.contactCard.responseLabel'), value: t('contact.contactCard.responseValue') },
        { label: t('contact.contactCard.languagesLabel'), value: t('contact.contactCard.languagesValue') },
    ];
    return (
        <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 scroll-mt-20" aria-label={t('contact.title')}>
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-100/40 via-white to-transparent"></div>
            <div className="container relative mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                        {t('contact.badge')}
                    </span>
                    <h1 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">{t('contact.title')}</h1>
                    <h2 className="mt-4 text-xl font-semibold text-slate-800">{t('contact.heading')}</h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{t('contact.description')}</p>
                    <p className="mt-3 text-sm text-slate-500">{t('contact.subtitle')}</p>
                </div>

                <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                    <div className="space-y-10">
                        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white/90 shadow-xl backdrop-blur">
                            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-brand-50/70 via-white to-slate-50"></div>
                            <div className="relative p-8 sm:p-10">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                                        <i className="fas fa-building text-brand-600"></i>
                                        {t('contact.contactCard.title')}
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                        {t('contact.contactCard.subtitle')}
                                    </span>
                                </div>
                                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {CONTACT_INFO.map(item => {
                                        const value = item.valueKey ? t(item.valueKey) : item.value;
                                        const isExternalLink = item.href ? item.href.startsWith('http') : false;
                                        const linkProps = isExternalLink
                                            ? { target: '_blank', rel: 'noopener noreferrer' as const }
                                            : {};
                                        return (
                                            <div
                                                key={item.labelKey}
                                                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md focus-within:border-brand-200"
                                            >
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                                    <i className={`${item.icon} text-base`}></i>
                                                </div>
                                                <div className="text-left">
                                                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t(item.labelKey)}</dt>
                                                    <dd className="mt-1 text-sm text-slate-700">
                                                        {item.href ? (
                                                            <a
                                                                href={item.href}
                                                                {...linkProps}
                                                                className="transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                                            >
                                                                {value}
                                                            </a>
                                                        ) : (
                                                            value
                                                        )}
                                                    </dd>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </dl>
                                <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                                    {serviceMetrics.map(metric => (
                                        <div key={metric.label} className="rounded-2xl border border-white/60 bg-slate-900/5 p-4 text-left shadow-inner">
                                            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{metric.label}</dt>
                                            <dd className="mt-2 text-sm font-semibold text-slate-800">{metric.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-4">
                                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t('contact.support.title')}</h4>
                                <span className="text-xs text-slate-400">{t('contact.support.subtitle')}</span>
                            </div>
                            <div className="mt-4 grid gap-4 md:grid-cols-3">
                                {supportOptions.map(option => (
                                    <a
                                        key={option.title}
                                        href={option.href}
                                        className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                            <i className={`${option.icon} text-lg`}></i>
                                        </div>
                                        <h5 className="mt-4 text-base font-semibold text-slate-900">{option.title}</h5>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{option.description}</p>
                                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:translate-x-1">
                                            {t('contact.support.cta')}
                                            <i className="fas fa-arrow-right text-xs"></i>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div id="contact-form" className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/95 shadow-xl backdrop-blur">
                            <div aria-hidden className="absolute inset-x-6 top-0 h-24 rounded-b-full bg-gradient-to-b from-brand-200/40 via-transparent to-transparent"></div>
                            <div className="relative p-8 sm:p-10">
                                <h3 className="text-xl font-semibold text-slate-900">{formTitle}</h3>
                                <p className="mt-2 text-sm text-slate-500">{t('contact.formSubtitle')}</p>
                                <form onSubmit={(event) => void submitForm(event, 'contact')} className="mt-6 space-y-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700">{t('contact.form.nameLabel')}</label>
                                        <input id="contact-name" name="name" type="text" autoComplete="name" required className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700">{t('contact.form.emailLabel')}</label>
                                        <input id="contact-email" name="email" type="email" autoComplete="email" required className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700">{t('contact.form.companyLabel')}</label>
                                        <input id="contact-company" name="company" type="text" autoComplete="organization" className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700">{t('contact.form.messageLabel')}</label>
                                        <textarea id="contact-message" name="message" rows={5} required className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
                                    </div>
                                    <input name="honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
                                    <button type="submit" disabled={contactStatus === 'sending'} className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-800 disabled:cursor-wait disabled:opacity-65">
                                        {contactStatus === 'sending' ? t('contact.form.sendingButton') : t('contact.form.submitButton')}
                                    </button>
                                    {contactStatus === 'success' && <p role="status" className="text-sm font-semibold text-emerald-700">{t('contact.form.successMessage')}</p>}
                                    {contactStatus === 'error' && <p role="alert" className="text-sm font-semibold text-red-700">{t('contact.form.errorMessage')}</p>}
                                </form>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 text-slate-100 shadow-xl">
                            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>
                            <div className="relative p-8 sm:p-10">
                                <h3 className="text-xl font-semibold">{newsletterTitle}</h3>
                                <p className="mt-2 text-sm text-slate-200">{t('contact.newsletterSubtitle')}</p>
                                <form onSubmit={(event) => void submitForm(event, 'newsletter')} className="mt-6 space-y-4">
                                    <label htmlFor="newsletter-email" className="block text-sm font-semibold text-white">{t('contact.newsletter.emailLabel')}</label>
                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        <input id="newsletter-email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" className="min-h-11 flex-1 rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-300/40" />
                                        <button type="submit" disabled={newsletterStatus === 'sending'} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-brand-50 disabled:cursor-wait disabled:opacity-65">
                                            {newsletterStatus === 'sending' ? t('contact.newsletter.sendingButton') : t('contact.newsletter.submitButton')}
                                        </button>
                                    </div>
                                    <input name="honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
                                    {newsletterStatus === 'success' && <p role="status" className="text-sm font-semibold text-emerald-300">{t('contact.newsletter.successMessage')}</p>}
                                    {newsletterStatus === 'error' && <p role="alert" className="text-sm font-semibold text-red-300">{t('contact.newsletter.errorMessage')}</p>}
                                </form>
                            </div>
                        </div>
                        <div id="consultation" className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 p-8 shadow-sm sm:p-10">
                            <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-200/50 blur-2xl"></div>
                            <div className="relative">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                                    <i className="fas fa-calendar-check text-lg"></i>
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-slate-900">{t('contact.bookingTitle')}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t('contact.bookingCopy')}</p>
                                <div className="mt-6 flex flex-wrap items-center gap-4">
                                    <a
                                        href="#contact-form"
                                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                    >
                                        {t('contact.bookingCta')}
                                        <i className="fas fa-arrow-up text-xs"></i>
                                    </a>
                                    <a
                                        href="mailto:sami@oulang.ai?subject=Strategy%20consultation"
                                        className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-700 transition hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                    >
                                        {t('contact.bookingEmail')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-sm backdrop-blur">
                    <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
                        <div>
                            <h4 className="text-lg font-semibold text-slate-900">{t('contact.steps.title')}</h4>
                            <p className="mt-1 text-sm text-slate-500">{t('contact.steps.subtitle')}</p>
                        </div>
                        <div className="flex justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                            <span>{t('contact.badge')}</span>
                        </div>
                    </div>
                    <ol className="mt-8 grid gap-6 md:grid-cols-3">
                        {steps.map(step => (
                            <li key={step.number} className="relative rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-inner">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-base font-semibold text-brand-600">
                                    {step.number}
                                </div>
                                <h5 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h5>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Contact;
