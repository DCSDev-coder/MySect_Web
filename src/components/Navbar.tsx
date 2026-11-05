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
        {/* Floating Hybrid Glass Capsule */}
        <div
          className={`pointer-events-auto rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 flex items-center justify-between border ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-slate-300/80 shadow-xl shadow-slate-900/10'
              : 'bg-white/90 backdrop-blur-md border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl'
          }`}
        >
          {/* Brand Logo with Monogram Seal (Concept 4 & 2) */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={scrollToTop}
              title="MySect - Back to Home"
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-[#0038A8] text-white flex items-center justify-center font-black text-sm tracking-tight shadow-md shadow-[#0038A8]/20 group-hover:scale-105 group-hover:bg-[#002D88] transition-all">
                M
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-black tracking-tight text-[#0B192C]">
                  My
                </span>
                <span className="text-xl font-black tracking-tight text-[#0038A8]">
                  Sect
                </span>
              </div>
            </a>
          </div>

          {/* Center Segmented Island Tab Bar (Concept 3) */}
          <nav className="hidden md:flex items-center bg-[#FAF7F2] p-1 rounded-full border border-[#E6E0D6] shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-normal transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#0038A8] font-bold shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-[#0B192C] hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* High-Contrast Action Pill with Circular Icon Pod (Concept 2 & 1) */}
          <div className="hidden md:flex items-center">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-4 pr-1.5 py-1.5 rounded-full bg-[#0B192C] hover:bg-[#0038A8] text-white text-xs font-bold tracking-wide shadow-md shadow-black/10 hover:shadow-lg transition-all duration-300 flex items-center gap-2.5 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Register your interest</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#0B192C] group-hover:text-[#0038A8] flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle & Direct Action */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#0B192C] text-white text-[11px] font-bold tracking-wide"
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
            <div className="bg-[#FAF7F2] p-1.5 rounded-xl border border-[#E6E0D6] flex flex-col space-y-1 text-xs font-semibold text-slate-700">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-white text-[#0038A8] font-bold shadow-xs'
                        : 'hover:bg-white/60 hover:text-[#0B192C]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[#0B192C] hover:bg-[#0038A8] text-white text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2"
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
