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
    let mm: gsap.MatchMedia | null = null;

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

      const recolorDarkCard = (srcFile: string) => {
        if (!cardWrapperRef.current) return;
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = `/lotties/Features/images/${srcFile}`;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(img, 0, 0);

          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const px = imgData.data;

          for (let i = 0; i < px.length; i += 4) {
            const a = px[i + 3];
            if (a < 15) continue;
            const r = px[i], g = px[i + 1], b = px[i + 2];
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);
            const chroma = maxC - minC;

            // Uniform navy that matches the site background
            const NR = 5, NG = 12, NB = 28;

            if (srcFile === 'img_12.png') {
              // img_12: white top card + dark bottom card
              const y = Math.floor((i / 4) / canvas.width);
              if (y < 280) {
                if (lum > 200 && chroma < 30) { px[i] = 11; px[i+1] = 22; px[i+2] = 44; }
                else if (lum < 65 && chroma < 30) { px[i] = 255; px[i+1] = 255; px[i+2] = 255; }
              } else {
                if (lum < 80 && chroma < 30) { px[i] = NR; px[i+1] = NG; px[i+2] = NB; }
              }
            } else {
              // All other dark cards (img_0, img_1, img_2, img_4):
              // Use chroma to distinguish real content from background
              if (lum > 210 && chroma < 40) {
                // White/near-white neutral pixels → keep as white text
              } else if (chroma > 35 && lum > 15) {
                // Colored pixel (flags, photos, icons, graph, green text) → keep
              } else if (lum > 140 && chroma < 35) {
                // Light gray labels ("Due Date", "Reipient", "Balance") → slate
                px[i] = 148; px[i+1] = 163; px[i+2] = 184;
              } else {
                // ALL neutral dark/gray backgrounds → single uniform navy
                px[i] = NR; px[i+1] = NG; px[i+2] = NB;
              }
            }
          }
          ctx.putImageData(imgData, 0, 0);
          const themedUrl = canvas.toDataURL('image/png');

          const images = cardWrapperRef.current?.querySelectorAll('image');
          images?.forEach((el) => {
            const h = (el.getAttribute('href') || el.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || '').split('?')[0];
            if (h.endsWith(srcFile)) {
              el.setAttribute('href', themedUrl);
              el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', themedUrl);
              el.style.filter = 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.45))';
            }
          });
        };
      };

      const applyCardGlassTheme = () => {
        if (!cardWrapperRef.current) return;
        // White-background snippet cards that need the invert filter
        const whiteCardRegex = /\/img_(3|8|10|11|13|14)\.png$/;

        const images = cardWrapperRef.current.querySelectorAll('image');
        images.forEach((img) => {
          const href = (img.getAttribute('href') || img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || '').split('?')[0];
          if (whiteCardRegex.test(href)) {
            img.style.filter =
              'invert(0.92) hue-rotate(185deg) saturate(2.4) brightness(0.86) contrast(1.15) drop-shadow(0 0 20px rgba(56, 189, 248, 0.45))';
          } else if (href.endsWith('img_12.png') || href.endsWith('img_0.png') ||
                     href.endsWith('img_1.png') || href.endsWith('img_2.png') ||
                     href.endsWith('img_4.png')) {
            // Handled by canvas recoloring
          } else {
            img.style.filter = 'none';
          }
        });

        // Hide the Lottie "gray box" shape layer
        const svgGroups = cardWrapperRef.current.querySelectorAll('g');
        svgGroups.forEach((g) => {
          // Lottie sets aria-label or data-name on groups matching layer names
          const label = g.getAttribute('aria-label') || g.getAttribute('data-name') || '';
          if (label === 'gray box') {
            (g as unknown as HTMLElement).style.display = 'none';
          }
        });

        // Recolor all dark-themed card images via canvas
        ['img_0.png', 'img_1.png', 'img_2.png', 'img_4.png', 'img_12.png'].forEach(recolorDarkCard);
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
      mm?.revert();
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
