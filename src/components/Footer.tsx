import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060D17] text-slate-400 pt-16 pb-12 border-t border-[#132238] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid matching Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 text-xs">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block group" title="MySect - Back to Home">
              <div className="bg-white px-3.5 py-2 rounded-xl shadow-xs inline-flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/mysect_logo.png"
                  alt="MySect - Your Secretary Company"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Malaysia's intelligent corporate secretarial platform. Connecting companies and licensed secretaries with seamless compliance automation.
            </p>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Product (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs mb-4">Product</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-mysect" className="hover:text-white transition-colors">
                  Why MySect
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs mb-4">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs mb-4">Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">
                  System Status
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar in Roboto Mono */}
        <div className="pt-8 border-t border-[#1E3452] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
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
