import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── 4-Point Star Sparkle matching the reference image ─── */
const SparkleStar: React.FC<{ style: React.CSSProperties; color?: string; size?: number }> = ({
  style,
  color = '#ffffff',
  size = 28,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    style={{
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      pointerEvents: 'none',
      zIndex: 6,
      ...style,
    }}
  >
    <path
      d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
      fill={color}
      style={{ filter: `drop-shadow(0 0 8px ${color})` }}
    />
  </svg>
);

/* ─── Inline styles for the 3D BTC Coin scene ─── */
const sceneStyle: React.CSSProperties = {
  perspective: '1200px',
  width: 'clamp(280px, 28vw, 380px)',
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
  backfaceVisibility: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
};

/* ─── front face ─── */
const frontStyle: React.CSSProperties = {
  ...faceBase,
};

/* ─── back face ─── */
const backStyle: React.CSSProperties = {
  ...faceBase,
  transform: 'rotateY(180deg)',
};

/* ─── subtle light sweep overlay ─── */
const shimmerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: '6%',
  borderRadius: '50%',
  background:
    'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)',
  backgroundSize: '200% 100%',
  pointerEvents: 'none',
  zIndex: 4,
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
        backgroundColor: '#2580E8',
        background: '#2580E8',
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
            {/* Ambient warm glow behind the coin */}
            <div
              style={{
                position: 'absolute',
                inset: '5%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(247, 147, 26, 0.35) 0%, rgba(247, 147, 26, 0.1) 45%, transparent 70%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Sparkle Glints matching the second reference image */}
            <SparkleStar
              style={{ top: '6%', right: '10%' }}
              color="rgba(255, 245, 220, 0.95)"
              size={32}
            />
            <SparkleStar
              style={{ bottom: '22%', left: '0%' }}
              color="rgba(255, 225, 140, 0.9)"
              size={24}
            />

            <div ref={coinInnerRef} style={coinInnerStyle}>
              {/* ── FRONT FACE: REAL 3D BITCOIN (BTC) COIN ── */}
              <div style={frontStyle}>
                {/* shimmer overlay */}
                <div ref={shimmerRef} style={shimmerStyle} />

                <img
                  src="/imgs/noborders/coin_6.png"
                  alt="Bitcoin (BTC)"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                />
              </div>

              {/* ── BACK FACE: REAL 3D BITCOIN (BTC) COIN ── */}
              <div style={backStyle}>
                <img
                  src="/imgs/noborders/coin_6.png"
                  alt="Bitcoin (BTC)"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                />
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
