import React from 'react';
import { ArrowUp, MessageSquare, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface FooterProps {
  onRegisterInterest: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRegisterInterest }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08121E] text-slate-300 pt-16 pb-12 border-t border-[#1E3452]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E3452] text-xs">
          {/* Brand info */}
          <div className="space-y-4">
            <span className="text-2xl font-black tracking-tight text-[#0055FF]">
              MySect
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your COSEC Command Centre. Modern company secretarial and statutory corporate governance in Malaysia.
            </p>
            <div className="space-y-1.5 text-slate-400 text-[11px]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0055FF]" />
                <span>Email: {SITE_CONFIG.contactEmail}</span>
              </div>
              <a 
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: Direct Specialist Liaison</span>
              </a>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features & Modules</a></li>
              <li><a href="#why-mysect" className="hover:text-white transition-colors">Why MySect</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Statutory & Legal */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Statutory & Law</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Companies Act 2016</li>
              <li>Digital Signature Act 1997</li>
              <li>Electronic Commerce Act 2006</li>
              <li>Personal Data Protection Act (PDPA)</li>
              <li>SSM Beneficial Ownership Guidelines</li>
            </ul>
          </div>

          {/* Registration CTA card */}
          <div className="bg-[#102035] p-5 rounded-2xl border border-[#1E3452] space-y-3">
            <h5 className="font-bold text-white text-xs">Ready to simplify company matters?</h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Register early access with our corporate secretarial desk today.
            </p>
            <button
              onClick={onRegisterInterest}
              className="w-full py-2.5 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              Register your interest
            </button>
          </div>
        </div>

        {/* Signature Bar matching Image 2 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>Designed and developed in Malaysia.</p>
          <div className="flex items-center gap-6">
            <span className="text-amber-400">Coming soon</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
