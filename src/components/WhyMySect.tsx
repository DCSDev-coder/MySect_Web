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
    <section id="why-mysect" className="pt-24 pb-0 bg-[#F7F3EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 sm:mb-20">
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
                {/* Icon Pod */}
                <div className="mb-6">
                  {/* Tilting squircle icon pod in rich dark blue */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-lg shadow-[#0038A8]/25 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#002D88] transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

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

      {/* Multi-Ribbon Corporate Wave: Pure Cream & White Tones */}
      <div className="w-full overflow-hidden leading-none bg-[#F7F3EE] -mb-[1px]" aria-hidden="true">
        <svg
          className="block w-full h-20 sm:h-28 lg:h-36 text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveBackShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EDE6DC" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Layer 1: Warm architectural back contour (Warm cream sand to soft white) */}
          <path
            d="M0,45 C180,15 360,80 540,40 C720,5 900,75 1080,35 C1240,5 1360,65 1440,40 L1440,120 L0,120 Z"
            fill="url(#waveBackShade)"
          />

          {/* Layer 2: Middle fluid ribbon (Translucent white with subtle depth) */}
          <path
            d="M0,65 C220,95 400,25 600,65 C800,100 980,25 1160,60 C1280,85 1380,35 1440,55 L1440,120 L0,120 Z"
            fill="white"
            fillOpacity="0.6"
          />

          {/* Layer 3: Foreground crisp solid white wave flowing into white Pricing section */}
          <path
            d="M0,35 C200,70 380,10 580,48 C780,82 960,18 1160,52 C1280,72 1380,28 1440,38 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
