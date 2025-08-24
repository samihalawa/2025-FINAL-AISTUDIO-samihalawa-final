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
        <footer role="contentinfo" className="bg-gray-100 border-t border-gray-200 py-8">
            <div className="container mx-auto px-6 text-center text-gray-600">
                <div className="flex justify-center space-x-6 mb-6">
                    {socialLinks.map(link => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300" aria-label={link.label}>
                            <i className={`${link.icon} text-2xl`}></i>
                        </a>
                    ))}
                </div>
                <p className="text-sm">{t('footer.copyright')}</p>
                <p className="text-xs text-gray-500 mt-4 max-w-2xl mx-auto">{t('footer.disclaimer')}</p>
            </div>
        </footer>
    );
};

export default Footer;