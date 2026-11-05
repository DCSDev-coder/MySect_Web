import React from 'react';
import { Check, X, Shield, Clock, FileText, DollarSign, Smartphone } from 'lucide-react';

export const Comparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Signing Board Resolutions',
      traditional: 'Print physical papers, coordinate courier / dispatch runners, wait 3-7 days',
      mysect: 'Instant legal digital signature on smartphone or laptop in 2 minutes',
      icon: <Smartphone className="w-4 h-4 text-indigo-600" />
    },
    {
      feature: 'Fee Transparency & Disbursements',
      traditional: 'Variable invoices with surprise line items: printing, photocopies, couriers, telephone calls',
      mysect: 'Fixed transparent monthly or annual fee with zero hidden disbursement charges',
      icon: <DollarSign className="w-4 h-4 text-indigo-600" />
    },
    {
      feature: 'Statutory Document Access (CTC)',
      traditional: 'Request via email, pay per certified copy, wait days for postage',
      mysect: '24/7 Digital Vault with instant download of SSM Section 14, 15, 17 and constitutions',
      icon: <FileText className="w-4 h-4 text-indigo-600" />
    },
    {
      feature: 'Turnaround Time for New Sdn Bhd',
      traditional: '7 to 14 working days with back-and-forth manual form re-submissions',
      mysect: '3 to 5 working days fast-track submission with digital eKYC',
      icon: <Clock className="w-4 h-4 text-indigo-600" />
    },
    {
      feature: 'Dedicated Compliance Support',
      traditional: 'Hard-to-reach landlines, slow email replies from junior clerks',
      mysect: 'Direct WhatsApp hotline and email with licensed corporate secretaries',
      icon: <Shield className="w-4 h-4 text-indigo-600" />
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/80">
            Why Founders Switch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Traditional CoSec vs. MySect
          </h2>
          <p className="mt-4 text-base text-slate-600">
            See how modern technology and upfront pricing transform corporate governance.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
            <div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-slate-800 flex items-center">
              Feature / Capability
            </div>
            <div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-slate-800 text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Traditional Firm
            </div>
            <div className="md:col-span-4 p-4 bg-indigo-900/60 text-indigo-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              MySect Digital CoSec
            </div>
          </div>

          <div className="divide-y divide-slate-200 bg-white text-xs">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50/80 transition-colors">
                {/* Feature Name */}
                <div className="md:col-span-4 p-4 sm:p-5 font-bold text-slate-900 flex items-start gap-2.5">
                  <div className="mt-0.5 shrink-0">{row.icon}</div>
                  <span>{row.feature}</span>
                </div>

                {/* Traditional CoSec */}
                <div className="md:col-span-4 p-4 sm:p-5 text-slate-600 border-t md:border-t-0 md:border-l border-slate-200 flex items-start gap-2 bg-rose-50/20">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                {/* MySect */}
                <div className="md:col-span-4 p-4 sm:p-5 text-slate-900 border-t md:border-t-0 md:border-l border-slate-200 flex items-start gap-2 bg-indigo-50/30 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-indigo-950 font-semibold">{row.mysect}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
