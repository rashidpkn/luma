import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Inline styles for the 3D credit-card scene ─── */
const sceneStyle: React.CSSProperties = {
  perspective: '1200px',
  width: '100%',
  maxWidth: '420px',
  aspectRatio: '1.586 / 1',       /* standard card ratio */
  margin: '0 auto',
};

const cardInnerStyle: React.CSSProperties = {
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
  borderRadius: '18px',
  backfaceVisibility: 'hidden',
  padding: 'clamp(22px, 3vw, 36px)',
  overflow: 'hidden',
};

/* ─── front ─── */
const frontStyle: React.CSSProperties = {
  ...faceBase,
  background: 'linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #143d6b 70%, #1a5496 100%)',
  boxShadow:
    '0 25px 60px -12px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

/* ─── back ─── */
const backStyle: React.CSSProperties = {
  ...faceBase,
  background: 'linear-gradient(135deg, #1a5496 0%, #143d6b 40%, #0d2847 70%, #0a1628 100%)',
  boxShadow:
    '0 25px 60px -12px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)',
  transform: 'rotateY(180deg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: 0,
};

/* ─── holographic shimmer overlay ─── */
const shimmerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  borderRadius: '18px',
  background:
    'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)',
  backgroundSize: '200% 100%',
  pointerEvents: 'none',
  zIndex: 10,
};

