import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'features', 'why-mysect', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E6E0D6] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-2xl font-black tracking-tight text-[#0055FF]">
              MySect
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#14181F]/80">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className={`hover:text-[#0055FF] transition-colors relative py-1 ${
                activeSection === 'home' ? 'text-[#0055FF] font-semibold' : ''
              }`}
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className={`hover:text-[#0055FF] transition-colors relative py-1 ${
                activeSection === 'features' ? 'text-[#0055FF] font-semibold' : ''
              }`}
            >
              Features
            </a>
            <a
              href="#why-mysect"
              onClick={(e) => scrollToSection(e, 'why-mysect')}
              className={`hover:text-[#0055FF] transition-colors relative py-1 ${
                activeSection === 'why-mysect' ? 'text-[#0055FF] font-semibold' : ''
              }`}
            >
              Why MySect
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, 'pricing')}
              className={`hover:text-[#0055FF] transition-colors relative py-1 ${
                activeSection === 'pricing' ? 'text-[#0055FF] font-semibold' : ''
              }`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`hover:text-[#0055FF] transition-colors relative py-1 ${
                activeSection === 'contact' ? 'text-[#0055FF] font-semibold' : ''
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Direct WhatsApp Action Button (No options/modal) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-600 px-3 py-2 flex items-center gap-1.5 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white text-xs font-semibold tracking-wide shadow-sm shadow-[#0055FF]/25 hover:shadow-md hover:shadow-[#0055FF]/35 transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Register your interest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#0055FF] text-white text-xs font-semibold"
            >
              Register
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E6E0D6] px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-800">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="px-3 py-2 rounded-xl hover:bg-white/80"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="px-3 py-2 rounded-xl hover:bg-white/80"
            >
              Features
            </a>
            <a
              href="#why-mysect"
              onClick={(e) => scrollToSection(e, 'why-mysect')}
              className="px-3 py-2 rounded-xl hover:bg-white/80"
            >
              Why MySect
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="px-3 py-2 rounded-xl hover:bg-white/80"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-3 py-2 rounded-xl hover:bg-white/80"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-3 border-t border-[#E6E0D6] space-y-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#0055FF] text-white text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Register your interest via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
