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

          <h2 className="h-xlarge" style={{ color: '#fff', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
            <span className="block">Your Money.</span>
            <span className="block">Simplified.</span>
          </h2>

          <p className="p-big" style={{ color: 'rgba(255,255,255,0.85)', marginTop: '24px' }}>
            Send, spend, and stay in control, all in one app.
          </p>
        </div>
      </div>

      {/* Scroll Helper Indicator */}
      <div className="scroll-helper-wrapper__header">
        <div className="scroll-helper__header visible" style={{ opacity: 1 }}>
          <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="5" width="16" height="21" rx="5" stroke="white" strokeWidth="2" />
            <line x1="9" y1="9" x2="9" y2="14" stroke="white" strokeWidth="2" />
          </svg>
          <span style={{ color: '#fff' }}>Scroll</span>
        </div>
      </div>
    </header>
  );
};
