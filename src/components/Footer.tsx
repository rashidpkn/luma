import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  return (
    <footer
      className='bg-black! text-white! border-t border-white/22'
    >

      <div className="row footer-legal-row">
        <div className="xxlarge-16 columns">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src="/logos/logo white.png"
                  alt="Luma Pay"
                  style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
                <p className='text-white!' style={{ fontWeight: 500, margin: 0, fontSize: '13px' }}>
                  Multi-Currency Accounts, FX &amp; Global Settlement
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px' }}>
                <Link className='text-white!' to="/privacy-policy">Privacy Policy</Link>
                <Link className='text-white!' to="/terms-of-service">Terms of Service</Link>
                <Link className='text-white!' to="/regulatory-disclosures">Regulatory Disclosures</Link>
                <Link className='text-white!' to="/information-security-policy">Security Policy</Link>
                <Link className='text-white!' to="/aml-kyc-policy">AML / Compliance</Link>
                <Link className='text-white!' to="/acceptable-use-policy">Acceptable Use</Link>
                <a href="mailto:support@luma-pay.io" style={{ color: '#ffffff', textDecoration: 'none' }}>support@luma-pay.io</a>
              </div>
            </div>
            <p className='text-white!' style={{ fontSize: '12px', margin: 0 }}>
              Regulatory Disclosures: Luma Pay services vary by jurisdiction and are subject to regulatory restrictions. Dedicated virtual multi-currency accounts and domestic payment rails are provided in partnership with licensed financial institutions and regulated banking partners. Registration as a Money Services Business (MSB) does not constitute a banking licence. This website is for informational purposes only and does not constitute investment, financial, legal, or tax advice.
            </p>
            <p className='text-white!' style={{ fontSize: '12px', margin: 0 }}>
              &copy; {new Date().getFullYear()} Luma Pay Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
