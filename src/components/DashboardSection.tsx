import React, { useState } from 'react';

export const DashboardSection: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  return (
    <section
      data-theme={theme}
      data-logo-color="white"
      className="block-dashboard pb-14!"
      style={{
        backgroundColor: '#2581E9'
      }}
    >
      <div className="row align-center">
        <div className="small-14 xsmall-16 columns xxlarge-9">
          <h2 className="h-large">
            <div className="anime-container lottie-anime eye">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '16px' }}>
                <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15s18.54-6.22 22-15c-3.46-8.78-12-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#ffffff" />
              </svg>
            </div>
            Increase your visibility in global spendings.
          </h2>
          <div className="switcher-container">
            <div
              className={`switcher-wrapper is-${theme}`}
              role="tablist"
              aria-label="Theme switcher"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setTheme('dark');
                if (e.key === 'ArrowRight') setTheme('light');
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
                }
              }}
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX !== null) {
                  const diff = e.changedTouches[0].clientX - touchStartX;
                  if (diff > 25) setTheme('light');
                  else if (diff < -25) setTheme('dark');
                  setTouchStartX(null);
                }
              }}
            >
              <span className="switcher-slider" aria-hidden="true" />
              <button
                type="button"
                role="tab"
                aria-selected={theme === 'dark'}
                data-theme-btn="dark"
                className={`btn p-normal ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path fill="currentColor" d="M12 23.5C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.7 23.5 12 18.3 23.5 12 23.5zm0-21c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zM6.8 17.2c2.9 2.9 7.6 2.9 10.5 0s2.9-7.6 0-10.5L6.8 17.2z"></path>
                </svg>
                Dark Theme
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={theme === 'light'}
                data-theme-btn="light"
                className={`btn p-normal ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path fill="currentColor" d="M12 23.5C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.7 23.5 12 18.3 23.5 12 23.5zm0-21c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zM6.8 17.2c2.9 2.9 7.6 2.9 10.5 0s2.9-7.6 0-10.5L6.8 17.2z"></path>
                </svg>
                Light Theme
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="screen-container">
        <div className="screen-wrapper">
          <div className="screen-wrapper-images">
            <img
              alt="Luma Pay Treasury Portal - Dark Theme"
              src="/imgs/luma-dashboard-dark.jpg"
              className={theme === 'dark' ? 'active' : ''}
            />
            <img
              alt="Luma Pay Treasury Portal - Light Theme"
              src="/imgs/luma-dashboard-light.jpg"
              className={theme === 'light' ? 'active' : ''}
            />
          </div>
          <span className="p-small note">*Images are illustrative</span>
        </div>
      </div>

      <div className="bar-container">
        <div className="row">
          <div className="xxlarge-16 columns">
            <span className="bg"><span className="trigger"></span></span>
          </div>
        </div>
      </div>

      <div className="row align-center">
        <div className="xxlarge-12 small-16 columns">
          <div className="text-container max-w-7xl! mt-10!">
            <div className="p-big">
              <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>The Luma Pay Client Portal provides treasury teams with real-time liquidity oversight, instant FX quote execution, and automated settlement workflows.</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>Eliminate manual reconciliation and banking delays with audit-ready statements and multi-jurisdiction reporting built directly into your operations.</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>Seamlessly initiate cross-border payments, manage multi-currency balances, and track payment statuses across all supported corridors.</p>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .block-dashboard .switcher-container {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          margin-top: 32px !important;
        }
        .block-dashboard .switcher-wrapper {
          position: relative !important;
          display: inline-grid !important;
          grid-template-columns: 1fr 1fr !important;
          align-items: center !important;
          background: rgba(14, 40, 80, 0.32) !important;
          border: 1px solid rgba(255, 255, 255, 0.35) !important;
          border-radius: 9999px !important;
          padding: 4px !important;
          backdrop-filter: blur(18px) !important;
          -webkit-backdrop-filter: blur(18px) !important;
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.22), 0 8px 32px rgba(0, 0, 0, 0.14) !important;
          box-sizing: border-box !important;
          user-select: none !important;
          cursor: pointer !important;
          outline: none !important;
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
        }
        .block-dashboard .switcher-wrapper:focus-visible {
          border-color: #ffffff !important;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4), inset 0 2px 6px rgba(0, 0, 0, 0.22) !important;
        }
        .block-dashboard .switcher-slider {
          position: absolute !important;
          top: 4px !important;
          bottom: 4px !important;
          left: 4px !important;
          width: calc(50% - 4px) !important;
          background: #ffffff !important;
          border-radius: 9999px !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
          transition: transform 0.36s cubic-bezier(0.34, 1.25, 0.64, 1) !important;
          pointer-events: none !important;
          z-index: 1 !important;
        }
        .block-dashboard .switcher-wrapper.is-dark .switcher-slider {
          transform: translateX(0) !important;
        }
        .block-dashboard .switcher-wrapper.is-light .switcher-slider {
          transform: translateX(100%) !important;
        }
        .block-dashboard .switcher-wrapper .btn,
        .block-dashboard .switcher-container .switcher-wrapper .btn {
          position: relative !important;
          z-index: 2 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          padding: 10px 24px !important;
          margin: 0 !important;
          border-radius: 9999px !important;
          border: none !important;
          outline: none !important;
          cursor: pointer !important;
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          line-height: 1 !important;
          white-space: nowrap !important;
          text-decoration: none !important;
          background: transparent !important;
          background-color: transparent !important;
          box-shadow: none !important;
          box-sizing: border-box !important;
          color: rgba(255, 255, 255, 0.88) !important;
          transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease !important;
          user-select: none !important;
          width: 100% !important;
        }
        .block-dashboard .switcher-wrapper .btn:first-child,
        .block-dashboard .switcher-container .switcher-wrapper .btn:first-child {
          margin-right: 0 !important;
        }
        .block-dashboard .switcher-wrapper .btn:active {
          transform: scale(0.96) !important;
        }
        .block-dashboard .switcher-wrapper .btn:not(.active):hover,
        .block-dashboard .switcher-container .switcher-wrapper .btn:not(.active):hover {
          color: #ffffff !important;
          background: transparent !important;
          background-color: transparent !important;
        }
        .block-dashboard .switcher-wrapper .btn.active,
        .block-dashboard .switcher-container .switcher-wrapper .btn.active {
          color: #0c6ce5 !important;
          font-family: helv-bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
          font-weight: 600 !important;
          background: transparent !important;
          background-color: transparent !important;
          box-shadow: none !important;
          cursor: pointer !important;
        }
        .block-dashboard .switcher-wrapper .btn .icon,
        .block-dashboard .switcher-container .switcher-wrapper .btn .icon {
          width: 18px !important;
          height: 18px !important;
          margin: 0 !important;
          margin-right: 0 !important;
          flex-shrink: 0 !important;
          display: inline-block !important;
          transform-origin: 50% 50% !important;
          transition: transform 0.4s cubic-bezier(0.34, 1.25, 0.64, 1) !important;
        }
        .block-dashboard .switcher-wrapper .btn[data-theme-btn="light"] .icon,
        .block-dashboard .switcher-container .switcher-wrapper .btn[data-theme-btn="light"] .icon {
          transform: rotate(180deg) !important;
        }
        .block-dashboard .switcher-wrapper .btn .icon path,
        .block-dashboard .switcher-container .switcher-wrapper .btn .icon path {
          fill: currentColor !important;
          color: rgba(255, 255, 255, 0.88) !important;
          transition: fill 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .block-dashboard .switcher-wrapper .btn:not(.active):hover .icon path,
        .block-dashboard .switcher-container .switcher-wrapper .btn:not(.active):hover .icon path {
          fill: #ffffff !important;
          color: #ffffff !important;
        }
        .block-dashboard .switcher-wrapper .btn.active .icon path,
        .block-dashboard .switcher-container .switcher-wrapper .btn.active .icon path {
          fill: #0c6ce5 !important;
          color: #0c6ce5 !important;
        }
        @media (max-width: 640px) {
          .block-dashboard .switcher-wrapper {
            padding: 3px !important;
          }
          .block-dashboard .switcher-slider {
            top: 3px !important;
            bottom: 3px !important;
            left: 3px !important;
            width: calc(50% - 3px) !important;
          }
          .block-dashboard .switcher-wrapper .btn,
          .block-dashboard .switcher-container .switcher-wrapper .btn {
            padding: 8px 16px !important;
            font-size: 13.5px !important;
            gap: 6px !important;
          }
          .block-dashboard .switcher-wrapper .btn .icon,
          .block-dashboard .switcher-container .switcher-wrapper .btn .icon {
            width: 16px !important;
            height: 16px !important;
          }
        }
        .block-dashboard .btn-wrapper {
          display: flex !important;
          justify-content: center !important;
          margin-top: 40px !important;
        }
        .block-dashboard .btn-wrapper .btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          border-radius: 9999px !important;
          min-height: 54px !important;
          padding: 14px 38px !important;
          font-family: inherit !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          line-height: 1 !important;
          white-space: nowrap !important;
          text-decoration: none !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25), 0 0 20px rgba(56, 189, 248, 0.15) !important;
          box-sizing: border-box !important;
          cursor: pointer !important;
          transition: all 0.3s cubic-bezier(.19,1,.22,1) !important;
        }
        .block-dashboard .note {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        .block-dashboard[data-theme="dark"] .btn-wrapper .btn,
        .block-dashboard[data-theme="light"] .btn-wrapper .btn {
          background-color: #ffffff !important;
          color: #0c6ce5 !important;
          border: 1px solid #ffffff !important;
          font-weight: 700 !important;
        }
        .block-dashboard[data-theme="dark"] .btn-wrapper .btn:hover,
        .block-dashboard[data-theme="light"] .btn-wrapper .btn:hover {
          background-color: #f0f7ff !important;
          color: #0284c7 !important;
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.25) !important;
          transform: translateY(-2px) !important;
        }
        @media (max-width: 768px) {
          .block-dashboard .btn-wrapper {
            margin-top: 30px !important;
          }
          .block-dashboard .btn-wrapper .btn {
            min-height: 48px !important;
            padding: 12px 28px !important;
            font-size: 15px !important;
          }
        }
        @media (max-width: 480px) {
          .block-dashboard .btn-wrapper .btn {
            min-height: 44px !important;
            padding: 10px 22px !important;
            font-size: 14px !important;
            white-space: normal !important;
          }
        }
      `}</style>
    </section>
  );
};
