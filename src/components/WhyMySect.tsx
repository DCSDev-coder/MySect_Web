import React from 'react';
import { Users, Handshake, Smartphone, Workflow, Link2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const satellitePills = [
    {
      id: 'firm-client-views',
      label: 'Connected firm and client views',
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />,
      // Matches lavender/purple pill from slide
      desktopPosition: 'top-2 left-1/2 -translate-x-1/2',
      style: 'bg-[#FAF5FF] border-2 border-[#E9D5FF] text-[#4A154B] hover:border-[#C084FC] hover:shadow-purple-500/15',
      iconBg: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'client-relationships',
      label: 'Supports existing client relationships',
      icon: <Handshake className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />,
      // Matches peach/orange pill from slide
      desktopPosition: 'top-20 right-0 lg:right-4',
      style: 'bg-[#FFF7ED] border-2 border-[#FED7AA] text-[#9A3412] hover:border-[#FB923C] hover:shadow-orange-500/15',
      iconBg: 'bg-orange-100 text-orange-700'
    },
    {
      id: 'mobile-app',
      label: 'Dedicated mobile app',
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />,
      // Matches solid navy/blue pill from slide
      desktopPosition: 'bottom-4 right-0 lg:right-6',
      style: 'bg-[#00227A] border-2 border-[#00227A] text-white hover:bg-[#001B61] hover:shadow-[#00227A]/30 shadow-lg',
      iconBg: 'bg-white/15 text-white'
    },
    {
      id: 'cosec-workflows',
      label: 'Designed around cosec workflows',
      icon: <Workflow className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />,
      // Matches warm yellow pill from slide
      desktopPosition: 'bottom-4 left-0 lg:left-6',
      style: 'bg-[#FEFCE8] border-2 border-[#FEF08A] text-[#854D0E] hover:border-[#FACC15] hover:shadow-amber-500/15',
      iconBg: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'company-records',
      label: 'Requests linked to company records',
      icon: <Link2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />,
      // Matches sky blue pill from slide
      desktopPosition: 'top-20 left-0 lg:left-4',
      style: 'bg-[#F0F9FF] border-2 border-[#BAE6FD] text-[#0369A1] hover:border-[#38BDF8] hover:shadow-sky-500/15',
      iconBg: 'bg-sky-100 text-sky-700'
    }
  ];

  return (
    <section id="why-mysect" className="pt-20 pb-6 sm:pb-10 bg-[#F7F3EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-10">
        
        {/* Subtle Brand Tagline Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E0D6] shadow-2xs mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0038A8] animate-pulse"></span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#0038A8]">
              Always Connected
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A unified collaborative ecosystem built specifically for Malaysian corporate governance.
          </p>
        </ScrollReveal>

        {/* ============================================================ */}
        {/* DESKTOP & TABLET: Interactive Orbital Hub-and-Spoke Constellation */}
        {/* ============================================================ */}
        <div className="hidden md:block relative w-full max-w-4xl lg:max-w-5xl mx-auto h-[500px] lg:h-[540px]">
          {/* Subtle connecting radial spoke lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 540"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Center coordinates: 500, 270 */}
            <line x1="500" y1="270" x2="500" y2="40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="500" y1="270" x2="800" y2="150" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="500" y1="270" x2="790" y2="460" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="500" y1="270" x2="210" y2="460" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="500" y1="270" x2="200" y2="150" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          {/* Central Hub Circle with Dotted Boundary Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-auto">
            {/* Outer subtle glow ring */}
            <div className="absolute -inset-4 rounded-full bg-white/40 blur-md pointer-events-none"></div>

            {/* Main Dotted Orbital Circle */}
            <div className="w-[310px] h-[310px] lg:w-[360px] lg:h-[360px] rounded-full border-2 border-dotted border-slate-400/70 bg-white/95 backdrop-blur-md shadow-xl shadow-slate-900/5 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:border-[#0038A8]/60 hover:shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-black text-[#0B192C] tracking-tight leading-none mb-1">
                Why
              </h2>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0038A8] tracking-tight leading-none mb-3">
                MySect?
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 font-medium leading-relaxed max-w-[220px] lg:max-w-[260px]">
                Connecting cosec and corporate client in one platform.
              </p>
            </div>
          </div>

          {/* 5 Orbiting Satellite Pills */}
          {satellitePills.map((pill) => (
            <div
              key={pill.id}
              className={`absolute ${pill.desktopPosition} z-20 group transition-all duration-300 hover:scale-105 active:scale-95`}
            >
              <div
                className={`inline-flex items-center gap-3 px-6 py-3.5 lg:px-7 lg:py-4 rounded-full shadow-sm cursor-default transition-all duration-300 ${pill.style}`}
              >
                <div className={`p-1.5 rounded-full ${pill.iconBg}`}>
                  {pill.icon}
                </div>
                <span className="font-bold text-sm lg:text-base tracking-normal whitespace-nowrap">
                  {pill.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* MOBILE: Clean Stacked Constellation Layout (< md screens) */}
        {/* ============================================================ */}
        <div className="md:hidden flex flex-col items-center">
          {/* Mobile Center Hub Circle */}
          <div className="w-72 h-72 rounded-full border-2 border-dotted border-slate-400/80 bg-white shadow-lg flex flex-col items-center justify-center p-6 text-center mb-8 relative">
            <h2 className="text-3xl font-black text-[#0B192C] tracking-tight leading-none mb-1">
              Why
            </h2>
            <h2 className="text-3xl font-black text-[#0038A8] tracking-tight leading-none mb-3">
              MySect?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[200px]">
              Connecting cosec and corporate client in one platform.
            </p>
          </div>

          {/* Mobile Satellite Pills List */}
          <div className="w-full max-w-sm space-y-3 px-2">
            {satellitePills.map((pill) => (
              <div
                key={pill.id}
                className={`w-full flex items-center gap-3.5 px-5 py-3.5 rounded-full shadow-xs transition-all active:scale-[0.98] ${pill.style}`}
              >
                <div className={`p-1.5 rounded-full shrink-0 ${pill.iconBg}`}>
                  {pill.icon}
                </div>
                <span className="font-bold text-xs sm:text-sm tracking-normal">
                  {pill.label}
                </span>
              </div>
            ))}
          </div>
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
