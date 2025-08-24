import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AdditionalProjects from './components/AdditionalProjects';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <div className="bg-white text-slate-800">
                <Header />
                <main id="main-content">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <AdditionalProjects />
                    <Testimonials />
                    <Experience />
                    <Contact />
                </main>
                <Footer />
                <a href="https://wa.me/34679794037"
                   className="whatsapp-float fixed bottom-6 right-6 bg-slate-900 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-slate-800 transition-all transform hover:scale-110 z-40"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Contact via WhatsApp">
                    <i className="fab fa-whatsapp text-3xl"></i>
                </a>
            </div>
        </LanguageProvider>
    );
};

export default App;