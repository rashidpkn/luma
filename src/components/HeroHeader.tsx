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
        backgroundColor: '#2581E9',
        background: '#2581E9',
        borderBottom: '1px solid rgba(255, 255, 255, 0.22)'
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
            style={{ opacity: 0.25 }}
          >
            <source src="/videos/header_mobile.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="row align-bottom hero-content-row" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
        <div className="xxlarge-8 medium-10 small-16 columns relative pb-20 hero-text-col">
          <div style={{ display: 'none' }}>
            <h1>Luma Pay - Multi-Currency Accounts, Foreign Exchange &amp; Cross-Border Payments</h1>
          </div>

          <h2
            className="h-xlarge hero-title"
            style={{
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 0,
              hyphens: 'none',
              wordBreak: 'normal',
              overflowWrap: 'normal'
            }}
          >
            <span className="block">Multi-Currency Accounts.</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #BAE6FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none'
              }}
            >
              Simplified.
            </span>
          </h2>

          <p className="p-big hero-desc" style={{ color: 'rgba(255, 255, 255, 0.92)', marginTop: '16px', maxWidth: '520px', lineHeight: 1.5 }}>
            Luma Pay delivers dedicated multi-currency accounts, institutional foreign exchange, and swift cross-border payment settlement across global corridors.
          </p>

          <a
            href="#flow"
            className="hero-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginTop: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
              paddingBottom: '4px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            EXPLORE OUR SERVICES <span style={{ fontSize: '14px' }}>↓</span>
          </a>
        </div>
      </div>

      {/* Scroll Helper Indicator */}
      <div className="scroll-helper-wrapper__header">
        <div className="scroll-helper__header visible" style={{ opacity: 1 }}>
          <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="5" width="16" height="21" rx="5" stroke="#ffffff" strokeWidth="2" />
            <line x1="9" y1="9" x2="9" y2="14" stroke="#ffffff" strokeWidth="2" />
          </svg>
          <span style={{ color: '#ffffff', letterSpacing: '0.08em', fontWeight: 600 }}>SCROLL TO EXPLORE LUMA PAY</span>
        </div>
      </div>

      <style>{`
        /* Base / Desktop Hero Title */
        .hero-title,
        header h2.hero-title,
        header h2.h-xlarge {
          font-size: clamp(40px, 4.2vw, 64px) !important;
          line-height: 1.06 !important;
          letter-spacing: -0.025em !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          hyphens: none !important;
          word-break: normal !important;
        }

        @media only screen and (max-width: 1200px) {
          .hero-title,
          header h2.hero-title,
          header h2.h-xlarge {
            font-size: clamp(34px, 4vw, 48px) !important;
            line-height: 1.08 !important;
          }
        }

        @media only screen and (max-width: 960px) {
          header.hero-header {
            height: 100svh !important;
            min-height: 560px !important;
            padding-top: 0 !important;
          }
          .hero-content-row {
            align-items: flex-start !important;
            padding-top: clamp(60px, 9vh, 80px) !important;
          }
          .hero-text-col {
            padding-bottom: 0 !important;
          }
          .hero-title,
          header h2.h-xlarge,
          header h2.hero-title {
            font-size: clamp(24px, 5.8vw, 32px) !important;
            line-height: 1.12 !important;
            letter-spacing: -0.02em !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            hyphens: none !important;
            word-break: normal !important;
          }
          .hero-desc {
            font-size: clamp(12px, 3.2vw, 14px) !important;
            margin-top: 10px !important;
            max-width: 90% !important;
            line-height: 1.4 !important;
          }
          .hero-link {
            margin-top: 12px !important;
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

        @media only screen and (max-width: 480px) {
          .hero-title,
          header h2.h-xlarge,
          header h2.hero-title {
            font-size: clamp(21px, 6vw, 26px) !important;
            line-height: 1.14 !important;
          }
        }
      `}</style>
    </header>
  );
};
