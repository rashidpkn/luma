import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SaveTimeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const fixedWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !fixedWrapperRef.current) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 961px)', () => {
      // Pin .fixed-wrapper inside .block-save-time for its full 600vh scroll
      ScrollTrigger.create({
        trigger: fixedWrapperRef.current,
        start: 'top top',
        end: 'bottom bottom',
        endTrigger: sectionRef.current,
        pin: true,
        pinSpacing: false
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-logo-color="white"
      className="block-save-time border-0!"
    >
      <style>{`
        .block-save-time {
          background-color: #2580E8 !important;
          background: #2580E8 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.22) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.22) !important;
          position: relative;
        }
        .block-save-time .fixed-wrapper .title-wrapper {
          position: relative;
          min-height: 170px;
        }
        .block-save-time .fixed-wrapper .title-wrapper h2 {
          color: #ffffff !important;
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(48px, 4.47vw, 76px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          font-weight: 400;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          left: 0;
          top: 0;
          margin: 0;
        }
        .block-save-time .fixed-wrapper .title-wrapper h2 .title-line-1 {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          white-space: nowrap;
          color: #ffffff !important;
        }
        .block-save-time .fixed-wrapper .title-wrapper h2 .title-line-2 {
          display: block;
          color: #ffffff !important;
        }
        .block-save-time .fixed-wrapper .title-wrapper h2 .anime-container {
          position: static !important;
          display: inline-block !important;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          top: auto !important;
          right: auto !important;
          vertical-align: middle;
        }
        .block-save-time .fixed-wrapper .text-wrapper {
          margin-top: 32px;
          max-width: 440px;
          position: relative;
          min-height: 95px;
        }
        .block-save-time .fixed-wrapper .text-wrapper p {
          color: rgba(255, 255, 255, 0.92) !important;
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(18px, 1.41vw, 24px);
          line-height: 1.35;
          letter-spacing: -0.01em;
          font-weight: 400;
          margin: 0;
          left: 0;
          top: 0;
        }
      `}</style>

      <div ref={fixedWrapperRef} className="fixed-wrapper">
        <div className="row">
          <div className="xxlarge-7 xxlarge-offset-2 columns">
            <div className="title-wrapper">
              {/* Step 1 Title */}
              <h2 className="h-large title-1">
                <span className="title-line-1">
                  <span>Activate in</span>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="anime-container"
                  >
                    <path
                      d="M25.6667 50.1669H35C41.5987 50.1669 44.9003 50.1669 46.949 48.1159C49 46.0672 49 42.7655 49 36.1669V33.8335C49 27.2349 49 23.9332 46.949 21.8845C44.9003 19.8335 41.5987 19.8335 35 19.8335H7.00001M7.00001 19.8335V31.5002M7.00001 19.8335C6.99858 19.2304 7.16416 18.6387 7.4784 18.1239C7.79263 17.609 8.24326 17.1913 8.78034 16.9169L29.5237 6.24887C30.0964 5.95396 30.7354 5.81131 31.3792 5.83461C32.023 5.85792 32.65 6.0464 33.2 6.38194C33.7499 6.71749 34.2044 7.18882 34.5196 7.75066C34.8348 8.3125 35.0002 8.94597 35 9.5902V19.8289"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.8333 36.1666C41.1428 36.1666 41.4395 36.0437 41.6583 35.8249C41.8771 35.6061 42 35.3093 42 34.9999C42 34.6905 41.8771 34.3938 41.6583 34.175C41.4395 33.9562 41.1428 33.8333 40.8333 33.8333M40.8333 36.1666C40.5239 36.1666 40.2272 36.0437 40.0084 35.8249C39.7896 35.6061 39.6667 35.3093 39.6667 34.9999C39.6667 34.6905 39.7896 34.3938 40.0084 34.175C40.2272 33.9562 40.5239 33.8333 40.8333 33.8333M40.8333 36.1666V33.8333M23.3333 41.9999H15.1667M15.1667 41.9999H7M15.1667 41.9999V33.8333M15.1667 41.9999V50.1666"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="title-line-2">minutes</span>
              </h2>

              {/* Step 2 Title */}
              <h2 className="h-large title-2">
                <span className="title-line-1">
                  <span>Portfolio</span>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="anime-container"
                  >
                    <path
                      d="M9.10461 36.9966L5.09615 33.3685V2.10333H33.2841V7.56831V8.15614V19.9679H35.3894V9.67164H40.8413L37.6235 0H3V34.3054L9.11382 39.8439L14.1152 35.2974L18.804 40L20.2934 38.5121L14.1795 32.3949L9.10461 36.9966ZM37.9361 7.56831H35.3986V2.10333H36.1157L37.9361 7.56831Z"
                      fill="#ffffff"
                    />
                    <path d="M28.0336 7.56836H10.3633V9.67169H28.0336V7.56836Z" fill="#ffffff" />
                    <path d="M22.9862 17.6533H10.3633V19.7567H22.9862V17.6533Z" fill="#ffffff" />
                    <path d="M20.458 12.6108H10.3633V14.7142H20.458V12.6108Z" fill="#ffffff" />
                    <path
                      d="M30.0573 22.6958C25.3041 22.6958 21.4336 26.5626 21.4336 31.3112C21.4336 36.0598 25.3041 39.9266 30.0573 39.9266C34.8104 39.9266 38.681 36.0598 38.681 31.3112C38.681 26.5626 34.8196 22.6958 30.0573 22.6958ZM30.0573 37.8324C26.4625 37.8324 23.5389 34.9116 23.5389 31.3204C23.5389 27.7291 26.4625 24.8083 30.0573 24.8083C33.652 24.8083 36.5756 27.7291 36.5756 31.3204C36.5756 34.9116 33.652 37.8324 30.0573 37.8324Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M29.1833 31.8805L27.6755 30.3833L26.1953 31.8713L29.1833 34.8472L33.964 30.0802L32.4746 28.5923L29.1833 31.8805Z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
                <span className="title-line-2">overview</span>
              </h2>

              {/* Step 3 Title */}
              <h2 className="h-large title-3">
                <span className="title-line-1">
                  <span>Settle funds</span>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="anime-container"
                  >
                    <path
                      d="M5.3877 41.5136C10.521 41.5136 14.6814 45.6693 14.6814 50.8026M42.6814 50.805V50.5903C42.6814 49.3983 42.9161 48.218 43.3723 47.1168C43.8284 46.0156 44.497 45.015 45.3399 44.1721C46.1827 43.3293 47.1833 42.6607 48.2845 42.2046C49.3858 41.7484 50.5661 41.5136 51.758 41.5136M14.6814 18.22C14.6814 23.3533 10.521 27.5113 5.3877 27.5113M42.6814 18.22C42.6814 23.3066 46.809 27.439 51.8794 27.5113"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.3477 18.1825C45.4227 18.2105 48.1713 18.4368 49.9633 20.2288C52.0143 22.2798 52.0143 25.5792 52.0143 32.1778V36.8445C52.0143 43.4455 52.0143 46.7448 49.9633 48.7958C47.9147 50.8445 44.613 50.8445 38.0143 50.8445H19.3477C12.749 50.8445 9.44732 50.8445 7.39866 48.7958C5.34766 46.7402 5.34766 43.4455 5.34766 36.8445V32.1778C5.34766 25.5792 5.34766 22.2798 7.39866 20.2288C9.19066 18.4368 11.9393 18.2105 17.0143 18.1802"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.8473 12.3492C22.8473 12.3492 27.0473 6.51587 28.6807 6.51587C30.314 6.51587 34.514 12.3492 34.514 12.3492M28.6807 19.3492V7.68254M35.6807 34.5135C35.6807 36.3701 34.9432 38.1505 33.6304 39.4633C32.3177 40.776 30.5372 41.5135 28.6807 41.5135C26.8241 41.5135 25.0437 40.776 23.7309 39.4633C22.4182 38.1505 21.6807 36.3701 21.6807 34.5135C21.6807 32.657 22.4182 30.8765 23.7309 29.5638C25.0437 28.251 26.8241 27.5135 28.6807 27.5135C30.5372 27.5135 32.3177 28.251 33.6304 29.5638C34.9432 30.8765 35.6807 32.657 35.6807 34.5135Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="title-line-2">globally</span>
              </h2>

              {/* Step 4 Title */}
              <h2 className="h-large title-4">
                <span className="title-line-1">
                  <span>Exchange at</span>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="anime-container"
                  >
                    <path
                      d="M7 28C7 20.2603 13.2603 14 21 14L18.6667 18.6667M49 28C49 35.7397 42.7397 42 35 42L37.3333 37.3333M42 21H35C31.7007 21 30.051 21 29.0267 19.9733C28 18.9513 28 17.3017 28 14C28 10.6983 28 9.051 29.0267 8.02667C30.0487 7 31.6983 7 35 7H42C45.2993 7 46.949 7 47.9733 8.02667C49 9.04867 49 10.6983 49 14C49 17.3017 49 18.949 47.9733 19.9733C46.9513 21 45.3017 21 42 21ZM21 49H14C10.7007 49 9.051 49 8.02667 47.9733C7 46.9513 7 45.3017 7 42C7 38.6983 7 37.051 8.02667 36.0267C9.04867 35 10.6983 35 14 35H21C24.2993 35 25.949 35 26.9733 36.0267C28 37.051 28 38.7007 28 42C28 45.2993 28 46.949 26.9733 47.9733C25.9513 49 24.3017 49 21 49Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M38.5 14H38.521M17.5 42H17.521"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="title-line-2">live rates</span>
              </h2>
            </div>

            <div className="text-wrapper">
              <p className="p-big text-1">
                Submit your business profile and complete streamlined KYC/AML verification. Receive dedicated multi-currency accounts ready to collect funds worldwide.
              </p>
              <p className="p-big text-2">
                Gain real-time visibility across all currency balances. Monitor cash flows, track incoming remittances, and oversee liquidity from one intuitive view.
              </p>
              <p className="p-big text-3">
                Disburse funds to international vendors, contractors, and partners across our supported corridors with rapid domestic clearing and reduced fees.
              </p>
              <p className="p-big text-4">
                Access institutional liquidity with competitive exchange spreads. Execute transparent foreign exchange conversions with zero hidden markups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
