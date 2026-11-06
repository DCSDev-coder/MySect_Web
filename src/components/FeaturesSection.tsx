import React from 'react';
import {
  UserCheck,
  PieChart,
  BookMarked,
  FileCheck,
  CalendarRange,
  FileSpreadsheet
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FeaturesSection: React.FC = () => {
  // 6 Actual MySect Core Features
  const features = [
    {
      id: 'officers',
      title: 'Directorship & Officer Records',
      description: 'Maintain complete officer appointment histories, statutory qualification screening, and cessation records under Section 196.',
      icon: <UserCheck className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'shareholders',
      title: 'Dynamic Capital & Cap Table',
      description: 'Real-time cap table visibility, share allotments (Section 78), transfers (Section 105), and paid-up capital tracking.',
      icon: <PieChart className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'registers',
      title: 'Digital Registers & Beneficial Ownership',
      description: 'Automated Register of Members (Section 50), Register of Charges (Section 352), and latest SSM Beneficial Ownership registers.',
      icon: <BookMarked className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'resolutions',
      title: 'Board Resolution Engine',
      description: 'Draft, circulate, and sign Directors Circular Resolutions (DCR) with legally binding e-signatures under the Digital Signature Act 1997.',
      icon: <FileCheck className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'meetings',
      title: 'AGM & Minute Book Orchestration',
      description: 'Automate notice circulation, proxy tracking, minute book archiving, and statutory AGM compliance calendars.',
      icon: <CalendarRange className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'ssm-forms',
      title: 'Automated Statutory Lodgements',
      description: 'Pre-populate Sections 14, 15, 17, 68, and 78 forms automatically without duplicate data re-entry or formatting errors.',
      icon: <FileSpreadsheet className="w-5 h-5 stroke-[2] text-white" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0B192C] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-3">
            FEATURES
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-normal leading-snug">
            The Operating System for Malaysian Corporate Governance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Unified statutory registers, board governance, and SSM compliance workflows engineered for forward-thinking Malaysian firms.
          </p>
        </ScrollReveal>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="scale-up"
              delay={idx * 50}
              className="bg-[#102035] hover:bg-[#132742] active:scale-[0.98] p-7 rounded-2xl border border-[#1E3452] hover:border-[#0038A8]/60 transition-all duration-300 shadow-md hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Blue Icon Badge */}
                <div className="mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0038A8] text-white flex items-center justify-center shadow-md shadow-[#0038A8]/20 group-hover:scale-110 group-hover:bg-[#002D88] transition-all">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 tracking-normal transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal tracking-normal">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
