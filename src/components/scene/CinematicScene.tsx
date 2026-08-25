"use client";

import { Suspense, useRef, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FloatingGeometry } from "./FloatingGeometry";

interface CinematicSceneProps {
  scrollProgress?: number;
  reducedMotion?: boolean;
  isMobile?: boolean;
  className?: string;
}

function CameraRig({
  scrollProgress = 0,
  reducedMotion = false,
  isMobile = false,
  mouse,
}: {
  scrollProgress?: number;
  reducedMotion?: boolean;
  isMobile?: boolean;
  mouse: { x: number; y: number };
}) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0, z: isMobile ? 6.2 : 5.5 });

  useFrame(() => {
    const baseZ = isMobile ? 6.2 : 5.5;
    const dollyAmount = isMobile ? 0.8 : 2.2;
    target.current.z = baseZ - scrollProgress * dollyAmount;

    if (!isMobile && !reducedMotion) {
      target.current.x = mouse.x * 0.35;
      target.current.y = mouse.y * 0.22;
    } else {
      target.current.x = 0;
      target.current.y = 0;
    }

    const lerp = isMobile ? 0.12 : 0.08;
    camera.position.x += (target.current.x - camera.position.x) * lerp;
    camera.position.y += (target.current.y - camera.position.y) * lerp;
    camera.position.z += (target.current.z - camera.position.z) * lerp;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function CinematicScene({
  scrollProgress = 0,
  reducedMotion = false,
  isMobile = false,
  className = "",
}: CinematicSceneProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isMobile || reducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      setMouse({ x, y });
    },
    [isMobile, reducedMotion],
  );

  const handlePointerLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className={`absolute inset-0 ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Canvas
        camera={{ position: [0, 0, isMobile ? 6.2 : 5.5], fov: isMobile ? 38 : 42 }}
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: isMobile ? "low-power" : "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <CameraRig
            scrollProgress={scrollProgress}
            reducedMotion={reducedMotion}
            isMobile={isMobile}
            mouse={mouse}
          />
          <FloatingGeometry
            scrollProgress={scrollProgress}
            reducedMotion={reducedMotion}
            isMobile={isMobile}
            mouse={mouse}
          />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(12,12,16,0.3)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(14,165,233,0.08)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(20,184,166,0.06)_0%,transparent_45%)]" />
    </div>
  );
}
