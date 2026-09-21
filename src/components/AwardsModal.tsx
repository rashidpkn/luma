import React from 'react';
import { useApp } from '../context/AppContext';

const AWARDS_LIST = [
  { award: 'Gold in Services Websites', contest: 'Lovie Awards', date: '2022' },
  { award: 'Silver in Digital Branding', contest: 'European Design Awards', date: '2022' },
  { award: 'Bronze in Digital, Promotional Site', contest: 'European Design Awards', date: '2022' },
  { award: 'Website of the Day', contest: 'CSS Design Awards', date: 'Jan 03, 2022' },
  { award: 'Website of the Day', contest: 'Awwwards', date: 'Nov 02, 2021' },
  { award: 'Developer Award', contest: 'Awwwards', date: 'Nov 02, 2021' },
  { award: 'Mobile Excellence', contest: 'Awwwards', date: 'Oct 07, 2021' },
  { award: 'Mobile of the Week', contest: 'Awwwards', date: 'Oct 07, 2021' }
];

export const AwardsModal: React.FC = () => {
  const { isAwardsModalOpen, setIsAwardsModalOpen } = useApp();
  const [showBanner, setShowBanner] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="awwards-wrapper">
      {/* Floating Vertical Banner on Left Side (only visible in hero) */}
      <div
        className="banner-wrapper dark"
        onClick={() => setIsAwardsModalOpen(true)}
        style={{
          cursor: 'pointer',
          opacity: showBanner ? 1 : 0,
          pointerEvents: showBanner ? 'all' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      >
        <p className="cert-text" style={{ color: '#475569' }}>
          Awards
          &amp;<br />
          Certifications
        </p>
        <svg
          width="62"
          height="187"
          viewBox="0 0 62 187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="62" height="187" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" rx="8" />
          <path
            d="M17.6992 140.8V144.2C17.6992 147.1 20.0992 149.5 22.9992 149.5C22.9992 153.7 26.1992 157.1 30.2992 157.5V169.7H25.9992V171.2H35.9992V169.7H31.6992V157.5C35.7992 157.1 38.8992 153.7 38.9992 149.6C41.8992 149.6 44.2992 147.2 44.2992 144.3V140.8H17.6992ZM19.1992 144.2V142.3H22.9992V148C20.8992 148.1 19.1992 146.3 19.1992 144.2ZM42.7992 144.2C42.7992 146.3 41.0992 148 38.9992 148V142.3H42.7992V144.2Z"
            fill="#38bdf8"
            style={{ filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.7))' }}
          />
        </svg>
      </div>

      {/* Backdrop */}
      <span
        className={`bg ${isAwardsModalOpen ? 'active' : ''}`}
        onClick={() => setIsAwardsModalOpen(false)}
      />

      {/* Modal Popup Window */}
      <div className={`modal-wraper ${isAwardsModalOpen ? 'active' : ''}`}>
        <div className="inner">
          <h3 className="h-medium">Awards</h3>

          <div className="table-wrapper">
            <div className="header">
              <p>Award</p>
              <p>Contest</p>
              <p>Date</p>
            </div>
            {AWARDS_LIST.map((item, index) => (
              <div key={index} className="award">
                <p>{item.award}</p>
                <p>{item.contest}</p>
                <p>{item.date}</p>
              </div>
            ))}
          </div>

          <div className="bottom-row">
            <div className="certifications">
              <h3 className="h-medium mt">Certifications</h3>
              <img
                src="/imgs/luma-certifications.svg"
                alt="Certifications"
                className="certifications"
                style={{ filter: 'brightness(0) invert(1)', maxWidth: '280px', marginTop: '16px' }}
              />
            </div>
          </div>

          {/* Close Button */}
          <div
            className="close-button"
            onClick={() => setIsAwardsModalOpen(false)}
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
              <circle cx="22.5" cy="22.5" r="22.5" fill="#2A2A2A" />
              <path
                d="M16 16L22.4175 22.3699L16 28.7278"
                stroke="white"
                strokeWidth="1.6"
                strokeMiterlimit="10"
              />
              <path
                d="M29.418 16L23.0004 22.3699L29.418 28.7278"
                stroke="white"
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
