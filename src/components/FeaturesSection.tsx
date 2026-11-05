import React, { useState } from 'react';
import { 
  UserCheck, 
  PieChart, 
  BookMarked, 
  FileCheck, 
  CalendarRange, 
  FileSpreadsheet, 
  ChevronDown, 
  ShieldCheck, 
  Building2, 
  Lock
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FeaturesSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  // Distinctive MySect Core Modules
  const coreFeatures = [
    {
      id: 'officers',
      category: 'Governance',
      title: 'Directorship & Officer Records',
      description: 'Maintain complete officer appointment histories, statutory qualification screening, and cessation records under Section 196.',
      icon: <UserCheck className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'shareholders',
      category: 'Equity Matrix',
      title: 'Dynamic Capital & Cap Table',
      description: 'Real-time cap table visibility, share allotments (Section 78), transfers (Section 105), and paid-up capital tracking.',
      icon: <PieChart className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'registers',
      category: 'Statutory Core',
      title: 'Digital Registers & Beneficial Ownership',
      description: 'Automated Register of Members (Section 50), Register of Charges (Section 352), and latest SSM Beneficial Ownership registers.',
      icon: <BookMarked className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'resolutions',
      category: 'Authorizations',
      title: 'Board Resolution Engine',
      description: 'Draft, circulate, and sign Directors Circular Resolutions (DCR) with legally binding e-signatures under the Digital Signature Act 1997.',
      icon: <FileCheck className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'meetings',
      category: 'Shareholder Ops',
      title: 'AGM & Minute Book Orchestration',
      description: 'Automate notice circulation, proxy tracking, minute book archiving, and statutory AGM compliance calendars.',
      icon: <CalendarRange className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'ssm-forms',
      category: 'SSM Lodgements',
      title: 'Automated Statutory Lodgements',
      description: 'Pre-populate Sections 14, 15, 17, 68, and 78 forms automatically without duplicate data re-entry or formatting errors.',
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-400" />
    }
  ];

  // Extended capabilities
  const extendedFeatures = [
    {
      id: 'bo-register',
      category: 'Regulatory',
      title: 'Beneficial Ownership (BO) Compliance',
      description: 'Full adherence to latest SSM Beneficial Ownership directives, notification obligations, and periodic verification schedules.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'bank-resolutions',
      category: 'Banking Bridge',
      title: 'Corporate Bank Facility Suite',
      description: 'Standardized resolution drafting for CIMB, Maybank, RHB, and Alliance corporate accounts with instant digital director sign-off.',
      icon: <Building2 className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'digital-vault',
      category: 'Document Vault',
      title: 'Certified True Copy (CTC) Vault',
      description: 'Bank-grade 256-bit encrypted locker for 24/7 access to Sections 14, 15, 17, constitutions, and official filing receipts.',
      icon: <Lock className="w-5 h-5 text-amber-400" />
    }
  ];

  const displayedFeatures = showMore ? [...coreFeatures, ...extendedFeatures] : coreFeatures;

  return (
    <section id="features" className="py-24 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#0055FF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
              PLATFORM MODULES
            </span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-normal leading-snug">
            The Operating System for Malaysian Corporate Governance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Unified statutory registers, board governance, and SSM compliance workflows engineered for forward-thinking Malaysian firms.
          </p>
        </ScrollReveal>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedFeatures.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx < 6 ? idx * 60 : 0}
              className="bg-[#102035] hover:bg-[#132742] p-7 rounded-2xl border border-[#1E3452] hover:border-amber-400/40 transition-all duration-300 shadow-md hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Category Pill + Amber Icon Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-semibold text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 tracking-normal group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal tracking-normal">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View More Features Toggle */}
        <ScrollReveal delay={200} className="mt-12 text-center flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer py-2.5 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95"
          >
            <span>{showMore ? 'View Fewer Modules' : 'View More Modules'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
