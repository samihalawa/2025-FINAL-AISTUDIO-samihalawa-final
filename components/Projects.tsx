import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import DemoModal from './DemoModal';
import ChatModal from './ChatModal';
import { Project } from '../types';

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [demoProject, setDemoProject] = useState<Project | null>(null);
    const [chatProject, setChatProject] = useState<Project | null>(null);

    const openDemoModal = (project: Project) => {
        if (project.demoUrl) {
            setDemoProject(project);
        }
    };
    const closeDemoModal = () => setDemoProject(null);
    
    const openChatModal = (project: Project) => {
        if (project.hasChat) {
            setChatProject(project);
        }
    };
    const closeChatModal = () => setChatProject(null);

    return (
        <>
            <section id="projects" className="py-20 bg-white" aria-label="Featured Projects">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">{t('projects.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project) => (
                           <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onDemoClick={() => openDemoModal(project)}
                                onChatClick={() => openChatModal(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            <DemoModal
                isOpen={!!demoProject}
                onClose={closeDemoModal}
                project={demoProject}
            />
            <ChatModal
                isOpen={!!chatProject}
                onClose={closeChatModal}
                project={chatProject}
            />
        </>
    );
};

export default Projects;