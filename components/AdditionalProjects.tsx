import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { ADDITIONAL_PROJECTS } from '../constants';

const AdditionalProjects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">{t('additionalProjects.title')}</h3>
                <div id="additional-projects-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {ADDITIONAL_PROJECTS.map((project, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                            <div className="flex items-center mb-2">
                                <i className={`${project.icon} text-lg`}></i>
                                <h4 className="font-semibold text-gray-800">{t(project.titleKey)}</h4>
                            </div>
                            <p className="text-gray-600 text-sm">{t(project.descriptionKey)}</p>
                        </div>
                    ))}
                    <a href="https://github.com/samihalawa" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center text-center">
                        <div>
                            <i className="fas fa-ellipsis-h text-indigo-400 text-xl mb-2"></i>
                            <p className="text-indigo-600 text-sm font-medium">{t('additionalProjects.moreLink')}</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AdditionalProjects;