import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { ADDITIONAL_PROJECTS } from '../constants';

const AdditionalProjects: React.FC = () => {
    const { t } = useTranslation();

    const Card: React.FC<{ children: React.ReactNode, href?: string }> = ({ children, href }) => {
        const commonClasses = "bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 h-full flex flex-col";
        if (href) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
                    {children}
                </a>
            );
        }
        return <div className={commonClasses}>{children}</div>;
    };

    return (
        <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900">{t('additionalProjects.title')}</h3>
                <div id="additional-projects-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {ADDITIONAL_PROJECTS.map((project, index) => (
                        <Card key={index}>
                            <div className="flex items-center mb-2">
                                <i className={`${project.icon} text-lg`}></i>
                                <h4 className="font-semibold text-slate-800">{t(project.titleKey)}</h4>
                            </div>
                            <p className="text-slate-600 text-sm">{t(project.descriptionKey)}</p>
                        </Card>
                    ))}
                    <Card href="https://github.com/samihalawa">
                        <div className="flex-grow flex flex-col items-center justify-center text-center">
                            <i className="fas fa-arrow-right text-slate-400 text-xl mb-2"></i>
                            <p className="text-slate-600 text-sm font-medium">{t('additionalProjects.moreLink')}</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default AdditionalProjects;