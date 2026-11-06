import React from 'react';
import { Smartphone, Building, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';



export const HowItWorks = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'Submit Details & eKYC in 10 Minutes',
      description: 'Choose your desired company name, select business activities (MSIC codes), and upload director/shareholder IC or passport. No printing or scanning machines required.',
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      badges: ['Digital eKYC', '100% Paperless', 'Name check assistance']
    },
    {
      step: '02',
      title: 'SSM Review & Digital Signatures',
      description: 'Our licensed corporate secretaries verify documents, reserve your company name, and generate statutory Section 14 forms. Sign securely from your phone or laptop.',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      badges: ['Licensed Secretaries', 'Digital Signature Act 1997', '3-5 Days Approval']
    },
    {
      step: '03',
      title: 'Receive Certificates & Open Bank Account',
      description: 'Receive your SSM Certificate of Incorporation (Section 17) and certified statutory documents instantly in your cloud vault. We fast-track your corporate bank account setup.',
      icon: <Building className="w-6 h-6 text-indigo-600" />,
      badges: ['Bank VIP fast-track', 'Instant CTC PDF', '1-Year CoSec Retainer']
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/80">
            Streamlined Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How incorporating with MySect works
          </h2>
          <p className="mt-4 text-base text-slate-600">
            From idea to an official registered Malaysian Sdn Bhd in 3 painless steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              {/* Top line with step number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 font-mono">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Badges */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                {item.badges.map((badge, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-950/20">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Already have a company secretary you want to replace?</h4>
            <p className="text-xs text-indigo-200">
              We handle the entire resignation, transfer, and physical register handover without disrupting your business.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 rounded-xl bg-white text-indigo-900 font-bold text-xs uppercase tracking-wider hover:bg-indigo-50 transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Transfer CoSec For Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
