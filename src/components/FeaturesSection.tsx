import React from 'react';
import {
  FolderArchive,
  Stamp,
  Bot,
  ShieldCheck,
  PenLine,
  Bell
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FeaturesSection: React.FC = () => {
  // 6 Clear, User-Friendly Features
  const features = [
    {
      id: 'store-documents',
      title: 'Upload, View & Store Documents',
      description: 'Easily upload, view, and organize all your company certificates, statutory registers, and official records in one place.',
      icon: <FolderArchive className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'stamping',
      title: 'Request Document Stamping',
      description: 'Ask for certified true copy (CTC) endorsements and official document stamping with your licensed secretary in just a few clicks.',
      icon: <Stamp className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'ai-assistant',
      title: 'Chat with AI Document Assistant',
      description: 'Chat with a smart AI chatbot that can read, analyze, and instantly answer questions about your uploaded company documents.',
      icon: <Bot className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'security',
      title: 'Safe & Secure Storage',
      description: 'Your confidential company documents are kept safely with bank-grade encryption, privacy controls, and 24/7 protected access.',
      icon: <ShieldCheck className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'digital-signing',
      title: 'Digital Resolutions & E-Signing',
      description: 'Review, circulate, and sign board resolutions (DCR) digitally from any device without printing, scanning, or courier delays.',
      icon: <PenLine className="w-5 h-5 stroke-[2] text-white" />
    },
    {
      id: 'tracking-alerts',
      title: 'Real-Time Tracking & Alerts',
      description: 'Track the status of your requests and receive automated deadline reminders for annual returns and statutory compliance.',
      icon: <Bell className="w-5 h-5 stroke-[2] text-white" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0B192C] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white mb-3">
            FEATURES
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-normal leading-snug">
            Simple, Powerful Tools for Your Company Matters
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto tracking-normal">
            From uploading files and asking for stamping to chatting with our smart AI assistant—everything is organized and kept securely in one place.
          </p>
        </ScrollReveal>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="scale-up"
              delay={idx * 50}
              className="bg-[#102035] hover:bg-[#132742] active:scale-[0.98] p-7 rounded-2xl border border-[#1E3452] hover:border-[#0038A8]/60 transition-all duration-300 shadow-md hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Blue Icon Badge */}
                <div className="mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0038A8] text-white flex items-center justify-center shadow-md shadow-[#0038A8]/20 group-hover:scale-110 group-hover:bg-[#002D88] transition-all">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 tracking-normal transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal tracking-normal">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
