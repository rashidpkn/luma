import React from 'react';

export const GetPaidSection: React.FC = () => {
  return (
    <section
      data-logo-color="white"
      className="block-get-paid no-clients"
      style={{
        backgroundColor: '#2580E8',
        // borderTop: '1px solid rgba(255, 255, 255, 0.22)',
        // borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
        position: 'relative',
        zIndex: 2,
        paddingTop: 'clamp(80px, 8.82vw, 150px)',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
        overflow: 'visible'
      }}
    >
      {/* Background Cover Overlay: Extends 100vh down from top, leaving bottom of section in pure white */}
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
        <div className="block-bg-cover relative" style={{ width: '100%', height: '100%' }}>
          {/* <div className="absolute w-full h-full bg-black/50 z-10"></div> */}
          <img
            alt="Spend anywhere. Stay in control."
            // src="https://cdn.sanity.io/images/1ib26v3b/new/29a92889f018458789ceb213209d2295f16337d4-3840x2160.jpg?auto=format&q=100"
            src='/imgs/banner.jpeg'
            className="element-cover"
            style={{
              width: '100%',
              height: '100%',
              top: '0%',
              left: '0%',
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
            Spend globally.{'\n'}Stay in command.
          </h2>

          <div className="p-big" style={{ marginTop: '20px', maxWidth: '515px' }}>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.92)',
                fontFamily: 'helv-regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(18px, 1.41vw, 24px)',
                lineHeight: 1.35,
                letterSpacing: '-0.01em',
                margin: 0
              }}
            >
              Issue Luma Pay virtual and physical commercial debit cards for operational expenses across worldwide merchants and payment terminals, with automated expense controls and zero foreign transaction friction.
            </p>
          </div>

          {/* Centered Browser Window Mockup: Spreads across ribbon and pure light screens */}
          <div
            className="browser-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1150px',
              margin: 'clamp(40px, 4.1vw, 70px) auto 0 auto',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -12px rgba(12, 108, 229, 0.15), 0 0 0 1px rgba(12, 108, 229, 0.12)'
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
            <div className="relative">
              <div className="absolute h-full w-full top-0 right-0 bg-[#]"></div>
              <img
                alt="Payment Method"
                src="/imgs/desk-browser.avif"
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
            </div>

            {/* Mobile Fallback Overlay */}
            <img
              alt="Invoice Payment"
              src="/imgs/mob-browser.avif"
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


          </div>
        </div>
      </div>
    </section>
  );
};
