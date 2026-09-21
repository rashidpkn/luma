import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const FullscreenMenu: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useApp();
  const navigate = useNavigate();

  const handleNavigate = useCallback((path: string) => {
    setIsMenuOpen(false);
    // Small delay to let menu close and body overflow reset before route transition
    setTimeout(() => {
      navigate(path);
    }, 50);
  }, [setIsMenuOpen, navigate]);

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
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div className="menu-wrapper" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '100px', paddingBottom: '40px' }}>
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
                    <span className="arrow">→</span>
                    <span className="text">Luma Pay</span>
                    <span className="line" />
                    <span className="subtitle">Multi-Currency Accounts</span>
                  </span>
                </a>
              </li>
              <li className="anime-in">
                <a
                  href="#corridors"
                  onClick={() => setIsMenuOpen(false)}
                  className="underline-anime"
                >
                  <span className="content-wrapper">
                    <span className="arrow">→</span>
                    <span className="text">Global Corridors</span>
                    <span className="line" />
                    <span className="subtitle">Canada, UK, EU, US, AU</span>
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
                    <span className="arrow">→</span>
                    <span className="text">Client Portal</span>
                    <span className="line" />
                    <span className="subtitle">Live FX &amp; Treasury</span>
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
                    <span className="arrow">→</span>
                    <span className="text">Eden Project</span>
                    <span className="line" />
                    <span className="subtitle">Sustainability</span>
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
                <span className="title anime-in">Legal &amp; Compliance</span>
                <ul className="legal-links">
                  {[
                    { label: 'Privacy Policy', path: '/privacy-policy' },
                    { label: 'Terms of Service', path: '/terms-of-service' },
                    { label: 'Regulatory Disclosures', path: '/regulatory-disclosures' },
                    { label: 'Information Security Policy', path: '/information-security-policy' },
                    { label: 'AML / KYC Policy', path: '/aml-kyc-policy' },
                    { label: 'Acceptable Use Policy', path: '/acceptable-use-policy' },
                    { label: 'Corporate Governance', path: '/regulatory-disclosures' },
                    { label: 'Dispute Resolution', path: '/terms-of-service' }
                  ].map((item, idx) => (
                    <li key={idx} className="anime-in">
                      <a
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.path);
                        }}
                        className="underline-anime small"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div className="xxlarge-6 small-8 xsmall-16 columns">
                <span className="title anime-in">Support</span>
                <ul className="other-links">
                  {['Contact Support', 'Developer API', 'Compliance Desk'].map((item, idx) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
