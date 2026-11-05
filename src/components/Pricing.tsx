import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/content';

interface PricingProps {
  onOpenConsultation: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/80">
            Transparent Retainer Plans
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fair, simple pricing with zero surprise charges
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Choose the plan that fits your current company stage. Upgrade, downgrade, or cancel anytime.
          </p>

          {/* Billing Interval Switch */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300/80 text-xs font-semibold">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg transition-all ${
                !isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                isAnnual ? 'bg-indigo-500 text-white' : 'bg-emerald-100 text-emerald-800'
              }`}>
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual 
              ? Math.round(tier.priceAnnually / 12) 
              : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-600/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-sky-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{tier.tagline}</p>

                  {/* Price display */}
                  <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-600">RM</span>
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                        {tier.id === 'incorporation-bundle' ? (isAnnual ? '1,499' : '149') : price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {tier.id === 'incorporation-bundle' && isAnnual ? '/ all-in package' : '/ month'}
                      </span>
                    </div>
                    {isAnnual && tier.id !== 'incorporation-bundle' && (
                      <p className="text-[11px] text-emerald-600 font-medium mt-1">
                        Billed annually (RM {tier.priceAnnually}/yr)
                      </p>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 text-xs text-slate-700">
                    <p className="font-semibold text-slate-900 uppercase tracking-wider text-[10px]">What is included:</p>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenConsultation}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.popular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statutory Fee Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          * Official SSM fee for new incorporation is RM 1,010 (gazetted government lodgement). All secretarial plans are compliant with the Malaysian Companies Act 2016.
        </div>
      </div>
    </section>
  );
};
