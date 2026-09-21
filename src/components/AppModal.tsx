import React from 'react';
import { useApp } from '../context/AppContext';

export const AppModal: React.FC = () => {
  const { isAppModalOpen, setIsAppModalOpen } = useApp();

  return (
    <div className="app-modal-wrapper" style={{ pointerEvents: isAppModalOpen ? 'all' : 'none' }}>
      <span
        className={`bg ${isAppModalOpen ? 'active' : ''}`}
        onClick={() => setIsAppModalOpen(false)}
      />

      <div className={`modal ${isAppModalOpen ? 'active' : ''}`}>
        <div className="inner">
          <img
            src="/logos/logo.png"
            alt="Luma Pay"
            style={{ height: '28px', width: 'auto', margin: '0 auto 16px auto', display: 'block' }}
          />
          <h3 className="h-medium" style={{ color: '#0f172a' }}>Access Luma Pay</h3>
          <p className="p-normal top" style={{ color: '#475569' }}>
            Scan the QR code to open the Luma Pay Mobile Portal
          </p>

          <img
            src="/imgs/app-qr-code.svg"
            alt="App QR Code"
            className="code-img"
            style={{ maxWidth: '240px', margin: '20px auto' }}
          />

          <p className="p-normal bottom" style={{ color: '#444' }}>
            Or launch directly on your device:
          </p>

          <div className="store-wrapper" style={{ filter: 'none', justifyContent: 'center', marginTop: '10px' }}>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="/imgs/app-store.svg"
                alt="App Store"
                style={{ height: '40px' }}
              />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="/imgs/google-play.svg"
                alt="Google Play"
                style={{ height: '40px' }}
              />
            </a>
          </div>

          <div
            className="close-button"
            onClick={() => setIsAppModalOpen(false)}
            role="button"
            tabIndex={0}
          >
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22.5" cy="22.5" r="22.5" fill="#EEEEEE" />
              <path
                d="M16 16L22.4175 22.3699L16 28.7278"
                stroke="black"
                strokeWidth="1.6"
                strokeMiterlimit="10"
              />
              <path
                d="M29.418 16L23.0004 22.3699L29.418 28.7278"
                stroke="black"
                strokeWidth="1.6"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
