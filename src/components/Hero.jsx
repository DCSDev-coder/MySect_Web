import React from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Hero = ({ onOpenVideo }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center items-center pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Background architectural visual subtle overlay matching corporate look from Image 3 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#14181F_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center my-auto">
        {/* Top Eyebrow: Straight rounded pill badge with stamp-down impact */}
        <div className="inline-flex items-center justify-center mb-6 sm:mb-8 animate-stamp select-none">
          <div className="inline-flex items-center justify-center px-4 sm:px-5 py-1 sm:py-1.5 border border-slate-400/80 rounded-full bg-transparent">
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#14181F]">
              IN DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Main Headline: Smooth staggered entrance with icon sparkle pop */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-normal leading-[1.18] text-[#14181F]">
            <span className="block animate-hero-1">Company matters,</span>
            <span className="italic font-normal text-[#14181F] inline-flex items-center align-baseline mt-1 sm:mt-2 animate-hero-2">
              <span>Made simpler.</span>
              <img
                src="/verified_document_icon.png"
                alt="Verified Document"
                className="inline-block w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain ml-2 sm:ml-3.5 align-middle select-none animate-icon-pop transition-transform hover:scale-105"
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2 font-normal tracking-normal animate-hero-3">
            The intelligent corporate governance platform connecting Malaysian businesses and licensed corporate secretaries. Streamline statutory registers, board approvals and SSM compliance effortlessly.
          </p>
        </div>

        {/* Action Buttons with opening animation */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-hero-4 w-full sm:w-auto">
          {/* Main Action: Directly opens WhatsApp contact */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0038A8]/25 hover:shadow-xl hover:shadow-[#0038A8]/35 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Register your interest</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Action: Meet MySect (Video) */}
          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto h-12 px-6 rounded-full bg-white hover:bg-[#F3EFE8] text-slate-900 border border-[#D5CEC2] font-semibold text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
            </div>
            <span>Meet MySect</span>
          </button>
        </div>

        {/* Redesigned line & Powered by TM badge (commented out) */}
        {/*
        <div className="mt-10 sm:mt-14 w-full max-w-xs sm:max-w-md mx-auto flex flex-col items-center animate-hero-4">
          <div className="relative w-full flex items-center justify-center mb-6 sm:mb-7">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D5CEC2] to-transparent" />
            <div className="absolute w-1.5 h-1.5 rotate-45 bg-[#D5CEC2] border border-[#FAF7F2]" />
          </div>

          <div className="inline-flex items-center gap-2 text-slate-500">
            <Zap className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase">
              powered by tm
            </span>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};
