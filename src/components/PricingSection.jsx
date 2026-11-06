import React, { useState } from 'react';
import { Check, Lock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PricingSection = () => {
  const [isRattling, setIsRattling] = useState(false);

  const handleLockClick = () => {
    setIsRattling(true);
    setTimeout(() => setIsRattling(false), 500);
  };

  return (
    <section id="pricing" className="pt-14 sm:pt-16 pb-24 bg-white relative overflow-hidden">
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

        {/* Locked Pricing Card with Mechanical Lock Animation */}
        <ScrollReveal
          variant="scale-up"
          delay={120}
          className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E6E0D6] shadow-xl shadow-slate-900/5 relative overflow-hidden text-center hover:shadow-2xl hover:border-[#0038A8]/40 active:scale-[0.99] transition-all duration-300 lock-interactive group"
        >
          {/* Animated Padlock Icon Pod */}
          <div
            onClick={handleLockClick}
            title="Click to test lock"
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-[#FAF7F2] border border-[#E6E0D6] shadow-sm flex items-center justify-center mx-auto mb-6 relative cursor-pointer select-none transition-transform duration-300 group-hover:scale-105"
          >
            {/* Subtle expanding pulse ring */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#0038A8]/20 animate-lock-ring pointer-events-none"></div>

            {/* Custom Mechanical Padlock SVG */}
            <svg
              className={`w-9 h-9 sm:w-10 sm:h-10 text-[#0038A8] transition-transform animate-lock-container ${
                isRattling ? 'animate-rattle' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Locked Padlock"
            >
              {/* Shackle: snaps down into the body */}
              <path
                className="animate-lock-shackle"
                d="M7 10V6.5a5 5 0 0 1 10 0V10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Lock Body: absorbs impact with slight bounce */}
              <rect
                className="animate-lock-body"
                x="4"
                y="10"
                width="16"
                height="12"
                rx="3"
                fill="#0038A8"
                fillOpacity="0.12"
                stroke="currentColor"
                strokeWidth="2.2"
              />
              {/* Keyhole */}
              <circle
                className="animate-lock-body"
                cx="12"
                cy="15"
                r="1.4"
                fill="currentColor"
              />
              <path
                className="animate-lock-body"
                d="M12 16.4v2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Locked Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Pricing Plans Locked</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14181F] tracking-normal leading-snug">
            Plans & Rates Under Lock & Key
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto tracking-normal">
            We are finalizing our flexible tier options for solo founders, growing SMEs, and multi-entity secretarial firms.
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
