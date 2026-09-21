import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NAMES_DATA = [
  { name: 'Michael', color: '#D97706' },
  { name: 'Linda', color: '#059669' },
  { name: 'James', color: '#1D4ED8' },
  { name: 'Sarah', color: '#EA580C' },
  { name: 'William', color: '#4F46E5' },
  { name: 'Rebecca', color: '#0284C7' },
];

export const SliderNames: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const namesRegularWrapperRef = useRef<HTMLDivElement>(null);
  const namesRegularListRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nameEl = document.querySelector('.slider-names .name-regular') as HTMLElement | null;
      if (!nameEl) return;

      const singleHeight = nameEl.offsetHeight || 96;
      const totalCount = NAMES_DATA.length;

      gsap.set('.slider-names .names-list-regular-wrapper', { height: singleHeight });

      const namesRegular = gsap.utils.toArray<HTMLElement>('.slider-names .name-regular');
      let counter = 0;
      let delayedCall: gsap.core.Tween | null = null;

      const cycle = () => {
        gsap.timeline()
          .to(namesRegular, {
            duration: 1.2,
            y: `-=${singleHeight}`,
            ease: 'power2.inOut',
            willChange: 'transform',
            force3D: true,
          })
          .set(namesRegular[0], {
            y: `+=${singleHeight * namesRegular.length}`,
          });

        const first = namesRegular.shift();
        if (first) namesRegular.push(first);

        counter++;
        delayedCall = gsap.delayedCall(2.2, cycle);
      };

      delayedCall = gsap.delayedCall(2.2, cycle);

      return () => {
        if (delayedCall) delayedCall.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-logo-color="black" className="slider-names">
      <style>{`
        .slider-names {
          background-color: #C2F1FF !important;
          border-top: 1px solid rgba(12, 108, 229, 0.18) !important;
          border-bottom: 1px solid rgba(12, 108, 229, 0.18) !important;
          padding: clamp(48px, 6vw, 96px) 0 !important;
          position: relative !important;
          overflow: hidden !important;
          height: auto !important;
        }

        .slider-names:before,
        .slider-names:after,
        .slider-names .names-list-container {
          display: none !important;
          content: none !important;
        }

        .slider-names-container {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          width: 100% !important;
          gap: 24px !important;
        }

        .slider-names-left {
          display: inline-flex !important;
          flex-direction: row !important;
          align-items: center !important;
          position: relative !important;
          gap: 0 !important;
        }

        .slider-names-title {
          color: #0f172a !important;
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: clamp(32px, 5.2vw, 84px) !important;
          line-height: 1.15 !important;
          letter-spacing: -0.02em !important;
          white-space: nowrap !important;
        }

        .slider-names .names-list-regular-wrapper {
          position: relative !important;
          left: auto !important;
          top: auto !important;
          display: inline-block !important;
          overflow: hidden !important;
          background-color: transparent !important;
          vertical-align: middle !important;
        }

        .slider-names .names-list-regular {
          display: block !important;
        }

        .slider-names .name-regular {
          display: block !important;
          font-family: helv-bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: clamp(32px, 5.2vw, 84px) !important;
          line-height: 1.15 !important;
          letter-spacing: -0.02em !important;
          white-space: nowrap !important;
          font-weight: 700 !important;
        }

        .slider-names-right .secondary a {
          color: #0c6ce5 !important;
          font-family: helv-bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: clamp(28px, 4.4vw, 72px) !important;
          line-height: 1.15 !important;
          letter-spacing: -0.02em !important;
          text-decoration: underline !important;
          text-underline-offset: 6px !important;
          white-space: nowrap !important;
          transition: opacity 0.2s ease !important;
        }

        .slider-names-right .secondary a:hover {
          opacity: 0.8 !important;
        }

        @media only screen and (max-width: 960px) {
          .slider-names-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
        }
      `}</style>
      <div className="row">
        <div className="xxlarge-16 columns">
          <div className="container slider-names-container">
            <div className="left-column slider-names-left">
              <span className="text slider-names-title">Built for&nbsp;</span>
              <div className="names-list-regular-wrapper" ref={namesRegularWrapperRef}>
                <span className="names-list-regular" ref={namesRegularListRef}>
                  {NAMES_DATA.map((item, i) => (
                    <span
                      key={i}
                      className="name-regular"
                      style={{ color: item.color }}
                    >
                      {item.name}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            <div className="right-column slider-names-right">
              <span className="text secondary">
                <a
                  href="#contact"
                  aria-label="Join Luma Pay"
                >
                  <span className="bold">Join Luma Pay.</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
