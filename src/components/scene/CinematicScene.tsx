"use client";

import React, { useRef, useEffect, useState, Suspense, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { FloatingGeometry } from "./FloatingGeometry";

/* ─── Cinematic Lighting Rig ─── */
function CinematicLights({ scrollProgress }: { scrollProgress: number }) {
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const fillLightRef = useRef<THREE.PointLight>(null);
  const rimLightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (!keyLightRef.current || !fillLightRef.current || !rimLightRef.current) return;

    // Key light intensity pulses gracefully on scroll
    const keyIntensity = 1.0 + Math.sin(scrollProgress * Math.PI) * 0.6;
    keyLightRef.current.intensity = keyIntensity;

    // Dynamic Rim light shifts color from cyan to pink to gold
    const rimColor = new THREE.Color();
    if (scrollProgress < 0.5) {
      rimColor.lerpColors(
        new THREE.Color("#00ffff"),
        new THREE.Color("#ff006e"),
        scrollProgress * 2
      );
    } else {
      rimColor.lerpColors(
        new THREE.Color("#ff006e"),
        new THREE.Color("#d4af37"),
        (scrollProgress - 0.5) * 2
      );
    }
    rimLightRef.current.color = rimColor;
    rimLightRef.current.intensity = 0.8 + Math.sin(scrollProgress * Math.PI * 2) * 0.4;
  });

  return (
    <>
      <directionalLight
        ref={keyLightRef}
        position={[-25, 35, 30]}
        intensity={1.4}
        color="#fff8ed"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight
        ref={fillLightRef}
        position={[35, 20, 20]}
        intensity={0.5}
        color="#d0e8ff"
      />
      <pointLight
        ref={rimLightRef}
        position={[0, -20, -55]}
        intensity={1.0}
        color="#00ffff"
      />
      <ambientLight intensity={0.12} color="#ffffff" />
    </>
  );
}

/* ─── Scroll & Mouse-Driven Camera ─── */
function ScrollCamera({
  scrollProgress,
  isMobile,
  mouse,
}: {
  scrollProgress: number;
  isMobile: boolean;
  mouse: { x: number; y: number };
}) {
  const { camera } = useThree();

  useFrame(() => {
    // Subtle mouse parallax
    const targetMouseX = isMobile ? 0 : mouse.x * 2.5;
    const targetMouseY = isMobile ? 0 : mouse.y * -1.5;

    if (isMobile) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, -50 - scrollProgress * 25, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, -scrollProgress * 2, 0.05);
      return;
    }

    // Camera Section Behavior
    if (scrollProgress < 0.3) {
      // Hero / Keynote intro
      const t = scrollProgress / 0.3;
      camera.position.z = THREE.MathUtils.lerp(-45, -75, t);
      camera.position.y = THREE.MathUtils.lerp(0, -2, t) + targetMouseY * 0.05;
      camera.position.x = THREE.MathUtils.lerp(0, 3, t) + targetMouseX * 0.05;
      camera.rotation.x = THREE.MathUtils.lerp(0, -0.04, t);
      camera.rotation.y = THREE.MathUtils.lerp(0, 0.05, t);
    } else if (scrollProgress < 0.65) {
      // FinPulse Deep Dive & Projects
      const t = (scrollProgress - 0.3) / 0.35;
      camera.position.z = THREE.MathUtils.lerp(-75, -55, t);
      camera.rotation.y = THREE.MathUtils.lerp(0.05, -0.15, t) + targetMouseX * 0.02;
      camera.position.y = THREE.MathUtils.lerp(-2, 1, t) + targetMouseY * 0.05;
      camera.rotation.x = THREE.MathUtils.lerp(-0.04, 0.03, t);
    } else {
      // Experience & Contact Finale
      const t = (scrollProgress - 0.65) / 0.35;
      camera.position.z = THREE.MathUtils.lerp(-55, -95, t);
      camera.position.y = THREE.MathUtils.lerp(1, 4, t);
      camera.rotation.x = THREE.MathUtils.lerp(0.03, 0.08, t);
      camera.rotation.y = THREE.MathUtils.lerp(-0.15, 0.1, t);
    }
  });

  return null;
}

/* ─── Main Scene ─── */
export function CinematicScene({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    setScrollProgress(Math.min(1, Math.max(0, scrollTop / docHeight)));
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  return (
    <div ref={containerRef} className="relative">
      {/* 3D Canvas Background */}
      {mounted && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas
            shadows={!isMobile}
            camera={{ position: [0, 0, -45], fov: 52, near: 0.1, far: 400 }}
            gl={{
              antialias: !isMobile,
              alpha: true,
              powerPreference: isMobile ? "low-power" : "high-performance",
            }}
            dpr={isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2)}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <fog attach="fog" args={["#080808", 25, 140]} />
              <CinematicLights scrollProgress={scrollProgress} />
              <ScrollCamera scrollProgress={scrollProgress} isMobile={isMobile} mouse={mouse} />
              <FloatingGeometry scrollProgress={scrollProgress} isMobile={isMobile} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Cinematic Vignette */}
      <div className="vignette" />

      {/* Subtle Noise Texture */}
      <div className="noise-overlay" />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default CinematicScene;
