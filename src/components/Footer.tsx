import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  return (
    <footer
      data-logo-color="white"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.22)',
        backgroundColor: '#2581E9'
      }}
    >
      <div className="row align-middle main-row">
        <div className="xxlarge-5 xsmall-16 columns left-col">
          <div className="copyright-wrapper social">
            <ul className="social-list">
              <li className="social-list-item">
                <a
                  href="https://facebook.com/lumapay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                  <span>
                    <svg viewBox="0 0 38 38">
                      <path
                        d="M23.7 12.5h-9.5c-1 0-1.8.8-1.8 1.8v9.5c0 1 .8 1.8 1.8 1.8h4.7V21h-1.2c-.2 0-.3-.1-.3-.3v-1.5c0-.2.1-.3.3-.3h1.2v-1.4c0-1.7 1-2.6 2.5-2.6h1.2c.2 0 .3.1.3.3v1.3c0 .2-.1.3-.3.3h-.8c-.8 0-1 .4-1 1v1.3h1.8c.2 0 .3.1.3.3l-.2 1.5c0 .1-.1.3-.3.3H21v4.6h2.8c1 0 1.8-.8 1.8-1.8v-9.5c-.1-1.2-.9-2-1.9-2z"
                        fill="#0c6ce5"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://instagram.com/lumapay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                  <span>
                    <svg viewBox="0 0 38 38">
                      <path
                        d="M19 13.5h2.7c1.8.1 2.7.9 2.8 2.8v5.4c-.1 1.8-.9 2.7-2.8 2.8h-5.4c-1.8-.1-2.7-1-2.8-2.8V19v-2.7c.1-1.8.9-2.7 2.8-2.8H19zm0-1.2h-2.8c-2.4.1-3.8 1.5-3.9 3.9v5.6c.1 2.4 1.5 3.8 3.9 3.9h5.6c2.4-.1 3.8-1.5 3.9-3.9V19v-2.8c-.1-2.4-1.5-3.8-3.9-3.9H19zm0 3.2c-1.9 0-3.5 1.5-3.5 3.5 0 1.9 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zm0 5.7c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2zm3.6-6.6c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8z"
                        fill="#0c6ce5"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://linkedin.com/company/lumapay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  Linkedin
                  <span>
                    <svg viewBox="0 0 38 38">
                      <path
                        d="M15.1 14.1c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.7 0 1.4.6 1.4 1.4zm0 2.4h-2.8v8.8h2.8v-8.8zm4.4 0h-2.8v8.8h2.8v-4.6c0-2.6 3.4-2.8 3.4 0v4.6h2.8v-5.6c0-4.3-5-4.2-6.2-2v-1.2z"
                        fill="#0c6ce5"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="xxlarge-5 xsmall-16 columns middle-col">
          <img src="/imgs/payment-1.svg" alt="Visa" style={{ height: '24px', width: 'auto' }} />
          <img src="/imgs/payment-2.svg" alt="Mastercard" style={{ height: '32px', width: 'auto' }} />
        </div>

        <div className="xxlarge-5 xsmall-16 columns partnership-wrapper">
          <div
            style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <img src="/imgs/partner-1.svg" alt="Official Partner" style={{ height: '48px', width: 'auto' }} />
            <img src="/imgs/partner-2.svg" alt="Official Partner" style={{ height: '48px', width: 'auto' }} />
          </div>
        </div>
      </div>

      <div className="row footer-legal-row" style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.18)' }}>
        <div className="xxlarge-16 columns">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src="/logos/logo.png"
                  alt="Luma Pay"
                  style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
                <p style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)', margin: 0, fontSize: '13px' }}>
                  Multi-Currency Accounts, FX &amp; Global Settlement
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px' }}>
                <Link to="/privacy-policy" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link to="/terms-of-service" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Terms of Service</Link>
                <Link to="/regulatory-disclosures" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Regulatory Disclosures</Link>
                <Link to="/information-security-policy" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Security Policy</Link>
                <Link to="/aml-kyc-policy" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>AML / Compliance</Link>
                <Link to="/acceptable-use-policy" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Acceptable Use</Link>
                <a href="mailto:support@luma-pay.io" style={{ color: '#ffffff', textDecoration: 'none' }}>support@luma-pay.io</a>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', margin: 0 }}>
              Regulatory Disclosures: Luma Pay services vary by jurisdiction and are subject to regulatory restrictions. Dedicated virtual multi-currency accounts and domestic payment rails are provided in partnership with licensed financial institutions and regulated banking partners. Registration as a Money Services Business (MSB) does not constitute a banking licence. This website is for informational purposes only and does not constitute investment, financial, legal, or tax advice.
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
              &copy; {new Date().getFullYear()} Luma Pay Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
