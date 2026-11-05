import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface HeroProps {
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo }) => {
  const fullText = 'Made simpler.';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === fullText) {
      // Completed typing: hold for 2.6 seconds so user reads it comfortably
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
    } else if (isDeleting && displayedText === '') {
      // Completed deleting: short breath before typing starts from 'M'
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 450);
    } else {
      // Natural typing (105ms) vs deletion (45ms)
      const speed = isDeleting ? 45 : 105;
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? fullText.slice(0, displayedText.length - 1)
          : fullText.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);
  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center items-center pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Background architectural visual subtle overlay matching corporate look from Image 3 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#14181F_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center my-auto">
        {/* Top Eyebrow: Pure minimalist unboxed typography */}
        <div className="inline-flex items-center justify-center mb-6 sm:mb-8 animate-hero-1">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
            IN DEVELOPMENT
          </span>
        </div>

        {/* Main Headline: Inter with comfortable letter-spacing */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 animate-hero-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-normal leading-[1.18] text-[#14181F]">
            Company matters.{' '}
            <span className="italic font-normal text-[#14181F] inline-block">
              <span>{displayedText}</span>
              <span
                className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#14181F] ml-1.5 align-baseline animate-cursor"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2 font-normal tracking-normal">
            The intelligent corporate governance platform connecting Malaysian businesses and licensed corporate secretaries. Streamline statutory registers, board approvals, and SSM compliance effortlessly.
          </p>
        </div>

        {/* Action Buttons with opening animation */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-hero-3 w-full sm:w-auto">
          {/* Main Action: Directly opens WhatsApp contact */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0038A8]/25 hover:shadow-xl hover:shadow-[#0038A8]/35 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
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

        {/* Powered by TM badge in Roboto Mono */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#E6E0D6] flex items-center justify-center animate-hero-4 w-full max-w-xs sm:max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 text-slate-500">
            <Zap className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase">
              powered by tm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
