import React from 'react';
import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects';
import AdditionalProjects from '../components/AdditionalProjects';
import { usePageMeta } from '../hooks/usePageMeta';

const ProjectsPage: React.FC = () => {
  const { title, description } = usePageMeta('projects');
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <Projects />
      <AdditionalProjects />
    </>
  );
};

export default ProjectsPage;
