import React from 'react';
import { Award, Building2, Handshake, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const pillars = [
    {
      id: 'compliance',
      title: 'SSM & Regulatory Compliance',
      description: 'Built strictly for the Companies Act 2016, beneficial ownership guidelines, and Malaysian statutory standards.',
      icon: <Award className="w-6 h-6 stroke-[2]" />
    },
    {
      id: 'centralized-records',
      title: 'Centralized Company Records',
      description: 'All statutory registers, share allotment histories, and SSM certificates organized in one audit-ready digital locker.',
      icon: <Building2 className="w-6 h-6 stroke-[2]" />
    },
    {
      id: 'smooth-process',
      title: 'Frictionless Board Approvals',
      description: 'Draft, circulate, and sign Directors Circular Resolutions (DCR) digitally with zero physical paperwork delays.',
      icon: <Handshake className="w-6 h-6 stroke-[2]" />
    },
    {
      id: 'collaboration',
      title: 'Secretary & Client Portal',
      description: 'Seamless 24/7 collaboration connecting company founders, management teams, and licensed secretarial firms.',
      icon: <Users className="w-6 h-6 stroke-[2]" />
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
            Where deep Malaysian statutory knowledge meets modern cloud technology. Purpose-built for corporate secretarial practices and growing enterprises.
          </p>
        </ScrollReveal>

        {/* 4 Clean Columns with Side Dividing Lines (No Card Background) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 75}
              className="px-6 sm:px-8 py-8 lg:py-6 flex flex-col items-center text-center group border-b md:border-b-0 border-[#E2D9CC] last:border-b-0 md:even:border-l md:even:border-[#E2D9CC] md:[&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-[#E2D9CC] lg:even:border-l-0 lg:[&:nth-child(-n+2)]:border-b-0 lg:border-r lg:border-[#E2D9CC] lg:last:border-r-0"
            >
              {/* Soft Light-Blue Circular Icon Badge matching Image */}
              <div className="w-14 h-14 rounded-full bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-5 group-hover:bg-[#0055FF] group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-2xs">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-2.5 tracking-normal group-hover:text-[#0055FF] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal tracking-normal max-w-xs">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
