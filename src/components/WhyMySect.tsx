import React from 'react';
import { Users, Workflow, Smartphone } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const pillars = [
    {
      id: 'firm-client-views',
      title: 'Connected Firm and Client Views',
      description: 'Shared, role-tailored interfaces providing seamless real-time visibility for both licensed secretarial firms and corporate clients.',
      icon: <Users className="w-7 h-7 stroke-[2]" />
    },
    {
      id: 'cosec-workflows',
      title: 'Designed Around Cosec Workflows',
      description: 'Purpose-built to mirror Malaysian secretarial practices, Companies Act 2016 lodgements, and statutory compliance lifecycles.',
      icon: <Workflow className="w-7 h-7 stroke-[2]" />
    },
    {
      id: 'dedicated-mobile-app',
      title: 'Dedicated Mobile App',
      description: 'Native mobile access for company directors and secretaries to review resolutions, track compliance status, and approve documents on the go.',
      icon: <Smartphone className="w-7 h-7 stroke-[2]" />
    }
  ];

  return (
    <section id="why-mysect" className="pt-24 pb-0 bg-[#F7F3EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 sm:mb-20">
        {/* Section Header with Scroll Reveal matching slide */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0038A8] mb-3">
            WHY MYSECT
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-normal leading-snug">
            Connecting cosec and corporate client in one platform.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Where deep Malaysian statutory knowledge meets modern cloud technology. Purpose-built to keep licensed corporate secretaries and company directors always connected.
          </p>
        </ScrollReveal>

        {/* 3 Clean Interactive Bento Cards with Spring Pop Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="pop-spring"
              delay={idx * 80}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6E0D6] shadow-xs hover:shadow-2xl hover:shadow-slate-900/10 hover:border-[#0038A8] active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              <div>
                {/* Icon Pod */}
                <div className="mb-6">
                  {/* Tilting squircle icon pod in rich corporate blue */}
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

      {/* Animated Multi-Ribbon Corporate Wave: Pure Cream & White Tones */}
      <div className="w-full overflow-hidden leading-none bg-[#F7F3EE] -mb-[1px]" aria-hidden="true">
        <svg
          className="block w-[calc(100%+120px)] -ml-[60px] h-20 sm:h-28 lg:h-36 text-white"
          viewBox="-60 0 1560 120"
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

          {/* Layer 1: Warm architectural back contour (Slow gentle sway) */}
          <g className="animate-wave-slow">
            <path
              d="M-60,45 C180,15 360,80 540,40 C720,5 900,75 1080,35 C1240,5 1360,65 1500,40 L1500,120 L-60,120 Z"
              fill="url(#waveBackShade)"
            />
          </g>

          {/* Layer 2: Middle fluid ribbon (Counter-flowing translucent wave) */}
          <g className="animate-wave-medium">
            <path
              d="M-60,65 C220,95 400,25 600,65 C800,100 980,25 1160,60 C1280,85 1380,35 1500,55 L1500,120 L-60,120 Z"
              fill="white"
              fillOpacity="0.6"
            />
          </g>

          {/* Layer 3: Foreground crisp solid white wave (Subtle surface ripple) */}
          <g className="animate-wave-fast">
            <path
              d="M-60,35 C200,70 380,10 580,48 C780,82 960,18 1160,52 C1280,72 1380,28 1500,38 L1500,120 L-60,120 Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};
