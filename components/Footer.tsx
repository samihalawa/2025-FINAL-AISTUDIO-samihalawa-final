import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const socialLinks = [
        { href: 'https://www.linkedin.com/in/samihalawa/', icon: 'fab fa-linkedin', labelKey: 'social.linkedin' },
        { href: 'https://github.com/samihalawa', icon: 'fab fa-github', labelKey: 'social.github' },
        { href: 'https://huggingface.co/samihalawa', icon: 'fas fa-face-smile', labelKey: 'social.huggingface' },
        { href: 'https://www.youtube.com/@autoclient-ai', icon: 'fab fa-youtube', labelKey: 'social.youtube' },
        { href: 'mailto:sami@oulang.ai', icon: 'fas fa-envelope', labelKey: 'social.email' }
    ];

    const contactDetails = CONTACT_INFO.map(item => ({
        ...item,
        label: t(item.labelKey),
        value: item.valueKey ? t(item.valueKey) : item.value,
    }));

    return (
        <footer role="contentinfo" className="relative mt-24 border-t border-white/60 bg-white/70">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>
            <div className="container px-6 py-12">
                <div className="grid gap-10 text-slate-600 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
                    <div className="space-y-6 text-center md:text-left">
                        <div className="space-y-3">
                            <p className="text-base font-semibold text-slate-900">{t('footer.tagline')}</p>
                            <p className="text-sm leading-relaxed text-slate-600">{t('footer.disclaimer')}</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                            {socialLinks.map(link => (
                                <a
                                    key={link.labelKey}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 shadow-sm transition hover:-translate-y-1 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                    aria-label={t(link.labelKey)}
                                >
                                    <i className={`${link.icon} text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t('footer.contactTitle')}</h3>
                        <dl className="mt-4 space-y-4">
                            {contactDetails.map(detail => {
                                const isExternalLink = detail.href ? detail.href.startsWith('http') : false;
                                const linkProps = isExternalLink
                                    ? { target: '_blank', rel: 'noopener noreferrer' as const }
                                    : {};
                                return (
                                    <div key={detail.labelKey} className="flex items-start gap-4">
                                        <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                            <i className={`${detail.icon} text-sm`}></i>
                                        </div>
                                        <div className="text-left">
                                            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{detail.label}</dt>
                                            <dd className="text-sm text-slate-700">
                                                {detail.href ? (
                                                    <a
                                                        href={detail.href}
                                                        {...linkProps}
                                                        className="transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                                    >
                                                        {detail.value}
                                                    </a>
                                                ) : (
                                                    detail.value
                                                )}
                                            </dd>
                                        </div>
                                    </div>
                                );
                            })}
                        </dl>
                    </div>
                </div>
                <p className="mt-10 text-center text-xs text-slate-400">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
