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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
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
              className={`button-dropdown-wrapper ${isDropdownOpen ? 'active' : ''}`}
              ref={dropdownRef}
            >
              <div
                className={`active-country-wrapper ${isDropdownOpen ? 'active' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer', pointerEvents: 'all' }}
              >
                <span className="bg" />
                <button
                  type="button"
                  aria-label="Switch Website Country"
                  className={`logo ${isDropdownOpen ? 'active' : ''}`}
                >
                  {/* Luma Circular Moon Logo */}
                  <svg viewBox="0 0 48 48" className="logo-svg">
                    <path
                      d="M24 47.6C37 47.6 47.5 37 47.5 24 47.5 11 37 .4 24 .4S.5 11 .5 24C.5 37 11 47.6 24 47.6z"
                      className="logo-svg-primary"
                    />
                    <path
                      d="M24 44C13 44 4 35 4 24 4 12.9 13 4 24 4"
                      className="logo-svg-secondary"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Dropdown Arrow */}
                  <svg
                    viewBox="0 0 12 8"
                    className="arrow"
                    style={{
                      transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <path d="M2 1.8l4 4 4-4" />
                  </svg>
                </button>

                <div className="logo-country-name-wrapper">
                  <span
                    className="logo-country-name anime-name p-caption m-width"
                    style={{
                      opacity: isDropdownOpen ? 1 : 0,
                      visibility: isDropdownOpen ? 'visible' : 'hidden',
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
                    <span>, welcome!</span>
                  </span>
                  <span className="block">
                    <span>All your business needs in one platform.</span>
                  </span>
                </span>
              </span>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="countries-dropdown" style={{ display: 'flex' }}>
                  <div className="dropdown-scroll">
                    <div className="inner-scroll">
                      {COUNTRIES.map((c) => (
                        <div
                          key={c.id}
                          className="country-wrapper"
                          onClick={() => {
                            setCountry(c.id);
                            setIsDropdownOpen(false);
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="inner anime-name">
                            <span className={`currency-flag ${c.flagClass} mr-2 rounded-xs`} />
                            <p className="country-name m-width" style={{ marginLeft: '12px' }}>
                              {c.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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
              >
                Get the app
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
