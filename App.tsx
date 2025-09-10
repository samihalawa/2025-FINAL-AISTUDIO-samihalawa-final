import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import TrainingOverview from './pages/TrainingOverview';
import MedicalAI from './pages/services/MedicalAI';
import BusinessAutomation from './pages/services/BusinessAutomation';
import UniversityML from './pages/services/UniversityML';
import FamilyAI from './pages/services/FamilyAI';
import AdvancedAI from './pages/services/AdvancedAI';
import NoCodeAI from './pages/services/NoCodeAI';
import PromptEngineering from './pages/services/PromptEngineering';
import RagLangChain from './pages/services/RagLangChain';
import AgentsAutomation from './pages/services/AgentsAutomation';
import AIForMarketing from './pages/services/AIForMarketing';
import ServicesIndex from './pages/services/Index';
import ServicesLayout from './pages/services/ServicesLayout';
import Troubleshooting from './pages/services/Troubleshooting';

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="corporate" element={<ServicesPage />} />
                            <Route path="ai-training" element={<TrainingOverview />} />
                            <Route path="projects" element={<ProjectsPage />} />
                            <Route path="blog" element={<BlogPage />} />
                            <Route path="contact" element={<ContactPage />} />
                            <Route path="services" element={<ServicesLayout />}>
                                <Route index element={<ServicesIndex />} />
                                <Route path="medical-ai" element={<MedicalAI />} />
                                <Route path="business-automation" element={<BusinessAutomation />} />
                                <Route path="university-ml" element={<UniversityML />} />
                                <Route path="family-ai" element={<FamilyAI />} />
                                <Route path="advanced-ai" element={<AdvancedAI />} />
                                <Route path="no-code-ai" element={<NoCodeAI />} />
                                <Route path="prompt-engineering" element={<PromptEngineering />} />
                                <Route path="rag-langchain" element={<RagLangChain />} />
                                <Route path="agents-automation" element={<AgentsAutomation />} />
                                <Route path="ai-for-marketing" element={<AIForMarketing />} />
                                <Route path="troubleshooting" element={<Troubleshooting />} />
                            </Route>
                            <Route path="*" element={<HomePage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </LanguageProvider>
    );
};

export default App;
