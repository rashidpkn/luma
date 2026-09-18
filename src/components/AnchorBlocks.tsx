import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StepItem {
  line1: string;
  line2: string;
}

const STEPS: StepItem[] = [
  { line1: 'Deposit', line2: 'Money' },
  { line1: 'Get an', line2: 'Overview' },
  { line1: 'Send', line2: 'Money' },
  { line1: 'Exchange', line2: 'Money' },
  { line1: 'Spend', line2: 'Money' }
];

export const AnchorBlocks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Set initial line position (hidden above)
    gsap.set(lineRef.current, { yPercent: -100 });

    const progressLine = gsap.timeline({ paused: true }).to(lineRef.current, {
      duration: 1,
      yPercent: 0,
      force3D: true,
      willChange: 'transform',
      ease: 'none'
    });

    const fixAnchor = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      endTrigger: '.block-get-paid',
      onUpdate: (self) => {
        const progress = self.progress;

        // Map progress to line:
        // SaveTime occupies 0.0 to ~0.80 across 4 steps (0, 1, 2, 3)
        // GetPaid occupies >= 0.80 as step 4 (Spend Money)
        let lineProg = 0;
        if (progress < 0.80) {
          lineProg = (progress / 0.80) * 0.75;
        } else if (progress < 0.86) {
          lineProg = 0.75 + ((progress - 0.80) / 0.06) * 0.25;
        } else {
          lineProg = 1;
        }
        progressLine.progress(Math.min(1, Math.max(0, lineProg)));

        const items = containerRef.current?.querySelectorAll('.anchor-list-item');
        if (!items) return;

        items.forEach((item, idx) => {
          let active = false;
          let passed = false;

          if (progress < 0.20) {
            active = idx === 0;
            passed = false;
          } else if (progress >= 0.20 && progress < 0.40) {
            active = idx === 1;
            passed = idx < 1;
          } else if (progress >= 0.40 && progress < 0.60) {
            active = idx === 2;
            passed = idx < 2;
          } else if (progress >= 0.60 && progress < 0.80) {
            active = idx === 3;
            passed = idx < 3;
          } else {
            // In block-get-paid (Step 5: Spend Money)
            active = idx === 4;
            passed = idx < 4;
          }

          if (active) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }

          if (passed) {
            item.classList.add('passed');
          } else {
            item.classList.remove('passed');
          }
        });
      }
    });

    // Toggle white theme when entering block-get-paid
    const changeColor = ScrollTrigger.create({
      trigger: '.block-get-paid',
      start: 'top 70%',
      toggleClass: { targets: wrapperRef.current, className: 'light' }
    });

    return () => {
      progressLine.kill();
      fixAnchor.kill();
      changeColor.kill();
    };
  }, []);

  const handleScrollToStep = (idx: number) => {
    const saveTimeEl = document.querySelector('.block-save-time') as HTMLElement;
    const getPaidEl = document.querySelector('.block-get-paid') as HTMLElement;
    if (!saveTimeEl) return;

    const saveTop = saveTimeEl.offsetTop;
    const saveHeight = saveTimeEl.offsetHeight;

    if (idx < 4) {
      const stepDistance = (saveHeight - window.innerHeight) / 4;
      window.scrollTo({
        top: saveTop + idx * stepDistance + 10,
        behavior: 'smooth'
      });
    } else if (getPaidEl) {
      window.scrollTo({
        top: getPaidEl.offsetTop + 10,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="anchor-blocks">
      <style>{`
        .anchor-blocks {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }
        .anchor-blocks .anchor-list-container {
          height: 100vh;
          position: relative;
        }
        .anchor-blocks .anchor-list-container .row {
          height: 100%;
          display: flex;
          align-items: center;
        }
        .anchor-blocks .anchor-list-wrapper {
          position: relative;
          width: 100%;
          max-width: 120px;
          margin-left: clamp(20px, 3.5vw, 60px);
        }
        .anchor-blocks .anchor-list-wrapper .line-wrapper {
          background-color: #eaeaea;
          height: 248px;
          left: 4px;
          top: 7px;
          width: 4px;
          position: absolute;
          overflow: hidden;
          z-index: 0;
          transition: background-color .25s ease-out;
        }
        .anchor-blocks .anchor-list-wrapper .line-wrapper .line {
          background-color: #000000;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: background-color .25s ease-out;
        }
        .anchor-blocks .anchor-list-wrapper ul.anchor-list {
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          display: flex;
          flex-direction: column;
          height: 260px;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .anchor-blocks .anchor-list-item {
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .anchor-blocks .anchor-list-item .btn {
          display: flex !important;
          align-items: flex-start !important;
          padding: 0 !important;
          height: auto !important;
          color: #767676;
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 13px;
          line-height: 1.25 !important;
          letter-spacing: -0.01em;
          width: 95px;
          text-align: left;
          cursor: pointer;
          pointer-events: all;
          transition: color .25s ease-out;
          user-select: none;
        }
        .anchor-blocks .anchor-list-item.active .btn {
          color: #000000;
          font-weight: 500;
        }
        .anchor-blocks .anchor-list-item .btn .ball {
          display: block;
          flex-shrink: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 2px solid #eaeaea;
          margin-left: 0 !important;
          margin-right: 14px;
          margin-top: 2px;
          transition: background-color .25s ease-out, border-color .25s ease-out;
          box-sizing: border-box;
        }
        .anchor-blocks .anchor-list-item.passed .btn .ball {
          background-color: #ffffff;
          border: 2px solid #000000;
        }
        .anchor-blocks .anchor-list-item.active .btn .ball {
          background-color: #000000;
          border: 2px solid #000000;
        }
        .anchor-blocks .anchor-list-item .step-text {
          display: flex;
          flex-direction: column;
        }

        /* Dark / Light Section Toggles (.light class) */
        .anchor-blocks .anchor-list-wrapper.light .line-wrapper {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .anchor-blocks .anchor-list-wrapper.light .line-wrapper .line {
          background-color: #ffffff;
        }
        .anchor-blocks .anchor-list-wrapper.light .anchor-list-item .btn {
          color: rgba(255, 255, 255, 0.5);
        }
        .anchor-blocks .anchor-list-wrapper.light .anchor-list-item.active .btn {
          color: #ffffff;
        }
        .anchor-blocks .anchor-list-wrapper.light .anchor-list-item .btn .ball {
          background-color: transparent;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .anchor-blocks .anchor-list-wrapper.light .anchor-list-item.passed .btn .ball {
          background-color: transparent;
          border-color: #ffffff;
        }
        .anchor-blocks .anchor-list-wrapper.light .anchor-list-item.active .btn .ball {
          background-color: #ffffff;
          border-color: #ffffff;
        }
      `}</style>

      <div className="anchor-list-container">
        <div className="row">
          <div className="xxlarge-16 columns">
            <div ref={wrapperRef} className="anchor-list-wrapper">
              <span className="line-wrapper">
                <span ref={lineRef} className="line" />
              </span>
              <ul className="anchor-list">
                {STEPS.map((step, i) => (
                  <li
                    key={i}
                    className={`anchor-list-item ${i === 0 ? 'active' : ''} ${i === STEPS.length - 1 ? 'last' : ''}`}
                    onClick={() => handleScrollToStep(i)}
                  >
                    <span className="btn p-caption">
                      <span className="ball" />
                      <span className="step-text">
                        <span>{step.line1}</span>
                        <span>{step.line2}</span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
