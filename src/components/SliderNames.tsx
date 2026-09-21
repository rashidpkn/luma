import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NAMES_DATA = [
  { name: 'Michael', color: '#F6CF55' },
  { name: 'Linda', color: '#4DA29E' },
  { name: 'James', color: '#96A24D' },
  { name: 'Sarah', color: '#F1AE5E' },
  { name: 'William', color: '#051BF5' },
  { name: 'Rebecca', color: '#61A8EF' },
];

export const SliderNames: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const namesListWrapperRef = useRef<HTMLDivElement>(null);
  const namesRegularWrapperRef = useRef<HTMLDivElement>(null);
  const namesRegularListRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const namesListEl = document.querySelector('.slider-names .names-list .name') as HTMLElement | null;
      if (!namesListEl) return;

      const singleHeight = namesListEl.offsetHeight || 110;
      const totalCount = NAMES_DATA.length;
      const offset = singleHeight * totalCount;

      if (window.innerWidth > 960) {
        gsap.set('.slider-names .names-list-container', { y: -offset });
      } else {
        gsap.set('.slider-names .names-list-container', { y: -singleHeight });
      }

      gsap.set('.slider-names .names-list-regular-wrapper', { height: singleHeight });

      const namesRegular = gsap.utils.toArray<HTMLElement>('.slider-names .name-regular');
      let counter = 0;
      let delayedCall: gsap.core.Tween | null = null;

      const cycle = () => {
        if (counter >= totalCount) {
          gsap.set('.slider-names .names-list-wrapper', { clearProps: 'all' });
          counter = 0;
        }

        gsap.to('.slider-names .names-list-wrapper', {
          duration: 1.5,
          y: `-=${singleHeight}`,
          ease: 'power2.inOut',
          willChange: 'transform',
          force3D: true,
        });

        gsap.timeline()
          .to(namesRegular, {
            duration: 1.5,
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
    <section ref={sectionRef} data-logo-color="white" className="slider-names">
      <div className="row">
        <div className="xxlarge-16 columns">
          <div className="container">
            <div className="left-column">
              <span className="text text-white!">Free for&nbsp;</span>
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
              <div className="names-list-container">
                <div className="names-list-wrapper" ref={namesListWrapperRef}>
                  {[0, 1, 2].map((copyIndex) => (
                    <span key={copyIndex} className="names-list">
                      {NAMES_DATA.map((item, i) => (
                        <span
                          key={i}
                          className="name"
                          style={{ color: item.color }}
                        >
                          {item.name}
                        </span>
                      ))}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="right-column">
              <span className="text secondary">
                <a
                  href="https://portal.speedy.io/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bold">Join today!</span>
                </a>
              </span>
              {/* <div className="store-wrapper">
                <a
                  href="https://apps.apple.com/tr/app/speedy-io/id1659641134"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on App Store"
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
                  aria-label="Get it on Google Play"
                >
                  <img
                    src="/imgs/google-play.svg"
                    alt="Google Play"
                    style={{ height: '40px', width: 'auto' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
