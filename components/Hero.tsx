import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Safely update the URL hash without creating a new history entry
            if (history.replaceState) {
                history.replaceState(null, '', href);
            }
        }
    };

    return (
        <section className="py-20 md:py-32 bg-white text-center">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                     <img 
                        src="https://cdn-avatars.huggingface.co/v1/production/uploads/65d00458fff501149572827f/E6nxYRxqRmBGRf9wSQq4Y.jpeg" 
                        alt="Sami Halawa - AI Expert" 
                        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-100 shadow-sm"
                    />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-slate-900">{t('hero.title')}</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700">{t('hero.subtitle')}</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-600">{t('hero.description')}</p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <button
                            data-tally-open="wvlGlg"
                            data-tally-layout="modal"
                            data-tally-hide-title="1"
                            data-tally-emoji-text="👋"
                            data-tally-emoji-animation="wave"
                            data-tally-auto-close="1000"
                            data-tally-form-events-forwarding="1"
                            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-800 transition-colors duration-300 shadow-sm"
                        >
                            {t('hero.contactButton')}
                        </button>
                        <a href="/projects" className="inline-block bg-white text-slate-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-100 transition-colors duration-300 border border-slate-300 shadow-sm">
                            {t('hero.projectsButton')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;