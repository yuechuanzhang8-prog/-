import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import IdentitySection from './components/IdentitySection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <IdentitySection />
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;