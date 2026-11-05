import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { WhyMySect } from './components/WhyMySect';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { VideoModal } from './components/VideoModal';

export function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#14181F] flex flex-col font-sans selection:bg-[#0055FF] selection:text-white">
      {/* Sticky one-page navigation */}
      <Navbar onRegisterInterest={() => setIsRegisterModalOpen(true)} />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onRegisterInterest={() => setIsRegisterModalOpen(true)}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Section 2: Features (Overlapping 3 Cards + 4 Focus Pillars + 3 Module Showcases) */}
        <FeaturesSection onRegisterInterest={() => setIsRegisterModalOpen(true)} />

        {/* Section 3: Why MySect (Traditional vs MySect Table) */}
        <WhyMySect />

        {/* Section 4: Pricing */}
        <PricingSection onRegisterInterest={() => setIsRegisterModalOpen(true)} />

        {/* Section 5: Contact Us (Send email to user email + Phone link) */}
        <ContactSection />
      </main>

      {/* Footer matching Image 2 */}
      <Footer onRegisterInterest={() => setIsRegisterModalOpen(true)} />

      {/* Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}

export default App;
