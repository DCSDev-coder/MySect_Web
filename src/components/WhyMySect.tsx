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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 2x2 Bento Box Grid of Cards (Moved to the Left) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((item, idx) => (
                <ScrollReveal
                  key={item.id}
                  delay={idx * 70}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E0D6] shadow-xs hover:shadow-2xl hover:shadow-slate-900/10 hover:border-[#0038A8] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
                >
                  <div>
                    {/* Top Row: Icon Pod + Step Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-md shadow-[#0038A8]/20 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#002D88] transition-all duration-300">
                        {item.icon}
                      </div>

                      <span className="font-mono text-xl font-black text-slate-300 group-hover:text-[#0038A8] transition-colors select-none">
                        {item.step}
                      </span>
                    </div>

                    {/* Category Micro-Tag */}
                    <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider text-[#0038A8] bg-[#0038A8]/10 px-2.5 py-0.5 rounded-full border border-[#0038A8]/20 mb-2.5">
                      {item.tag}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-2 tracking-normal group-hover:text-[#0038A8] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal tracking-normal">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Section Text (Moved to the Right) */}
          <ScrollReveal className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0038A8] mb-3">
                WHY MYSECT
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-normal leading-tight">
                Precision Infrastructure for Corporate Compliance
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal tracking-normal">
                Where deep Malaysian statutory knowledge meets modern cloud technology. Purpose-built for corporate secretarial practices and growing enterprises.
              </p>
            </div>

            {/* Core Value Pillars */}
            <div className="pt-6 space-y-3.5 border-t border-[#E6E0D6] text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0038A8] shrink-0" />
                <span className="font-medium">100% Companies Act 2016 statutory alignment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0038A8] shrink-0" />
                <span className="font-medium">Direct lodgement pre-population for SSM forms</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0038A8] shrink-0" />
                <span className="font-medium">Encrypted digital vault for certified true copies</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
