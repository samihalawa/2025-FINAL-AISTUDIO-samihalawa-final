import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CONTACT_INFO } from '../constants';
import type { TranslationKey } from '../i18n/translations';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const socialLinks: Array<{ href: string; icon: string; labelKey: TranslationKey }> = [
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
        <footer role="contentinfo" className="mt-24 border-t border-slate-400 bg-[#f8f6f1]">
            <div className="container px-6 py-12">
                <div className="grid gap-12 text-slate-600 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-16">
                    <div className="space-y-7 text-center md:text-left">
                        <div className="space-y-3">
                            <p className="cv-serif text-xl font-semibold text-slate-950">{t('footer.tagline')}</p>
                            <p className="text-sm leading-relaxed text-slate-600">{t('footer.disclaimer')}</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                            {socialLinks.map(link => (
                                <a
                                    key={link.labelKey}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-11 w-11 items-center justify-center border border-slate-400 bg-transparent text-slate-600 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                    aria-label={t(link.labelKey)}
                                >
                                    <i className={`${link.icon} text-base`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-slate-400 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-600">{t('footer.contactTitle')}</h3>
                        <div className="mt-4">
                            {contactDetails.map(detail => {
                                const isExternalLink = detail.href ? detail.href.startsWith('http') : false;
                                const linkProps = isExternalLink
                                    ? { target: '_blank', rel: 'noopener noreferrer' as const }
                                    : {};
                                return (
                                    <div key={detail.labelKey} className="grid grid-cols-[1.75rem_1fr] gap-3 border-t border-slate-300 py-3 first:border-t-0">
                                        <div className="mt-0.5 text-brand-800">
                                            <i className={`${detail.icon} text-sm`}></i>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">{detail.label}</div>
                                            <div className="text-sm text-slate-700">
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
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <p className="mt-10 border-t border-slate-300 pt-5 text-center text-xs text-slate-500">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
