import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';

export interface LegalNavDoc {
  path: string;
  label: string;
  badge: string;
  shortDesc: string;
  lastUpdated: string;
}

export const LEGAL_DOCS: LegalNavDoc[] = [
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    badge: 'GDPR & CCPA Compliant',
    shortDesc: 'How Luma Pay collects, protects, processes, and safeguards corporate and personal information.',
    lastUpdated: 'September 15, 2026'
  },
  {
    path: '/terms-of-service',
    label: 'Terms of Service',
    badge: 'Institutional Agreement',
    shortDesc: 'Terms governing multi-currency virtual accounts, domestic payment rails, and FX transactions.',
    lastUpdated: 'September 10, 2026'
  },
  {
    path: '/regulatory-disclosures',
    label: 'Regulatory Disclosures',
    badge: 'MSB & Banking Partnerships',
    shortDesc: 'Multi-jurisdictional licensing, partner banking disclosures, and non-depository safeguards.',
    lastUpdated: 'September 01, 2026'
  },
  {
    path: '/information-security-policy',
    label: 'Information Security Policy',
    badge: 'SOC 2 Type II & ISO 27001',
    shortDesc: 'Encryption standards, access controls, network defence, and infrastructure resilience.',
    lastUpdated: 'August 28, 2026'
  },
  {
    path: '/aml-kyc-policy',
    label: 'AML & KYC Compliance',
    badge: 'FATF & FinCEN Aligned',
    shortDesc: 'Anti-money laundering controls, beneficial ownership verification, and sanctions screening.',
    lastUpdated: 'August 20, 2026'
  },
  {
    path: '/acceptable-use-policy',
    label: 'Acceptable Use Policy',
    badge: 'Platform Standards',
    shortDesc: 'Permissible commercial use cases, high-risk merchant restrictions, and prohibited sectors.',
    lastUpdated: 'August 15, 2026'
  }
];

export const DocumentSection: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <section style={{ marginBottom: '36px' }}>
    <h2
      style={{
        fontFamily: 'helv-bold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: 'clamp(20px, 2vw, 24px)',
        fontWeight: 600,
        color: '#ffffff',
        margin: '0 0 16px 0',
        display: 'flex',
        alignItems: 'baseline',
        gap: '12px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        paddingBottom: '12px'
      }}
    >
      <span style={{ color: '#38bdf8', fontSize: '16px', fontWeight: 700 }}>{number}</span>
      <span>{title}</span>
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', lineHeight: 1.75 }}>
      {children}
    </div>
  </section>
);

export const HighlightBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      background: 'rgba(56, 189, 248, 0.06)',
      borderLeft: '3px solid #38bdf8',
      borderRadius: '6px',
      padding: '16px 20px',
      fontSize: '15.5px',
      lineHeight: 1.65,
      color: '#e2e8f0',
      marginBottom: '32px'
    }}
  >
    {children}
  </div>
);

interface LegalLayoutProps {
  title: string;
  badge: string;
  shortDesc: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  badge,
  shortDesc,
  lastUpdated,
  children
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = `${title} | Luma Pay`;
  }, [title]);

  return (
    <div className="legal-page-container" style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc' }}>
      {/* 1. Header & Hero */}
      <section
        style={{
          paddingTop: '130px',
          paddingBottom: '50px',
          background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(56, 189, 248, 0.15), rgba(2, 6, 23, 0))',
          borderBottom: '1px solid rgba(56, 189, 248, 0.1)'
        }}
      >
        <div className="row">
          <div className="xxlarge-16 columns">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#38bdf8',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span>Back to Home</span>
              </Link>
              <span style={{ color: '#475569' }}>/</span>
              <span style={{ color: '#94a3b8', fontSize: '13px' }}>Legal &amp; Compliance Hub</span>
              <span style={{ color: '#475569' }}>/</span>
              <span style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: 500 }}>{title}</span>
            </nav>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: '#38bdf8',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '14px'
                  }}
                >
                  {badge}
                </span>
                <h1
                  style={{
                    fontFamily: 'helv-bold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: '#ffffff',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {title}
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: 0, lineHeight: 1.5 }}>
                  {shortDesc}
                </p>
              </div>

              {/* Action Buttons: Print Document & Last Updated */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => window.print()}
                  aria-label="Print Document"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 18px',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#cbd5e1',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"/>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                    <rect x="6" y="14" width="12" height="8"/>
                  </svg>
                  <span>Print Document</span>
                </button>
                <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                  Effective: <strong style={{ color: '#cbd5e1' }}>{lastUpdated}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Navigation Sidebar */}
      <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="row">
          {/* Left Column: Dedicated Documents Library Sidebar */}
          <aside className="xxlarge-4 small-16 columns" style={{ marginBottom: '30px' }}>
            <div
              style={{
                position: 'sticky',
                top: '100px',
                background: 'rgba(15, 23, 42, 0.65)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                borderRadius: '16px',
                padding: '16px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ padding: '6px 12px 10px 12px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>
                  Documents Library
                </span>
              </div>

              {LEGAL_DOCS.map((doc) => (
                <NavLink
                  key={doc.path}
                  to={doc.path}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid transparent',
                    color: isActive ? '#38bdf8' : '#cbd5e1',
                    fontSize: '13.5px',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'all 0.15s ease'
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span>{doc.label}</span>
                      {isActive && (
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingLeft: '12px', paddingRight: '12px' }}>
                <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                  Questions regarding these legal documents?
                </p>
                <a
                  href="mailto:compliance@luma-pay.io"
                  style={{
                    fontSize: '12px',
                    color: '#38bdf8',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>compliance@luma-pay.io</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Policy Document Body */}
          <article className="xxlarge-12 small-16 columns">
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '20px',
                padding: 'clamp(24px, 4vw, 48px)',
                lineHeight: 1.75,
                fontSize: '16.5px',
                color: '#cbd5e1',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56, 189, 248, 0.05)'
              }}
            >
              {children}
            </div>
          </article>
        </div>
      </section>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};
export default LegalLayout;
