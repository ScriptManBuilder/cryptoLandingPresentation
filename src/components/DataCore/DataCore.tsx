import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

/* ── Styled wrapper ── */
const CanvasWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1;
  position: relative;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    inset: -20%;
    background: radial-gradient(
      circle,
      rgba(57, 255, 20, 0.06) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }

  @media (max-width: 768px) {
    max-width: min(460px, 90vw);
  }

  @media (max-width: 480px) {
    max-width: min(400px, 92vw);
  }

  @media (max-width: 375px) {
    max-width: min(350px, 93vw);
  }

  @media (max-width: 320px) {
    max-width: min(300px, 94vw);
  }

  @media (max-width: 275px) {
    max-width: 96vw;
  }
`;
/* ── Config ── */
const CRYSTAL_COUNT = 8;
const NEON = 0x39ff14;
const NEON_DIM = 0x00c72b;
const WHITE = 0xffffff;

/* Camera Z — CLOSER on small screens so the planet fills the frame */
function getCameraZ(): number {
  const w = window.innerWidth;
  if (w <= 275) return 5.0;
  if (w <= 320) return 5.2;
  if (w <= 375) return 5.5;
  if (w <= 480) return 5.8;
  if (w <= 768) return 6.2;
  return 6.5;
}

/* Small octahedron crystal: solid inner + neon wireframe */
function makeCrystal(): THREE.Group {
  const group = new THREE.Group();
  const geo = new THREE.OctahedronGeometry(0.22, 0);

  const solid = new THREE.Mesh(
    geo,
    new THREE.MeshPhongMaterial({
      color: 0x060a06,
      emissive: new THREE.Color(NEON).multiplyScalar(0.38),
      shininess: 160,
      transparent: true,
      opacity: 0.92,
    }),
  );

  const wire = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({
      color: NEON,
      wireframe: true,
      transparent: true,
      opacity: 0.78,
    }),
  );

  group.add(solid, wire);
  return group;
}

export default function DataCore() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const W = wrapper.clientWidth;
    const H = wrapper.clientHeight;

    /* ── Scene ── */
    const scene = new THREE.Scene();

    /* ── Camera ── */
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, getCameraZ());

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    wrapper.appendChild(renderer.domElement);

    /* ── Lights ── */
    const ambient = new THREE.AmbientLight(WHITE, 0.4);
    scene.add(ambient);

    const greenPoint = new THREE.PointLight(NEON, 3, 20);
    greenPoint.position.set(0, 0, 4);
    scene.add(greenPoint);

    const rimLight = new THREE.PointLight(NEON_DIM, 1.5, 15);
    rimLight.position.set(-4, 3, -2);
    scene.add(rimLight);

    /* ── Core sphere ── */
    const coreGeo = new THREE.IcosahedronGeometry(1.45, 5);

    // Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: NEON,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireCore = new THREE.Mesh(coreGeo, wireMat);
    scene.add(wireCore);

    // Solid inner
    const solidMat = new THREE.MeshPhongMaterial({
      color: 0x050505,
      emissive: new THREE.Color(NEON).multiplyScalar(0.06),
      shininess: 80,
      transparent: true,
      opacity: 0.92,
    });
    const solidCore = new THREE.Mesh(coreGeo, solidMat);
    scene.add(solidCore);

    /* ── Glow sprite at center ── */
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 256;
    glowCanvas.height = 256;
    const gc = glowCanvas.getContext('2d')!;
    const grad = gc.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(57,255,20,0.45)');
    grad.addColorStop(0.4, 'rgba(57,255,20,0.12)');
    grad.addColorStop(1, 'rgba(57,255,20,0)');
    gc.fillStyle = grad;
    gc.fillRect(0, 0, 256, 256);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const glowMat = new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false });
    const glowSprite = new THREE.Sprite(glowMat);
    glowSprite.scale.set(6, 6, 1);
    scene.add(glowSprite);

    /* ── Particle field ── */
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 2.2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: NEON,
      size: 0.022,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ── Orbit rings ── */
    const ringAngles = [0, Math.PI / 3, (2 * Math.PI) / 3];
    const rings: THREE.Line[] = ringAngles.map((tilt, i) => {
      const segments = 128;
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= segments; j++) {
        const a = (j / segments) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * (2.4 + i * 0.15), Math.sin(a) * (2.4 + i * 0.15), 0));
      }
      const rGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const rMat = new THREE.LineBasicMaterial({
        color: NEON,
        transparent: true,
        opacity: 0.12 - i * 0.02,
      });
      const ring = new THREE.Line(rGeo, rMat);
      ring.rotation.x = tilt;
      ring.rotation.y = tilt * 0.5;
      scene.add(ring);
      return ring;
    });

    /* ── Crystal orbits ── */
    interface CrystalOrbit {
      group: THREE.Group;
      orbitRadius: number;
      speed: number;
      angle: number;
      tiltX: number;
      tiltZ: number;
    }

    const crystalOrbits: CrystalOrbit[] = Array.from({ length: CRYSTAL_COUNT }, (_, i) => {
      const group = makeCrystal();
      scene.add(group);
      return {
        group,
        orbitRadius: 2.4 + (i % 3) * 0.22,
        speed: 0.26 + (i % 4) * 0.08,
        angle: (i / CRYSTAL_COUNT) * Math.PI * 2,
        tiltX: ((i % 3) - 1) * 0.5,
        tiltZ: ((i % 2) - 0.5) * 0.35,
      };
    });

    /* ── Mouse parallax ── */
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    wrapper.addEventListener('mousemove', onMouseMove);

    /* ── Resize ── */
    const onResize = () => {
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      renderer.setSize(w, h);
      // Recalculate camera distance so scene never clips on orientation change
      camera.position.z = getCameraZ();
    };
    window.addEventListener('resize', onResize);

    /* ── Animation loop ── */
    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Core rotation
      wireCore.rotation.y = t * 0.18;
      wireCore.rotation.x = t * 0.09;
      solidCore.rotation.y = t * 0.18;
      solidCore.rotation.x = t * 0.09;

      // Glow pulse
      const glowScale = 3.8 + Math.sin(t * 1.8) * 0.4;
      glowSprite.scale.set(glowScale, glowScale, 1);
      (glowMat as THREE.SpriteMaterial).opacity = 0.55 + Math.sin(t * 1.8) * 0.15;

      // Particles slow drift
      particles.rotation.y = t * 0.04;

      // Ring rotation
      rings.forEach((ring, i) => {
        ring.rotation.z = t * (0.06 + i * 0.02);
        ring.rotation.y = t * 0.04;
      });

      // Crystal orbits
      crystalOrbits.forEach((c, i) => {
        c.angle += c.speed * 0.01;
        const x = Math.cos(c.angle) * c.orbitRadius;
        const y = Math.sin(c.angle) * c.orbitRadius * Math.sin(c.tiltX);
        const z = Math.sin(c.angle) * c.orbitRadius * Math.cos(c.tiltX);
        c.group.position.set(x, y + c.tiltZ, z);

        // Self-rotation — sparkle effect
        c.group.rotation.x = t * (0.9 + i * 0.18);
        c.group.rotation.y = t * (1.3 + i * 0.12);

        // Depth scale + opacity for 3D feel
        const depthScale = THREE.MathUtils.mapLinear(z, -c.orbitRadius, c.orbitRadius, 0.55, 1.0);
        c.group.scale.setScalar(depthScale);
        const opacity = THREE.MathUtils.mapLinear(z, -c.orbitRadius, c.orbitRadius, 0.35, 1.0);
        c.group.children.forEach((child) => {
          ((child as THREE.Mesh).material as THREE.Material & { opacity: number }).opacity = opacity;
        });
      });

      // Parallax camera tilt
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);    

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      wrapper.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      if (renderer.domElement.parentNode === wrapper) {
        wrapper.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <CanvasWrapper ref={wrapperRef} aria-hidden="true" />;
}
