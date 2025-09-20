import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';
import { usePageMeta } from '../hooks/usePageMeta';

const ContactPage: React.FC = () => {
  const { title, description } = usePageMeta('contact');
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactPage;
