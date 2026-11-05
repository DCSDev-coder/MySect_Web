import React from 'react';
import { Award, Building2, Handshake, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const pillars = [
    {
      id: 'compliance',
      step: '01',
      tag: 'SSM COMPLIANT',
      title: 'SSM & Regulatory Compliance',
      description: 'Built strictly for the Companies Act 2016, beneficial ownership rules, and automatic statutory lodgement validations.',
      icon: <Award className="w-7 h-7 stroke-[2]" />
    },
    {
      id: 'centralized-records',
      step: '02',
      tag: 'DIGITAL VAULT',
      title: 'Centralized Company Records',
      description: 'Statutory registers, share allotment histories, and SSM certificate lockers available 24/7 with zero physical file chasing.',
      icon: <Building2 className="w-7 h-7 stroke-[2]" />
    },
    {
      id: 'smooth-process',
      step: '03',
      tag: 'SMART WORKFLOW',
      title: 'Frictionless Board Approvals',
      description: 'Draft, circulate, and sign Directors Circular Resolutions (DCR) digitally with legally binding Malaysian e-signatures.',
      icon: <Handshake className="w-7 h-7 stroke-[2]" />
    },
    {
      id: 'collaboration',
      step: '04',
      tag: 'COLLABORATIVE',
      title: 'Secretary & Client Portal',
      description: 'A shared collaborative command centre connecting company founders, management, and licensed corporate secretaries.',
      icon: <Users className="w-7 h-7 stroke-[2]" />
    }
  ];

  return (
    <section id="why-mysect" className="py-24 bg-[#F7F3EE] border-b border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0038A8] mb-3">
            WHY MYSECT
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-normal leading-snug">
            Precision Infrastructure for Corporate Compliance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Where deep Malaysian statutory knowledge meets modern cloud technology. Purpose-built for corporate secretarial practices and growing enterprises.
          </p>
        </ScrollReveal>

        {/* 4 Alternating Bento Cards for Rich Variation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => {
            const isFlipped = idx % 2 === 1; // Alternating variation!
            return (
              <ScrollReveal
                key={item.id}
                delay={idx * 80}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6E0D6] shadow-xs hover:shadow-2xl hover:shadow-slate-900/10 hover:border-[#0038A8] transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
              >
                <div
                  className={`flex flex-col sm:flex-row items-start ${
                    isFlipped ? 'sm:flex-row-reverse' : ''
                  } gap-6 justify-between`}
                >
                  {/* Box Column: Tilting squircle icon pod + Step watermark */}
                  <div
                    className={`flex sm:flex-col items-center sm:items-start justify-between w-full sm:w-auto shrink-0 ${
                      isFlipped ? 'sm:items-end' : ''
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-lg shadow-[#0038A8]/25 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#002D88] transition-all duration-300">
                      {item.icon}
                    </div>

                    <span className="font-mono text-3xl font-black text-slate-200 group-hover:text-[#0038A8]/30 transition-colors select-none mt-4 hidden sm:block">
                      {item.step}
                    </span>
                  </div>

                  {/* Text Content Column: Tag, Title, Description */}
                  <div className="flex-1">
                    {/* Top Row on mobile: Tag + Step watermark */}
                    <div className="flex items-center justify-between sm:justify-start gap-2 mb-3">
                      <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider text-[#0038A8] bg-[#0038A8]/10 px-2.5 py-0.5 rounded-full border border-[#0038A8]/20">
                        {item.tag}
                      </span>
                      <span className="font-mono text-base font-bold text-slate-300 sm:hidden">
                        {item.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0B192C] mb-2.5 tracking-normal group-hover:text-[#0038A8] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal tracking-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
