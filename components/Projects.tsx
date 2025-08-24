import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import DemoModal from './DemoModal';
import { Project } from '../types';

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => {
        if (project.demoUrl) {
            setSelectedProject(project);
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="projects" className="py-20 bg-gray-50" aria-label="Featured Projects">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('projects.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project) => (
                           <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onDemoClick={() => openModal(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            <DemoModal
                isOpen={!!selectedProject}
                onClose={closeModal}
                project={selectedProject}
            />
        </>
    );
};

export default Projects;