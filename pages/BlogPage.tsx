import React from 'react';
import { Helmet } from 'react-helmet-async';
import Blog from '../components/Blog';
import { usePageMeta } from '../hooks/usePageMeta';
import { BLOG_POSTS, SERVICE_MENU_SECTIONS } from '../constants';

const BlogPage: React.FC = () => {
  const { title, description } = usePageMeta('blog');
  const ogImage = 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&h=630&q=80';
  const siteUrl = 'https://samihalawa.com';
  const serviceItems = SERVICE_MENU_SECTIONS.flatMap(section => section.items);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#author`,
        name: 'Sami Halawa',
        url: siteUrl,
        knowsAbout: serviceItems.map(item => `${siteUrl}${item.href}`),
      },
      {
        '@type': 'ItemList',
        name: 'AI Services',
        itemListElement: serviceItems.map((item, index) => ({
          '@type': 'Service',
          position: index + 1,
          url: `${siteUrl}${item.href}`,
          provider: { '@id': `${siteUrl}/#author` },
        })),
      },
      {
        '@type': 'ItemList',
        name: 'Articles',
        itemListElement: BLOG_POSTS.map((slug, index) => ({
          '@type': 'BlogPosting',
          '@id': `${siteUrl}/blog/${slug}`,
          url: `${siteUrl}/blog/${slug}`,
          position: index + 1,
          author: { '@id': `${siteUrl}/#author` },
        })),
      },
    ],
  };
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
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Blog />
    </>
  );
};

export default BlogPage;
