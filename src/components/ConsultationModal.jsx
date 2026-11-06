import React, { useState } from 'react';
import { X, CheckCircle2, PhoneCall, Send, ShieldCheck } from 'lucide-react';



export const ConsultationModal = ({
  isOpen,
  onClose,
  prefilledName = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'New Sdn Bhd Incorporation',
    companyName: prefilledName,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Start Incorporation or CoSec Switch</h3>
                <p className="text-xs text-slate-500">Free 1-on-1 consultation with a licensed corporate secretary</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name (As per NRIC/Passport)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tan Wei Loon"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+60 12-345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                >
                  <option>New Sdn Bhd Incorporation</option>
                  <option>Switching Existing Company Secretary</option>
                  <option>Accounting, Bookkeeping & LHDN Tax</option>
                  <option>Registered Office Address in KL</option>
                  <option>Share Allotment or Advisory</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Proposed or Existing Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Global Solutions Sdn Bhd (optional)"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                Your data is protected under the Malaysian Personal Data Protection Act (PDPA) 2010.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Our licensed secretarial officer has received your details and will contact you via WhatsApp / email within 2 business hours.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1">
              <p className="font-semibold text-slate-800">Next Steps:</p>
              <p className="text-slate-600">• Identity verification (eKYC) link will be sent to your WhatsApp.</p>
              <p className="text-slate-600">• Official SSM name search and reservation will be queued.</p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/601156889900?text=Hi%20MySect,%20I%20just%20submitted%20an%20application%20for%20${encodeURIComponent(formData.service)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Chat with Officer on WhatsApp Now
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-700"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
