import React from 'react';
import { 
  BookOpen, 
  FileCheck2, 
  FileSpreadsheet, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  Zap,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface FeaturesSectionProps {
  onRegisterInterest: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onRegisterInterest }) => {

  // The 3 Floating Elevated Cards matching Image 3 & Image 1
  const floatingCards = [
    {
      id: 'registers',
      icon: <BookOpen className="w-8 h-8 text-[#0055FF]" />,
      title: 'Statutory Registers & Share Capital',
      description: 'Comprehensive digital maintenance of Register of Members (Section 50), Directors (Section 51), and Charges (Section 352). Real-time cap table updates and share allotment tracking.',
      bullets: [
        'Register of Members & Beneficial Ownership (BO)',
        'Share allotment & transfer tracking (Section 78/105)',
        'Full historical audit trail of all equity changes'
      ]
    },
    {
      id: 'resolutions',
      icon: <FileCheck2 className="w-8 h-8 text-[#0055FF]" />,
      title: 'Meeting & Resolution Management',
      description: 'Draft, circulate, and execute Directors Circular Resolutions (DCR), AGM notices, and EGM minutes. Legally binding digital signatures under the Malaysian Digital Signature Act 1997.',
      bullets: [
        'Automated pre-filled resolution templates',
        'One-click e-signing for directors anywhere in the world',
        'Built-in voting quorum & minute book archiving'
      ]
    },
    {
      id: 'ssm-forms',
      icon: <FileSpreadsheet className="w-8 h-8 text-[#0055FF]" />,
      title: 'SSM Form Preparation & Annual Returns',
      description: 'Eliminate duplicate data entry. Seamlessly populate Section 14, 15, 17, 68, and 78 forms with smart compliance deadline countdowns to prevent late lodgement penalties.',
      bullets: [
        'Automated Annual Return (Section 68) calculation',
        'Direct alignment with SSM MyCoID directives',
        'Automatic deadline alert calendar via email/WhatsApp'
      ]
    }
  ];

  // The 4 Core Capabilities matching Image 3's middle grid
  const focusPillars = [
    {
      icon: <Zap className="w-6 h-6 text-[#0055FF]" />,
      title: 'Automated Compliance Engine',
      summary: 'Proactively tracks statutory deadlines for Annual Returns, Financial Statements, and tax submissions under Companies Act 2016.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#0055FF]" />,
      title: 'Encrypted Document Vault',
      summary: 'Bank-grade 256-bit encrypted cloud storage for Certified True Copies (CTCs), statutory forms, constitution, and historical lodgements.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#0055FF]" />,
      title: 'Client & Director Portal',
      summary: 'Give company directors, shareholders, and auditors instant secure access to view filings and sign resolutions right from their smartphone.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0055FF]" />,
      title: 'E-Invoicing & Accounting Bridge',
      summary: 'Connects secretarial compliance directly with corporate bookkeeping, LHDN e-invoicing compliance, and auditor workpapers.'
    }
  ];

  // The 3 Showcase modules matching bottom of Image 3
  const moduleShowcases = [
    {
      title: 'Digital Registers & Beneficial Ownership',
      category: 'Statutory Core',
      description: 'Maintain the required Register of Beneficial Ownership (BO) and statutory books in total compliance with the latest SSM Guidelines and Companies (Amendment) Act 2024.',
      highlight: 'Compliant with SSM BO Reporting'
    },
    {
      title: 'One-Click Bank Resolution Fast-Track',
      category: 'Banking & Governance',
      description: 'Generate standardized board resolutions for opening corporate bank accounts with CIMB, Maybank, RHB, and Alliance Bank with instantaneous digital director signatures.',
      highlight: 'Turnaround in under 15 minutes'
    },
    {
      title: 'Unified CoSec Multi-Company Dashboard',
      category: 'Firms & Secretarial Practices',
      description: 'Designed for corporate secretarial practices managing 50 to 5,000+ client companies. Switch between client entities with zero friction and manage lodgements in batch.',
      highlight: 'Multi-Tenant Enterprise Architecture'
    }
  ];

  return (
    <section id="features" className="relative pb-24 bg-[#FAF7F2]">
      {/* 1. THREE FLOATING CARDS (Signature layout from Image 3) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {floatingCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-8 border border-[#E2D9CC] shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0055FF]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Icon in distinctive soft circular frame */}
                <div className="w-16 h-16 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#0055FF] transition-all">
                  <div className="group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#14181F] mb-3 group-hover:text-[#0055FF] transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#F0EAE1] text-xs">
                  {card.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={onRegisterInterest}
                  className="w-full py-2.5 px-4 rounded-full bg-[#F4EFEA] hover:bg-[#0055FF] text-slate-800 hover:text-white text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. OUR COSEC PLATFORM FOCUS (Middle 4-column layout from Image 3) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-full border border-[#0055FF]/20">
            OUR PLATFORM FOCUS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#14181F] tracking-tight">
            Designed for Modern Governance & Speed
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Built from the ground up for Malaysian statutory requirements under the Companies Act 2016.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusPillars.map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 border border-[#E6E0D6] shadow-xs hover:border-[#0055FF]/40 hover:bg-white transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E6E0D6] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-bold text-[#14181F] mb-2 group-hover:text-[#0055FF] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F0EAE1]">
                <button
                  onClick={onRegisterInterest}
                  className="text-xs font-semibold text-[#0055FF] hover:text-[#0045D8] flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CORE SYSTEM MODULES (Showcase cards matching bottom of Image 3) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-full border border-[#0055FF]/20">
            MODULE HIGHLIGHTS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#14181F] tracking-tight">
            Key Secretarial Capabilities
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Empowering company secretaries and management teams with robust corporate digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moduleShowcases.map((mod, mIdx) => (
            <div
              key={mIdx}
              className="bg-white rounded-3xl overflow-hidden border border-[#E2D9CC] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              {/* Card visual banner */}
              <div className="h-44 bg-gradient-to-br from-[#14181F] via-slate-800 to-[#0A1A3D] p-6 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 bg-[#0055FF]/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20">
                    {mod.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="relative z-10">
                  <span className="text-[11px] font-semibold text-sky-300 block">Feature</span>
                  <h4 className="text-base font-bold text-white tracking-tight">{mod.title}</h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-[11px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-0.5 rounded-full mb-3">
                    {mod.highlight}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EAE1]">
                  <button
                    onClick={onRegisterInterest}
                    className="w-full py-2.5 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-[#0055FF]/20"
                  >
                    <span>Request Demonstration</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
