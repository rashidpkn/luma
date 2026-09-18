import React, { useEffect, useState } from 'react';

export const SplashLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="loading-splash-wrapper"
      style={{
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        pointerEvents: isFading ? 'none' : 'all'
      }}
    >
      <div className="anime-container flex items-center justify-center">
        {/* Pulsing Luma geometric loader logo */}
        <svg viewBox="0 0 48 48" className="w-16 h-16 animate-pulse">
          <circle cx="24" cy="24" r="23" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="30 10" />
          <circle cx="24" cy="24" r="14" fill="#fff" />
        </svg>
      </div>
    </div>
  );
};
