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
      title="Back to top"
      className="fixed bottom-7 right-7 z-40 w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 border border-amber-200/60 rounded-xl rotate-45 hover:rotate-0 hover:scale-110 transition-all duration-300 hover:-translate-y-1 active:scale-90 cursor-pointer group animate-in fade-in zoom-in-75 duration-200"
    >
      <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
        <ArrowUp className="w-5 h-5 stroke-[2.75] group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </button>
  );
};
