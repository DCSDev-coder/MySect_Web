import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  variant = 'fade-up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, unobserve so it remains visible
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const variantClass = `reveal-${variant}`;

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-item ${variantClass} ${isVisible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
