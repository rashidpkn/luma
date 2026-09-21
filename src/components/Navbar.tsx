import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface CountryItem {
  id: string;
  name: string;
  flagClass: string;
}

const COUNTRIES: CountryItem[] = [
  { id: 'global', name: 'Global', flagClass: 'currency-flag-usd' },
  { id: 'ca', name: 'Canada', flagClass: 'currency-flag-cad' },
  { id: 'uk', name: 'United Kingdom', flagClass: 'currency-flag-gbp' },
  { id: 'eu', name: 'European Union', flagClass: 'currency-flag-eur' },
  { id: 'us', name: 'United States', flagClass: 'currency-flag-usd' },
  { id: 'au', name: 'Australia', flagClass: 'currency-flag-aud' }
];

export const Navbar: React.FC = () => {
  const { country, setCountry, isMenuOpen, setIsMenuOpen, setIsAppModalOpen } = useApp();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedDown, setIsCollapsedDown] = useState(false);
  const [isCollapsedUp, setIsCollapsedUp] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsDropdownOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;

      // Scroll collapse behavior
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
          {/* Left Column: Clean Logo & Corridor Switcher */}
          <div className="xxlarge-6 small-8 columns">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '100%',
                pointerEvents: 'all'
              }}
            >
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Luma Pay Home"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  flexShrink: 0
                }}
              >
                <img
                  src="/logos/logo-white.png"
                  alt="Luma Pay"
                  className="navbar-brand-logo"
                  style={{
                    height: '24px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </Link>

              {/* Clean Corridor Dropdown */}
              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-label="Select Country Corridor"
                  aria-expanded={isDropdownOpen}
                  className="corridor-pill-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: '#e2e8f0',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                >
                  <span
                    className={`currency-flag currency-flag-sm ${activeCountry.flagClass}`}
                    style={{ borderRadius: '2px', display: 'inline-block' }}
                  />
                  <span className="corridor-name" style={{ fontWeight: 600 }}>{activeCountry.name}</span>
                  <svg
                    width="9"
                    height="5"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transform: isDropdownOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      marginLeft: '1px'
                    }}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    className="corridor-dropdown-menu"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: 0,
                      background: 'rgba(15, 23, 42, 0.96)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(56, 189, 248, 0.28)',
                      borderRadius: '12px',
                      padding: '6px',
                      minWidth: '175px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(56, 189, 248, 0.15)',
                      zIndex: 150,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px'
                    }}
                  >
                    {COUNTRIES.map((c) => {
                      const isSelected = c.id === activeCountry.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => {
                            setCountry(c.id);
                            setIsDropdownOpen(false);
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '8px 10px',
                            borderRadius: '8px',
                            border: 'none',
                            background: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                            color: isSelected ? '#38bdf8' : '#cbd5e1',
                            fontSize: '12px',
                            fontWeight: isSelected ? 600 : 400,
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                              e.currentTarget.style.color = '#f8fafc';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#cbd5e1';
                            }
                          }}
                        >
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <span className={`currency-flag currency-flag-sm ${c.flagClass}`} style={{ borderRadius: '2px' }} />
                            <span>{c.name}</span>
                          </span>
                          {isSelected && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
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
                <span>Get Started</span>
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
