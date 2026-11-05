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
        {/* Top Badges matching Image 1 & 2 */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#D5CEC2] bg-white/70 text-slate-700 shadow-2xs">
            IN DEVELOPMENT
          </span>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#0055FF]/20 bg-[#0055FF]/5 text-[#0055FF] shadow-2xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] animate-pulse"></span>
            PURPOSE-BUILT FOR MALAYSIAN COSEC FIRMS
          </span>
        </div>

        {/* Main Headline combining Image 1, 2, and 3 */}
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#14181F] tracking-tight leading-[1.08]">
            Company matters.{' '}
            <span className="font-editorial font-normal inline-flex items-center gap-2 text-[#14181F]">
              Made simpler.
              {/* Custom SVG Document with Blue Checkmark matching Image 2 */}
              <svg 
                className="w-8 h-8 sm:w-11 sm:h-11 inline-block text-[#0055FF] stroke-current shrink-0 -translate-y-1" 
                viewBox="0 0 36 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 8C4 5.79086 5.79086 4 8 4H20L28 12V32C28 34.2091 26.2091 36 24 36H8C5.79086 36 4 34.2091 4 32V8Z" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path d="M20 4V12H28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22L16 26L22 18" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 10L35 8" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 18L36 18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0055FF] tracking-tight pt-2">
            Your COSEC Command Centre
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2 font-normal">
            The complete company secretarial platform. Manage compliance, statutory records, and filings in one powerful system. Connecting companies and their company secretaries.
          </p>
        </div>

        {/* Actions matching Image 2 & 1 */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Main Action: Directly opens WhatsApp contact (No options popup) */}
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

        {/* Powered by TM badge only */}
        <div className="mt-14 pt-8 border-t border-[#E6E0D6] flex items-center justify-center">
          <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
            powered by tm
          </span>
        </div>
      </div>
    </section>
  );
};
