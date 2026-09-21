import React, { useEffect, useState, useRef } from 'react';

export const SustainabilitySection: React.FC = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = 56;
          const duration = 1500;
          const increment = end / (duration / 30);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      data-logo-color="white"
      className="block-sustainability"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.22)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
        backgroundColor: '#2581E9'
      }}
    >
      <div className="row align-middle">
        <div className="xxlarge-8 xxlarge-offset-1 small-16 small-offset-0 small-order-2 columns">
          <h2 className="h-medium" style={{ color: '#ffffff' }}>
            <span className="block">
              <span>We care about our </span>
              <span className="color-text" style={{ color: '#059669' }}>Mother Earth</span>
              <span> as deeply as we care about your global growth. Through the Luma Pay Eden Project, every cross-border settlement helps plant trees and restore native ecosystems worldwide.</span>
            </span>
          </h2>
          <div className="p-big" style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>Powering sustainable global finance. Partnered with verified conservation leaders, Luma Pay pledges tree planting and carbon offsets alongside your transaction volume.</p>
          </div>
          <a href="#eden-project" className="btn outline" style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.6)' }}>Discover the Eden Project</a>
        </div>
        <div className="xxlarge-7 small-16 small-offset-0 small-order-1 columns">
          <div className="image-wrapper">
            <div className="tree-counter">
              <span className="h-small number">{hasAnimated ? count : 56}</span>
              <span className="p-normal text">Planted Trees</span>
            </div>
            <img
              alt="Invoice payment"
              src="https://cdn.sanity.io/images/1ib26v3b/new/5b449bf7af3125c3d6953daab8f3a71eaccde557-1360x1360.png?auto=format"
              className="image"
            />
          </div>
        </div>
      </div>
      <style>{`
        .block-sustainability .image-wrapper {
          margin-top: 0 !important;
        }
      `}</style>
    </section>
  );
};
