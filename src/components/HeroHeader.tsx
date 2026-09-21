import React from 'react';

export const HeroHeader: React.FC = () => {
  return (
    <header
      data-logo-color="white"
      className="hero-header"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      {/* Background Video */}
      <div className="video-wrapper">
        <div className="block-bg-cover">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="element-cover"
            style={{ opacity: 0.65 }}
          >
            <source src="/videos/header_mobile.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="row align-bottom hero-content-row" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
        <div className="xxlarge-8 medium-10 small-16 columns relative pb-20 hero-text-col">
          <div style={{ display: 'none' }}>
            <h1>NF Payment</h1>
          </div>

          <div
            className="hero-badge"
            style={{
              color: '#38bdf8',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '9999px',
              backdropFilter: 'blur(8px)',
              textShadow: '0 0 15px rgba(56, 189, 248, 0.4)'
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00f2fe', boxShadow: '0 0 8px #00f2fe', flexShrink: 0 }} />
            MULTI-CURRENCY BUSINESS BANKING
          </div>

          <h2 className="h-xlarge hero-title" style={{ color: '#fff', textShadow: '0 4px 24px rgba(0,0,0,0.5)', marginTop: 0, marginBottom: 0 }}>
            <span className="block">Your Money.</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #00f2fe 0%, #38bdf8 45%, #818cf8 80%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none'
              }}
            >
              Simplified.
            </span>
          </h2>

          <p className="p-big hero-desc" style={{ color: '#94a3b8', marginTop: '16px', maxWidth: '520px', lineHeight: 1.5 }}>
            Send, spend, exchange and stay in control—all from one considered platform.
          </p>

          <a
            href="#flow"
            className="hero-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#38bdf8',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginTop: '24px',
              borderBottom: '1px solid rgba(56, 189, 248, 0.4)',
              paddingBottom: '4px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            EXPLORE THE FLOW <span style={{ fontSize: '14px' }}>↓</span>
          </a>
        </div>
      </div>

      {/* Scroll Helper Indicator */}
      <div className="scroll-helper-wrapper__header">
        <div className="scroll-helper__header visible" style={{ opacity: 1 }}>
          <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))' }}>
            <rect x="1" y="5" width="16" height="21" rx="5" stroke="#38bdf8" strokeWidth="2" />
            <line x1="9" y1="9" x2="9" y2="14" stroke="#38bdf8" strokeWidth="2" />
          </svg>
          <span style={{ color: '#38bdf8', letterSpacing: '0.08em', fontWeight: 600 }}>SCROLL TO MOVE MONEY</span>
        </div>
      </div>

      <style>{`
        @media only screen and (max-width: 960px) {
          header.hero-header {
            height: 100svh !important;
            min-height: 560px !important;
            padding-top: 0 !important;
          }
          .hero-content-row {
            align-items: flex-start !important;
            padding-top: clamp(68px, 10.5vh, 88px) !important;
          }
          .hero-text-col {
            padding-bottom: 0 !important;
          }
          .hero-badge {
            font-size: 10px !important;
            margin-bottom: 10px !important;
            letter-spacing: 0.12em !important;
            padding: 4px 10px !important;
          }
          .hero-title,
          header h2.h-xlarge {
            font-size: clamp(30px, 8vw, 42px) !important;
            line-height: 1.08 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          .hero-desc {
            font-size: clamp(13px, 3.5vw, 15px) !important;
            margin-top: 10px !important;
            max-width: 92% !important;
            line-height: 1.4 !important;
          }
          .hero-link {
            margin-top: 14px !important;
            font-size: 11px !important;
          }
          .scroll-helper-wrapper__header {
            bottom: 8px !important;
          }
          .scroll-helper-wrapper__header span {
            font-size: 9px !important;
            letter-spacing: 0.05em !important;
          }
        }
      `}</style>
    </header>
  );
};
