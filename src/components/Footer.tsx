import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-[#E6E0D6] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid matching Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 text-xs">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <a href="#home" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-[#0055FF]">
                MySect
              </span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Malaysia's intelligent corporate secretarial platform. Connecting companies and licensed secretaries with seamless compliance automation.
            </p>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Product (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#14181F] text-xs mb-4">Product</h4>
            <ul className="space-y-3 text-slate-500">
              <li>
                <a href="#features" className="hover:text-[#0055FF] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-mysect" className="hover:text-[#0055FF] transition-colors">
                  Why MySect
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#0055FF] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#0055FF] transition-colors">
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#14181F] text-xs mb-4">Company</h4>
            <ul className="space-y-3 text-slate-500">
              <li>
                <a href="#home" className="hover:text-[#0055FF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0055FF] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0055FF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0055FF] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[#14181F] text-xs mb-4">Support</h4>
            <ul className="space-y-3 text-slate-500">
              <li>
                <a href="#contact" className="hover:text-[#0055FF] transition-colors">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#0055FF] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <span className="text-slate-400 cursor-default">
                  System Status
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching Image 2 in Roboto Mono */}
        <div className="pt-8 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div>
            {currentYear} MySect. All rights reserved.
          </div>
          <div className="text-slate-400">
            Powered by TM
          </div>
          <div>
            Made in Malaysia
          </div>
        </div>
      </div>
    </footer>
  );
};
