import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const socialLinks = [
        { href: 'https://www.linkedin.com/in/samihalawa/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
        { href: 'https://github.com/samihalawa', icon: 'fab fa-github', label: 'GitHub' },
        { href: 'https://twitter.com/samihalawa', icon: 'fab fa-twitter', label: 'Twitter' },
        { href: 'mailto:sami@samihalawa.com', icon: 'fas fa-envelope', label: 'Email' }
    ];

    return (
        <footer role="contentinfo" className="relative mt-24 border-t border-white/60 bg-white/70">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>
            <div className="container flex flex-col items-center gap-6 py-10 text-center text-slate-600">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{t('footer.tagline')}</div>
                <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map(link => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 shadow-sm transition hover:-translate-y-1 hover:text-brand-600" aria-label={link.label}>
                            <i className={`${link.icon} text-xl`}></i>
                        </a>
                    ))}
                </div>
                <p className="text-xs text-slate-500 max-w-2xl">{t('footer.disclaimer')}</p>
                <p className="text-sm text-slate-400">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
