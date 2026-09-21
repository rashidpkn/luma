import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/* ─────────────────────────────────────────────
   3D Globe Canvas Component
   ───────────────────────────────────────────── */
const GlobeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 3);
    camera.position.z = 1.1;

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.minPolarAngle = 0.4 * Math.PI;
    controls.maxPolarAngle = 0.4 * Math.PI;

    const geometry = new THREE.IcosahedronGeometry(1, 22);

    // Optimized gradient shader for Luma Pay globe
    const gradientMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 v_normal;
        void main() {
          v_normal = normalize(normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 v_normal;
        vec3 getGradient(float y) {
          float t = (y + 1.0) / 2.0;
          vec3 top    = vec3(149.0/255.0, 211.0/255.0, 253.0/255.0);
          vec3 mid    = vec3(27.0/255.0, 147.0/255.0, 247.0/255.0);
          vec3 bottom = vec3(97.0/255.0, 182.0/255.0, 250.0/255.0);
          if (t < 0.6) return mix(top, mid, t / 0.6);
          return mix(mid, bottom, (t - 0.6) / 0.4);
        }
        void main() {
          vec3 color = getGradient(v_normal.y);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide,
    });

    const globeMesh = new THREE.Mesh(geometry, gradientMaterial);
    scene.add(globeMesh);

    // Continental dot overlay
    const textureLoader = new THREE.TextureLoader();
    let dotMesh: THREE.InstancedMesh | null = null;
    let dotGeo: THREE.CircleGeometry | null = null;
    let dotMat: THREE.MeshBasicMaterial | null = null;

    textureLoader.load('/imgs/earth-map-colored.png', (mask) => {
      const ctx = document.createElement('canvas').getContext('2d')!;
      const w = mask.image.width;
      const h = mask.image.height;
      ctx.canvas.width = w;
      ctx.canvas.height = h;
      ctx.drawImage(mask.image as CanvasImageSource, 0, 0);
      const pixels = ctx.getImageData(0, 0, w, h).data;

      const points = geometry.attributes.position;
      const uvs = geometry.attributes.uv;
      const count = points.count;
      const instancePositions: THREE.Vector3[] = [];

      for (let i = 0; i < count; i++) {
        const u = uvs.getX(i);
        const v = uvs.getY(i);
        const x = Math.floor(u * w);
        const y = Math.floor((1 - v) * h);
        const index = (y * w + x) * 4;
        const r = pixels[index] / 255;
        if (r > 0.2) {
          const pos = new THREE.Vector3()
            .fromBufferAttribute(points, i)
            .normalize()
            .multiplyScalar(1.01);
          instancePositions.push(pos);
        }
      }

      dotGeo = new THREE.CircleGeometry(0.012, 32);
      dotMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
      });

      dotMesh = new THREE.InstancedMesh(dotGeo, dotMat, instancePositions.length);
      const dummy = new THREE.Object3D();

      instancePositions.forEach((pos, i) => {
        dummy.position.copy(pos);
        dummy.lookAt(0, 0, 0);
        dummy.updateMatrix();
        dotMesh!.setMatrixAt(i, dummy.matrix);
      });

      scene.add(dotMesh);
    });

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      const aspect = width / height;
      camera.left = -aspect;
      camera.right = aspect;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
    }

    function animate() {
      controls.update();
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      controls.dispose();
      renderer.dispose();
      geometry.dispose();
      gradientMaterial.dispose();
      if (dotGeo) dotGeo.dispose();
      if (dotMat) dotMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} id="globe-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <canvas ref={canvasRef} id="globe-canvas" style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

/* ─────────────────────────────────────────────
   Animated Counter Component
   ───────────────────────────────────────────── */
const AnimatedCounter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1600;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const p = Math.min(elapsed / duration, 1);
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setCount(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count || target}</span>;
};

/* ─────────────────────────────────────────────
   Main NoBordersSection Component
   ───────────────────────────────────────────── */
