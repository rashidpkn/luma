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

      <div className="row footer-legal-row">
        <div className="xxlarge-16 columns">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src="/logos/logo-white.png"
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
