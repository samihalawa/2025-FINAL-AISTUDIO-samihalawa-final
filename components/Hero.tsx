import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const FloatingElement: React.FC<{ className: string; delay: string }> = ({ className, delay }) => (
    <div
        className={`absolute bg-white/10 rounded-full -z-0 animate-float ${className}`}
        style={{ animationDelay: delay }}
    >
        <style>{`
            @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
                100% { transform: translateY(0px) rotate(360deg); }
            }
            .animate-float {
                animation: float 8s ease-in-out infinite;
            }
        `}</style>
    </div>
);

const Hero: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="pt-32 pb-20 gradient-bg text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50">
                <FloatingElement className="w-20 h-20 top-[10%] left-[10%]" delay="0s" />
                <FloatingElement className="w-10 h-10 top-[60%] left-[15%]" delay="1s" />
                <FloatingElement className="w-14 h-14 top-[30%] right-[10%]" delay="2s" />
                <FloatingElement className="w-24 h-24 bottom-[10%] right-[20%]" delay="3s" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">{t('hero.title')}</h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-200">{t('hero.subtitle')}</h2>
                        <p className="text-lg mb-8 max-w-xl mx-auto md:mx-0 text-indigo-100">{t('hero.description')}</p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                            <a href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
                                {t('hero.contactButton')}
                            </a>
                            <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg">
                                {t('hero.projectsButton')}
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img src="https://cdn-avatars.huggingface.co/v1/production/uploads/65d00458fff501149572827f/E6nxYRxqRmBGRf9wSQq4Y.jpeg" alt="Sami Halawa - AI Expert" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-xl animate-pulse">
                                <a href="tel:+34679794037" className="font-semibold hover:text-indigo-800 transition duration-300">+34 679 794 037</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;