import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subjectEncoded = encodeURIComponent(formData.subject || 'MySect Inquiry');
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:${SITE_CONFIG.contactEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] border-t border-[#E6E0D6] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0055FF]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info (NO Cards, just clean text & icons matching Image 2) */}
          <ScrollReveal className="lg:col-span-5 space-y-8 lg:pt-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-full border border-[#0055FF]/20">
                WE'RE HERE TO HELP YOU
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14181F] tracking-normal leading-tight">
                Discuss Your Company Matters
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal tracking-normal max-w-md">
                Are you looking for streamlined secretarial solutions tailored to your company's compliance needs? Reach out to us.
              </p>
            </div>

            {/* Direct Email & Phone Number (Seamless, No Card Background) */}
            <div className="space-y-6 pt-2 font-sans">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0055FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0055FF]/25 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">E-mail</p>
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="text-base sm:text-lg font-bold text-[#14181F] hover:text-[#0055FF] transition-colors"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              {/* Phone number */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0055FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0055FF]/25 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Phone number</p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-[#14181F] hover:text-[#0055FF] transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Details Form on an Elevated Card matching Image 2 */}
          <ScrollReveal delay={150} className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E2D9CC] shadow-xl shadow-slate-900/5 relative">
            <h3 className="text-2xl font-bold text-[#14181F] mb-1">Send a Message</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 font-normal">
              Fill in your inquiry below. Our secretarial team will review and respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
              <div>
                <label className="block font-semibold text-slate-700 text-xs mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jason Lee"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2]/60 border border-[#D5CEC2] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] focus:bg-white text-slate-900 placeholder-slate-400 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 text-xs mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jason@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2]/60 border border-[#D5CEC2] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] focus:bg-white text-slate-900 placeholder-slate-400 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 text-xs mb-2">
                  Subject / Inquiry Type
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Corporate Secretarial Retainer"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2]/60 border border-[#D5CEC2] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] focus:bg-white text-slate-900 placeholder-slate-400 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 text-xs mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your company, current secretarial setup, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2]/60 border border-[#D5CEC2] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] focus:bg-white text-slate-900 placeholder-slate-400 transition-all leading-relaxed text-sm"
                ></textarea>
              </div>

              {/* Submit Pill Button matching Image 2 */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0055FF]/25 hover:shadow-xl transition-all cursor-pointer active:scale-95"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#0055FF] flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>Send Message</span>
                </button>
              </div>

              {sentNotice && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Email client opened! If it didn't trigger automatically, please email us directly at <strong>{SITE_CONFIG.contactEmail}</strong>.</span>
                </div>
              )}
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
