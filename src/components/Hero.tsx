import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Search, 
  Sparkles, 
  Check, 
  Clock, 
  Download,
  AlertCircle
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenNameSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenNameSearch }) => {
  const [quickSearchInput, setQuickSearchInput] = useState('');
  const [quickResult, setQuickResult] = useState<{ status: 'idle' | 'checking' | 'available' | 'taken'; name: string }>({
    status: 'idle',
    name: ''
  });

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickSearchInput.trim()) return;

    setQuickResult({ status: 'checking', name: quickSearchInput });
    setTimeout(() => {
      // Simulate intelligent name query check
      const normalized = quickSearchInput.trim().toUpperCase();
      const isTaken = ['GRAB', 'SHOPEE', 'PETRONAS', 'MAYBANK', 'AIRASIA'].some(t => normalized.includes(t));
      setQuickResult({
        status: isTaken ? 'taken' : 'available',
        name: normalized + ' SDN. BHD.'
      });
    }, 800);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] -z-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -top-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Regulatory badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-800 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SSM Licensed Secretaries • Companies Act 2016 Compliant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Incorporate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600">Sdn Bhd</span> & manage CoSec{' '}
              <span className="underline decoration-indigo-300 decoration-wavy decoration-2">100% online</span>.
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Eliminate stacks of paper, manual dispatch runners, and surprise disbursement invoices. 
              MySect provides digital company secretarial, hassle-free incorporation, and statutory compliance for Malaysian founders.
            </p>

            {/* Quick Name Checker Bar */}
            <div className="max-w-xl mx-auto lg:mx-0 bg-white p-2 sm:p-2.5 rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200">
              <form onSubmit={handleQuickCheck} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="absolute left-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={quickSearchInput}
                    onChange={(e) => {
                      setQuickSearchInput(e.target.value);
                      if (quickResult.status !== 'idle') setQuickResult({ status: 'idle', name: '' });
                    }}
                    placeholder="Enter desired company name (e.g. Nexus Tech)..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-transparent placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={onOpenNameSearch}
                    title="Open Full Name Screening Tool"
                    className="hidden sm:inline-flex text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold px-2 py-1 mr-1"
                  >
                    Advanced Check
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={quickResult.status === 'checking'}
                  className="sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {quickResult.status === 'checking' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Checking...</span>
                    </>
                  ) : (
                    <>
                      <span>Check SSM</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Instant Search Result Feedback */}
              {quickResult.status === 'available' && (
                <div className="mt-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start justify-between text-xs text-emerald-900 animate-in fade-in duration-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{quickResult.name} looks available!</p>
                      <p className="text-emerald-700 text-[11px]">Ready to file with SSM under Section 14.</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-2.5 py-1 rounded text-[11px] shrink-0"
                  >
                    Reserve Now
                  </button>
                </div>
              )}

              {quickResult.status === 'taken' && (
                <div className="mt-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2 text-xs text-amber-900 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{quickResult.name} may conflict with an existing trademark or SSM record.</p>
                    <p className="text-amber-700 text-[11px]">Try adding a unique descriptive word or ask our secretaries for free naming guidance.</p>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                Incorporate New Sdn Bhd
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>Switch CoSec to MySect</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">Free</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-slate-200/80">
              <div>
                <p className="text-2xl font-extrabold text-slate-900">3-5 Days</p>
                <p className="text-xs text-slate-500 font-medium">SSM Incorporation</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Digital E-Signatures</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">RM 0</p>
                <p className="text-xs text-slate-500 font-medium">Hidden Dispatch Fees</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-indigo-600">1,200+</p>
                <p className="text-xs text-slate-500 font-medium">Companies Managed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital CoSec Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-indigo-900/10 border border-slate-200 overflow-hidden">
                {/* Mock header */}
                <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-xs text-slate-300 font-medium ml-2">MySect Corporate Portal</span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    SSM Live Synced
                  </span>
                </div>

                {/* Mock Dashboard Body */}
                <div className="p-5 space-y-4 bg-slate-50/60">
                  {/* Company Summary Card */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-slate-500">202401018992 (1542890-K)</span>
                          <span className="text-[10px] bg-indigo-50 text-indigo-700 font-semibold px-1.5 py-0.5 rounded">
                            Sdn. Bhd.
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-base mt-0.5">CYBERVENTURES ASIA SDN. BHD.</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Incorporated: 12 March 2024 • Paid-up: RM 100,000</p>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        In Good Standing
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Named CoSec</span>
                        <span className="font-semibold text-slate-800">Farah Nadia (SSM PC 202008001)</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Next Annual Return</span>
                        <span className="font-semibold text-amber-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Due in 45 Days
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pending Action: Digital Signature */}
                  <div className="bg-gradient-to-br from-indigo-50 to-sky-50/50 p-4 rounded-xl border border-indigo-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-indigo-950">Directors' Circular Resolution</p>
                          <p className="text-[11px] text-slate-600 mt-0.5">Opening of Corporate Bank Account with CIMB Bank</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold bg-indigo-200/60 text-indigo-800 px-2 py-0.5 rounded-full">
                        E-Sign Required
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between bg-white/80 p-2.5 rounded-lg border border-indigo-100/80">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-[10px] font-bold flex items-center justify-center text-slate-700">
                          AF
                        </div>
                        <span className="text-xs text-slate-700 font-medium">Ahmad Faiz (Director)</span>
                      </div>
                      <button 
                        onClick={onOpenConsultation}
                        className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md shadow-xs cursor-pointer"
                      >
                        Sign via SingPass/IC
                      </button>
                    </div>
                  </div>

                  {/* Certified True Copies (CTC) Vault Widget */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                        <Download className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">SSM Section 14, 15 & 17 (CTC)</p>
                        <p className="text-[10px] text-slate-400">Digitally signed & encrypted 256-bit</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                      Download PDF
                    </span>
                  </div>
                </div>

                {/* Footer banner of mockup */}
                <div className="bg-slate-100/90 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    All filings automated under Companies Act 2016
                  </span>
                  <span className="font-semibold text-slate-700">Audit-Ready</span>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-5 -left-6 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Zero Physical Visits</p>
                  <p className="text-[10px] text-slate-500">From registration to bank liaison</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
