import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const FullscreenMenu: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useApp();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div
      className="menu"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 90,
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        pointerEvents: isMenuOpen ? 'all' : 'none',
        transition: 'opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1), visibility 0.4s ease',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        backgroundColor: 'rgba(0, 0, 0, 0.95)'
      }}
    >
      <div className="menu-wrapper">
        <div className="row align-bottom">
          {/* Main Discover links */}
          <div className="xxlarge-10 small-16 columns">
            <span className="title anime-in">Discover</span>
            <ul className="page-links">
              <li className="anime-in">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="underline-anime"
                >
                  <span className="content-wrapper">
                    <span className="arrow mr-4">→</span>
                    <span className="text">Luma</span>
                    <span className="line" />
                    <span className="subtitle">Business</span>
                  </span>
                </a>
              </li>
              <li className="anime-in">
                <a
                  href="#dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="underline-anime"
                >
                  <span className="content-wrapper">
                    <span className="arrow mr-4">→</span>
                    <span className="text">Enterprise</span>
                    <span className="line" />
                    <span className="subtitle">Checkout</span>
                  </span>
                </a>
              </li>
              <li className="anime-in">
                <a
                  href="#sustainability"
                  onClick={() => setIsMenuOpen(false)}
                  className="underline-anime"
                >
                  <span className="content-wrapper">
                    <span className="arrow mr-4">→</span>
                    <span className="text">Eden Project</span>
                    <span className="line" />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Sublists: Legal & Support */}
          <div className="xxlarge-6 small-16 columns sublist-column">
            <div className="row">
              {/* Legal Links */}
              <div className="xxlarge-10 small-8 xsmall-16 columns">
                <span className="title anime-in">Legal</span>
                <ul className="legal-links">
                  {[
                    'Cookie Policy',
                    'Information Security Policy',
                    'Privacy Policy',
                    'Regulatory Information',
                    'Licences',
                    'Corporate Governance Principles',
                    'Terms and Conditions',
                    'Key Legal Documents',
                    'AML',
                    'Acceptable Use Policy',
                    'Dispute a Payment'
                  ].map((item, idx) => (
                    <li key={idx} className="anime-in">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="underline-anime small"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div className="xxlarge-6 small-8 xsmall-16 columns">
                <span className="title anime-in">Support</span>
                <ul className="other-links">
                  {['Contact', 'Developer API', 'Careers'].map((item, idx) => (
                    <li key={idx} className="anime-in">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="underline-anime small"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="madeby-wrapper anime-in">
                  <a
                    href="https://burocratik.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-normal"
                    style={{ color: '#888', transition: 'color 0.3s ease' }}
                  >
                    Made by Büro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
