import React from 'react';
import { Star, Building } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const bankPartners = [
    { name: 'CIMB Bank', badge: 'Fast-track BizChannel' },
    { name: 'Maybank', badge: 'Maybank2u Biz Partner' },
    { name: 'RHB Bank', badge: 'Reflex Corporate' },
    { name: 'Alliance Bank', badge: 'BizSmart Preferred' },
    { name: 'GXBank', badge: 'Digital Business Banking' }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banking Partner strip */}
        <div className="mb-20 pb-16 border-b border-slate-200">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8">
            Fast-Track Corporate Bank Account Opening With Preferred Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {bankPartners.map((bank, bIdx) => (
              <div 
                key={bIdx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="w-6 h-6 rounded bg-indigo-600/10 text-indigo-700 flex items-center justify-center font-bold text-xs">
                  <Building className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-xs text-slate-800">{bank.name}</p>
                  <p className="text-[10px] text-slate-500">{bank.badge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/80">
            Trusted by Malaysian Entrepreneurs
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for modern founders, trusted by 1,200+ companies
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Hear why startups and SMEs across Kuala Lumpur, Penang, and Johor Bahru run their compliance on MySect.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#0055FF] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0055FF]" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="mb-4 inline-block px-2.5 py-1 rounded-md bg-indigo-100/70 text-indigo-800 text-[11px] font-bold">
                  {item.highlight}
                </div>

                {/* Quote Content */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.role}</p>
                  <p className="text-[10px] font-semibold text-indigo-600">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
