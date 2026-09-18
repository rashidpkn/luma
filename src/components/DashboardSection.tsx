import React, { useState } from 'react';

export const DashboardSection: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <section data-theme={theme} data-logo-color={theme === 'dark' ? 'white' : 'black'} className="block-dashboard">
      <div className="row align-center">
        <div className="small-14 xsmall-16 columns xxlarge-9">
          <h2 className="h-large">
            <div className="anime-container lottie-anime eye">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '16px' }}>
                <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15s18.54-6.22 22-15c-3.46-8.78-12-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="currentColor"/>
              </svg>
            </div>
            Increase your visibility in spendings.
          </h2>
          <div className="switcher-container">
            <div className="switcher-wrapper">
              <button
                type="button"
                data-theme-btn="dark"
                className={`btn p-normal ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M12 23.5C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.7 23.5 12 18.3 23.5 12 23.5zm0-21c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zM6.8 17.2c2.9 2.9 7.6 2.9 10.5 0s2.9-7.6 0-10.5L6.8 17.2z"></path>
                </svg>
                Dark Theme
              </button>
              <button
                type="button"
                data-theme-btn="light"
                className={`btn p-normal ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M12 23.5C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.7 23.5 12 18.3 23.5 12 23.5zm0-21c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zM6.8 17.2c2.9 2.9 7.6 2.9 10.5 0s2.9-7.6 0-10.5L6.8 17.2z"></path>
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
              alt="Receive Payments Online"
              src="https://cdn.sanity.io/images/1ib26v3b/new/5e4c0bca2a6fa1d924cbca07458e4744605bb216-3416x1920.jpg?auto=format&q=100"
              className={theme === 'dark' ? 'active' : ''}
            />
            <img
              alt="Online Payments"
              src="https://cdn.sanity.io/images/1ib26v3b/new/1ada672083793eb3d8d909560496f5d9d9f16b25-3416x1920.jpg?auto=format&q=100"
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
          <div className="text-container">
            <div className="p-big">
              <p>Pay your business expenses with Luma account without any fees.</p>
              <p>International payments also covered by us for you to expand your business.</p>
              <p>We don’t have any room for human error thus, we automated the process for you to capture, sort and report all your pay outs from the same platform.</p>
            </div>
          </div>
          <div className="btn-wrapper">
            <a href="https://portal.speedy.io/signup" target="_blank" rel="noopener noreferrer" className="btn">
              Sign up today, receive today.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
