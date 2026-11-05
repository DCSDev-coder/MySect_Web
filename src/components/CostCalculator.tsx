import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';

interface CostCalculatorProps {
  onOpenConsultation: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenConsultation }) => {
  const [serviceType, setServiceType] = useState<'incorporation' | 'transfer'>('incorporation');
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [directorCount, setDirectorCount] = useState<number>(1);
  const [includeAddress, setIncludeAddress] = useState<boolean>(true);
  const [includeAccounting, setIncludeAccounting] = useState<boolean>(false);
  const [includeTax, setIncludeTax] = useState<boolean>(false);

  // Pricing logic (in MYR)
  const ssmGovFee = serviceType === 'incorporation' ? 1010 : 0; // Official SSM incorporation charge
  
  // Base secretarial retainer
  const baseMonthlyCoSec = 120;
  const cosecDiscountAnnual = 0.85; // 15% discount
  const cosecTotal = billingCycle === 'annual' 
    ? Math.round(baseMonthlyCoSec * 12 * cosecDiscountAnnual)
    : baseMonthlyCoSec * 12;

  // Addons
  const addressAnnual = includeAddress ? (billingCycle === 'annual' ? 300 : 360) : 0;
  const accountingAnnual = includeAccounting ? (billingCycle === 'annual' ? 2400 : 3000) : 0;
  const taxAnnual = includeTax ? (billingCycle === 'annual' ? 1000 : 1200) : 0;

  // If new incorporation, bundle discount applies
  const incorporationPackageDiscount = serviceType === 'incorporation' ? 200 : 0;

  const totalAnnualCost = Math.max(0, ssmGovFee + cosecTotal + addressAnnual + accountingAnnual + taxAnnual - incorporationPackageDiscount);
  const effectiveMonthly = Math.round(totalAnnualCost / 12);

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Estimate Your Compliance & Incorporation Investment
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            No unexpected charges for calls, paper stationery, or courier. See your exact costs upfront in Malaysian Ringgit (MYR).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
            {/* Step 1: Mode */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                What are you looking to do?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('incorporation')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    serviceType === 'incorporation'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-xs'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <p className="text-xs font-bold">New Sdn Bhd Setup</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Register new entity with SSM</p>
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('transfer')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    serviceType === 'transfer'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-xs'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <p className="text-xs font-bold">Switch Existing CoSec</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Zero transfer fee guarantee</p>
                </button>
              </div>
            </div>

            {/* Step 2: Billing Cycle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-700/60">
              <div>
                <span className="text-xs font-semibold text-white block">Billing Plan</span>
                <span className="text-[11px] text-slate-400">Save 15% with annual subscription</span>
              </div>
              <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs">
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
                    billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Annual (Save 15%)
                </button>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
                    billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Step 3: Directors */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Number of Directors / Shareholders
                </label>
                <span className="text-xs font-bold text-indigo-400">{directorCount} {directorCount === 1 ? 'Director' : 'Directors'}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setDirectorCount(num)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      directorCount === num
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {num === 4 ? '4+' : num}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Select Add-on Solutions
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-700/80 hover:border-slate-600 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={includeAddress}
                  onChange={(e) => setIncludeAddress(e.target.checked)}
                  className="mt-1 w-4 h-4 text-indigo-600 rounded bg-slate-800 border-slate-700 focus:ring-0"
                />
                <div className="flex-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Registered Office Address (KL)</span>
                    <span className="text-indigo-400 font-semibold">+RM 25/mo</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5">Satisfies Section 46 requirement; includes mail digital notification.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-700/80 hover:border-slate-600 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={includeAccounting}
                  onChange={(e) => setIncludeAccounting(e.target.checked)}
                  className="mt-1 w-4 h-4 text-indigo-600 rounded bg-slate-800 border-slate-700 focus:ring-0"
                />
                <div className="flex-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Monthly Bookkeeping & Financial Statements</span>
                    <span className="text-indigo-400 font-semibold">+RM 200/mo</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5">Xero / QuickBooks integration, monthly reconciliations and P&L reports.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-700/80 hover:border-slate-600 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={includeTax}
                  onChange={(e) => setIncludeTax(e.target.checked)}
                  className="mt-1 w-4 h-4 text-indigo-600 rounded bg-slate-800 border-slate-700 focus:ring-0"
                />
                <div className="flex-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Yearly Corporate Tax (Form C & CP204)</span>
                    <span className="text-indigo-400 font-semibold">+RM 1,000/yr</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5">Licensed tax agent filing, SME tax rate incentives & LHDN compliance.</p>
                </div>
              </label>
            </div>
          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 p-6 sm:p-8 rounded-2xl border border-indigo-500/30 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
              <span className="text-xs uppercase tracking-wider font-bold text-indigo-300">Quotation Breakdown</span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                100% Tax Deductible
              </span>
            </div>

            <div className="py-4 space-y-3 text-xs">
              {serviceType === 'incorporation' && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>SSM Official Registration Fee (Govt)</span>
                  <span className="font-mono font-medium">RM {ssmGovFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-slate-300">
                <span>1-Year Named Company Secretarial</span>
                <span className="font-mono font-medium">RM {cosecTotal.toLocaleString()}</span>
              </div>
              {includeAddress && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>KL Registered Office Address</span>
                  <span className="font-mono font-medium">RM {addressAnnual.toLocaleString()}</span>
                </div>
              )}
              {includeAccounting && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Cloud Bookkeeping (12 Months)</span>
                  <span className="font-mono font-medium">RM {accountingAnnual.toLocaleString()}</span>
                </div>
              )}
              {includeTax && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Corporate Tax Filing & CP204</span>
                  <span className="font-mono font-medium">RM {taxAnnual.toLocaleString()}</span>
                </div>
              )}
              {incorporationPackageDiscount > 0 && (
                <div className="flex items-center justify-between text-emerald-400">
                  <span>All-in Package Savings</span>
                  <span className="font-mono font-medium">- RM {incorporationPackageDiscount}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-slate-700/80">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Total Estimated Fee</span>
                  <span className="text-[11px] text-indigo-300">Effective ~RM {effectiveMonthly}/mo</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    RM {totalAnnualCost.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block">for first 12 months</span>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero hidden courier, photocopy, or dispatch surcharges</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Unlimited standard board resolutions included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Free business bank account appointment fast-track</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenConsultation}
              className="mt-6 w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Lock In This Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
