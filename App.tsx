import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout';
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TrainingOverview = lazy(() => import('./pages/TrainingOverview'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const MedicalAI = lazy(() => import('./pages/services/MedicalAI'));
const BusinessAutomation = lazy(() => import('./pages/services/BusinessAutomation'));
const UniversityML = lazy(() => import('./pages/services/UniversityML'));
const FamilyAI = lazy(() => import('./pages/services/FamilyAI'));
const AdvancedAI = lazy(() => import('./pages/services/AdvancedAI'));
const NoCodeAI = lazy(() => import('./pages/services/NoCodeAI'));
const PromptEngineering = lazy(() => import('./pages/services/PromptEngineering'));
const RagLangChain = lazy(() => import('./pages/services/RagLangChain'));
const AgentsAutomation = lazy(() => import('./pages/services/AgentsAutomation'));
const AIForMarketing = lazy(() => import('./pages/services/AIForMarketing'));
const AIFundingGrants = lazy(() => import('./pages/services/AIFundingGrants'));
const AIPatentsIP = lazy(() => import('./pages/services/AIPatentsIP'));
const AcceleratorReadiness = lazy(() => import('./pages/services/AcceleratorReadiness'));
const AIReadinessAudit = lazy(() => import('./pages/services/AIReadinessAudit'));
const AICompetitiveResearch = lazy(() => import('./pages/services/AICompetitiveResearch'));
const DataScienceTraining = lazy(() => import('./pages/services/DataScienceTraining'));
const ProptechAnalytics = lazy(() => import('./pages/services/ProptechAnalytics'));
const AirbnbAnalytics = lazy(() => import('./pages/services/AirbnbAnalytics'));
const AILanguageLearning = lazy(() => import('./pages/services/AILanguageLearning'));
const ServicesIndex = lazy(() => import('./pages/services/Index'));
const ServicesLayout = lazy(() => import('./pages/services/ServicesLayout'));
const Troubleshooting = lazy(() => import('./pages/services/Troubleshooting'));
const LocationsIndex = lazy(() => import('./pages/locations/Index'));
const Madrid = lazy(() => import('./pages/locations/Madrid'));
const Barcelona = lazy(() => import('./pages/locations/Barcelona'));
const Valencia = lazy(() => import('./pages/locations/Valencia'));
const Spain = lazy(() => import('./pages/locations/Spain'));
const Online = lazy(() => import('./pages/locations/Online'));
const CaseStudiesIndex = lazy(() => import('./pages/case-studies/Index'));
const RadiologyAI = lazy(() => import('./pages/case-studies/RadiologyAI'));
const AutoClientCase = lazy(() => import('./pages/case-studies/AutoClient'));
const AttioSequences = lazy(() => import('./pages/case-studies/AttioSequences'));
const BankingAssistant = lazy(() => import('./pages/case-studies/BankingAssistant'));
const SpreadsheetAssistant = lazy(() => import('./pages/case-studies/SpreadsheetAssistant'));
const ProptechCase = lazy(() => import('./pages/case-studies/ProptechAnalytics'));
const AirbnbCase = lazy(() => import('./pages/case-studies/AirbnbIntelligence'));
const MadridAIReadiness = lazy(() => import('./pages/locations/services/MadridAIReadiness'));
const BarcelonaPromptEngineering = lazy(() => import('./pages/locations/services/BarcelonaPromptEngineering'));
const ValenciaRagLangChain = lazy(() => import('./pages/locations/services/ValenciaRagLangChain'));
const MadridBusinessAutomation = lazy(() => import('./pages/locations/services/MadridBusinessAutomation'));

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Suspense fallback={<div className="p-6 text-slate-600">Loading…</div>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="corporate" element={<ServicesPage />} />
                            <Route path="ai-training" element={<TrainingOverview />} />
                            <Route path="search" element={<SearchPage />} />
                            <Route path="projects" element={<ProjectsPage />} />
                            <Route path="blog" element={<BlogPage />} />
                            <Route path="contact" element={<ContactPage />} />
                            <Route path="locations" element={<LocationsIndex />} />
                            <Route path="locations/madrid" element={<Madrid />} />
                            <Route path="locations/barcelona" element={<Barcelona />} />
                            <Route path="locations/valencia" element={<Valencia />} />
                            <Route path="locations/spain" element={<Spain />} />
                            <Route path="locations/online" element={<Online />} />
                            <Route path="locations/madrid/ai-readiness-audit" element={<MadridAIReadiness />} />
                            <Route path="locations/barcelona/prompt-engineering" element={<BarcelonaPromptEngineering />} />
                            <Route path="locations/valencia/rag-langchain" element={<ValenciaRagLangChain />} />
                            <Route path="locations/madrid/business-automation" element={<MadridBusinessAutomation />} />
                            <Route path="case-studies" element={<CaseStudiesIndex />} />
                            <Route path="case-studies/radiology-ai" element={<RadiologyAI />} />
                            <Route path="case-studies/autoclient" element={<AutoClientCase />} />
                            <Route path="case-studies/attio-sequences" element={<AttioSequences />} />
                            <Route path="case-studies/banking-assistant" element={<BankingAssistant />} />
                            <Route path="case-studies/spreadsheet-assistant" element={<SpreadsheetAssistant />} />
                            <Route path="case-studies/proptech-analytics" element={<ProptechCase />} />
                            <Route path="case-studies/airbnb-intelligence" element={<AirbnbCase />} />
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
                    </Suspense>
                </BrowserRouter>
            </HelmetProvider>
        </LanguageProvider>
    );
};

export default App;
