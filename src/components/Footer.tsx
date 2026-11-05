import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenNameSearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenNameSearch }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                  MySect
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 bg-indigo-500/20 text-indigo-400 rounded border border-indigo-500/30">
                    Malaysia
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Digital Corporate Secretarial</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              MySect is Malaysia's modern digital corporate services platform. We empower ambitious entrepreneurs and growing enterprises with seamless Sdn Bhd incorporation, licensed statutory secretarial services, and tax-ready accounting.
            </p>

            <div className="space-y-2 pt-2 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Level 28, The Exchange 106, Lingkaran TRX, 55188 Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>support@mysect.my</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>+60 (3) 8800 1288 / WhatsApp: +60 11-5688 9900</span>
              </div>
            </div>
          </div>

          {/* Column: Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Services</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Sdn Bhd Incorporation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Company Secretary (CoSec)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  KL Registered Office Address
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Cloud Bookkeeping & Accounting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Corporate Tax (Form C & CP204)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Share Allotment & ESOP
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Tools & Resources */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Tools & Help</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={onOpenNameSearch} className="hover:text-indigo-400 transition-colors text-left">
                  SSM Name Search Tool
                </button>
              </li>
              <li>
                <a href="#calculator" className="hover:text-indigo-400 transition-colors">
                  Incorporation Fee Calculator
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-indigo-400 transition-colors">
                  Traditional CoSec vs MySect
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-400 transition-colors">
                  Malaysian CoSec FAQ
                </a>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-indigo-400 transition-colors text-left">
                  Switch Secretary Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Compliance & Badges */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Compliance</h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>SSM Licensed</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Qualified under Section 241 of the Companies Act 2016.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <p className="font-semibold text-slate-200 mb-0.5">E-Commerce Act 2006</p>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Digital Signature Act 1997 compliant e-signing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} MySect Sdn. Bhd. (202401018992 / 1542890-K). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">PDPA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
