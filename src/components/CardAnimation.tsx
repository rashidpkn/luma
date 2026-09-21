import React, { useEffect, useRef } from 'react';
import lottie, { type AnimationItem } from 'lottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CardAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!cardWrapperRef.current || !containerRef.current) return;

    let timeline: gsap.core.Timeline | null = null;

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
        // Initial intro animation on load
        gsap.set('.block1 .anime-in', { autoAlpha: 0, y: 20 });
        gsap.to('.block1 .anime-in', {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          delay: 0.25,
          force3D: true,
          willChange: 'transform',
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all',
          onStart: () => {
            animRef.current?.playSegments([[0, 67]], true);
          },
          onComplete: () => {
            animRef.current?.goToAndStop(68, true);
          }
        });

        // Set initial visibility of titles in block-save-time
        gsap.set(['.block-save-time .title-1', '.block-save-time .text-1'], { autoAlpha: 1, y: 0 });
        gsap.set([
          '.block-save-time .title-2', '.block-save-time .text-2',
          '.block-save-time .title-3', '.block-save-time .text-3',
          '.block-save-time .title-4', '.block-save-time .text-4'
        ], { autoAlpha: 0, y: 10 });

        const mapFrame = gsap.utils.mapRange(0.01, 1, 68, 774);

        // Synchronized GSAP Timeline: accounts for 16% Hero scroll + 4 equal 21% steps across SaveTime
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
        )
        // Hide card animation container when entering block-get-paid
        ScrollTrigger.create({
          trigger: '.block-get-paid',
          start: 'top 95%',
          onEnter: () => gsap.to(containerRef.current, { autoAlpha: 0, duration: 0.25 }),
          onLeaveBack: () => gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.25 })
        });
      };

      const recolorCard12 = () => {
        if (!cardWrapperRef.current) return;
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = '/lotties/Features/images/img_12.png';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(img, 0, 0);

          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imgData.data;

          for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
              const idx = (y * canvas.width + x) * 4;
              const a = data[idx + 3];
              if (a > 15) {
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];
                if (y < 280) {
                  // Top card: originally white background with black text
                  if (r > 200 && g > 200 && b > 200) {
                    // Turn white card background into midnight navy glass
                    data[idx] = 11;
                    data[idx + 1] = 22;
                    data[idx + 2] = 44;
                  } else if (r < 65 && g < 65 && b < 65) {
                    // Turn black text into crisp white
                    data[idx] = 255;
                    data[idx + 1] = 255;
                    data[idx + 2] = 255;
                  }
                } else {
                  // Bottom card: originally dark grey
                  if (r < 60 && g < 60 && b < 60) {
                    // Deepen to midnight navy glass
                    data[idx] = 7;
                    data[idx + 1] = 16;
                    data[idx + 2] = 34;
                  }
                }
              }
            }
          }
          ctx.putImageData(imgData, 0, 0);
          const themedUrl = canvas.toDataURL('image/png');

          const images = cardWrapperRef.current?.querySelectorAll('image');
          images?.forEach((el) => {
            const h = (el.getAttribute('href') || el.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || '').split('?')[0];
            if (h.endsWith('img_12.png')) {
              el.setAttribute('href', themedUrl);
              el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', themedUrl);
              el.style.filter = 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.45))';
            }
          });
        };
      };

      const applyCardGlassTheme = () => {
        if (!cardWrapperRef.current) return;
        // Match ONLY the floating card snippets (excluding img_12 which is recolored via canvas)
        const cardRegex = /\/img_(0|1|2|3|4|7|8|9|10|11|13|14)\.png$/;

        const images = cardWrapperRef.current.querySelectorAll('image');
        images.forEach((img) => {
          const href = (img.getAttribute('href') || img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || '').split('?')[0];
          if (cardRegex.test(href)) {
            img.style.filter =
              'invert(0.92) hue-rotate(185deg) saturate(2.4) brightness(0.86) contrast(1.15) drop-shadow(0 0 20px rgba(56, 189, 248, 0.45))';
          } else if (href.endsWith('img_12.png')) {
            // Handled by recolorCard12
          } else {
            img.style.filter = 'none';
          }
        });

        recolorCard12();
      };

      const observer = new MutationObserver(applyCardGlassTheme);
      observer.observe(cardWrapperRef.current, { childList: true, subtree: true });

      animRef.current.addEventListener('DOMLoaded', () => {
        applyCardGlassTheme();
        handleReady();
      });
    } catch (err) {
      console.warn('Lottie load failed:', err);
    }

    return () => {
      timeline?.kill();
      if (animRef.current) {
        animRef.current.destroy();
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