export const GlobalSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardInnerRef.current) return;

    const ctx = gsap.context(() => {
      /* ── Pinned flip: pin → show front → flip to back → unpin ── */
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
        cardInnerRef.current,
        { rotateY: 0, rotateX: 0, scale: 1 },
        { rotateY: 0, rotateX: 0, scale: 1, duration: 1.5 }
      )
        /* Phase 2: flip to back (180°) */
        .to(cardInnerRef.current, {
          rotateY: 180,
          duration: 3,
          ease: 'power2.inOut',
        })
        /* Phase 3: brief hold on back face before unpin */
        .to(cardInnerRef.current, { duration: 1 });

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
      gsap.to(cardInnerRef.current, {
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
      className="block-countries-global"
      style={{
        backgroundColor: '#2581E9',
        background: '#2581E9',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.22)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
        paddingTop: 'clamp(60px, 10vw, 180px)',
        paddingBottom: 'clamp(60px, 10vw, 180px)',
        overflow: 'hidden',
      }}
    >
      {/* Huge Background Watermark Marquee */}
      <div className="bg-text-container select-none" style={{ opacity: 0.55 }}>
        <div className="bg-text-wrapper flex whitespace-nowrap animate-marquee">
          <span className="bg-text text-8xl font-black uppercase" style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.25)', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
            — CANADA — UNITED KINGDOM — EUROPEAN UNION — UNITED STATES — AUSTRALIA — GLOBAL CORRIDORS&nbsp;
          </span>
          <span className="bg-text text-8xl font-black uppercase" style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.25)', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
            — CANADA — UNITED KINGDOM — EUROPEAN UNION — UNITED STATES — AUSTRALIA — GLOBAL CORRIDORS&nbsp;
          </span>
        </div>
      </div>

      <div className="row align-middle relative z-10">
        {/* Left Column: Story */}
        <div className="xxlarge-6 xxlarge-offset-1 small-16 small-offset-0 columns">
          <h2 className="h-large" style={{ color: '#ffffff' }}>
            <span className="block">Serving clients across</span>
            <span className="block" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>global corridors.</span>
          </h2>

          <div className="p-big mt-6 space-y-4" style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
            <p className="font-semibold" style={{ color: '#ffffff' }}>Seamless multi-currency cross-border trade.</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
              Luma Pay connects commercial enterprises across Canada, the United Kingdom, the European Union (Germany, the Netherlands, Ireland), the United States, and Australia.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
              Collect settlements in CAD, GBP, EUR, or USD and pay international vendors with local-currency rails, transparent exchange rates, and predictable settlement timelines.
            </p>
          </div>
        </div>

        {/* Right Column: 3D Credit Card Animation */}
        <div className="xxlarge-6 xxlarge-offset-2 small-16 small-offset-0 columns flex flex-col items-center" style={{ marginTop: 'clamp(40px, 4vw, 0px)' }}>
          {/* 3D scene */}
          <div style={sceneStyle}>
            <div ref={cardInnerRef} style={cardInnerStyle}>

              {/* ── FRONT FACE ── */}
              <div style={frontStyle}>
                {/* shimmer overlay */}
                <div ref={shimmerRef} style={shimmerStyle} />

                {/* top row: logo + contactless */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                  {/* Luma Pay logo */}
                  <img
                    src="/logos/logo-white.png"
                    alt="Luma Pay"
                    style={{
                      height: 'clamp(22px, 2.5vw, 32px)',
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'brightness(1.1)',
                    }}
                  />

                  {/* contactless icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.6 }}>
                    <path d="M7.5 17.5C5.5 15.5 5.5 8.5 7.5 6.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M11 15C9.8 13.8 9.8 10.2 11 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14.5 12.5C14 12 14 11 14.5 10.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* chip */}
                <div style={{ position: 'relative', zIndex: 2, marginTop: 'clamp(10px, 2vw, 18px)' }}>
                  <svg width="50" height="38" viewBox="0 0 50 38" fill="none">
                    <rect x="1" y="1" width="48" height="36" rx="6" fill="url(#chipGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <line x1="1" y1="14" x2="49" y2="14" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                    <line x1="1" y1="24" x2="49" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                    <line x1="25" y1="1" x2="25" y2="37" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                    <defs>
                      <linearGradient id="chipGrad" x1="0" y1="0" x2="50" y2="38">
                        <stop offset="0%" stopColor="#c9a84c" />
                        <stop offset="50%" stopColor="#f5d98a" />
                        <stop offset="100%" stopColor="#c9a84c" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* card number */}
                <div style={{ position: 'relative', zIndex: 2, marginTop: 'clamp(14px, 2.5vw, 24px)' }}>
                  <span style={{
                    fontFamily: '"SF Mono", "Fira Code", "Courier New", monospace',
                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.18em',
                    fontWeight: 500,
                  }}>
                    •••• •••• •••• 4829
                  </span>
                </div>

                {/* bottom row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
                  <div>
                    <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '3px' }}>
                      Card Holder
                    </div>
                    <div style={{
                      fontFamily: '"Inter", -apple-system, sans-serif',
                      fontSize: 'clamp(12px, 1.2vw, 15px)',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}>
                      LUMA ENTERPRISE
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '3px' }}>
                      Expires
                    </div>
                    <div style={{
                      fontFamily: '"Inter", -apple-system, sans-serif',
                      fontSize: 'clamp(12px, 1.2vw, 15px)',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                    }}>
                      09/29
                    </div>
                  </div>
                  {/* card network logo – two overlapping circles (Mastercard style) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '-8px', opacity: 0.7 }}>
                    <svg width="44" height="28" viewBox="0 0 44 28" fill="none">
                      <circle cx="16" cy="14" r="12" fill="rgba(255,90,55,0.85)" />
                      <circle cx="28" cy="14" r="12" fill="rgba(255,185,50,0.85)" />
                      <path d="M22 4.5C24.5 6.8 26 10.2 26 14C26 17.8 24.5 21.2 22 23.5C19.5 21.2 18 17.8 18 14C18 10.2 19.5 6.8 22 4.5Z" fill="rgba(255,140,50,0.9)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── BACK FACE ── */}
              <div style={backStyle}>
                {/* magnetic stripe */}
                <div style={{
                  width: '100%',
                  height: '52px',
                  background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)',
                  marginTop: '28px',
                }} />
                {/* signature strip + CVV */}
                <div style={{ padding: 'clamp(16px, 2vw, 28px) clamp(22px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      flex: 1,
                      height: '38px',
                      background: 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
                      borderRadius: '4px',
                      backdropFilter: 'blur(4px)',
                    }} />
                    <div style={{
                      fontFamily: '"SF Mono", "Fira Code", monospace',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      letterSpacing: '0.2em',
                      fontWeight: 600,
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '4px',
                      padding: '8px 14px',
                    }}>
                      •••
                    </div>
                  </div>
                  <p style={{
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.35)',
                    lineHeight: 1.5,
                    margin: 0,
                    fontFamily: '"Inter", -apple-system, sans-serif',
                  }}>
                    This card is issued by Luma Financial Technologies pursuant to a license. Use of this card constitutes acceptance of the cardholder agreement.
                  </p>
                  {/* bottom bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px' }}>
                    <img
                      src="/logos/logo-white.png"
                      alt="Luma Pay"
                      style={{
                        height: '16px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.5,
                      }}
                    />
                    <span style={{
                      fontSize: '9px',
                      color: 'rgba(255,255,255,0.3)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>
                      lumapay.io
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
