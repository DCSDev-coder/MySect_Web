import React from 'react';
import { ArrowRight, Sparkles, Check, Clock, ShieldCheck, Receipt, Layers } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ScrollReveal } from './ScrollReveal';

export const PricingSection: React.FC = () => {
  const launchPromises = [
    {
      id: 'disbursements',
      title: 'Zero Hidden Disbursement Markups',
      description: 'Official SSM statutory filing fees and government charges will be passed through at 100% true cost with transparent itemized receipts.',
      icon: <Receipt className="w-5 h-5 text-white" />
    },
    {
      id: 'resolutions',
      title: 'Routine Resolutions Included',
      description: 'Standard Directors Circular Resolutions (DCR) and annual meeting paperwork bundled into monthly retainers without surprise drafting bills.',
      icon: <Layers className="w-5 h-5 text-white" />
    },
    {
      id: 'compliance',
      title: 'Full Companies Act 2016 Guarantee',
      description: 'All tiers include named licensed company secretarial coverage, statutory registers upkeep, and proactive SSM deadline alerts.',
      icon: <ShieldCheck className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-16 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0038A8] mb-3">
            PRICING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14181F] tracking-normal leading-tight">
            Transparent Pricing Plans
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed tracking-normal max-w-2xl mx-auto">
            Our flexible retainer tiers are currently being finalized for Malaysian solo founders, expanding SMEs, and licensed CoSec practices.
          </p>
        </ScrollReveal>

        {/* Wide 2-Column Balanced Coming Soon Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column (7 cols): What to Expect in Our Pricing */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {launchPromises.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                delay={idx * 80}
                className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E6E0D6] flex items-start gap-4 hover:border-[#0038A8]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0038A8]/20 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B192C] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column (5 cols): Early-Bird Access Card */}
          <ScrollReveal delay={150} className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#0038A8] shadow-xl shadow-[#0038A8]/10 flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Coming Soon Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0038A8]/10 border border-[#0038A8]/20 text-[#0038A8] font-mono text-xs font-bold uppercase tracking-wider mb-5">
                <Clock className="w-3.5 h-3.5" />
                <span>Launching Soon</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#14181F] tracking-tight leading-snug mb-3">
                Lock In Exclusive Early-Bird Rates
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our retainer packages are currently not public while we calibrate options. Register your interest now to secure priority onboarding and launch rates.
              </p>

              {/* Perks list */}
              <div className="pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
                  <span>Guaranteed founder early-bird pricing discount</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
                  <span>Complimentary initial SSM compliance health check</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
                  <span>Priority access to licensed secretarial team</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
                  <span>No upfront payment or card required</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0038A8]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register Interest for Launch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Trust Guarantee Strip */}
        <ScrollReveal delay={250} className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600 font-medium text-center">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
            <span>100% Companies Act 2016 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
            <span>Zero Hidden Disbursements</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
            <span>256-Bit Bank-Grade Vault Security</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
