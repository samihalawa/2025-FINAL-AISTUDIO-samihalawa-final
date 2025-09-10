import React from 'react';
import { Helmet } from 'react-helmet-async';
import Blog from '../components/Blog';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Blog: Agents, RAG, Prompting | Sami Halawa</title>
        <meta name="description" content="Guides on AI agents, orchestration, RAG with LangChain, prompt engineering, security and deploying ML systems." />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <Blog />
    </>
  );
};

export default BlogPage;
