import React from 'react';
import { Helmet } from 'react-helmet-async';
import Blog from '../components/Blog';
import { usePageMeta } from '../hooks/usePageMeta';

const BlogPage: React.FC = () => {
  const { title, description } = usePageMeta('blog');
  const ogImage = 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <Blog />
    </>
  );
};

export default BlogPage;
