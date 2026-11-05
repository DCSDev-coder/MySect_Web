import React from 'react';
import { Check, X, Shield, Clock, FileCheck, DollarSign, Smartphone } from 'lucide-react';

export const WhyMySect: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Signing Board Resolutions (DCR)',
      traditional: 'Print physical papers, coordinate courier / dispatch runners, wait 3-7 days',
      mysect: 'Instant legal digital signature on phone or laptop in 2 minutes',
      icon: <Smartphone className="w-4 h-4 text-[#0055FF]" />
    },
    {
      feature: 'Statutory Registers & Share Records',
      traditional: 'Physical hard-bound minute books stored in cabinet drawers with manual updates',
      mysect: 'Cloud-synced digital registers with instant cap table and beneficial ownership tracking',
      icon: <FileCheck className="w-4 h-4 text-[#0055FF]" />
    },
    {
      feature: 'SSM Annual Return Preparation',
      traditional: 'Manual data re-entry into MyCoID, risk of typos and late lodgement penalties',
      mysect: 'Auto-populated statutory fields directly generated with automated deadline countdowns',
      icon: <Clock className="w-4 h-4 text-[#0055FF]" />
    },
    {
      feature: 'Certified True Copies (CTC) Retrieval',
      traditional: 'Request via email, pay per certified copy, wait days for manual chops',
      mysect: '24/7 Digital Vault with instant download of Section 14, 15, 17, and constitutions',
      icon: <Shield className="w-4 h-4 text-[#0055FF]" />
    },
    {
      feature: 'Disbursement & Admin Surcharges',
      traditional: 'Surprise variable bills for phone calls, photocopying, binding, and couriers',
      mysect: 'Clear transparent retainer pricing with zero surprise disbursement fees',
      icon: <DollarSign className="w-4 h-4 text-[#0055FF]" />
    }
  ];

  return (
    <section id="why-mysect" className="py-24 bg-white border-y border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-full border border-[#0055FF]/20">
            WHY MYSECT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#14181F] tracking-tight">
            The Modern Alternative to Legacy Secretarial Systems
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Traditional secretarial management wastes hours on repetitive paperwork and physical dispatch. Here is how MySect transforms corporate governance.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-[#E2D9CC] shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#14181F] text-white font-bold text-xs uppercase tracking-wider">
            <div className="md:col-span-4 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-slate-800 flex items-center">
              Statutory Requirement
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-slate-800 text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Traditional CoSec
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 bg-[#0055FF] text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              MySect Platform
            </div>
          </div>

          <div className="divide-y divide-[#E6E0D6] bg-white text-xs">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#FAF7F2]/80 transition-colors">
                {/* Feature Name */}
                <div className="md:col-span-4 p-4 sm:p-5 font-bold text-[#14181F] flex items-start gap-2.5">
                  <div className="mt-0.5 shrink-0">{row.icon}</div>
                  <span>{row.feature}</span>
                </div>

                {/* Traditional CoSec */}
                <div className="md:col-span-4 p-4 sm:p-5 text-slate-600 border-t md:border-t-0 md:border-l border-[#E6E0D6] flex items-start gap-2 bg-rose-50/20">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                {/* MySect */}
                <div className="md:col-span-4 p-4 sm:p-5 text-[#14181F] border-t md:border-t-0 md:border-l border-[#E6E0D6] flex items-start gap-2 bg-[#0055FF]/5 font-medium">
                  <Check className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#14181F] font-semibold">{row.mysect}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
