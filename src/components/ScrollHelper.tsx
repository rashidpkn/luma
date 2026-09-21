import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollHelper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const helperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !helperRef.current) return;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      endTrigger: '.block-save-time',
      toggleClass: { targets: helperRef.current, className: 'visible' }
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-helper-wrapper">
      <div ref={helperRef} className="scroll-helper">
        <svg
          width="18"
          height="27"
          viewBox="0 0 18 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))' }}
        >
          <rect x="1" y="5" width="16" height="21" rx="5" stroke="#38bdf8" strokeWidth="2" />
          <line x1="9" y1="9" x2="9" y2="14" stroke="#38bdf8" strokeWidth="2" />
        </svg>
        <span style={{ color: '#38bdf8', letterSpacing: '0.08em', fontWeight: 600 }}>SCROLL</span>
      </div>
    </div>
  );
};
