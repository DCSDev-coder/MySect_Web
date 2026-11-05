import React from 'react';
import { Scale, FileText, CalendarCheck, PieChart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const pillars = [
    {
      id: 'statutory-registers',
      title: 'Statutory Registers',
      description: 'Digital registers for directors, members, secretaries, and charges maintained strictly in accordance with Companies Act 2016.',
      icon: <Scale className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    },
    {
      id: 'board-governance',
      title: 'Board Governance',
      description: 'Circulate, track, and execute Directors Circular Resolutions (DCR) and meeting minutes with legally binding digital e-signatures.',
      icon: <FileText className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    },
    {
      id: 'ssm-lodgements',
      title: 'SSM Lodgements',
      description: 'Prepare annual returns, statutory filings, and notifications of change with guided workflows and proactive deadline alerts.',
      icon: <CalendarCheck className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    },
    {
      id: 'cap-table-vault',
      title: 'Cap Table & Vault',
      description: 'Real-time share capital tracking, beneficial ownership registers, and 24/7 bank-grade encrypted storage for certified true copies.',
      icon: <PieChart className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    }
  ];

  return (
    <section id="why-mysect" className="py-24 bg-[#F7F3EE] border-b border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-full border border-[#0055FF]/20">
            WHY MYSECT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-normal leading-snug">
            Precision Infrastructure for Corporate Compliance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Where deep Malaysian statutory knowledge meets cloud automation. Built specifically for licensed corporate secretarial practices and ambitious enterprises.
          </p>
        </ScrollReveal>

        {/* 4 Separate Spread-Out Cards matching the Reference Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {pillars.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 80}
              className="bg-white p-8 sm:p-9 rounded-2xl sm:rounded-3xl border border-[#E6E0D6] shadow-xs hover:shadow-xl hover:border-[#0055FF]/40 transition-all duration-300 flex flex-col items-center text-center justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Clean Centered Bare Icon matching the Reference Design */}
                <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Centered Title */}
                <h3 className="text-xl font-bold text-[#0B192C] mb-3 tracking-normal group-hover:text-[#0055FF] transition-colors">
                  {item.title}
                </h3>

                {/* Centered Descriptive Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal tracking-normal">
                  {item.description}
                </p>
              </div>

              {/* Clean "Learn More" Outline Button matching the Reference Design */}
              <div className="mt-8 pt-2 w-full flex justify-center">
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-[#D5CEC2] bg-white text-xs font-semibold text-slate-700 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer active:scale-95"
                >
                  Learn More
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
