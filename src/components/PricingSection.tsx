import React from 'react';
import { Check, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal variant="fade-up" className="max-w-2xl mx-auto mb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0038A8] mb-3">
            PRICING
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14181F] tracking-normal leading-snug">
            Transparent Pricing Plans
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed tracking-normal">
            Simple, predictable packages with zero surprise disbursements for Malaysian businesses and CoSec firms.
          </p>
        </ScrollReveal>

        {/* Coming Soon Card Frame with Scale-Up Animation */}
        <ScrollReveal
          variant="scale-up"
          delay={120}
          className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E6E0D6] shadow-xl shadow-slate-900/5 relative overflow-hidden text-center hover:shadow-2xl hover:border-[#0038A8]/40 active:scale-[0.99] transition-all duration-300"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0038A8]/10 border border-[#0038A8]/20 text-[#0038A8] font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            <span>Coming Soon</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14181F] tracking-normal leading-snug">
            Plans & Pricing Launching Shortly
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto tracking-normal">
            We are fine-tuning our flexible tier options for solo founders, active SMEs, and multi-entity secretarial firms.
          </p>

          {/* Teaser Feature Checkmarks */}
          <div className="mt-8 pt-6 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
              <span>Zero hidden disbursement fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
              <span>24/7 Digital Statutory Vault</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
