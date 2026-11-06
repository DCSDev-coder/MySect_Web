import React from 'react';
import { 
  Building2, 
  FileCheck, 
  MapPin, 
  Calculator, 
  ShieldAlert, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/content';



export const Services = ({ onOpenConsultation }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-indigo-600" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-sky-600" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-600" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-violet-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#0038A8]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-rose-600" />;
      default: return <Building2 className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            End-to-End Corporate Solutions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything your Malaysian business needs to stay compliant
          </h2>
          <p className="mt-4 text-base text-slate-600">
            From your first SSM certificate of incorporation to yearly annual filings, board meetings, and bookkeeping.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-200/50 px-2.5 py-1 rounded-md">
                    Companies Act 2016
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 mt-1">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-200/60 text-xs">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-200/40">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
