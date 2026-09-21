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
            <span className="title anime-in text-white!">Discover</span>
            <ul className="page-links">
              <li className="anime-in ">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="underline-anime "
                >
                  <span className="content-wrapper ">
                    <span className="arrow mr-4 text-[#39BDF8]">→</span>
                    <span className="text text-[#39BDF8]!">Luma</span>
                    <span className="line bg-[#39BDF8]! h-0.75!" />
                    <span className="subtitle text-white!">Business</span>
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
                    <span className="arrow mr-4 text-[#39BDF8]">→</span>
                    <span className="text text-[#39BDF8]!">Enterprise</span>
                    <span className="line bg-[#39BDF8]! h-0.75!" />
                    <span className="subtitle text-white!">Checkout</span>
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
                    <span className="arrow mr-4 text-[#39BDF8]">→</span>
                    <span className="text text-[#39BDF8]!">Eden Project</span>
                    <span className="line bg-[#39BDF8]! h-0.75!" />
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
                <span className="title anime-in text-white!">Legal</span>
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
                        className="underline-anime small text-white!"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div className="xxlarge-6 small-8 xsmall-16 columns">
                <span className="title anime-in text-white!">Support</span>
                <ul className="other-links">
                  {['Contact', 'Developer API', 'Careers'].map((item, idx) => (
                    <li key={idx} className="anime-in">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="underline-anime small text-white!"
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
