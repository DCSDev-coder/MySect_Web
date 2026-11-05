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
    <section id="why-mysect" className="py-24 bg-[#F7F3EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 4 Clean Interactive Bento Cards with Spring Pop Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="pop-spring"
              delay={idx * 70}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6E0D6] shadow-xs hover:shadow-2xl hover:shadow-slate-900/10 hover:border-[#0038A8] active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              <div>
                {/* Top Row: Icon Pod + Step Number */}
                <div className="flex items-center justify-between mb-6">
                  {/* Tilting squircle icon pod in rich dark blue */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-lg shadow-[#0038A8]/25 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#002D88] transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Step Watermark */}
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-[#0038A8] transition-colors select-none">
                    {item.step}
                  </span>
                </div>

                {/* Category Micro-Tag */}
                <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider text-[#0038A8] bg-[#0038A8]/10 px-2.5 py-0.5 rounded-full border border-[#0038A8]/20 mb-3">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B192C] mb-2.5 tracking-normal group-hover:text-[#0038A8] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal tracking-normal">
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
