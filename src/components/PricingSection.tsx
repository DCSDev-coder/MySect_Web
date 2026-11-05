import React from 'react';
import { ArrowRight, Sparkles, Check, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ScrollReveal } from './ScrollReveal';

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      id: 'starter',
      name: 'Starter Retainer',
      tag: 'SOLO & BOOTSTRAPPED',
      popular: false,
      badge: 'Early Access',
      description: 'Essential statutory maintenance for single-director Sdn Bhds and early-stage companies.',
      features: [
        'Named Licensed Company Secretary',
        'Annual Return (AR) preparation & SSM lodgement',
        'Registers of Members & Directors maintenance',
        '2 routine Directors Circular Resolutions (DCR) / year',
        '24/7 Certified True Copy (CTC) digital locker',
        'SSM statutory deadline notifications'
      ],
      ctaText: 'Register Interest'
    },
    {
      id: 'growth',
      name: 'Growing Enterprise',
      tag: 'MOST POPULAR',
      popular: true,
      badge: 'Early-Bird Rates',
      description: 'Comprehensive secretarial & board governance for active SMEs with investors and team members.',
      features: [
        'Dedicated senior corporate secretarial manager',
        'Unlimited routine Directors Circular Resolutions (DCR)',
        'AGM document orchestration & minute book archiving',
        'Corporate bank account facility opening resolutions',
        'Beneficial Ownership (BO) ongoing verification & register',
        'Share allotment & transfer statutory lodgements',
        'Priority same-day resolution dispatch'
      ],
      ctaText: 'Register for Early-Bird'
    },
    {
      id: 'firm',
      name: 'CoSec Multi-Entity',
      tag: 'FOR PRACTITIONERS',
      popular: false,
      badge: 'Practice Tier',
      description: 'Purpose-built workspace for licensed secretarial firms managing portfolios of client entities.',
      features: [
        'Multi-company consolidated client dashboard',
        'Automated SSM Form generation (Sections 14, 15, 68, 78)',
        'Direct client digital signature portal',
        'Automated cap table and dividend history logs',
        'Bulk statutory filing queue & tracking',
        'Dedicated practice onboarding & data migration'
      ],
      ctaText: 'Inquire for Practice Tier'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-16 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0038A8] mb-3">
            PRICING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14181F] tracking-normal leading-tight">
            Transparent Pricing Plans
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed tracking-normal max-w-2xl mx-auto">
            Simple, predictable packages with zero surprise disbursements for Malaysian businesses and CoSec firms. Tiered to support solo founders, scaling SMEs, and multi-entity practices.
          </p>
        </ScrollReveal>

        {/* 3-Tier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <ScrollReveal
              key={tier.id}
              delay={idx * 100}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-white border-2 border-[#0038A8] shadow-xl shadow-[#0038A8]/10 hover:shadow-2xl hover:-translate-y-1.5'
                  : 'bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300 hover:-translate-y-1'
              }`}
            >
              {/* Top Banner Tag for Popular */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0038A8] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>{tier.tag}</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#0038A8] bg-[#0038A8]/10 px-2.5 py-0.5 rounded-full border border-[#0038A8]/20">
                    {tier.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Coming Soon</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14181F] tracking-tight mb-2">
                  {tier.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Feature checklist */}
                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-400 mb-2">
                    What's Included:
                  </p>
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-[#0038A8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-5 rounded-full text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-[#0038A8] hover:bg-[#002D88] text-white shadow-lg shadow-[#0038A8]/25 hover:shadow-xl active:scale-95'
                      : 'bg-slate-50 hover:bg-[#0038A8] hover:text-white text-[#14181F] border border-slate-200 hover:border-[#0038A8] active:scale-95'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <ScrollReveal delay={250} className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600 font-medium text-center">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
            <span>100% Companies Act 2016 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
            <span>Zero Hidden Disbursements & Disbursements Transparency</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#0038A8] shrink-0" />
            <span>256-Bit Bank-Grade Statutory Vault Encryption</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
