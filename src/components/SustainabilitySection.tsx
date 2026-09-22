import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Inline styles for the 3D Coin scene ─── */
const sceneStyle: React.CSSProperties = {
  perspective: '1200px',
  width: 'clamp(240px, 24vw, 300px)',
  aspectRatio: '1 / 1',
  margin: '0 auto',
  position: 'relative',
};

const coinInnerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  transformStyle: 'preserve-3d',
  willChange: 'transform',
};

/* ─── shared face base ─── */
const faceBase: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  borderRadius: '50%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

/* ─── front face (Dark Blue) ─── */
const frontStyle: React.CSSProperties = {
  ...faceBase,
  background: 'radial-gradient(ellipse at 35% 28%, #173d69 0%, #0f2b4c 40%, #0a1c33 75%, #050e1a 100%)',
  boxShadow:
    '0 25px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255,255,255,0.1), inset 0 2px 6px rgba(255,255,255,0.3), inset 0 -4px 10px rgba(0,0,0,0.6)',
  border: '2px solid rgba(255, 255, 255, 0.22)',
};

/* ─── back face (Dark Blue) ─── */
const backStyle: React.CSSProperties = {
  ...faceBase,
  background: 'radial-gradient(ellipse at 65% 72%, #173d69 0%, #0f2b4c 40%, #0a1c33 75%, #050e1a 100%)',
  boxShadow:
    '0 25px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255,255,255,0.1), inset 0 2px 6px rgba(255,255,255,0.3), inset 0 -4px 10px rgba(0,0,0,0.6)',
  border: '2px solid rgba(255, 255, 255, 0.22)',
  transform: 'rotateY(180deg)',
};

/* ─── holographic shimmer overlay ─── */
const shimmerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  borderRadius: '50%',
  background:
    'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)',
  backgroundSize: '200% 100%',
  pointerEvents: 'none',
  zIndex: 10,
};

export const SustainabilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const coinInnerRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !coinInnerRef.current) return;

    const ctx = gsap.context(() => {
      /* ── Pinned flip: pin → show front → flip to back → unpin (exact same as card) ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      /* Phase 1: hold front face visible */
      tl.fromTo(
        coinInnerRef.current,
        { rotateY: 0, rotateX: 0, scale: 1 },
        { rotateY: 0, rotateX: 0, scale: 1, duration: 1.5 }
      )
        /* Phase 2: flip to back (180°) */
        .to(coinInnerRef.current, {
          rotateY: 180,
          duration: 3,
          ease: 'power2.inOut',
        })
        /* Phase 3: brief hold on back face before unpin */
        .to(coinInnerRef.current, { duration: 1 });

      /* shimmer sweep synced to the same pinned scroll range */
      if (shimmerRef.current) {
        gsap.fromTo(
          shimmerRef.current,
          { backgroundPosition: '200% 0' },
          {
            backgroundPosition: '-200% 0',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=100%',
              scrub: 1,
            },
          }
        );
      }

      /* subtle continuous float (runs independently of scroll) */
      gsap.to(coinInnerRef.current, {
        y: '+=8',
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-logo-color="white"
      className="block-sustainability"
      style={{
        backgroundColor: '#2581E9',
        background: '#2581E9',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.22)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="row align-middle relative z-10 w-full">
        {/* Left Column: Story */}
        <div className="xxlarge-8 xxlarge-offset-1 small-16 small-offset-0 small-order-2 columns">
          <h2 className="h-medium" style={{ color: '#ffffff' }}>
            <span className="block">Automated treasury growth. Save more on every global payment.</span>
          </h2>
          <div className="p-big mt-4" style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
              Powering transparent cross-border settlements with automated treasury yield. Retain more of your margins with zero hidden foreign exchange fees and automated multi-currency cash flow management.
            </p>
          </div>
        </div>

        {/* Right Column: Coin flip animation */}
        <div className="xxlarge-7 small-16 small-offset-0 small-order-1 columns flex flex-col items-center">
          <div style={sceneStyle}>
            {/* Subtle soft ambient depth */}
            <div
              style={{
                position: 'absolute',
                inset: '-15px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(5, 14, 26, 0.4) 0%, transparent 70%)',
                filter: 'blur(20px)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            <div ref={coinInnerRef} style={coinInnerStyle}>
              {/* ── FRONT FACE (Dark Blue with Logo in Center) ── */}
              <div style={frontStyle}>
                {/* shimmer overlay */}
                <div ref={shimmerRef} style={shimmerStyle} />

                {/* Inner minted concentric rim */}
                <div
                  style={{
                    width: '84%',
                    height: '84%',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255, 255, 255, 0.16)',
                    boxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    padding: '16px',
                  }}
                >
                  <img
                    src="/logos/logo-white.png"
                    alt="Luma Pay"
                    style={{
                      width: '145px',
                      maxWidth: '78%',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.6))',
                    }}
                  />
                </div>
              </div>

              {/* ── BACK FACE (Dark Blue with Logo in Center) ── */}
              <div style={backStyle}>
                {/* Inner minted concentric rim */}
                <div
                  style={{
                    width: '84%',
                    height: '84%',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255, 255, 255, 0.16)',
                    boxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    padding: '16px',
                  }}
                >
                  <img
                    src="/logos/logo-white.png"
                    alt="Luma Pay"
                    style={{
                      width: '145px',
                      maxWidth: '78%',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.6))',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .block-sustainability {
          min-height: 100vh !important;
          height: 100vh !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
        }
        .block-sustainability .image-wrapper { margin-top: 0 !important; }
      `}</style>
    </section>
  );
};
