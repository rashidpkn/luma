import React from 'react';

export const HeroHeader: React.FC = () => {
  return (
    <header
      data-logo-color="white"
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
      <div className="row align-bottom" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
        <div className="xxlarge-8 medium-10 small-16 columns relative pb-20">
          <div style={{ display: 'none' }}>
            <h1>NF Payment</h1>
          </div>

          <div
            style={{
              color: '#38bdf8',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              textShadow: '0 0 15px rgba(56, 189, 248, 0.4)'
            }}
          >
            MULTI-CURRENCY BUSINESS BANKING
          </div>

          <h2 className="h-xlarge" style={{ color: '#fff', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
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

          <p className="p-big" style={{ color: '#94a3b8', marginTop: '20px', maxWidth: '520px', lineHeight: 1.5 }}>
            Send, spend, exchange and stay in control—all from one considered platform.
          </p>

          <a
            href="#flow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#38bdf8',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginTop: '32px',
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
    </header>
  );
};
