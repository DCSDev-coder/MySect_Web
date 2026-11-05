import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { id: 'features', label: 'Features' },
    { id: 'why-mysect', label: 'Why MySect' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-3.5 sm:pt-4">
        {/* Floating Glass Capsule Navbar */}
        <div
          className={`pointer-events-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-slate-300/80 shadow-xl shadow-slate-900/10'
              : 'bg-white/90 backdrop-blur-md border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl'
          }`}
        >
          {/* Brand Logo with Icon */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={scrollToTop}
              title="MySect - Back to Home"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-[#0038A8] text-white flex items-center justify-center font-black text-xs tracking-tight shadow-xs group-hover:scale-105 group-hover:bg-[#002D88] transition-all">
                M
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#0038A8]">
                MySect
              </span>
            </a>
          </div>

          {/* Navigation Links with Floating Pill Highlights */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-normal transition-all ${
                  activeSection === link.id
                    ? 'bg-[#0038A8]/10 text-[#0038A8] font-bold'
                    : 'text-slate-600 hover:text-[#0038A8] hover:bg-slate-100/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white text-xs font-semibold tracking-wide shadow-sm shadow-[#0038A8]/25 hover:shadow-md transition-all flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Register your interest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle & Direct Action */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#0038A8] text-white text-[11px] font-semibold tracking-wide"
            >
              Register
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-[#0038A8] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 text-xs font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3 py-2 rounded-xl transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#0038A8]/10 text-[#0038A8] font-bold'
                      : 'hover:bg-slate-100 hover:text-[#0038A8]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2"
              >
                <span>Register your interest</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
