import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact | AI Training & Consulting | Sami Halawa</title>
        <meta name="description" content="Book a free consultation for AI training, workshops and automation projects. Available in Madrid and online." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactPage;
