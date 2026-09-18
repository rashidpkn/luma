import React from 'react';

const NAMES = ['Linda', 'James', 'Sarah', 'William', 'Rebecca', 'Michael'];

export const SliderNames: React.FC = () => {
  return (
    <section data-logo-color="white" className="slider-names">
      <style>{`
        @keyframes namesVerticalScroll {
          0%, 13% { transform: translateY(0); }
          16.66%, 29.66% { transform: translateY(-8.333333%); }
          33.33%, 46.33% { transform: translateY(-16.666667%); }
          50%, 63% { transform: translateY(-25%); }
          66.66%, 79.66% { transform: translateY(-33.333333%); }
          83.33%, 96.33% { transform: translateY(-41.666667%); }
          100% { transform: translateY(-50%); }
        }
        .names-ticker-list {
          display: flex;
          flex-direction: column;
          animation: namesVerticalScroll 12s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .names-ticker-list:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="row">
        <div className="xxlarge-16 columns">
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: '70vh',
              paddingTop: '60px',
              paddingBottom: '80px',
              flexWrap: 'wrap',
              gap: '40px'
            }}
          >
            {/* Left Column: Free for [Name Ticker] */}
            <div
              className="left-column"
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 'clamp(42px, 6.4vw, 110px)',
                lineHeight: 1.25
              }}
            >
              <span
                className="text"
                style={{
                  fontFamily: 'helv-regular',
                  fontSize: 'inherit',
                  lineHeight: '1.25em',
                  color: '#fff',
                  whiteSpace: 'nowrap'
                }}
              >
                Free for&nbsp;
              </span>
              <div
                className="names-list-container"
                style={{
                  height: '1.25em',
                  fontSize: 'inherit',
                  lineHeight: '1.25em',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                <div className="names-ticker-list">
                  {[...NAMES, ...NAMES].map((name, i) => (
                    <span
                      key={i}
                      className="name-regular"
                      style={{
                        display: 'block',
                        height: '1.25em',
                        lineHeight: '1.25em',
                        fontFamily: 'helv-bold',
                        fontSize: 'inherit',
                        color: '#fff',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Join today! with store badges underneath */}
            <div
              className="right-column"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px'
              }}
            >
              <span
                className="text secondary"
                style={{
                  fontFamily: 'helv-bold',
                  fontSize: 'clamp(42px, 6.4vw, 110px)',
                  lineHeight: '1.1'
                }}
              >
                <a
                  href="https://portal.speedy.io/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  <span className="bold">Join today!</span>
                </a>
              </span>

              <div
                className="store-wrapper"
                style={{
                  position: 'static',
                  bottom: 'auto',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '20px',
                  alignItems: 'center'
                }}
              >
                <a
                  href="https://apps.apple.com/tr/app/speedy-io/id1659641134"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', transition: 'opacity 0.2s ease' }}
                >
                  <img
                    src="/imgs/app-store.svg"
                    alt="App Store"
                    style={{ height: '40px', width: 'auto' }}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=io.speedy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', transition: 'opacity 0.2s ease' }}
                >
                  <img
                    src="/imgs/google-play.svg"
                    alt="Google Play"
                    style={{ height: '40px', width: 'auto' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
