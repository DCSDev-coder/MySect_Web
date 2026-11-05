import React from 'react';
import { ArrowRight, Sparkles, Check, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ScrollReveal } from './ScrollReveal';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#FAF7F2] border-b border-[#E6E0D6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-white/80 text-slate-800 border border-[#D5CEC2] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] animate-pulse"></span>
              <span>PRICING</span>
            </span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14181F] tracking-normal leading-snug">
            Transparent Pricing Plans
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed tracking-normal">
            Simple, predictable packages with zero surprise disbursements for Malaysian businesses and CoSec firms.
          </p>
        </ScrollReveal>

        {/* Coming Soon Card Frame with Scroll Reveal */}
        <ScrollReveal delay={150} className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E2D9CC] shadow-xl shadow-slate-900/5 relative overflow-hidden text-center hover:shadow-2xl transition-shadow duration-300">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-[#0055FF]/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5" />
            <span>Coming Soon</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14181F] tracking-normal leading-snug">
            Plans & Pricing Launching Shortly
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto tracking-normal">
            We are fine-tuning our flexible tier options for solo founders, active SMEs, and multi-entity secretarial firms.
          </p>

          {/* Teaser Feature Checkmarks */}
          <div className="mt-8 pt-6 border-t border-[#F0EAE1] grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-xs text-slate-700 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0055FF] shrink-0" />
              <span>Zero hidden disbursement fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0055FF] shrink-0" />
              <span>Unlimited standard board resolutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0055FF] shrink-0" />
              <span>24/7 Digital Statutory Vault</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0055FF] shrink-0" />
              <span>Exclusive early-bird rates</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0055FF]/25 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register interest for early-bird rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
