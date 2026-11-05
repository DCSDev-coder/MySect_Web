import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { CostCalculator } from './components/CostCalculator';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CompanyNameSearchModal } from './components/CompanyNameSearchModal';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isNameSearchOpen, setIsNameSearchOpen] = useState(false);
  const [prefilledCompanyName, setPrefilledCompanyName] = useState('');

  const handleOpenConsultation = (companyName?: string) => {
    if (companyName) {
      setPrefilledCompanyName(companyName);
    }
    setIsConsultationOpen(true);
  };

  const handleSelectName = (name: string) => {
    setPrefilledCompanyName(name);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenNameSearch={() => setIsNameSearchOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenNameSearch={() => setIsNameSearchOpen(true)}
        />

        {/* Services Showcase */}
        <Services onOpenConsultation={() => handleOpenConsultation()} />

        {/* 3-Step Process */}
        <HowItWorks onOpenConsultation={() => handleOpenConsultation()} />

        {/* Interactive Fee Simulator */}
        <CostCalculator onOpenConsultation={() => handleOpenConsultation()} />

        {/* Traditional vs MySect Table */}
        <Comparison />

        {/* Pricing Tiers */}
        <Pricing onOpenConsultation={() => handleOpenConsultation()} />

        {/* Customer Proof & Banking Partners */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenNameSearch={() => setIsNameSearchOpen(true)}
      />

      {/* Interactive Modals */}
      <CompanyNameSearchModal
        isOpen={isNameSearchOpen}
        onClose={() => setIsNameSearchOpen(false)}
        onSelectName={handleSelectName}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledName={prefilledCompanyName}
      />
    </div>
  );
}

export default App;
