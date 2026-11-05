import React from 'react';
import { X, Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white text-[#14181F] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#E6E0D6] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-full border border-[#0055FF]/20">
            Early Access Registration
          </span>
          <h3 className="text-2xl font-extrabold text-[#14181F] tracking-tight">
            Register Your Interest
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
            Connect directly with our corporate secretarial team via phone or WhatsApp.
          </p>
        </div>

        {/* Direct Phone / WhatsApp Options */}
        <div className="space-y-3">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#0055FF] hover:bg-[#0045D8] text-white shadow-lg shadow-[#0055FF]/25 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-100">Recommended</p>
                <p className="text-sm font-extrabold">WhatsApp Specialist</p>
                <p className="text-xs text-blue-100 font-mono">{SITE_CONFIG.phoneDisplay}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center justify-between p-4 rounded-2xl bg-[#F4EFEA] hover:bg-[#EDE6DD] text-[#14181F] border border-[#E2D9CC] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-slate-800 flex items-center justify-center shadow-xs">
                <Phone className="w-5 h-5 text-[#0055FF]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Voice Call</p>
                <p className="text-sm font-extrabold text-[#14181F] font-mono">{SITE_CONFIG.phoneDisplay}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Assurance */}
        <div className="mt-6 pt-5 border-t border-[#E6E0D6] flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>No spam guarantee • Instant response during business hours</span>
        </div>
      </div>
    </div>
  );
};
