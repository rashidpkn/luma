import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SplashLoader: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(location.pathname === '/');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div
      className="loading-splash-wrapper"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#2581E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        pointerEvents: isFading ? 'none' : 'all'
      }}
    >
      <div className="anime-container flex flex-col items-center justify-center gap-3">
        <img
          src="/logos/favicon.png"
          alt="Luma Pay"
          className="w-16 h-16 rounded-2xl shadow-2xl animate-pulse"
          style={{ filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.6))' }}
        />
        <img
          src="/logos/logo.png"
          alt="Luma Pay"
          style={{ height: '22px', width: 'auto', marginTop: '8px', opacity: 0.95 }}
        />
      </div>
    </div>
  );
};
