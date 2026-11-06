import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'features', 'why-mysect', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 80;

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

  const scrollToSection = (e, id) => {
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

  const scrollToTop = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isDarkSection = isScrolled && (activeSection === 'features' || activeSection === 'contact');

  const navLinks = [
    { id: 'features', label: 'Features' },
    { id: 'why-mysect', label: 'Why MySect' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? isDarkSection
          ? 'bg-[#0B192C]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-md shadow-black/20'
          : 'bg-[#FAF7F2]/85 backdrop-blur-md border-b border-[#E6E0D6] py-3.5 shadow-2xs'
        : 'bg-transparent py-5 border-b border-transparent'
        }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* 1. Far Left End: Brand Logo (clicking takes user to home/top) */}
          <div className="flex-1 flex justify-start">
            <a
              href="#home"
              onClick={scrollToTop}
              title="MySect: Back to Home"
              className="flex items-center group cursor-pointer"
            >
              <img
                src="/mysect_main_logo.png"
                alt="MySect"
                className={`h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${isDarkSection ? 'brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]' : ''
                  }`}
              />
            </a>
          </div>

          {/* 2. Dead Center: Navigation Links (Adapts dynamically between dark and light sections) */}
          <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`transition-colors duration-200 relative py-1.5 text-sm font-medium ${
                    isActive
                      ? isDarkSection
                        ? 'text-white'
                        : 'text-[#14181F]'
                      : isDarkSection
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-[#14181F]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ${
                        isDarkSection ? 'bg-white' : 'bg-[#0038A8]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Far Right End: Action Button */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${isDarkSection
                ? 'bg-white hover:bg-slate-100 text-[#0B192C] font-bold shadow-md shadow-black/25 hover:shadow-lg'
                : 'bg-[#0038A8] hover:bg-[#002D88] text-white shadow-sm shadow-[#0038A8]/25 hover:shadow-md hover:shadow-[#0038A8]/35'
                }`}
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none cursor-pointer transition-colors ${isDarkSection ? 'text-white hover:text-slate-200' : 'text-slate-800 hover:text-black'
                }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 ${isDarkSection
            ? 'bg-[#0B192C]/95 backdrop-blur-md border-[#1E3452] text-white'
            : 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#E6E0D6] text-slate-800'
            }`}
        >
          <div className="flex flex-col space-y-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? isDarkSection
                        ? 'bg-white/10 text-white font-semibold'
                        : 'bg-black/5 text-[#14181F] font-semibold'
                      : isDarkSection
                        ? 'hover:bg-white/10 hover:text-white text-slate-300'
                        : 'hover:bg-white/80 hover:text-[#0038A8] text-slate-700'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isDarkSection ? 'bg-white' : 'bg-[#0038A8]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className={`pt-3 border-t ${isDarkSection ? 'border-white/10' : 'border-[#E6E0D6]'}`}>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center py-3 rounded-full text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2 ${isDarkSection
                ? 'bg-white text-[#0B192C] hover:bg-slate-100'
                : 'bg-[#0038A8] hover:bg-[#002D88] text-white'
                }`}
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
