import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppProvider, useApp } from '../../context/AppContext';
import { SplashLoader } from '../../components/SplashLoader';
import { Navbar } from '../../components/Navbar';
import { FullscreenMenu } from '../../components/FullscreenMenu';
import { AwardsModal } from '../../components/AwardsModal';
import { AppModal } from '../../components/AppModal';

gsap.registerPlugin(ScrollTrigger);

const LayoutContent: React.FC = () => {
  const { country } = useApp();

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div data-country={country} className="app-root">
      {/* Splash Screen */}
      <SplashLoader />

      {/* Navigation & Overlays */}
      <FullscreenMenu />
      <Navbar />

      {/* Main Page Scroll Container */}
      <div className="js-locomotive home-page">
        <Outlet />
      </div>

      {/* Modals */}
      <AwardsModal />
      <AppModal />

      {/* Floating Help Widget */}
      <button
        type="button"
        aria-label="Help"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '28px',
          zIndex: 99,
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ffffff',
          fontFamily: 'helv-bold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          padding: '6px 10px',
          borderRadius: '20px',
          transition: 'opacity 0.2s ease',
          pointerEvents: 'all'
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="1.5" />
          <path
            d="M8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.1 11.13 8.6 10.6 8.85C10.23 9.03 10 9.4 10 9.8V10.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="13.25" r="0.75" fill="white" />
        </svg>
        <span>Help</span>
      </button>
    </div>
  );
};

export default function MainLayout() {
  return (
    <AppProvider>
      <LayoutContent />
    </AppProvider>
  );
}
