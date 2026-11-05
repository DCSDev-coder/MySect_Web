import React, { useState } from 'react';
import { X, Search, CheckCircle2, AlertCircle, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

interface CompanyNameSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectName: (name: string) => void;
}

export const CompanyNameSearchModal: React.FC<CompanyNameSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectName,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industry, setIndustry] = useState('Technology & Software');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    status: 'idle' | 'available' | 'restricted' | 'taken';
    companyName: string;
    message: string;
    suggestions: string[];
  }>({
    status: 'idle',
    companyName: '',
    message: '',
    suggestions: [],
  });

  if (!isOpen) return null;

  const restrictedWords = ['ROYAL', 'DIRAJA', 'KERAJAAN', 'GOVERNMENT', 'ASEAN', 'BANK', 'TAKAFUL', 'INSURANCE', 'NATIONAL', 'FEDERATION'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim().toUpperCase();
    if (!query) return;

    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      const hasRestricted = restrictedWords.some((word) => query.includes(word));

      if (hasRestricted) {
        setSearchResult({
          status: 'restricted',
          companyName: `${query} SDN. BHD.`,
          message: 'This name contains a restricted statutory keyword under SSM guidelines and requires special ministerial gazette consent.',
          suggestions: [
            `${query.replace(/ROYAL|DIRAJA|BANK/g, '')} VENTURES SDN. BHD.`,
            `${query.replace(/ROYAL|DIRAJA|BANK/g, '')} SOLUTIONS SDN. BHD.`
          ]
        });
      } else if (['GRAB', 'SHOPEE', 'PETRONAS', 'AIRASIA', 'MAYBANK', 'MAXIS', 'CELCOM'].some(t => query.includes(t))) {
        setSearchResult({
          status: 'taken',
          companyName: `${query} SDN. BHD.`,
          message: 'This name has direct similarity with existing major registered trademarks in Malaysia.',
          suggestions: [
            `NEXTGEN ${query} SDN. BHD.`,
            `${query} GLOBAL HOLDINGS SDN. BHD.`
          ]
        });
      } else {
        setSearchResult({
          status: 'available',
          companyName: `${query} SDN. BHD.`,
          message: 'Excellent! This name appears compliant with SSM Company Act 2016 naming directives.',
          suggestions: [
            `${query} SDN. BHD.`,
            `${query} ASIA SDN. BHD.`,
            `${query} ENTERPRISE SDN. BHD.`
          ]
        });
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">SSM Name Availability Checker</h3>
            <p className="text-xs text-slate-500">Live guideline screening for Malaysian Sdn Bhd</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSearch} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Proposed Company Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Apex Horizon, Luminar Tech"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                required
              />
              <span className="absolute right-3 top-2.5 text-xs font-semibold text-slate-400">
                SDN. BHD.
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Primary Business Category
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
            >
              <option>Technology & Software</option>
              <option>E-Commerce & Retail</option>
              <option>Consulting & Professional Services</option>
              <option>Food & Beverage (F&B)</option>
              <option>Construction & Engineering</option>
              <option>Healthcare & Wellness</option>
              <option>Logistics & Trading</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSearching}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            {isSearching ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Checking SSM Directives...</span>
              </>
            ) : (
              <>
                <span>Run Guideline Check</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Results Feedback */}
        {searchResult.status !== 'idle' && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            {searchResult.status === 'available' && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{searchResult.companyName}</p>
                    <p className="text-[11px] text-emerald-800 mt-0.5">{searchResult.message}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onSelectName(searchResult.companyName);
                    onClose();
                  }}
                  className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve This Name With MySect</span>
                </button>
              </div>
            )}

            {searchResult.status === 'restricted' && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
                <div className="flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{searchResult.companyName}</p>
                    <p className="text-[11px] text-rose-800 mt-0.5">{searchResult.message}</p>
                  </div>
                </div>
                <div className="pt-2 text-[11px]">
                  <p className="font-semibold text-rose-900 mb-1">Recommended alternatives:</p>
                  {searchResult.suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSearchTerm(s.replace(' SDN. BHD.', ''))}
                      className="block text-left text-indigo-700 underline font-medium hover:text-indigo-900 mb-1"
                    >
                      • {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {searchResult.status === 'taken' && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{searchResult.companyName}</p>
                    <p className="text-[11px] text-amber-800 mt-0.5">{searchResult.message}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
