import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

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
    
    // Construct mailto URL to send email to the target email
    const subjectEncoded = encodeURIComponent(formData.subject || 'MySect Inquiry');
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:${SITE_CONFIG.contactEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    // Trigger user's email client
    window.location.href = mailtoUrl;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-full border border-[#0055FF]/20">
                CONTACT US
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#14181F] tracking-tight">
                Let's discuss your company matters
              </h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Whether you need advice on incorporating a new Sdn Bhd, transferring your company secretarial retainer, or implementing MySect across your corporate group.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Phone / WhatsApp Card */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6E0D6] hover:border-[#0055FF]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0055FF] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Phone & WhatsApp</p>
                  <p className="text-base font-bold text-[#14181F] font-mono group-hover:text-[#0055FF] transition-colors">
                    {SITE_CONFIG.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Click to chat directly with our secretarial liaison</p>
                </div>
              </a>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6E0D6]">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Official Email Inquiries</p>
                  <a 
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="text-base font-bold text-[#14181F] hover:text-[#0055FF] transition-colors"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    (Target email configurable in <code className="text-indigo-600 font-mono text-[11px]">siteConfig.ts</code>)
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6E0D6]">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Registered Corporate Office</p>
                  <p className="text-xs font-semibold text-[#14181F] mt-0.5 leading-relaxed">
                    Level 28, The Exchange 106, Lingkaran TRX, 55188 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Email Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-8 border border-[#E2D9CC] shadow-lg">
            <h3 className="text-xl font-bold text-[#14181F] mb-1">Send an Email to MySect</h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your message below. Clicking send will open your email client pre-addressed to our compliance desk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#14181F] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jason Lee"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E0D6] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#14181F] uppercase tracking-wider mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jason@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E0D6] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#14181F] uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sdn Bhd Incorporation & Secretarial Query"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E0D6] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] text-slate-800"
                />
              </div>

              <div>
                <label className="block font-bold text-[#14181F] uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your company, current secretarial setup, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E0D6] focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] text-slate-800 leading-relaxed"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0055FF]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email to {SITE_CONFIG.contactEmail}</span>
                </button>
              </div>

              {sentNotice && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Email client opened! If it didn't trigger automatically, please email us directly at <strong>{SITE_CONFIG.contactEmail}</strong>.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
