import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { WhyMySect } from './components/WhyMySect';
// import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#14181F] flex flex-col font-sans selection:bg-[#0038A8] selection:text-white">
      {/* Sticky one-page navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onOpenVideo={() => setIsVideoModalOpen(true)} />

        {/* Section 2: Features (Matches 1st uploaded screenshot) */}
        <FeaturesSection />

        {/* Section 3: Why MySect (Matches 2nd uploaded screenshot) */}
        <WhyMySect />

        {/* Section 4: Pricing (Commented out) */}
        {/* <PricingSection /> */}

        {/* Section 5: Contact Us */}
        <ContactSection />
      </main>

      {/* Footer matching Image 2 */}
      <Footer />

      {/* Floating Scroll To Top Arrow */}
      <ScrollToTop />

      {/* Meet MySect Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}

export default App;
