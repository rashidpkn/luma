import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SustainabilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const triggerClickDropRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const pinWrapper = pinWrapperRef.current;
    if (!canvas || !section || !pinWrapper) return;

    const width = canvas.clientWidth || 460;
    const height = canvas.clientHeight || 420;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 50);
    camera.position.set(0, 1.0, 6.0);
    camera.lookAt(0, 0.1, 0);

    /* ─── Gallery-Grade Lighting ─── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    const keyLight = new THREE.DirectionalLight(0xfffaf0, 2.8);
    keyLight.position.set(3, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffd6e0, 1.6);
    fillLight.position.set(-3, 2, 5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x93c5fd, 1.4);
    rimLight.position.set(-4, -1, -3);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topLight.position.set(0, 8, 0);
    scene.add(topLight);

    const slotFlash = new THREE.PointLight(0xffe680, 0, 6);
    slotFlash.position.set(0, 1.1, 0);
    scene.add(slotFlash);

    /* ─── Materials ─── */
    const pinkMat = new THREE.MeshPhysicalMaterial({
      color: 0xf9a8c9,
      roughness: 0.25,
      metalness: 0.02,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15,
      sheen: 0.5,
      sheenColor: 0xffc2d4,
    });

    const darkPinkMat = new THREE.MeshPhysicalMaterial({
      color: 0xec4899,
      roughness: 0.3,
      metalness: 0.02,
      clearcoat: 0.6,
    });

    const nosePinkMat = new THREE.MeshPhysicalMaterial({
      color: 0xfb7185,
      roughness: 0.2,
      metalness: 0.02,
      clearcoat: 0.8,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.85,
      roughness: 0.15,
      emissive: 0x92400e,
      emissiveIntensity: 0.15,
    });

    const eyeMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e1b2e,
      roughness: 0.05,
      clearcoat: 1.0,
    });

    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    /* ─── Build Piggy Bank ─── */
    const piggy = new THREE.Group();
    piggy.position.set(0, -0.35, 0);
    scene.add(piggy);

    // Body: wide horizontally, classic piggy barrel shape
    const bodyGeo = new THREE.SphereGeometry(1, 64, 64);
    const body = new THREE.Mesh(bodyGeo, pinkMat);
    body.scale.set(1.35, 1.05, 1.0);
    piggy.add(body);

    // Head: smaller sphere merged into front of body
    const headGeo = new THREE.SphereGeometry(0.72, 48, 48);
    const head = new THREE.Mesh(headGeo, pinkMat);
    head.position.set(1.0, 0.18, 0);
    piggy.add(head);

    // Snout: small flat cylinder on the front of the head
    const snoutGeo = new THREE.CylinderGeometry(0.2, 0.22, 0.16, 24);
    const snout = new THREE.Mesh(snoutGeo, nosePinkMat);
    snout.rotation.z = -Math.PI / 2;
    snout.position.set(1.62, 0.08, 0);
    piggy.add(snout);

    // Nostrils: two tiny dark ovals on the snout face
    const nostrilGeo = new THREE.SphereGeometry(0.032, 12, 12);
    const nostrilL = new THREE.Mesh(nostrilGeo, eyeMat);
    nostrilL.scale.set(1.2, 0.8, 0.5);
    nostrilL.position.set(1.7, 0.08, -0.06);
    const nostrilR = new THREE.Mesh(nostrilGeo, eyeMat);
    nostrilR.scale.set(1.2, 0.8, 0.5);
    nostrilR.position.set(1.7, 0.08, 0.06);
    piggy.add(nostrilL, nostrilR);

    // Eyes: glossy beads on sides of head
    const eyeGeo = new THREE.SphereGeometry(0.07, 24, 24);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(1.28, 0.42, -0.38);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(1.28, 0.42, 0.38);
    piggy.add(eyeL, eyeR);

    // Eye highlights
    const hlGeo = new THREE.SphereGeometry(0.022, 8, 8);
    const hlL = new THREE.Mesh(hlGeo, whiteMat);
    hlL.position.set(1.32, 0.45, -0.36);
    const hlR = new THREE.Mesh(hlGeo, whiteMat);
    hlR.position.set(1.32, 0.45, 0.36);
    piggy.add(hlL, hlR);

    // Ears: two leaf/flap shapes tilted forward
    const earGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const earL = new THREE.Mesh(earGeo, darkPinkMat);
    earL.scale.set(0.35, 1, 0.7);
    earL.position.set(0.92, 0.78, -0.28);
    earL.rotation.set(-0.3, 0.2, 0.5);
    const earR = new THREE.Mesh(earGeo, darkPinkMat);
    earR.scale.set(0.35, 1, 0.7);
    earR.position.set(0.92, 0.78, 0.28);
    earR.rotation.set(0.3, -0.2, 0.5);
    piggy.add(earL, earR);

    // Inner ear details
    const earInnerGeo = new THREE.SphereGeometry(0.14, 12, 12);
    const earInnerMat = new THREE.MeshBasicMaterial({ color: 0xfbb4cf, transparent: true, opacity: 0.65 });
    const earInL = new THREE.Mesh(earInnerGeo, earInnerMat);
    earInL.scale.set(0.3, 0.8, 0.6);
    earInL.position.set(0.93, 0.78, -0.26);
    earInL.rotation.set(-0.3, 0.2, 0.5);
    const earInR = new THREE.Mesh(earInnerGeo, earInnerMat);
    earInR.scale.set(0.3, 0.8, 0.6);
    earInR.position.set(0.93, 0.78, 0.26);
    earInR.rotation.set(0.3, -0.2, 0.5);
    piggy.add(earInL, earInR);

    // Four stumpy legs
    const legGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.38, 16);
    const hoofGeo = new THREE.CylinderGeometry(0.15, 0.17, 0.08, 16);
    const makeLeg = (x: number, z: number) => {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(legGeo, pinkMat));
      const h = new THREE.Mesh(hoofGeo, goldMat);
      h.position.y = -0.14;
      g.add(h);
      g.position.set(x, -0.92, z);
      return g;
    };
    piggy.add(makeLeg(0.62, 0.45), makeLeg(0.62, -0.45));
    piggy.add(makeLeg(-0.62, 0.45), makeLeg(-0.62, -0.45));

    // Curly tail at rear
    const tailGeo = new THREE.TorusGeometry(0.13, 0.035, 12, 32, Math.PI * 1.5);
    const tail = new THREE.Mesh(tailGeo, darkPinkMat);
    tail.position.set(-1.32, 0.22, 0);
    tail.rotation.set(0, Math.PI / 2, 0.4);
    piggy.add(tail);

    // Coin slot on top-back
    const slotBezelGeo = new THREE.TorusGeometry(0.2, 0.035, 12, 24);
    const slotBezel = new THREE.Mesh(slotBezelGeo, goldMat);
    slotBezel.rotation.x = Math.PI / 2;
    slotBezel.scale.set(1.6, 0.5, 1);
    slotBezel.position.set(-0.1, 1.03, 0);
    const slotHoleGeo = new THREE.BoxGeometry(0.45, 0.03, 0.1);
    const slotHole = new THREE.Mesh(slotHoleGeo, eyeMat);
    slotHole.position.set(-0.1, 1.04, 0);
    piggy.add(slotBezel, slotHole);

    // Blush cheeks
    const blushGeo = new THREE.SphereGeometry(0.1, 12, 12);
    const blushMat = new THREE.MeshBasicMaterial({ color: 0xf472b6, transparent: true, opacity: 0.35 });
    const blushL = new THREE.Mesh(blushGeo, blushMat);
    blushL.scale.set(1, 0.6, 0.4);
    blushL.position.set(1.36, 0.12, -0.42);
    const blushR = new THREE.Mesh(blushGeo, blushMat);
    blushR.scale.set(1, 0.6, 0.4);
    blushR.position.set(1.36, 0.12, 0.42);
    piggy.add(blushL, blushR);

    // Tiny smile curve
    const smileCurve = new THREE.EllipseCurve(0, 0, 0.08, 0.04, Math.PI * 0.1, Math.PI * 0.9);
    const smilePoints = smileCurve.getPoints(20);
    const smileGeo = new THREE.BufferGeometry().setFromPoints(
      smilePoints.map(p => new THREE.Vector3(p.x, p.y, 0))
    );
    const smileLine = new THREE.Line(smileGeo, new THREE.LineBasicMaterial({ color: 0x9f1239, linewidth: 2 }));
    smileLine.position.set(1.54, -0.04, 0);
    smileLine.rotation.y = -Math.PI / 2;
    piggy.add(smileLine);

    /* ─── Ground Shadow ─── */
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10, 25, 60, 0.55)');
      grad.addColorStop(0.6, 'rgba(10, 25, 60, 0.18)');
      grad.addColorStop(1, 'rgba(10, 25, 60, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 128, 128);
    }
    const shadowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 2.8),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shadowCanvas), transparent: true, depthWrite: false })
    );
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.32;
    scene.add(shadowMesh);

    /* ─── Small Gold Coins ─── */
    const coinGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.04, 24);
    const coinRimGeo = new THREE.TorusGeometry(0.16, 0.01, 8, 24);

    const makeCoin = () => {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(coinGeo, goldMat));
      const rim = new THREE.Mesh(coinRimGeo, goldMat);
      rim.rotation.x = Math.PI / 2;
      g.add(rim);
      return g;
    };

    const coin1 = makeCoin();
    coin1.position.set(-0.1, 2.4, 0);
    coin1.rotation.set(0.4, 0, -0.15);
    scene.add(coin1);

    const coin2 = makeCoin();
    coin2.position.set(-0.1, 2.4, 0);
    coin2.rotation.set(0.3, 0, 0.2);
    coin2.visible = false;
    scene.add(coin2);

    /* ─── Animation State ─── */
    const st = {
      // rotationX: +1.1 = looking down at the TOP/BACK of the pig (slot visible)
      // rotationX: 0.0  = nose pointing to the right, side view
      rotationX: 1.1,

      coin1Y: 2.4, coin1RotX: 0.4, coin1RotZ: -0.15, coin1Visible: true,
      coin2Y: 2.4, coin2RotX: 0.3, coin2RotZ: 0.2, coin2Visible: false,
      flash: 0,
    };

    triggerClickDropRef.current = () => {
      const c = makeCoin();
      c.position.set(-0.1, 2.4, 0);
      c.rotation.set(0.5, 0, -0.2);
      scene.add(c);
      gsap.to(c.position, { y: 0.76, duration: 0.6, ease: 'power2.in', onComplete: () => { scene.remove(c); slotFlash.intensity = 3; gsap.to(slotFlash, { intensity: 0, duration: 0.35 }); } });
      gsap.to(c.rotation, { x: Math.PI / 2, z: 0, duration: 0.6 });
    };

    /* ─── GSAP Scroll Timeline ─── */
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: pinWrapper,
          scrub: 0.7,
          anticipatePin: 1,
        },
      });

      // Step 1: Top view -> Side view (nose faces right/screen-forward)
      tl.fromTo(st, { rotationX: 1.1 }, { rotationX: 0.0, duration: 1.3, ease: 'power1.inOut' });

      // Step 2: Coin 1 drops into slot (pig stays still)
      tl.fromTo(st,
        { coin1Y: 2.4, coin1RotX: 0.4, coin1RotZ: -0.15, coin1Visible: true },
        { coin1Y: 0.76, coin1RotX: Math.PI / 2, coin1RotZ: 0, duration: 1.2, ease: 'power2.in',
          onComplete: () => { st.coin1Visible = false; } }
      )
      .fromTo(st, { flash: 0 }, { flash: 3, duration: 0.12 }, '<0.95')
      .to(st, { flash: 0, duration: 0.25 });

      // Step 3: Coin 2 drops into slot (pig stays still)
      tl.fromTo(st,
        { coin2Y: 2.4, coin2RotX: 0.3, coin2RotZ: 0.2, coin2Visible: true },
        { coin2Y: 0.76, coin2RotX: Math.PI / 2, coin2RotZ: 0, duration: 1.2, ease: 'power2.in',
          onComplete: () => { st.coin2Visible = false; } },
        '+=0.1'
      )
      .fromTo(st, { flash: 0 }, { flash: 3, duration: 0.12 }, '<0.95')
      .to(st, { flash: 0, duration: 0.25 })

      // Step 4: Hold then unpin
      .to({}, { duration: 0.8 });
    }, section);

    /* ─── Render Loop ─── */
    let raf: number;
    const render = () => {
      piggy.rotation.x = st.rotationX;
      piggy.scale.set(1, 1, 1);
      piggy.position.set(0, -0.35, 0);

      coin1.position.set(-0.1, st.coin1Y, 0);
      coin1.rotation.set(st.coin1RotX, 0, st.coin1RotZ);
      coin1.visible = st.coin1Visible && st.coin1Y > 0.75;

      coin2.position.set(-0.1, st.coin2Y, 0);
      coin2.rotation.set(st.coin2RotX, 0, st.coin2RotZ);
      coin2.visible = st.coin2Visible && st.coin2Y > 0.75;

      slotFlash.intensity = st.flash;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    render();

    /* ─── Resize ─── */
    const onResize = () => {
      const w = canvas.clientWidth || 460;
      const h = canvas.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    window.addEventListener('resize', onResize);

    /* ─── Cleanup ─── */
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      ScrollTrigger.getAll().forEach((s) => {
        if (s.trigger === section || s.vars?.trigger === section || s.pin === pinWrapper || s.vars?.pin === pinWrapper) s.kill(true);
      });
      ctx.revert();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-logo-color="white"
      className="block-sustainability"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.22)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
        backgroundColor: '#2581E9',
        background: '#2581E9',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        ref={pinWrapperRef}
        style={{ width: '100%', paddingTop: 'clamp(60px, 8vw, 130px)', paddingBottom: 'clamp(60px, 8vw, 130px)', position: 'relative' }}
      >
        <div className="row align-middle relative z-10">
          <div className="xxlarge-8 xxlarge-offset-1 small-16 small-offset-0 small-order-2 columns">
            <h2 className="h-medium" style={{ color: '#ffffff' }}>
              <span className="block">Automated treasury growth. Save more on every global payment.</span>
            </h2>
            <div className="p-big" style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.92)' }}>
                Powering transparent cross-border settlements with automated treasury yield. Retain more of your margins with zero hidden foreign exchange fees and automated multi-currency cash flow management.
              </p>
            </div>
            <a href="#explore" className="btn outline" style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.6)' }}>Explore Solutions</a>
          </div>

          <div className="xxlarge-7 small-16 small-offset-0 small-order-1 columns flex flex-col items-center">
            <div
              className="image-wrapper"
              style={{ position: 'relative', width: '100%', maxWidth: '460px', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', userSelect: 'none' }}
              onClick={() => triggerClickDropRef.current?.()}
              title="Click to drop a coin!"
            >
              <div style={{ position: 'absolute', bottom: '30px', width: '340px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,113,133,0.35) 0%, rgba(250,204,21,0.2) 45%, rgba(56,189,248,0.15) 70%, transparent 80%)', filter: 'blur(36px)', pointerEvents: 'none', zIndex: 1 }} />
              <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', position: 'relative', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: '0px', fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontWeight: 500, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '6px', zIndex: 5 }}>
                <span>🪙</span><span>Scroll to tilt & drop coins • Tap to feed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .block-sustainability .image-wrapper { margin-top: 0 !important; }
      `}</style>
    </section>
  );
};
