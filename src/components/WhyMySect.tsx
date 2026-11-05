import React from 'react';
import { Scale, FileCheck2, Sparkles, LayoutDashboard, Clock, Building2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const whyCards = [
    {
      id: 'statutory-alignment',
      title: 'Strict Companies Act 2016 Alignment',
      description: 'Every register, resolution, and certificate is programmed to the exact statutory formats mandated by the Companies Commission of Malaysia (SSM).',
      icon: <Scale className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'audit-vault',
      title: 'Tamper-Proof Audit Vault',
      description: 'All statutory records, board circulars, and official certifications are archived with time-stamped audit trails, immediately ready for auditor inspection.',
      icon: <FileCheck2 className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'smart-drafting',
      title: 'Intelligent Document Drafting',
      description: 'Draft complex board resolutions, officer change filings, and custom shareholder correspondence in minutes with pre-validated templates.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'board-workspace',
      title: 'Dedicated Board & Client Workspace',
      description: 'Provide company directors, management, and investors with a modern portal to monitor compliance status and review records 24/7.',
      icon: <LayoutDashboard className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'deadline-guardian',
      title: 'Predictive Compliance Deadlines',
      description: 'Automated countdown alerts for Annual Returns (Section 68) and Financial Statements ensure your companies never incur late lodgement penalties.',
      icon: <Clock className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'portfolio-management',
      title: 'Multi-Company Portfolio View',
      description: 'Manage 10 or 1,000+ client entities from a single pane of glass. Track pending board approvals and regulatory milestones with zero friction.',
      icon: <Building2 className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="why-mysect" className="py-24 bg-[#F7F3EE] border-b border-[#E6E0D6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-full border border-[#0055FF]/20">
            WHY MYSECT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-normal leading-snug">
            Precision Infrastructure for Corporate Compliance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Where deep Malaysian statutory knowledge meets cloud automation. Built specifically for licensed corporate secretarial practices and ambitious enterprises.
          </p>
        </ScrollReveal>

        {/* 6 Cards in 3x2 Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((card, idx) => (
            <ScrollReveal
              key={card.id}
              delay={idx * 75}
              className="bg-white p-7 rounded-2xl border border-[#E6E0D6] shadow-sm hover:shadow-md hover:border-[#D5CEC2] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Dark Navy Icon Box with Amber Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#0B192C] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                  {card.icon}
                </div>

                <h3 className="text-base font-bold text-[#0B192C] mb-2.5 tracking-normal group-hover:text-[#0055FF] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal tracking-normal">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
