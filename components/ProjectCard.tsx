import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onDemoClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDemoClick }) => {
    const { t } = useTranslation();
    const [infoVisible, setInfoVisible] = useState(false);
    
    const colorClasses = {
        indigo: { text: 'text-indigo-600', hover: 'hover:underline' },
        purple: { text: 'text-purple-600', hover: 'hover:underline' },
        yellow: { text: 'text-yellow-600', hover: 'hover:underline' },
        blue: { text: 'text-blue-600', hover: 'hover:underline' },
        teal: { text: 'text-teal-600', hover: 'hover:underline' },
        cyan: { text: 'text-cyan-600', hover: 'hover:underline' },
    };
    const theme = colorClasses[project.color as keyof typeof colorClasses] || colorClasses.indigo;

    const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onDemoClick();
    };

    return (
        <div className="project-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
            <div className="h-48 overflow-hidden">
                <img src={project.image} alt={t(project.titleKey)} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t(project.titleKey)}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{t(project.descriptionKey)}</p>
                <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center">
                        {project.demoUrl ? (
                             <button onClick={handleDemoClick} className={`${theme.text} font-semibold ${theme.hover} transition-colors duration-300 group`}>
                                {t('projects.commonDemoButton')} <i className="fas fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i>
                             </button>
                        ) : project.repoUrl ? (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`${theme.text} font-semibold ${theme.hover} transition-colors duration-300 group`}>
                               {t('projects.commonRepoButton')} <i className="fas fa-external-link-alt ml-1"></i>
                            </a>
                        ) : <span></span>}
                       
                        <div className="flex items-center space-x-2">
                             <button onClick={() => setInfoVisible(!infoVisible)} className="text-gray-500 hover:text-gray-800 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100">
                                <i className={`fas ${infoVisible ? 'fa-times' : 'fa-info-circle'}`}></i>
                                <span className="sr-only">{t('projects.commonInfoButton')}</span>
                            </button>
                            {project.hasChat && (
                                <button className="text-gray-500 hover:text-gray-800 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100">
                                    <i className="fas fa-comments"></i>
                                    <span className="sr-only">{t('projects.commonChatButton')}</span>
                                </button>
                            )}
                        </div>
                    </div>
                    {infoVisible && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <h4 className={`font-semibold text-sm mb-2 ${theme.text}`}>{t(project.featuresTitleKey)}</h4>
                            <ul className="text-gray-600 text-sm space-y-2 mb-3">
                                {project.features.map(featureKey => (
                                    <li key={featureKey} className="flex items-start">
                                        <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                                        <span>{t(featureKey)}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500 italic">{t(project.summaryKey)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;