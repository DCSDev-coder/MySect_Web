import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'single',
      name: 'Single Company / Solo',
      subtitle: 'For individual founders & early ventures',
      priceMonthly: 80,
      priceAnnual: 800,
      popular: false,
      features: [
        'Named Licensed Company Secretary',
        'Registered office address in Kuala Lumpur',
        'Digital minute book & register maintenance',
        'Up to 4 standard board resolutions/yr',
        'Digital Certified True Copies (CTC) access',
        'Annual return SSM submission assistance'
      ],
      cta: 'Register for Solo'
    },
    {
      id: 'growth',
      name: 'Active SME (Most Popular)',
      subtitle: 'Complete secretarial compliance for operating businesses',
      priceMonthly: 140,
      priceAnnual: 1400,
      popular: true,
      features: [
        'Named Licensed Company Secretary',
        'Prestigious Registered Office Address',
        'Unlimited Standard Directors Resolutions (DCR)',
        'Full Annual Return & AGM documentation',
        'Beneficial Ownership (BO) register compliance',
        '24/7 Digital Vault with instant CTC downloads',
        'Direct WhatsApp hotline to secretarial team',
        'Fast-track partner bank account referral'
      ],
      cta: 'Register for Active SME'
    },
    {
      id: 'firm',
      name: 'CoSec Firm / Multi-Entity',
      subtitle: 'Purpose-built for secretarial firms & corporate groups',
      priceMonthly: 350,
      priceAnnual: 3500,
      popular: false,
      features: [
        'Multi-company centralized dashboard',
        'Batch annual return and statutory generation',
        'E-signature circulation engine for clients',
        'Custom white-label client portal',
        'Dedicated onboarding & historical register migration',
        'Unlimited staff & compliance manager seats',
        'Priority API & SSM lodgement integrations'
      ],
      cta: 'Inquire for Firm License'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-full border border-[#0055FF]/20">
            TRANSPARENT PLANS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#14181F] tracking-tight">
            Predictable Pricing with Zero Hidden Disbursements
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            No surprise surcharges for standard letters, routine phone calls, or photocopy runners.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-white border border-[#E6E0D6] text-xs font-semibold shadow-2xs">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full transition-all ${
                !isAnnual ? 'bg-[#14181F] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-[#0055FF] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                isAnnual ? 'bg-white/20 text-white' : 'bg-[#0055FF]/10 text-[#0055FF]'
              }`}>
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isAnnual 
              ? Math.round(plan.priceAnnual / 12) 
              : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white border-2 border-[#0055FF] shadow-xl shadow-[#0055FF]/10 lg:-translate-y-2'
                    : 'bg-white border border-[#E2D9CC] shadow-sm hover:border-[#D5CEC2]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0055FF] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Recommended Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#14181F]">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[30px]">{plan.subtitle}</p>

                  <div className="mt-6 mb-6 pb-6 border-b border-[#F0EAE1]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-500">RM</span>
                      <span className="text-4xl font-black text-[#14181F] tracking-tight font-mono">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-[11px] text-[#0055FF] font-medium mt-1">
                        Billed annually (RM {plan.priceAnnual}/year)
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 text-xs text-slate-700">
                    <p className="font-bold text-[#14181F] uppercase tracking-wider text-[10px]">Included Features:</p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F0EAE1]">
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#0055FF] hover:bg-[#0045D8] text-white shadow-md shadow-[#0055FF]/30'
                        : 'bg-[#FAF7F2] hover:bg-[#F3EFE8] text-slate-900 border border-[#E6E0D6]'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All plans comply with Section 235 of the Companies Act 2016. Official SSM government filing fees billed transparently at cost.</span>
        </div>
      </div>
    </section>
  );
};
