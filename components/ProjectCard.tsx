import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onDemoClick: () => void;
    onChatClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDemoClick, onChatClick }) => {
    const { t } = useTranslation();
    const [infoVisible, setInfoVisible] = useState(false);

    const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        onDemoClick();
    };

    const handleChatClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onChatClick();
    };
    
    const IconButton: React.FC<{onClick?: (e: any) => void, icon: string, srText: string}> = ({ onClick, icon, srText }) => (
         <button onClick={onClick} className="text-slate-500 hover:text-slate-800 transition-colors duration-300 h-9 w-9 rounded-full flex items-center justify-center hover:bg-slate-100">
            <i className={`fas ${icon}`}></i>
            <span className="sr-only">{srText}</span>
        </button>
    );

    return (
        <div className="project-card bg-white rounded-lg border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col">
            <div className="h-48 overflow-hidden rounded-t-lg">
                <img src={project.image} alt={t(project.titleKey)} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{t(project.titleKey)}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{t(project.descriptionKey)}</p>
                <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center">
                        <div>
                        {project.demoUrl ? (
                             <button onClick={handleDemoClick} className="text-slate-800 font-semibold hover:text-slate-900 transition-colors duration-300 group text-sm">
                                {t('projects.commonDemoButton')} <i className="fas fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i>
                             </button>
                        ) : project.repoUrl ? (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-800 font-semibold hover:text-slate-900 transition-colors duration-300 group text-sm">
                               {t('projects.commonRepoButton')} <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                            </a>
                        ) : <span></span>}
                        </div>
                       
                        <div className="flex items-center space-x-1">
                            <IconButton onClick={() => setInfoVisible(!infoVisible)} icon={infoVisible ? 'fa-times' : 'fa-info'} srText={t('projects.commonInfoButton')} />
                            {project.hasChat && (
                                <IconButton onClick={handleChatClick} icon="fa-comments" srText={t('projects.commonChatButton')} />
                            )}
                        </div>
                    </div>
                    {infoVisible && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <h4 className="font-semibold text-sm mb-2 text-slate-600">{t(project.featuresTitleKey)}</h4>
                            <ul className="text-slate-600 text-sm space-y-2 mb-3">
                                {project.features.map(featureKey => (
                                    <li key={featureKey} className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                                        <span>{t(featureKey)}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-slate-500 italic">{t(project.summaryKey)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;