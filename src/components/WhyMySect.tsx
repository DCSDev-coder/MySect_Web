import React from 'react';
import { Scale, BookOpen, Sparkles, Globe, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyMySect: React.FC = () => {
  const whyCards = [
    {
      id: 'act2016',
      title: 'Companies Act 2016 Ready',
      description: 'Every feature aligns with Malaysian statutory requirements. Registers, resolutions, and filings follow the exact format SSM expects.',
      icon: <Scale className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'records',
      title: 'Complete Statutory Records',
      description: 'Digital registers for directors, shareholders, secretaries, charges, and constitutions — all in one place, audit-ready.',
      icon: <BookOpen className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'ai-drafting',
      title: 'AI-Powered Drafting',
      description: 'Generate resolutions, correspondence, and compliance documents in seconds. Smart suggestions keep you ahead of deadlines.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'client-portal',
      title: 'Client Portal',
      description: 'Give your clients a professional, branded portal. They can view company status, track progress, and access documents 24/7.',
      icon: <Globe className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'ssm-workflow',
      title: 'SSM Filing Workflow',
      description: 'Prepare forms, track submissions, and manage annual returns with guided checklists. Never miss a filing again.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'visibility',
      title: 'Instant Visibility',
      description: 'One dashboard shows every deadline, task, company, and team member. Know exactly where every company stands.',
      icon: <Zap className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="why-mysect" className="py-24 bg-[#F7F3EE] border-b border-[#E6E0D6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600">
            WHY MYSECT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight leading-tight">
            Not Just Another Admin Tool
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            MySect is the only platform purpose-built for Malaysian Company Secretaries. Deep regulatory knowledge meets modern technology.
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

                <h3 className="text-base font-bold text-[#0B192C] mb-2 group-hover:text-[#0055FF] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
