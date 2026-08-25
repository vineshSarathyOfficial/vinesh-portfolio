"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingGeometryProps {
  scrollProgress: number;
  isMobile: boolean;
}

function FloatingTechShape({
  position,
  geometry,
  color,
  speed,
  scale,
  scrollProgress,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "torusKnot" | "dodecahedron";
  color: string;
  speed: number;
  scale: number;
  scrollProgress: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Multi-axis smooth rotation
    meshRef.current.rotation.x = t * speed * 0.4 + scrollProgress * Math.PI * 0.8;
    meshRef.current.rotation.y = t * speed * 0.3 + scrollProgress * Math.PI * 0.6;
    meshRef.current.rotation.z = t * speed * 0.15;

    // Harmonic floating wave
    meshRef.current.position.y = position[1] + Math.sin(t * speed * 0.8 + position[0]) * 0.8;
    meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.5 + position[1]) * 0.5;

    // Dynamic Z depth scrub
    meshRef.current.position.z = position[2] - scrollProgress * 20;

    if (wireframeRef.current) {
      wireframeRef.current.rotation.copy(meshRef.current.rotation);
      wireframeRef.current.position.copy(meshRef.current.position);
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return new THREE.IcosahedronGeometry(1, 1);
      case "octahedron":
        return new THREE.OctahedronGeometry(1, 0);
      case "torus":
        return new THREE.TorusGeometry(1, 0.35, 16, 32);
      case "torusKnot":
        return new THREE.TorusKnotGeometry(0.8, 0.22, 64, 16);
      case "dodecahedron":
        return new THREE.DodecahedronGeometry(1, 0);
      default:
        return new THREE.IcosahedronGeometry(1, 1);
    }
  }, [geometry]);

  return (
    <group>
      {/* Semi-transparent inner solid */}
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <primitive object={geo} attach="geometry" />
        <meshPhysicalMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          transmission={0.4}
          ior={1.5}
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

// Cinematic Star & Dust Particles
function DustParticles({ count = 250 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#00ffff"),
      new THREE.Color("#d4af37"),
      new THREE.Color("#ff006e"),
      new THREE.Color("#ffffff"),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.015;
    pointsRef.current.rotation.x = t * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export function FloatingGeometry({ scrollProgress, isMobile }: FloatingGeometryProps) {
  const shapes = useMemo(() => {
    const baseShapes: Array<{
      position: [number, number, number];
      geometry: "icosahedron" | "octahedron" | "torus" | "torusKnot" | "dodecahedron";
      color: string;
      speed: number;
      scale: number;
    }> = [
      { position: [-14, 6, -20], geometry: "icosahedron", color: "#00ffff", speed: 0.35, scale: 2.4 },
      { position: [16, -4, -30], geometry: "torusKnot", color: "#ff006e", speed: 0.28, scale: 2.2 },
      { position: [-9, -8, -40], geometry: "torus", color: "#d4af37", speed: 0.22, scale: 2.0 },
      { position: [12, 10, -25], geometry: "dodecahedron", color: "#00ffcc", speed: 0.2, scale: 1.8 },
      { position: [0, -12, -50], geometry: "octahedron", color: "#0088ff", speed: 0.3, scale: 2.8 },
      { position: [-18, 2, -35], geometry: "torusKnot", color: "#7928ca", speed: 0.25, scale: 1.6 },
      { position: [20, 6, -45], geometry: "icosahedron", color: "#ff4d4d", speed: 0.18, scale: 1.9 },
    ];

    return isMobile ? baseShapes.slice(0, 3) : baseShapes;
  }, [isMobile]);

  return (
    <group>
      {shapes.map((shape, i) => (
        <FloatingTechShape
          key={i}
          {...shape}
          scrollProgress={scrollProgress}
        />
      ))}
      <DustParticles count={isMobile ? 80 : 250} />
    </group>
  );
}

export default FloatingGeometry;
