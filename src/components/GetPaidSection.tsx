import React from 'react';

export const GetPaidSection: React.FC = () => {
  return (
    <section
      data-logo-color="white"
      className="block-get-paid no-clients"
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        zIndex: 2,
        paddingTop: 'clamp(80px, 8.82vw, 150px)',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
        overflow: 'visible'
      }}
    >
      {/* Background Cover Overlay: Extends 100vh down from top, leaving bottom of section in pure black */}
      <div
        className="video-wrapper"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 'clamp(680px, 72vh, 880px)',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <div className="block-bg-cover" style={{ width: '100%', height: '100%' }}>
          <img
            alt="Spend anywhere. Stay in control."
            src="https://cdn.sanity.io/images/1ib26v3b/new/29a92889f018458789ceb213209d2295f16337d4-3840x2160.jpg?auto=format&q=100"
            className="element-cover"
            style={{
              width: '104%',
              height: '104%',
              top: '-2%',
              left: '-2%',
              position: 'absolute',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <div className="row" style={{ position: 'relative', zIndex: 1 }}>
        <div className="xxlarge-12 xxlarge-offset-2 small-16 small-offset-0 columns">
          <h2
            className="h-large"
            style={{
              color: '#ffffff',
              fontFamily: 'helv-regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(44px, 4.47vw, 76px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              whiteSpace: 'pre-line',
              fontWeight: 400,
              margin: 0
            }}
          >
            Spend anywhere.{'\n'}Stay in control.
          </h2>

          <div className="p-big" style={{ marginTop: '20px', maxWidth: '515px' }}>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: 'helv-regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(18px, 1.41vw, 24px)',
                lineHeight: 1.35,
                letterSpacing: '-0.01em',
                margin: 0
              }}
            >
              Use your Speedy physical or virtual Speedy debit card for purchases in all merchants and terminals, which accepts Master cards.
            </p>
          </div>

          {/* Centered Browser Window Mockup: Spreads across ribbon and pure black screens */}
          <div
            className="browser-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1150px',
              margin: 'clamp(40px, 4.1vw, 70px) auto 0 auto',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)'
            }}
          >
            {/* Layer 0: Background Loop Video */}
            <div
              className="video-wrapper"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                overflow: 'hidden',
                borderRadius: '14px'
              }}
            >
              <div className="block-bg-cover" style={{ width: '100%', height: '100%' }}>
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="element-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                >
                  <source
                    src="https://cdn.sanity.io/files/1ib26v3b/new/a6c56ffe5712d367966a9820d591221b813f0221.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            {/* Layer 1: Desktop Browser Chrome & Cards Overlay */}
            <img
              alt="Payment Method"
              src="https://cdn.sanity.io/images/1ib26v3b/new/e7eec72eab1b198d80f3860e6d0a7b157e98d0eb-2366x1614.png?auto=format"
              className="desktop"
              style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                display: 'block',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />

            {/* Mobile Fallback Overlay */}
            <img
              alt="Invoice Payment"
              src="https://cdn.sanity.io/images/1ib26v3b/new/9c005840c488a0f13b7718eab0f6f1f2ae18d6b2-565x1005.png?auto=format"
              className="mobile"
              style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                display: 'none',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Centered Vertical Track Line & Arch Icon directly beneath browser mockup */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0 auto',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Vertical slot / track line */}
            <div
              style={{
                width: '12px',
                height: '60px',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                borderTop: 'none',
                borderRadius: '0 0 2px 2px'
              }}
            />
            {/* Double arch outline icon */}
            <div
              style={{
                marginTop: '12px',
                width: '46px',
                height: '30px',
                position: 'relative'
              }}
            >
              <svg
                width="46"
                height="30"
                viewBox="0 0 46 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 29V11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11V29"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.5"
                />
                <path
                  d="M25 29V11C25 5.47715 29.4772 1 35 1C40.5228 1 45 5.47715 45 11V29"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.5"
                />
                <line
                  x1="1"
                  y1="29"
                  x2="45"
                  y2="29"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
