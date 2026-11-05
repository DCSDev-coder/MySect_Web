import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0055FF] hover:bg-[#0045D8] text-white shadow-xl shadow-[#0055FF]/30 hover:shadow-2xl hover:shadow-[#0055FF]/40 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer animate-in fade-in zoom-in-75 duration-200"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
