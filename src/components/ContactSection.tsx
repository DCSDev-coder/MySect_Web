import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry regarding MySect Corporate Services',
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
    <section id="contact" className="py-24 bg-[#0B192C] text-white border-t border-[#1E3452] relative overflow-hidden">
      {/* Background glow for rich mixed colors */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information with Scroll Reveal */}
          <ScrollReveal className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                CONTACT US
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Let's discuss your company matters
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Whether you need advice on corporate secretarial retainers, statutory compliance, or multi-entity setup across Malaysia.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4 font-sans">
              {/* WhatsApp Card */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#102035] border border-[#1E3452] hover:border-amber-400/50 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Fast Response</p>
                  <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Chat with Secretarial Specialist on WhatsApp
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Click to initiate instant WhatsApp chat</p>
                </div>
              </a>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#102035] border border-[#1E3452]">
                <div className="w-10 h-10 rounded-xl bg-[#0055FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Email Inquiries</p>
                  <a 
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="text-base font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Send inquiries directly to our compliance team
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#102035] border border-[#1E3452]">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Corporate Office</p>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5 leading-relaxed">
                    Level 28, The Exchange 106, Lingkaran TRX, 55188 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Send Email Form with Scroll Reveal */}
          <ScrollReveal delay={150} className="lg:col-span-7 bg-[#102035] rounded-3xl p-8 border border-[#1E3452] shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-1">Send an Email to MySect</h3>
            <p className="text-xs text-slate-300 mb-6">
              Fill in your message below. Clicking send will open your email client pre-addressed to our compliance team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jason Lee"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B192C] border border-[#1E3452] focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 text-white placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jason@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B192C] border border-[#1E3452] focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 text-white placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Secretarial Platform Demo Request"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B192C] border border-[#1E3452] focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your company, current secretarial setup, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B192C] border border-[#1E3452] focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 text-white placeholder-slate-500 leading-relaxed"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0055FF]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
              </div>

              {sentNotice && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
