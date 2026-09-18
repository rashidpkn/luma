import React from 'react';

export const GetPaidSection: React.FC = () => {
  return (
    <section
      data-logo-color="white"
      className="block-get-paid no-clients"
      style={{
        backgroundColor: '#000',
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '120px',
        overflow: 'hidden'
      }}
    >
      {/* Background Cover Overlay */}
      <div className="video-wrapper">
        <div className="block-bg-cover">
          <img
            alt="Spend anywhere. Stay in control."
            src="https://cdn.sanity.io/images/1ib26v3b/new/29a92889f018458789ceb213209d2295f16337d4-3840x2160.jpg?auto=format&q=100"
            className="element-cover"
            style={{ opacity: 0.4 }}
          />
        </div>
      </div>

      <div className="row relative z-10">
        <div className="xxlarge-12 xxlarge-offset-2 small-16 small-offset-0 columns">
          <h2 className="h-large text-white font-normal" style={{ whiteSpace: 'pre-line' }}>
            Spend anywhere.{'\n'}Stay in control.
          </h2>

          <div className="p-big mt-4 text-gray-300 max-w-xl">
            <p>
              Use your Luma physical or virtual Luma debit card for purchases in all merchants and terminals, which accepts Master cards.
            </p>
          </div>

          {/* Realistic Browser / Terminal Frame with Video and Screenshots */}
          <div className="browser-wrapper mt-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
            <div className="video-wrapper" style={{ minHeight: '420px', position: 'relative' }}>
              <div className="block-bg-cover">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="element-cover w-full h-full object-cover"
                >
                  <source
                    src="https://cdn.sanity.io/files/1ib26v3b/new/a6c56ffe5712d367966a9820d591221b813f0221.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            {/* Desktop Mockup Overlay */}
            <img
              alt="Payment Method"
              src="https://cdn.sanity.io/images/1ib26v3b/new/e7eec72eab1b198d80f3860e6d0a7b157e98d0eb-2366x1614.png?auto=format"
              className="desktop hidden md:block w-full pointer-events-none"
            />
            {/* Mobile Mockup Overlay */}
            <img
              alt="Invoice Payment"
              src="https://cdn.sanity.io/images/1ib26v3b/new/9c005840c488a0f13b7718eab0f6f1f2ae18d6b2-565x1005.png?auto=format"
              className="mobile block md:hidden w-full pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-helper-wrapper">
        <div className="scroll-helper visible">
          <svg width="18" height="27" viewBox="0 0 18 27" fill="none">
            <rect x="1" y="5" width="16" height="21" rx="5" stroke="white" strokeWidth="2" />
            <line x1="9" y1="9" x2="9" y2="14" stroke="white" strokeWidth="2" />
          </svg>
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>Scrooooll</span>
        </div>
      </div>
    </section>
  );
};