export const NoBordersSection: React.FC = () => {
  const areaRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const coinsRef = useRef<HTMLDivElement>(null);
  const widgetsRef = useRef<HTMLDivElement>(null);

  const timeoutIdsRef = useRef<number[]>([]);

  // 7 Coins in Phase 1 (orbiting the top curve of large globe dome)
  const coins = [
    { id: 'coin-1', className: 's1', img: '/imgs/noborders/coin_1.png', alt: 'BNB' },
    { id: 'coin-2', className: 's2', img: '/imgs/noborders/coin_2.png', alt: 'ETH' },
    { id: 'coin-3', className: 's3', img: '/imgs/noborders/coin_3.png', alt: 'XRP' },
    { id: 'coin-4', className: 's4', img: '/imgs/noborders/coin_4.png', alt: 'Luma Pay' },
    { id: 'coin-5', className: 's5', img: '/imgs/noborders/coin_5.png', alt: 'USDC' },
    { id: 'coin-6', className: 's6', img: '/imgs/noborders/coin_6.png', alt: 'BTC' },
    { id: 'coin-7', className: 's7', img: '/imgs/noborders/coin_7.png', alt: 'SOL' },
  ];

  // 8 Widgets & Tokens in Phase 2 (flying out into orbital positions around globe)
  const widgets = [
    { id: 'w-1', className: 's1', levitation: '2', img: '/imgs/noborders/widget_1.png', alt: 'Michael Johnson paid you' },
    { id: 'w-2', className: 's2', levitation: '1', img: '/imgs/noborders/widget_2.png', alt: 'Request 900 SHIBA' },
    { id: 'w-3', className: 's3', levitation: '2', img: '/imgs/noborders/widget_3.png', alt: 'Join our group chat' },
    { id: 'w-4', className: 's4', levitation: '1', img: '/imgs/noborders/widget_4.png', alt: 'Tether USDT' },
    { id: 'w-5', className: 's5', levitation: '2', img: '/imgs/noborders/widget_5.png', alt: 'Helen Young' },
    { id: 'w-6', className: 's6', levitation: '1', img: '/imgs/noborders/widget_6.png', alt: 'Airplane' },
    { id: 'w-7', className: 's7', levitation: '2', img: '/imgs/noborders/widget_7.png', alt: 'Received XLM' },
    { id: 'w-8', className: 's8', levitation: '1', img: '/imgs/noborders/widget_8.png', alt: 'Bottom XRP' },
  ];

  // 16 Ambient twinkling star sparkles
  const stars = [
    { x: '12%', y: '16%', delay: '0s', size: 3 },
    { x: '24%', y: '26%', delay: '1.2s', size: 4 },
    { x: '35%', y: '10%', delay: '2.4s', size: 3 },
    { x: '48%', y: '20%', delay: '0.8s', size: 4 },
    { x: '62%', y: '14%', delay: '1.7s', size: 3 },
    { x: '75%', y: '22%', delay: '2.9s', size: 4 },
    { x: '88%', y: '16%', delay: '0.4s', size: 3 },
    { x: '8%', y: '60%', delay: '1.9s', size: 4 },
    { x: '18%', y: '80%', delay: '0.5s', size: 3 },
    { x: '30%', y: '66%', delay: '2.1s', size: 3 },
    { x: '42%', y: '83%', delay: '1.3s', size: 4 },
    { x: '60%', y: '80%', delay: '2.7s', size: 3 },
    { x: '72%', y: '86%', delay: '0.9s', size: 4 },
    { x: '86%', y: '62%', delay: '1.5s', size: 3 },
    { x: '92%', y: '78%', delay: '2.3s', size: 4 },
    { x: '52%', y: '90%', delay: '1.1s', size: 3 },
  ];

  const clearAllTimeouts = () => {
    timeoutIdsRef.current.forEach((id) => clearTimeout(id));
    timeoutIdsRef.current = [];
  };

  const animateSequentially = (elements: Element[], delay = 80): Promise<void> => {
    return new Promise((resolve) => {
      if (elements.length === 0) {
        resolve();
        return;
      }
      elements.forEach((el, i) => {
        const id = window.setTimeout(() => {
          el.classList.add('move');
          if (i === elements.length - 1) resolve();
        }, i * delay);
        timeoutIdsRef.current.push(id);
      });
    });
  };

  const resetMovesReverse = () => {
    clearAllTimeouts();

    // 1. First retract widgets gracefully
    if (widgetsRef.current) {
      const widgetElements = Array.from(widgetsRef.current.children);
      [...widgetElements].reverse().forEach((el, i) => {
        const id = window.setTimeout(() => {
          el.classList.remove('move');
        }, i * 40);
        timeoutIdsRef.current.push(id);
      });

      const idWrap = window.setTimeout(() => {
        if (widgetsRef.current) widgetsRef.current.classList.remove('move');
        if (embedRef.current) embedRef.current.classList.remove('move');
        if (blurRef.current) blurRef.current.classList.remove('move');
        if (wrapperRef.current) wrapperRef.current.classList.remove('move');
      }, 220);
      timeoutIdsRef.current.push(idWrap);
    }

    // 2. Then bloom coins back onto the arc
    const idCoins = window.setTimeout(() => {
      if (coinsRef.current) {
        const coinElements = Array.from(coinsRef.current.children);
        [...coinElements].reverse().forEach((el, i) => {
          const idC = window.setTimeout(() => {
            el.classList.remove('move');
          }, i * 45);
          timeoutIdsRef.current.push(idC);
        });
      }
    }, 380);
    timeoutIdsRef.current.push(idCoins);
  };

  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;

    let lastScrollY = window.scrollY;
    let currentDirection: 'up' | 'down' = 'down';

    const onScroll = () => {
      const currentY = window.scrollY;
      currentDirection = currentY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearAllTimeouts();
          if (wrapperRef.current) wrapperRef.current.classList.add('move');

          const coinElements = coinsRef.current ? Array.from(coinsRef.current.children) : [];
          const widgetElements = widgetsRef.current ? Array.from(widgetsRef.current.children) : [];

          // 1. Cascade coins inward
          animateSequentially(coinElements, 80);

          // 2. Scale globe down smoothly with slight pause
          const idGlobe = window.setTimeout(() => {
            if (embedRef.current) embedRef.current.classList.add('move');
            if (blurRef.current) blurRef.current.classList.add('move');
          }, 180);
          timeoutIdsRef.current.push(idGlobe);

          // 3. Bloom widgets outward gracefully as coins collapse
          const idWidgets = window.setTimeout(() => {
            if (widgetsRef.current) widgetsRef.current.classList.add('move');
            animateSequentially(widgetElements, 85);
          }, 450);
          timeoutIdsRef.current.push(idWidgets);
        } else {
          // If scrolling UP and exiting the section, reset in reverse
          if (currentDirection === 'up') {
            resetMovesReverse();
          }
          // If scrolling down, keep widgets displayed
        }
      },
      {
        threshold: window.innerWidth < 768 ? 0.2 : 0.35,
      }
    );

    resetMovesReverse();
    observer.observe(area);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      clearAllTimeouts();
    };
  }, []);

  return (
    <section className="global-sc" data-logo-color="dark">
      <div className="full-container global-s">
        <div className="container global-s">
          {/* 1. Header Text Block */}
          <div className="text-block globe-s">
            <div className="headline global-s">
              <h2 className="globe-h neutral-800">
                One Platform. <br />
                <span className="blue-span">Borderless Settlement.</span> Zero Latency.
              </h2>
            </div>
            <div className="description global-s">
              <p className="body-b3 neutral-600">
                Luma Pay combines regulated multi-currency rails with digital asset settlement capabilities, enabling enterprises to move capital freely across borders with bank-grade security.
              </p>
            </div>
          </div>

          {/* 2. Central Globe & Interactive Scene */}
          <div ref={areaRef} globe-area="" className="globe-area">
            <div ref={wrapperRef} globe-wrapper="" className="globe-wrapper">
              {/* 3D Three.js Globe */}
              <div ref={embedRef} globe-embed="" className="globe-embed">
                <GlobeCanvas />
              </div>

              {/* Ambient Globe Glow Blur */}
              <div ref={blurRef} className="globe-blur" />

              {/* 7 Arc Crypto Coins (Phase 1: Orbiting apex dome) */}
              <div ref={coinsRef} globe-coins="" className="globe-coins">
                {coins.map((coin) => (
                  <div key={coin.id} className={`globe-coin ${coin.className}`}>
                    <div data-hw-trigger="">
                      <img src={coin.img} alt={coin.alt} className="image-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>

              {/* 8 Floating Interactive Cards & Tokens (Phase 2: Centered around globe) */}
              <div ref={widgetsRef} globe-widgets="" className="globe-widgets">
                {widgets.map((widget) => (
                  <div key={widget.id} className={`globe-vidget ${widget.className}`}>
                    <div data-hw-trigger="">
                      <img
                        src={widget.img}
                        alt={widget.alt}
                        className="image-contain"
                        data-levitation={widget.levitation}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Bottom Stats Info ("182 countries") */}
          <div className="gobal-down-info">
            <p className="display-2xl">
              <AnimatedCounter target={182} />
            </p>
            <div className="global-down-text">
              <p className="body-b1 neutral-700">
                Supported Markets &amp; Corridors: Powering global commerce with <span className="dark-blue">domestic clearing rails</span>, competitive FX spreads, and <span className="dark-blue">institutional liquidity.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Ambient Vignette & Stars Background */}
        <div className="global-bg" />
        <div className="nb-ambient-stars">
          {stars.map((star, idx) => (
            <div
              key={idx}
              className="nb-star"
              style={{
                left: star.x,
                top: star.y,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* ─── Stylesheet for Luma Pay Interactive Globe Section ─── */}
      <style>{`
        .global-sc {
          position: relative;
          width: 100%;
          --r: 1vw;
          overflow: hidden;
        }

        .full-container.global-s {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .container.global-s {
          position: relative;
          z-index: 10;
          max-width: calc(100 * var(--r));
          margin-left: auto;
          margin-right: auto;
          padding-top: calc(5.56 * var(--r));
          padding-bottom: calc(5.56 * var(--r));
        }

        /* ═══ BACKGROUND & STARS ═══ */
        .global-bg {
          position: absolute;
          inset: 0%;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          background-image: linear-gradient(#fff 9%, #8ae4ff 31%, #0c6ce5 47%, #8ae4ff 67%, #fff 88%);
          filter: blur(calc(2.2 * var(--r)));
          transform: scale(1.2);
          z-index: 1;
          pointer-events: none;
        }

        .nb-ambient-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .nb-star {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.95);
          animation: nbTwinkle 3s ease-in-out infinite alternate;
        }
        @keyframes nbTwinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.3); }
        }

        /* ═══ HEADER ═══ */
        .text-block.globe-s {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .headline.global-s {
          text-align: center;
        }
        .globe-h {
          font-family: helv-bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(34px, 4.3vw, 68px);
          line-height: 112%;
          font-weight: 500;
          color: #080808;
          margin: 0;
          letter-spacing: -0.03em;
        }
        .blue-span {
          color: #2076f3;
        }
        .description.global-s {
          width: calc(44 * var(--r));
          max-width: 650px;
          padding-top: calc(1.4 * var(--r));
          text-align: center;
        }
        .body-b3 {
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: calc(1.25 * var(--r));
          line-height: 160%;
          color: #262626;
          margin: 0;
        }

        /* ═══ GLOBE AREA & WRAPPER ═══ */
        .globe-area {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .globe-wrapper {
          aspect-ratio: 1;
          width: calc(70 * var(--r));
          height: calc(70 * var(--r));
          max-width: 1050px;
          max-height: 1050px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transform: translate(0, calc(16 * var(--r)));
          transition: transform 1.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .globe-wrapper.move {
          z-index: 10;
          transform: translate(0, 0);
        }

        /* ═══ GLOBE EMBED & BLUR ═══ */
        .globe-embed {
          z-index: 10;
          position: absolute;
          inset: 0%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(1);
          transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .globe-embed.move {
          transform: scale(0.425);
        }

        .globe-blur {
          position: absolute;
          inset: 0%;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(#d1f2ff, #1c93f7);
          filter: blur(calc(1.1 * var(--r)));
          transform: scale(1);
          transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .globe-blur.move {
          transform: scale(0.425);
        }

        /* ═══ 7 ARC COINS (PHASE 1) ═══ */
        .globe-coins {
          aspect-ratio: 1;
          width: calc(90 * var(--r));
          height: calc(90 * var(--r));
          max-width: 1350px;
          max-height: 1350px;
          border-radius: 50%;
          border: 4px solid transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          pointer-events: none;
          z-index: 5;
        }

        .globe-coin {
          width: 12%;
          position: absolute;
          transition: top 1.4s cubic-bezier(0.25, 1, 0.35, 1),
                      left 1.4s cubic-bezier(0.25, 1, 0.35, 1),
                      right 1.4s cubic-bezier(0.25, 1, 0.35, 1),
                      opacity 1.1s cubic-bezier(0.25, 1, 0.35, 1),
                      transform 1.4s cubic-bezier(0.25, 1, 0.35, 1);
          opacity: 1;
        }

        .globe-coin.s1 { inset: 30% auto auto -4%; }
        .globe-coin.s1.move { top: 44%; left: 44%; opacity: 0; transform: scale(0.3); }

        .globe-coin.s2 { inset: 11% auto auto 6%; }
        .globe-coin.s2.move { top: 44%; left: 44%; opacity: 0; transform: scale(0.3); }

        .globe-coin.s3 { inset: -1% auto auto 23%; }
        .globe-coin.s3.move { top: 44%; left: 44%; opacity: 0; transform: scale(0.3); }

        .globe-coin.s4 { inset: -6% auto auto 43%; }
        .globe-coin.s4.move { top: 44%; left: 44%; opacity: 0; transform: scale(0.3); }

        .globe-coin.s5 { inset: -1% 23% auto auto; }
        .globe-coin.s5.move { top: 44%; right: 44%; opacity: 0; transform: scale(0.3); }

        .globe-coin.s6 { inset: 11% 6% auto auto; }
        .globe-coin.s6.move { top: 44%; right: 44%; opacity: 0; transform: scale(0.3); }

        .globe-coin.s7 { inset: 30% -4% auto auto; }
        .globe-coin.s7.move { top: 44%; right: 44%; opacity: 0; transform: scale(0.3); }

        /* ═══ 8 FLOATING WIDGETS (PHASE 2) ═══ */
        .globe-widgets {
          aspect-ratio: 1;
          width: calc(20 * var(--r));
          height: calc(20 * var(--r));
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          transform: scale(0.8);
          transition: width 2.2s cubic-bezier(0.19, 1, 0.22, 1),
                      height 2.2s cubic-bezier(0.19, 1, 0.22, 1),
                      transform 2.2s cubic-bezier(0.19, 1, 0.22, 1);
          pointer-events: none;
          z-index: 12;
        }
        .globe-widgets.move {
          width: calc(60 * var(--r));
          height: calc(60 * var(--r));
          transform: scale(1);
          pointer-events: auto;
        }

        .globe-vidget {
          position: absolute;
          transition: top 1.6s cubic-bezier(0.16, 1, 0.3, 1),
                      left 1.6s cubic-bezier(0.16, 1, 0.3, 1),
                      right 1.6s cubic-bezier(0.16, 1, 0.3, 1),
                      bottom 1.6s cubic-bezier(0.16, 1, 0.3, 1),
                      inset 1.6s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 1.3s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          pointer-events: auto;
        }
        .globe-vidget.move {
          opacity: 1;
        }

        /* s1: Michael Johnson paid you */
        .globe-vidget.s1 {
          width: calc(24 * var(--r));
          top: 40%;
          left: 30%;
        }
        .globe-vidget.s1.move {
          inset: 50% auto auto -25%;
        }

        /* s2: Request 900 SHIBA */
        .globe-vidget.s2 {
          width: calc(18 * var(--r));
          top: 40%;
          left: 30%;
        }
        .globe-vidget.s2.move {
          top: 24%;
          left: -12%;
        }

        /* s3: Join our group chat */
        .globe-vidget.s3 {
          width: calc(16.5 * var(--r));
          top: 40%;
          left: 35%;
        }
        .globe-vidget.s3.move {
          top: 10%;
          left: 28%;
        }

        /* s4: Tether USDT coin */
        .globe-vidget.s4 {
          width: calc(7.8 * var(--r));
          top: 35%;
          right: 40%;
        }
        .globe-vidget.s4.move {
          top: 8%;
          right: 9%;
        }

        /* s5: Helen Young */
        .globe-vidget.s5 {
          width: calc(22 * var(--r));
          top: 45%;
          right: 30%;
        }
        .globe-vidget.s5.move {
          top: 33%;
          right: -20%;
        }

        /* s6: Paper airplane */
        .globe-vidget.s6 {
          width: calc(4 * var(--r));
          top: 50%;
          right: 50%;
        }
        .globe-vidget.s6.move {
          top: 48%;
          right: -7%;
        }

        /* s7: Received +245 XLM */
        .globe-vidget.s7 {
          width: calc(16.8 * var(--r));
          bottom: 40%;
          right: 35%;
        }
        .globe-vidget.s7.move {
          bottom: 20%;
          right: -11%;
        }

        /* s8: Bottom XRP coin */
        .globe-vidget.s8 {
          width: calc(8 * var(--r));
          bottom: 40%;
          left: 40%;
        }
        .globe-vidget.s8.move {
          bottom: 10%;
          left: 10%;
        }

        .image-contain {
          object-fit: contain;
          -webkit-user-select: none;
          user-select: none;
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ═══ LEVITATION FLOATING ═══ */
        [data-levitation="1"] {
          animation: nbLevitateFirst 6s ease-in-out infinite;
        }
        @keyframes nbLevitateFirst {
          0% { transform: translateY(0); }
          50% { transform: translateY(calc(-0.8 * var(--r))); }
          100% { transform: translateY(0); }
        }

        [data-levitation="2"] {
          animation: nbLevitateSecond 5s ease-in-out infinite;
        }
        @keyframes nbLevitateSecond {
          0% { transform: translateY(0); }
          50% { transform: translateY(calc(-0.6 * var(--r))); }
          100% { transform: translateY(0); }
        }

        /* ═══ 3. BOTTOM STATS ("182 countries") ═══ */
        .gobal-down-info {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-column-gap: 28px;
          grid-row-gap: 16px;
          align-items: center;
          width: 100%;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          margin-top: calc(4 * var(--r));
          position: relative;
          z-index: 10;
        }

        .display-2xl {
          color: #080808;
          font-family: helv-bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(48px, 4.8vw, 76px);
          line-height: 1;
          font-style: italic;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.04em;
          flex-shrink: 0;
        }

        .global-down-text {
          padding-bottom: 0;
        }

        .body-b1 {
          font-family: helv-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(15px, 1.2vw, 19px);
          line-height: 1.45;
          color: #171717;
          margin: 0;
        }

        .dark-blue {
          color: #0128a5;
          font-weight: 600;
        }

        /* ═══ RESPONSIVE BREAKPOINTS ═══ */
        @media screen and (min-width: 1920px) {
          .global-sc {
            --r: 0.8vw;
          }
        }

        @media screen and (max-width: 991px) {
          .global-sc {
            --r: 1.1vw;
          }
          .globe-wrapper {
            width: calc(75 * var(--r));
            height: calc(75 * var(--r));
          }
        }

        @media screen and (max-width: 768px) {
          .global-sc {
            --r: 12px;
            overflow: hidden;
            padding-bottom: 30px;
          }
          .container.global-s {
            padding-top: 40px;
            padding-bottom: 30px;
          }
          .globe-h {
            font-size: clamp(24px, 6.5vw, 34px) !important;
          }
          .description.global-s {
            width: 92% !important;
            max-width: 480px !important;
            font-size: clamp(14px, 3.8vw, 16px) !important;
          }
          .globe-wrapper {
            width: min(85vw, 360px) !important;
            height: min(85vw, 360px) !important;
            transform: translate(0, 40px) !important;
          }
          .globe-wrapper.move {
            transform: translate(0, 0) !important;
          }
          .globe-coins {
            width: min(92vw, 380px) !important;
            height: min(92vw, 380px) !important;
          }
          .globe-widgets.move {
            width: min(88vw, 360px) !important;
            height: min(88vw, 360px) !important;
          }

          /* Keep all 8 floating widgets visible & cleanly proportioned on mobile */
          .globe-vidget.s1 { width: clamp(96px, 30vw, 130px) !important; }
          .globe-vidget.s1.move { inset: 46% auto auto -4% !important; }

          .globe-vidget.s2 { width: clamp(75px, 24vw, 105px) !important; }
          .globe-vidget.s2.move { top: 12% !important; left: -2% !important; }

          .globe-vidget.s3 { width: clamp(75px, 24vw, 105px) !important; }
          .globe-vidget.s3.move { top: 4% !important; left: 24% !important; }

          .globe-vidget.s4 { width: clamp(36px, 11vw, 50px) !important; }
          .globe-vidget.s4.move { top: 6% !important; right: 10% !important; }

          .globe-vidget.s5 { width: clamp(90px, 28vw, 120px) !important; }
          .globe-vidget.s5.move { top: 22% !important; right: -3% !important; }

          .globe-vidget.s6 { width: clamp(22px, 7vw, 32px) !important; }
          .globe-vidget.s6.move { top: 46% !important; right: 2% !important; }

          .globe-vidget.s7 { width: clamp(80px, 25vw, 110px) !important; }
          .globe-vidget.s7.move { bottom: 12% !important; right: 2% !important; }

          .globe-vidget.s8 { width: clamp(36px, 11vw, 50px) !important; }
          .globe-vidget.s8.move { bottom: 4% !important; left: 14% !important; }

          .gobal-down-info {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            row-gap: 16px !important;
            width: 90% !important;
            margin-top: 36px !important;
          }
          .display-2xl {
            font-size: clamp(52px, 15vw, 76px) !important;
            text-align: center !important;
          }
          .body-b1 {
            font-size: clamp(14px, 3.8vw, 17px) !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};
