import React, { useState } from 'react';
import { 
  User, 
  Users, 
  BookOpen, 
  FileText, 
  Calendar, 
  ClipboardCheck, 
  ChevronDown, 
  ShieldCheck, 
  Landmark, 
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FeaturesSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const coreFeatures = [
    {
      id: 'officers',
      title: 'Director & Officer Management',
      description: 'Full profiles, appointment history, and cessation tracking for all officers',
      icon: <User className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'shareholders',
      title: 'Shareholders & Share Capital',
      description: 'Manage share allotments, transfers, and maintain capital structure',
      icon: <Users className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'registers',
      title: 'Statutory Registers',
      description: 'Digital registers for directors, members, secretaries, and charges',
      icon: <BookOpen className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'resolutions',
      title: 'Resolution Register',
      description: 'Record, track, and manage all company resolutions with full history',
      icon: <FileText className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'meetings',
      title: 'Meeting Management',
      description: 'Plan AGMs, EGMs, and board meetings with attendance tracking',
      icon: <Calendar className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'ssm-forms',
      title: 'SSM Form Preparation',
      description: 'Prepare and track SSM statutory forms with guided workflows',
      icon: <ClipboardCheck className="w-5 h-5 text-amber-400" />
    }
  ];

  const extendedFeatures = [
    {
      id: 'bo-register',
      title: 'Beneficial Ownership (BO) Compliance',
      description: 'Fully compliant with SSM Beneficial Ownership reporting directives and statutory registers',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'bank-resolutions',
      title: 'Bank Facility Resolution Generator',
      description: 'Standardized templates for CIMB, Maybank, RHB, and Alliance corporate bank accounts',
      icon: <Landmark className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'digital-vault',
      title: 'Certified True Copy (CTC) Vault',
      description: 'Encrypted cloud document locker for instant Section 14, 15, and 17 certificate retrieval',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#0055FF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-400">
            FEATURES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Everything a Malaysian COSEC Firm Needs
          </h2>
          <p className="mt-4 text-sm sm:text-base font-sans text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From statutory registers to SSM filings, every compliance requirement handled in one platform.
          </p>
        </ScrollReveal>

        {/* 6 Feature Cards in 3x2 Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFeatures.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 75}
              className="bg-[#102035] hover:bg-[#132742] p-7 rounded-2xl border border-[#1E3452] hover:border-amber-400/40 transition-all duration-300 shadow-md hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Amber Icon Badge */}
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-base font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-sans text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

          {/* Extended Features when expanded */}
          {showMore && extendedFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-[#102035] hover:bg-[#132742] p-7 rounded-2xl border border-[#1E3452] hover:border-amber-400/40 transition-all duration-300 shadow-md flex flex-col justify-between animate-in fade-in duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-sans text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Features Toggle */}
        <ScrollReveal delay={200} className="mt-12 text-center flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer py-2.5 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95"
          >
            <span>{showMore ? 'View Less Features' : 'View More Features'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
