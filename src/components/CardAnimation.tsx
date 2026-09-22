import React, { useLayoutEffect, useRef } from 'react';
import lottie, { type AnimationItem } from 'lottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CardAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useLayoutEffect(() => {
    if (!cardWrapperRef.current || !containerRef.current) return;

    let timeline: gsap.core.Timeline | null = null;
    let mm: gsap.MatchMedia | null = null;
    let observer: MutationObserver | null = null;
    let disposed = false;

    try {
      animRef.current = lottie.loadAnimation({
        container: cardWrapperRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/lotties/Features/data.json',
        assetsPath: '/lotties/Features/images/',
        rendererSettings: {
          className: 'lottie-anime '
        }
      });

      const handleReady = () => {
        // Immediate static resting state in hero section without intro animation
        animRef.current?.goToAndStop(68, true);
        if (window.innerWidth <= 960) {
          gsap.set('.block1 .anime-in', { autoAlpha: 1, clearProps: 'transform' });
        } else {
          gsap.set('.block1 .anime-in', { autoAlpha: 1, y: 0, clearProps: 'transform' });
        }

        // Set initial visibility of titles in block-save-time
        gsap.set(['.block-save-time .title-1', '.block-save-time .text-1'], { autoAlpha: 1, y: 0 });
        gsap.set([
          '.block-save-time .title-2', '.block-save-time .text-2',
          '.block-save-time .title-3', '.block-save-time .text-3',
          '.block-save-time .title-4', '.block-save-time .text-4'
        ], { autoAlpha: 0, y: 10 });

        mm = gsap.matchMedia();

        // Desktop: Pinning and scrubbing across SaveTime
        mm.add('(min-width: 961px)', () => {
          const mapFrame = gsap.utils.mapRange(0.01, 1, 68, 774);

          timeline = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom bottom',
              endTrigger: '.block-save-time',
              pin: true,
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                if (progress >= 0.01) {
                  animRef.current?.goToAndStop(mapFrame(progress), true);
                } else {
                  animRef.current?.goToAndStop(68, true);
                }
              }
            }
          })
          // Step 1: Holds solid through Hero + first quarter of SaveTime (0% to 33%)
          .to(['.block-save-time .title-1', '.block-save-time .text-1'], {
            duration: 0.8,
            autoAlpha: 0,
            y: -10,
            force3D: true,
            stagger: 0.1,
            delay: 5.8,
            willChange: 'transform',
            ease: 'power2.inOut'
          })
          // Step 2: Enters 33% to 37%, holds solid until 54%
          .fromTo(['.block-save-time .title-2', '.block-save-time .text-2'], 
            { y: 10, autoAlpha: 0 }, 
            {
              duration: 0.8,
              autoAlpha: 1,
              y: 0,
              force3D: true,
              stagger: 0.1,
              willChange: 'transform',
              ease: 'power2.inOut'
            }
          )
          .to(['.block-save-time .title-2', '.block-save-time .text-2'], {
            duration: 0.8,
            autoAlpha: 0,
            y: -10,
            force3D: true,
            stagger: 0.1,
            delay: 2.6,
            willChange: 'transform',
            ease: 'power2.inOut'
          })
          // Step 3: Enters 54% to 58%, holds solid until 75%
          .fromTo(['.block-save-time .title-3', '.block-save-time .text-3'], 
            { y: 10, autoAlpha: 0 }, 
            {
              duration: 0.8,
              autoAlpha: 1,
              y: 0,
              force3D: true,
              stagger: 0.1,
              willChange: 'transform',
              ease: 'power2.inOut'
            }
          )
          .to(['.block-save-time .title-3', '.block-save-time .text-3'], {
            duration: 0.8,
            autoAlpha: 0,
            y: -10,
            force3D: true,
            stagger: 0.1,
            delay: 2.6,
            willChange: 'transform',
            ease: 'power2.inOut'
          })
          // Step 4: Enters 75% to 79%, holds solid until 100%
          .fromTo(['.block-save-time .title-4', '.block-save-time .text-4'], 
            { y: 10, autoAlpha: 0 }, 
            {
              duration: 0.8,
              autoAlpha: 1,
              y: 0,
              force3D: true,
              stagger: 0.1,
              willChange: 'transform',
              ease: 'power2.inOut'
            }
          );

          // Hide card animation container when entering block-get-paid
          ScrollTrigger.create({
            trigger: '.block-get-paid',
            start: 'top 95%',
            onEnter: () => gsap.to(containerRef.current, { autoAlpha: 0, duration: 0.25 }),
            onLeaveBack: () => gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.25 })
          });
        });

        // Mobile: Card stays static at frame 68 without scroll pinning
        mm.add('(max-width: 960px)', () => {
          animRef.current?.goToAndStop(68, true);
        });
      };

      const applyCardLightTheme = () => {
        if (!cardWrapperRef.current) return;

        const images = cardWrapperRef.current.querySelectorAll('image');
        images.forEach((img) => {
          img.style.filter = 'drop-shadow(0 12px 30px rgba(12, 108, 229, 0.12))';
        });

        // Hide the Lottie "gray box" shape layer
        const svgGroups = cardWrapperRef.current.querySelectorAll('g');
        svgGroups.forEach((g) => {
          const label = g.getAttribute('aria-label') || g.getAttribute('data-name') || '';
          if (label === 'gray box') {
            (g as unknown as HTMLElement).style.display = 'none';
          }
        });
      };

      observer = new MutationObserver(() => {
        if (!disposed) applyCardLightTheme();
      });
      observer.observe(cardWrapperRef.current, { childList: true, subtree: true });

      animRef.current.addEventListener('DOMLoaded', () => {
        applyCardLightTheme();
        handleReady();
      });
    } catch (err) {
      console.warn('Lottie load failed:', err);
    }

    return () => {
      disposed = true;
      observer?.disconnect();
      // Kill all ScrollTriggers before reverting to prevent removeChild races
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === containerRef.current || st.vars?.trigger === containerRef.current) {
          st.kill();
        }
      });
      timeline?.kill();
      mm?.revert();
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="animation-container">
      <div className="block block1">
        <div className="card-container">
          <div ref={cardWrapperRef} className="card-wrapper anime-in" />
        </div>
      </div>
    </div>
  );
};
