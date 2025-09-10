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
import AIFundingGrants from './pages/services/AIFundingGrants';
import AIPatentsIP from './pages/services/AIPatentsIP';
import AcceleratorReadiness from './pages/services/AcceleratorReadiness';
import AIReadinessAudit from './pages/services/AIReadinessAudit';
import AICompetitiveResearch from './pages/services/AICompetitiveResearch';
import DataScienceTraining from './pages/services/DataScienceTraining';
import ProptechAnalytics from './pages/services/ProptechAnalytics';
import AirbnbAnalytics from './pages/services/AirbnbAnalytics';
import AILanguageLearning from './pages/services/AILanguageLearning';
import ServicesIndex from './pages/services/Index';
import ServicesLayout from './pages/services/ServicesLayout';
import Troubleshooting from './pages/services/Troubleshooting';
import LocationsIndex from './pages/locations/Index';
import Madrid from './pages/locations/Madrid';
import Barcelona from './pages/locations/Barcelona';
import Valencia from './pages/locations/Valencia';
import Spain from './pages/locations/Spain';
import Online from './pages/locations/Online';
import CaseStudiesIndex from './pages/case-studies/Index';
import RadiologyAI from './pages/case-studies/RadiologyAI';
import AutoClientCase from './pages/case-studies/AutoClient';
import AttioSequences from './pages/case-studies/AttioSequences';

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
                            <Route path="locations" element={<LocationsIndex />} />
                            <Route path="locations/madrid" element={<Madrid />} />
                            <Route path="locations/barcelona" element={<Barcelona />} />
                            <Route path="locations/valencia" element={<Valencia />} />
                            <Route path="locations/spain" element={<Spain />} />
                            <Route path="locations/online" element={<Online />} />
                            <Route path="case-studies" element={<CaseStudiesIndex />} />
                            <Route path="case-studies/radiology-ai" element={<RadiologyAI />} />
                            <Route path="case-studies/autoclient" element={<AutoClientCase />} />
                            <Route path="case-studies/attio-sequences" element={<AttioSequences />} />
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
                                <Route path="ai-funding-grants" element={<AIFundingGrants />} />
                                <Route path="ai-ip-patents" element={<AIPatentsIP />} />
                                <Route path="accelerator-readiness" element={<AcceleratorReadiness />} />
                                <Route path="ai-readiness-audit" element={<AIReadinessAudit />} />
                                <Route path="ai-competitive-research" element={<AICompetitiveResearch />} />
                                <Route path="data-science-training" element={<DataScienceTraining />} />
                                <Route path="proptech-analytics" element={<ProptechAnalytics />} />
                                <Route path="airbnb-analytics" element={<AirbnbAnalytics />} />
                                <Route path="ai-language-learning" element={<AILanguageLearning />} />
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
