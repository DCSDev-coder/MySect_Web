import React from 'react';
import { Award, Building2, Handshake, Users, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const pillars = [
    {
      id: 'compliance',
      step: '01',
      tag: 'SSM COMPLIANT',
      title: 'SSM & Regulatory Compliance',
      description: 'Built strictly for the Companies Act 2016, beneficial ownership rules, and automatic statutory lodgement validations.',
      icon: <Award className="w-7 h-7 stroke-[2]" />,
      funBadge: '✓ 100% Act 2016 Ready'
    },
    {
      id: 'centralized-records',
      step: '02',
      tag: 'DIGITAL VAULT',
      title: 'Centralized Company Records',
      description: 'Statutory registers, share allotment histories, and SSM certificate lockers available 24/7 with zero physical file chasing.',
      icon: <Building2 className="w-7 h-7 stroke-[2]" />,
      funBadge: 'Instant Document Vault'
    },
    {
      id: 'smooth-process',
      step: '03',
      tag: 'SMART WORKFLOW',
      title: 'Frictionless Board Approvals',
      description: 'Draft, circulate, and sign Directors Circular Resolutions (DCR) digitally with legally binding Malaysian e-signatures.',
      icon: <Handshake className="w-7 h-7 stroke-[2]" />,
      funBadge: '4x Faster Sign-Offs'
    },
    {
      id: 'collaboration',
      step: '04',
      tag: 'COLLABORATIVE',
      title: 'Secretary & Client Portal',
      description: 'A shared collaborative command centre connecting company founders, management, and licensed corporate secretaries.',
      icon: <Users className="w-7 h-7 stroke-[2]" />,
      funBadge: '24/7 Multi-User Sync'
    }
  ];

  return (
    <section id="why-mysect" className="py-24 bg-[#F7F3EE] border-b border-[#E6E0D6] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0055FF] mb-3">
            WHY MYSECT
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-normal leading-snug">
            Precision Infrastructure for Corporate Compliance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Where deep Malaysian statutory knowledge meets modern cloud technology. Purpose-built for corporate secretarial practices and growing enterprises.
          </p>
        </ScrollReveal>

        {/* 4 Fun Interactive Floating Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 80}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6E0D6] shadow-xs hover:shadow-2xl hover:shadow-[#0055FF]/15 hover:border-[#0055FF]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover gradient wash */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0055FF]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

              <div>
                {/* Top Row: Playful Icon Pod + Step Number */}
                <div className="flex items-center justify-between mb-6">
                  {/* Playful tilting squircle icon pod */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0055FF] text-white flex items-center justify-center shadow-lg shadow-[#0055FF]/25 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#0045D8] transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Step Watermark */}
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-[#0055FF] transition-colors select-none">
                    {item.step}
                  </span>
                </div>

                {/* Category Micro-Tag */}
                <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-0.5 rounded-full border border-[#0055FF]/20 mb-3">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B192C] mb-2.5 tracking-normal group-hover:text-[#0055FF] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal tracking-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Fun Micro-Badge */}
              <div className="mt-8 pt-4 border-t border-[#F0EAE1] w-full flex items-center justify-start">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#0055FF] bg-[#0055FF]/5 px-3 py-1 rounded-full border border-[#0055FF]/15 group-hover:bg-[#0055FF] group-hover:text-white transition-all duration-300">
                  <Sparkles className="w-3 h-3" />
                  <span>{item.funBadge}</span>
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
