import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface HeroProps {
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FAF7F2]">
      {/* Background architectural visual subtle overlay matching corporate look from Image 3 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#14181F_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Soft warm gradient highlights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0055FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge: Unified pill with electric blue indicator dot in Roboto Mono */}
        <div className="inline-flex items-center justify-center mb-8 animate-hero-1">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-[#D5CEC2] bg-white/80 text-slate-800 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] animate-pulse"></span>
            <span>IN DEVELOPMENT</span>
          </span>
        </div>

        {/* Main Headline: Inter with comfortable letter-spacing */}
        <div className="max-w-4xl mx-auto space-y-5 animate-hero-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-normal leading-[1.18] text-[#14181F]">
            Company matters.{' '}
            <span className="italic font-normal text-[#14181F] block sm:inline">
              Made simpler.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2 font-normal tracking-normal">
            The intelligent corporate governance platform connecting Malaysian businesses and licensed corporate secretaries. Streamline statutory registers, board approvals, and SSM compliance effortlessly.
          </p>
        </div>

        {/* Action Buttons with opening animation */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-hero-3">
          {/* Main Action: Directly opens WhatsApp contact */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0055FF]/25 hover:shadow-xl hover:shadow-[#0055FF]/35 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Register your interest</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Action: Meet MySect (Video) */}
          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-[#F3EFE8] text-slate-900 border border-[#D5CEC2] font-semibold text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <Play className="w-3 h-3 fill-white ml-0.5" />
            </div>
            <span>Meet MySect</span>
          </button>
        </div>

        {/* Powered by TM badge only in Roboto Mono */}
        <div className="mt-14 pt-8 border-t border-[#E6E0D6] flex items-center justify-center animate-hero-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase">
            powered by tm
          </span>
        </div>
      </div>
    </section>
  );
};
