import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="corporate" element={<ServicesPage />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
};

export default App;
