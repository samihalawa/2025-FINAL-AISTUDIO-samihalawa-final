import React, { useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CONTACT_INFO } from '../constants';

const TallyEmbed: React.FC<{ src: string; title: string; height: number }> = ({ src, title, height }) => {
    useEffect(() => {
        const w = 'https://tally.so/widgets/embed.js';
        const d = document;
        const v = () => {
            // @ts-ignore
            if (typeof (window as any).Tally !== 'undefined') (window as any).Tally.loadEmbeds();
            else d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => { (e as HTMLIFrameElement).src = (e as HTMLIFrameElement).dataset.tallySrc || ''; });
        };
        if (d.querySelector(`script[src="${w}"]`) == null) {
            const s = d.createElement('script');
            s.src = w;
            s.onload = v;
            s.onerror = v;
            d.body.appendChild(s);
        } else {
            v();
        }
    }, []);
    return (
        <iframe
            data-tally-src={src}
            title={title}
            loading="lazy"
            width="100%"
            height={height}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
        />
    );
};

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const formTitle = t('contact.formTitle');
    const newsletterTitle = t('contact.newsletterTitle');

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
                    <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">{t('contact.title')}</h2>
                    <h3 className="mt-4 text-xl font-semibold text-slate-800">{t('contact.heading')}</h3>
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
                                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                                    <TallyEmbed
                                        src="https://tally.so/embed/wz9VVq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                        title={formTitle}
                                        height={360}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 text-slate-100 shadow-xl">
                            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>
                            <div className="relative p-8 sm:p-10">
                                <h3 className="text-xl font-semibold">{newsletterTitle}</h3>
                                <p className="mt-2 text-sm text-slate-200">{t('contact.newsletterSubtitle')}</p>
                                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                                    <TallyEmbed
                                        src="https://tally.so/embed/mY1V66?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                        title={newsletterTitle}
                                        height={240}
                                    />
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
