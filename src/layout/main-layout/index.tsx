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
