import React from 'react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setIsAwardsModalOpen } = useApp();

  return (
    <footer data-logo-color="white">
      <div className="row align-middle main-row">
        <div className="xxlarge-5 xsmall-16 columns left-col">
          <div className="copyright-wrapper social">
            <ul className="social-list">
              <li className="social-list-item">
                <a
                  href="https://www.facebook.com/speedy.ioglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                  <span>
                    <svg viewBox="0 0 38 38">
                      <path
                        d="M23.7 12.5h-9.5c-1 0-1.8.8-1.8 1.8v9.5c0 1 .8 1.8 1.8 1.8h4.7V21h-1.2c-.2 0-.3-.1-.3-.3v-1.5c0-.2.1-.3.3-.3h1.2v-1.4c0-1.7 1-2.6 2.5-2.6h1.2c.2 0 .3.1.3.3v1.3c0 .2-.1.3-.3.3h-.8c-.8 0-1 .4-1 1v1.3h1.8c.2 0 .3.1.3.3l-.2 1.5c0 .1-.1.3-.3.3H21v4.6h2.8c1 0 1.8-.8 1.8-1.8v-9.5c-.1-1.2-.9-2-1.9-2z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://www.instagram.com/speedy.io_global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                  <span>
                    <svg viewBox="0 0 38 38">
                      <path
                        d="M19 13.5h2.7c1.8.1 2.7.9 2.8 2.8v5.4c-.1 1.8-.9 2.7-2.8 2.8h-5.4c-1.8-.1-2.7-1-2.8-2.8V19v-2.7c.1-1.8.9-2.7 2.8-2.8H19zm0-1.2h-2.8c-2.4.1-3.8 1.5-3.9 3.9v5.6c.1 2.4 1.5 3.8 3.9 3.9h5.6c2.4-.1 3.8-1.5 3.9-3.9V19v-2.8c-.1-2.4-1.5-3.8-3.9-3.9H19zm0 3.2c-1.9 0-3.5 1.5-3.5 3.5 0 1.9 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zm0 5.7c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2zm3.6-6.6c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://www.linkedin.com/company/speedy-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  Linkedin
                  <span>
                    <svg viewBox="0 0 38 38">
                      <path
                        d="M15.1 14.1c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.7 0 1.4.6 1.4 1.4zm0 2.4h-2.8v8.8h2.8v-8.8zm4.4 0h-2.8v8.8h2.8v-4.6c0-2.6 3.4-2.8 3.4 0v4.6h2.8v-5.6c0-4.3-5-4.2-6.2-2v-1.2z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-wrapper">
            <p
              className="p-normal awards"
              onClick={() => setIsAwardsModalOpen(true)}
              style={{ cursor: 'pointer' }}
              title="Click to view awards and certifications"
            >
              Awards &amp; Certifications <span>12</span>
            </p>
          </div>
        </div>

        <div className="xxlarge-5 xsmall-16 columns middle-col">
          <img src="/imgs/payment-1.svg" alt="Visa" style={{ height: '24px', width: 'auto' }} />
          <img src="/imgs/payment-2.svg" alt="Mastercard" style={{ height: '32px', width: 'auto' }} />
        </div>

        <div className="xxlarge-5 xsmall-16 columns partnership-wrapper">
          <a
            href="https://www.linkedin.com/posts/speedy-io_fintech-speedyio-zosta%C5%82-nowym-sponsorem-activity-7354189817762447360-cQbI"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <img src="/imgs/partner-1.svg" alt="Official Partner" style={{ height: '48px', width: 'auto' }} />
            <img src="/imgs/partner-2.svg" alt="Official Partner" style={{ height: '48px', width: 'auto' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};
