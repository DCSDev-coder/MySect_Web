import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenNameSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenNameSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900 tracking-tight leading-none flex items-center gap-1.5">
                MySect
                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-200/60">
                  MY
                </span>
              </span>
              <span className="text-[11px] font-medium text-slate-500">Corporate Secretarial</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">
              How It Works
            </a>
            <a href="#calculator" className="hover:text-indigo-600 transition-colors">
              Fee Calculator
            </a>
            <a href="#comparison" className="hover:text-indigo-600 transition-colors">
              Why Us
            </a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenNameSearch}
              className="text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-indigo-600" />
              Check SSM Name
            </button>
            <a
              href="https://wa.me/601156889900"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-emerald-600 transition-colors rounded-lg hover:bg-slate-100"
              title="WhatsApp Specialist"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 py-2.5 rounded-lg shadow-sm shadow-indigo-600/30 transition-all hover:shadow-indigo-600/40 hover:-translate-y-0.5"
            >
              Start Incorporation
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-semibold bg-indigo-600 text-white px-3 py-1.5 rounded-md"
            >
              Incorporate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              How It Works
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Fee Calculator
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Why Us
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNameSearch();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold bg-slate-100 text-slate-800 rounded-lg"
            >
              Check SSM Company Name Availability
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold bg-indigo-600 text-white rounded-lg shadow-sm"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
