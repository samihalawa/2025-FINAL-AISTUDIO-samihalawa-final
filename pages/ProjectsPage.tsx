import React from 'react';
import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects';
import AdditionalProjects from '../components/AdditionalProjects';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Projects & Demos | Sami Halawa</title>
        <meta name="description" content="Enterprise-grade AI projects: client outreach agent, AI spreadsheet assistant, banking assistant, medical diagnostics and more." />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <Projects />
      <AdditionalProjects />
    </>
  );
};

export default ProjectsPage;
