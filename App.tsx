import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout';
const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CVPage = lazy(() => import('./pages/CVPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const CaseStudiesIndex = lazy(() => import('./pages/case-studies/Index'));
const OulangCase = lazy(() => import('./pages/case-studies/Oulang'));
const ApoloMedicalFramework = lazy(() => import('./pages/case-studies/ApoloMedicalFramework'));
const AutoClientCase = lazy(() => import('./pages/case-studies/AutoClient'));
const AutoPricingCase = lazy(() => import('./pages/case-studies/AutoPricing'));
const VudaCase = lazy(() => import('./pages/case-studies/Vuda'));

export const AppRoutes: React.FC = () => (
    <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center" role="status"><span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-200 border-t-brand-700" /><span className="sr-only">Loading</span></div>}>
        <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="corporate" element={<Navigate to="/projects" replace />} />
                            <Route path="ai-training" element={<Navigate to="/projects" replace />} />
                            <Route path="search" element={<SearchPage />} />
                            <Route path="projects" element={<ProjectsPage />} />
                            <Route path="blog/*" element={<Navigate to="/projects" replace />} />
                            <Route path="contact" element={<ContactPage />} />
                            <Route path="cv" element={<CVPage />} />
                            <Route path="cv/en" element={<CVPage edition="en" />} />
                            <Route path="cv/es" element={<CVPage edition="es" />} />
                            <Route path="locations/*" element={<Navigate to="/projects" replace />} />
                            <Route path="case-studies" element={<CaseStudiesIndex />} />
                            <Route path="case-studies/oulang" element={<OulangCase />} />
                            <Route path="case-studies/apolo-medical-framework" element={<ApoloMedicalFramework />} />
                            <Route path="case-studies/autoclient" element={<AutoClientCase />} />
                            <Route path="case-studies/autopricing" element={<AutoPricingCase />} />
                            <Route path="case-studies/vuda" element={<VudaCase />} />
                            <Route path="services/*" element={<Navigate to="/projects" replace />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
        </Routes>
    </Suspense>
);

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </LanguageProvider>
    );
};

export default App;
