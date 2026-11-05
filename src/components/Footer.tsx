import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF7F2] text-slate-600 pt-16 pb-12 border-t border-[#E6E0D6] font-sans">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Spread Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 pb-14 text-xs">
          {/* Brand & Description */}
          <div className="max-w-md space-y-4">
            <a href="#home" className="inline-block group" title="MySect - Back to Home">
              <img
                src="/mysect_logo.png"
                alt="MySect - Your Secretary Company"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Malaysia's intelligent corporate secretarial platform. Connecting companies and licensed secretaries with seamless compliance automation.
            </p>
          </div>

          {/* Navigation Links spread across right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 xl:gap-28">
            {/* Product */}
            <div>
              <h4 className="font-bold text-[#14181F] text-xs mb-4">Product</h4>
              <ul className="space-y-3 text-slate-600">
                <li>
                  <a href="#features" className="hover:text-[#0038A8] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#why-mysect" className="hover:text-[#0038A8] transition-colors">
                    Why MySect
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#0038A8] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#0038A8] transition-colors">
                    Client Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-[#14181F] text-xs mb-4">Company</h4>
              <ul className="space-y-3 text-slate-600">
                <li>
                  <a href="#home" className="hover:text-[#0038A8] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#0038A8] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0038A8] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0038A8] transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-[#14181F] text-xs mb-4">Support</h4>
              <ul className="space-y-3 text-slate-600">
                <li>
                  <a href="#contact" className="hover:text-[#0038A8] transition-colors">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#0038A8] transition-colors">
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
        </div>

        {/* Bottom Bar in Roboto Mono */}
        <div className="pt-8 border-t border-[#E6E0D6] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500 w-full">
          <div>
            {currentYear} MySect. All rights reserved.
          </div>
          <div className="text-slate-500">
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
