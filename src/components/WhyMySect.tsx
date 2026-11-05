import React from 'react';
import { TrendingUp, Zap, Lightbulb, PieChart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const pillars = [
    {
      id: 'growth',
      title: 'Growth',
      description: 'Scale your secretarial practice or corporate group effortlessly. Manage hundreds of client entities without operational bottlenecks.',
      icon: <TrendingUp className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    },
    {
      id: 'efficiency',
      title: 'Efficiency',
      description: 'Eliminate repetitive paperwork with automated board circulars, instant statutory register updates, and pre-populated SSM filings.',
      icon: <Zap className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Intelligent document drafting, automated annual return countdowns, and legally binding digital signatures under Malaysian law.',
      icon: <Lightbulb className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    },
    {
      id: 'analysis',
      title: 'Analysis',
      description: 'Real-time cap table visibility, predictive compliance tracking, and bank-grade vault records ready for auditor inspection.',
      icon: <PieChart className="w-12 h-12 stroke-[1.6] text-[#0055FF]" />
    }
  ];

  return (
    <section id="why-mysect" className="py-24 bg-[#F7F3EE] border-b border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-full border border-[#0055FF]/20">
            OUR STRATEGIC FOCUS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-normal leading-snug">
            Precision Infrastructure for Corporate Compliance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Where deep Malaysian statutory knowledge meets cloud automation. Built specifically for licensed corporate secretarial practices and ambitious enterprises.
          </p>
        </ScrollReveal>

        {/* 4 Focus Columns matching Image 2 Layout */}
        <ScrollReveal delay={100} className="bg-white rounded-3xl border border-[#E6E0D6] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEAE2]">
            {pillars.map((item) => (
              <div
                key={item.id}
                className="p-8 sm:p-10 flex flex-col items-center text-center justify-between group hover:bg-[#FAF7F2]/60 transition-colors duration-300"
              >
                <div>
                  {/* Clean Centered Icon matching Image 2 */}
                  <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Centered Title */}
                  <h3 className="text-xl font-bold text-[#0B192C] mb-3 tracking-normal group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Centered Descriptive Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal tracking-normal">
                    {item.description}
                  </p>
                </div>

                {/* Clean "Learn More" Outline Button matching Image 2 */}
                <div className="mt-8 pt-2 w-full flex justify-center">
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-[#D5CEC2] bg-white text-xs font-semibold text-slate-700 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer active:scale-95"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
