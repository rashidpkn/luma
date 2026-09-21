import React, { useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const GlobalSection: React.FC = () => {
  const { isAudioActive, toggleAudio } = useApp();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <section
      data-logo-color="white"
      className="block-countries-global"
      style={{
        backgroundColor: '#000',
        position: 'relative',
        paddingTop: 'clamp(60px, 10vw, 180px)',
        paddingBottom: 'clamp(60px, 10vw, 180px)',
        overflow: 'hidden'
      }}
    >
      {/* Huge Background Watermark Marquee */}
      <div className="bg-text-container select-none opacity-20">
        <div className="bg-text-wrapper flex whitespace-nowrap animate-marquee">
          <span className="bg-text text-8xl font-black uppercase text-transparent stroke-white" style={{ WebkitTextStroke: '1px #fff' }}>
            — CANADA — UNITED KINGDOM — EUROPEAN UNION — UNITED STATES — AUSTRALIA — GLOBAL CORRIDORS&nbsp;
          </span>
          <span className="bg-text text-8xl font-black uppercase text-transparent stroke-white" style={{ WebkitTextStroke: '1px #fff' }}>
            — CANADA — UNITED KINGDOM — EUROPEAN UNION — UNITED STATES — AUSTRALIA — GLOBAL CORRIDORS&nbsp;
          </span>
        </div>
      </div>

      <div className="row align-middle relative z-10">
        {/* Left Column: Story */}
        <div className="xxlarge-6 xxlarge-offset-1 small-16 small-offset-0 columns">
          <h2 className="h-large text-white!">
            <span className="block">Serving clients across</span>
            <span className="block text-gray-400">global corridors.</span>
          </h2>

          <div className="p-big mt-6 text-white! space-y-4">
            <p className="font-semibold text-white!">Seamless multi-currency cross-border trade.</p>
            <p className='text-white!'>
              Luma Pay connects commercial enterprises across Canada, the United Kingdom, the European Union (Germany, the Netherlands, Ireland), the United States, and Australia.
            </p>
            <p className='text-white!'>
              Collect settlements in CAD, GBP, EUR, or USD and pay international vendors with local-currency rails, transparent exchange rates, and predictable settlement timelines.
            </p>
          </div>
        </div>

        {/* Right Column: Globe Video & Sound Button */}
        <div className="xxlarge-6 xxlarge-offset-2 small-16 small-offset-0 columns flex flex-col items-center">
          <div className="globe-wrapper relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
            <video
              ref={videoRef}
              muted
              playsInline
              loop
              autoPlay
              className="w-full h-full object-cover scale-110"
            >
              <source src="/videos/glocal.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Interactive Audio Button */}
          <button
            type="button"
            aria-label="Audio Button"
            className={`audio-btn mt-8 ${isAudioActive ? 'is-on' : ''}`}
            onClick={toggleAudio}
            style={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '25px',
              backgroundColor: isAudioActive ? '#2d2d2d' : '#1a1a1a',
              padding: '6px 18px',
              border: '1px solid rgba(255,255,255,0.15)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          >
            <span className="icon mr-2">
              <svg viewBox="0 0 19 14" width="19" height="14" className="audio-icon">
                <path
                  d="M1 8.8V5.5C1 5 1.4 4.7 1.8 4.7H4C4.2 4.7 4.4 4.6 4.5 4.5L7.9 2.3C8.5 1.9 9.2 2.3 9.2 2.9V11.4C9.2 12 8.5 12.4 7.9 12L4.5 9.8C4.4 9.7 4.2 9.6 4 9.6H1.8C1.4 9.6 1 9.3 1 8.8Z"
                  stroke="white"
                  fill="#171717"
                  strokeWidth="1.5"
                />
                {isAudioActive ? (
                  <g className="on">
                    <path
                      d="M12.9 3.5C12.9 3.5 14.1 4.7 14.1 6.8C14.1 8.8 12.9 10 12.9 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15.4 1C15.4 1 17.4 3.1 17.4 6.8C17.4 10.4 15.4 12.5 15.4 12.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                ) : (
                  <g className="off">
                    <path
                      d="M14.1 6.2L15.8 7.8M12.5 7.8L14.1 6.2M15.8 4.5L14.1 6.2M14.1 6.2L12.5 4.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                )}
              </svg>
            </span>
            <span className="label-wrapper text-xs text-white uppercase tracking-wider font-semibold">
              {isAudioActive ? 'Mute Sound' : 'Better with Sound'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
