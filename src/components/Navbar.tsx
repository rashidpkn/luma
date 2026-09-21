import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

interface CountryItem {
  id: string;
  name: string;
  flagClass: string;
}

const COUNTRIES: CountryItem[] = [
  { id: 'global', name: 'Luma Global', flagClass: 'currency-flag-usd' },
  { id: 'pl', name: 'Luma Poland', flagClass: 'currency-flag-pln' },
  { id: 'br', name: 'Luma Brazil', flagClass: 'currency-flag-brl' },
  { id: 'pe', name: 'Luma Peru', flagClass: 'currency-flag-pen' },
  { id: 'us', name: 'Luma USA', flagClass: 'currency-flag-usd' }
];

export const Navbar: React.FC = () => {
  const { country, setCountry, isMenuOpen, setIsMenuOpen, setIsAppModalOpen } = useApp();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedDown, setIsCollapsedDown] = useState(false);
  const [isCollapsedUp, setIsCollapsedUp] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;

      // Scroll collapse behavior matching Speedy.io
      if (scrollY > 100) {
        setIsCollapsed(true);
        if (direction === 'down') {
          setIsCollapsedDown(true);
          setIsCollapsedUp(false);
        } else {
          setIsCollapsedUp(true);
          setIsCollapsedDown(false);
        }
      } else {
        setIsCollapsed(false);
        setIsCollapsedDown(false);
        setIsCollapsedUp(false);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
          setIsCollapsedDown(false);
          setIsCollapsedUp(true);
        }
      }, 300);

      // Detect [data-logo-color] of section directly under navbar
      const sections = document.querySelectorAll('[data-logo-color]');
      let activeColor = 'white';

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 60) {
          const color = sec.getAttribute('data-logo-color');
          if (color) activeColor = color;
        }
      });

      if (activeColor === 'black') {
        setIsDark(true);
        setIsLight(false);
      } else {
        setIsDark(false);
        setIsLight(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const activeCountry = COUNTRIES.find(c => c.id === country) || COUNTRIES[0];

  const classNames = [
    'navbar',
    isCollapsed ? 'collapse' : '',
    isCollapsedDown ? 'collapse-down' : '',
    isCollapsedUp ? 'collapse-up' : '',
    isDark && !isMenuOpen && !isCollapsedUp ? 'dark' : '',
    isLight ? 'light' : ''
  ].filter(Boolean).join(' ');

  return (
    <nav
      className={classNames}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100
      }}
    >
      <div className="navbar-wrapper">
        <span
          className="bg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <div className="row align-middle">
          {/* Left Column: Logo & Country Switcher */}
          <div className="xxlarge-6 small-8 columns">
            <div
              className={`button-dropdown-wrapper`}
              ref={dropdownRef}
            >
              <div
                className={`active-country-wrapper`}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer', pointerEvents: 'all' }}
              >
                <span className="bg" />
                <button
                  type="button"
                  aria-label="Switch Website Country"
                  className={`logo`}
                >
                  {/* Luma Gradient Logo */}
                  <svg viewBox="0 0 48 48" className="logo-svg" style={{ filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.6))' }}>
                    <defs>
                      <linearGradient id="lumaLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f2fe" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <rect width="48" height="48" rx="24" fill="url(#lumaLogoGrad)" />
                    <path
                      d="M17 15v18h13M22 20h5a3.5 3.5 0 0 1 0 7h-5"
                      stroke="#ffffff"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>


                </button>

                <div className="logo-country-name-wrapper">
                  <span
                    className="logo-country-name anime-name p-caption m-width"
                    style={{
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {activeCountry.name}
                  </span>
                </div>
              </div>

              {/* Subtitle text beside logo */}
              <span className="logo-text-wrapper">
                <span className="text p-small">
                  <span className="block">
                    <span className="color-text">{activeCountry.name}</span>
                  </span>
                  <span className="block">
                    <span style={{ color: '#94a3b8' }}>Business money, in one flow.</span>
                  </span>
                </span>
              </span>


            </div>
          </div>

          {/* Center Column: Hamburger Menu Button */}
          <div className="xxlarge-4 small-4 columns text-center">
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="btn-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ margin: '0 auto', zIndex: 110, pointerEvents: 'all' }}
            >
              <span className="dash-wrapper">
                <span
                  className="dash"
                  style={{
                    transform: isMenuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                    transition: 'transform 0.3s ease, background-color 0.3s ease'
                  }}
                />
                <span
                  className="dash"
                  style={{
                    transform: isMenuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                    transition: 'transform 0.3s ease, background-color 0.3s ease'
                  }}
                />
              </span>
            </button>
          </div>

          {/* Right Column: CTA */}
          <div className="xxlarge-6 small-4 columns right-column">
            <div className="btn-wrapper" style={{ pointerEvents: 'all' }}>
              <button
                type="button"
                onClick={() => setIsAppModalOpen(true)}
                className="btn login fill themed"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '9999px',
                  padding: '10px 22px'
                }}
              >
                <span>Get the app</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
