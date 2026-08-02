import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CONTACT_INFO, STRATEGY_CALL_URL } from '../constants';
import { trackPortfolioEvent } from '../lib/analytics';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

const STATIC_FORMS_ENDPOINT = 'https://api.staticforms.dev/submit';
const STATIC_FORMS_API_KEY = 'b67e8125-1a1a-4712-9c3a-f2dedb36a100';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [newsletterStatus, setNewsletterStatus] = useState<SubmissionStatus>('idle');

    const submitNewsletter = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email');

        setNewsletterStatus('sending');
        formData.set('apiKey', STATIC_FORMS_API_KEY);
        formData.set('subject', 'New Portfolio Newsletter Subscription');
        formData.set('form_type', 'Portfolio newsletter');
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
                form_id: 'portfolio-newsletter',
                form_name: 'portfolio newsletter',
                lead_type: 'newsletter',
            });
            form.reset();
            setNewsletterStatus('success');
        } catch {
            setNewsletterStatus('error');
        }
    };

    const supportOptions = [
        {
            icon: 'fas fa-lightbulb',
            title: t('contact.support.strategy.title'),
            description: t('contact.support.strategy.copy'),
            href: STRATEGY_CALL_URL,
            external: true,
        },
        {
            icon: 'fas fa-diagram-project',
            title: t('contact.support.projects.title'),
            description: t('contact.support.projects.copy'),
            href: '#contact-form',
            external: false,
        },
        {
            icon: 'fas fa-headset',
            title: t('contact.support.support.title'),
            description: t('contact.support.support.copy'),
            href: 'mailto:info@AgentsAI.ltd',
            external: false,
        },
    ];

    const steps = [
        { number: '01', title: t('contact.steps.discovery.title'), description: t('contact.steps.discovery.copy') },
        { number: '02', title: t('contact.steps.design.title'), description: t('contact.steps.design.copy') },
        { number: '03', title: t('contact.steps.launch.title'), description: t('contact.steps.launch.copy') },
    ];

    const serviceMetrics = [
        { label: t('contact.contactCard.hoursLabel'), value: t('contact.contactCard.hoursValue') },
        { label: t('contact.contactCard.responseLabel'), value: t('contact.contactCard.responseValue') },
        { label: t('contact.contactCard.languagesLabel'), value: t('contact.contactCard.languagesValue') },
    ];

    return (
        <section id="contact" className="scroll-mt-20 border-b border-slate-300 bg-[#f8f6f1]" aria-label={t('contact.title')}>
            <div className="container py-12 sm:py-16">
                <header className="grid gap-8 border-b border-slate-400 pb-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,.8fr)] lg:items-end lg:gap-16">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{t('contact.badge')}</p>
                        <h1 className="cv-serif mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.045em] text-slate-950">{t('contact.title')}</h1>
                    </div>
                    <div className="border-t border-slate-400 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                        <h2 className="cv-serif text-2xl font-semibold text-slate-950">{t('contact.heading')}</h2>
                        <p className="mt-3 leading-relaxed text-slate-700">{t('contact.description')}</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{t('contact.subtitle')}</p>
                        <a href={STRATEGY_CALL_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-3 border border-slate-950 bg-slate-950 px-5 text-sm font-bold text-white hover:bg-brand-800">
                            {t('contact.bookingCta')} <i className="fas fa-arrow-up-right-from-square text-xs" />
                        </a>
                    </div>
                </header>

                <div className="grid gap-12 py-12 lg:grid-cols-[minmax(17rem,.75fr)_minmax(0,1.25fr)] lg:gap-16 lg:py-16">
                    <aside>
                        <div className="border-t border-slate-400">
                            <div className="flex items-baseline justify-between gap-4 border-b border-slate-300 py-5">
                                <h2 className="cv-serif text-2xl font-semibold text-slate-950">{t('contact.contactCard.title')}</h2>
                                <span className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{t('contact.contactCard.subtitle')}</span>
                            </div>
                            <dl>
                                {CONTACT_INFO.map(item => {
                                    const value = item.valueKey ? t(item.valueKey) : item.value;
                                    const external = item.href?.startsWith('http');
                                    return (
                                        <div key={item.labelKey} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b border-slate-300 py-4">
                                            <i className={`${item.icon} mt-1 text-sm text-brand-800`} />
                                            <div>
                                                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">{t(item.labelKey)}</dt>
                                                <dd className="mt-1 text-sm leading-relaxed text-slate-700">
                                                    {item.href ? <a href={item.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="border-b border-transparent hover:border-slate-700">{value}</a> : value}
                                                </dd>
                                            </div>
                                        </div>
                                    );
                                })}
                            </dl>
                            <dl className="grid border-b border-slate-300 sm:grid-cols-3 lg:grid-cols-1">
                                {serviceMetrics.map(metric => (
                                    <div key={metric.label} className="border-t border-slate-300 py-4 first:border-t-0 sm:border-l sm:px-4 sm:first:border-l-0 lg:border-l-0 lg:px-0">
                                        <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">{metric.label}</dt>
                                        <dd className="mt-1 text-sm font-semibold text-slate-800">{metric.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <section className="mt-12" aria-labelledby="contact-help-heading">
                            <h2 id="contact-help-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{t('contact.support.title')}</h2>
                            <p className="mt-2 text-sm text-slate-600">{t('contact.support.subtitle')}</p>
                            <ol className="mt-5 border-t border-slate-400">
                                {supportOptions.map((option, index) => (
                                    <li key={option.title} className="border-b border-slate-300">
                                        <a href={option.href} target={option.external ? '_blank' : undefined} rel={option.external ? 'noopener noreferrer' : undefined} className="group grid gap-3 py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)_1.5rem]">
                                            <span className="font-mono text-xs font-bold text-slate-500">0{index + 1}</span>
                                            <span><strong className="cv-serif block text-xl text-slate-950 group-hover:text-brand-800">{option.title}</strong><span className="mt-2 block text-sm leading-relaxed text-slate-600">{option.description}</span></span>
                                            <i className={`${option.icon} mt-1 text-sm text-slate-400 group-hover:text-brand-800`} />
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </aside>

                    <div className="space-y-12">
                        <section id="contact-form" className="scroll-mt-24 border-t border-slate-400 pt-6" aria-labelledby="contact-form-heading">
                            <div className="grid gap-3 border-b border-slate-300 pb-6 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,.65fr)] sm:items-end">
                                <h2 id="contact-form-heading" className="cv-serif text-3xl font-semibold text-slate-950">{t('contact.formTitle')}</h2>
                                <p className="text-sm leading-relaxed text-slate-600">{t('contact.formSubtitle')}</p>
                            </div>
                            <div className="min-h-[32rem] bg-white px-4 py-6 sm:px-6">
                                {React.createElement('close-form', { id: 'form_033y7Q5vVve5g8t4diql2M' })}
                            </div>
                        </section>

                        <div className="grid border-t border-slate-400 lg:grid-cols-2">
                            <section className="border-b border-slate-300 py-7 lg:border-r lg:px-7" aria-labelledby="newsletter-heading">
                                <h2 id="newsletter-heading" className="cv-serif text-2xl font-semibold text-slate-950">{t('contact.newsletterTitle')}</h2>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t('contact.newsletterSubtitle')}</p>
                                <form onSubmit={(event) => void submitNewsletter(event)} className="mt-6 space-y-3">
                                    <label htmlFor="newsletter-email" className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-600">{t('contact.newsletter.emailLabel')}</label>
                                    <input id="newsletter-email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" className="min-h-12 w-full border border-slate-400 bg-white px-4 py-3 text-slate-950 outline-none focus:border-slate-950 focus:ring-2 focus:ring-brand-500" />
                                    <button type="submit" disabled={newsletterStatus === 'sending'} className="inline-flex min-h-11 items-center border border-slate-950 bg-slate-950 px-5 text-sm font-bold text-white hover:bg-brand-800 disabled:cursor-wait disabled:opacity-65">{newsletterStatus === 'sending' ? t('contact.newsletter.sendingButton') : t('contact.newsletter.submitButton')}</button>
                                    <input name="honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
                                    {newsletterStatus === 'success' && <p role="status" className="text-sm font-semibold text-emerald-700">{t('contact.newsletter.successMessage')}</p>}
                                    {newsletterStatus === 'error' && <p role="alert" className="text-sm font-semibold text-red-700">{t('contact.newsletter.errorMessage')}</p>}
                                </form>
                            </section>

                            <section id="consultation" className="scroll-mt-24 border-b border-slate-300 py-7 lg:px-7" aria-labelledby="booking-heading">
                                <h2 id="booking-heading" className="cv-serif text-2xl font-semibold text-slate-950">{t('contact.bookingTitle')}</h2>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t('contact.bookingCopy')}</p>
                                <div className="mt-6 grid gap-3">
                                    <a href={STRATEGY_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-between border border-slate-950 px-4 text-sm font-bold text-slate-950 hover:bg-slate-950 hover:text-white">{t('contact.bookingCta')}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
                                    <a href="mailto:sami@oulang.ai?subject=Strategy%20consultation" className="inline-flex min-h-11 items-center border-b border-slate-400 text-sm font-bold text-slate-700 hover:border-slate-950 hover:text-slate-950">{t('contact.bookingEmail')}</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <section className="grid gap-8 border-t border-slate-400 pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16" aria-labelledby="contact-steps-heading">
                    <div>
                        <h2 id="contact-steps-heading" className="cv-serif text-3xl font-semibold text-slate-950">{t('contact.steps.title')}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{t('contact.steps.subtitle')}</p>
                    </div>
                    <ol className="grid border-t border-slate-400 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <li key={step.number} className={`border-b border-slate-300 py-6 md:px-6 ${index < 2 ? 'md:border-r' : ''}`}>
                                <span className="font-mono text-xs font-bold text-brand-800">{step.number}</span>
                                <h3 className="cv-serif mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </section>
    );
};

export default Contact;
