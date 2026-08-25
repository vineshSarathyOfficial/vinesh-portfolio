"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import type { Group } from "three";

interface FloatingGeometryProps {
  scrollProgress?: number;
  reducedMotion?: boolean;
  isMobile?: boolean;
  mouse?: { x: number; y: number };
}

const LAYERS = [
  {
    size: [2.2, 0.11, 1.45] as [number, number, number],
    position: [0, 0.42, 0] as [number, number, number],
    rotation: [0.18, 0.32, 0.04] as [number, number, number],
    color: "#d1fae5",
    emissive: "#10b981",
    emissiveIntensity: 0.15,
    metalness: 0.9,
    roughness: 0.15,
    opacity: 1,
  },
  {
    size: [1.95, 0.09, 1.25] as [number, number, number],
    position: [0.12, 0, -0.08] as [number, number, number],
    rotation: [0.1, -0.22, -0.03] as [number, number, number],
    color: "#a7f3d0",
    emissive: "#34d399",
    emissiveIntensity: 0.12,
    metalness: 0.88,
    roughness: 0.18,
    opacity: 0.94,
  },
  {
    size: [1.65, 0.08, 1.05] as [number, number, number],
    position: [-0.08, -0.38, 0.06] as [number, number, number],
    rotation: [-0.06, 0.14, 0.02] as [number, number, number],
    color: "#cffafe",
    emissive: "#22d3ee",
    emissiveIntensity: 0.1,
    metalness: 0.85,
    roughness: 0.22,
    opacity: 0.9,
  },
];

const PARTICLE_COLORS = ["#10b981", "#34d399", "#22d3ee", "#2dd4bf"];

export function FloatingGeometry({
  scrollProgress = 0,
  reducedMotion = false,
  isMobile = false,
  mouse = { x: 0, y: 0 },
}: FloatingGeometryProps) {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Group>(null);
  const elapsedRef = useRef(0);
  const scale = isMobile ? 0.72 : 1;
  const particleCount = isMobile ? 6 : 14;

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) elapsedRef.current += delta;
    const t = elapsedRef.current;
    const scrollRotation = isMobile ? scrollProgress * Math.PI * 0.2 : scrollProgress * Math.PI * 0.5;
    const idleSpeed = isMobile ? 0.05 : 0.08;

    groupRef.current.rotation.y = scrollRotation + t * idleSpeed + mouse.x * 0.3;
    groupRef.current.rotation.x = scrollProgress * Math.PI * 0.1 + t * idleSpeed * 0.4 + mouse.y * 0.15;
    groupRef.current.scale.setScalar(scale * (1 + scrollProgress * (isMobile ? 0.08 : 0.18)));

    if (ringRef.current) {
      ringRef.current.rotation.z = -groupRef.current.rotation.y * 0.45;
    }
  });

  return (
    <>
      <ambientLight intensity={isMobile ? 0.5 : 0.45} />
      <directionalLight position={[5, 7, 4]} intensity={isMobile ? 1.2 : 1.5} color="#ffffff" />
      <directionalLight position={[-3, 2, 2]} intensity={0.45} color="#34d399" />
      <pointLight position={[3, -1, 5]} intensity={isMobile ? 0.35 : 0.55} color="#10b981" />
      {!isMobile && <pointLight position={[-4, 1, 3]} intensity={0.35} color="#22d3ee" />}

      <group ref={groupRef}>
        <Float
          speed={reducedMotion ? 0 : isMobile ? 0.7 : 1}
          rotationIntensity={isMobile ? 0.08 : 0.15}
          floatIntensity={isMobile ? 0.2 : 0.35}
        >
          {LAYERS.map((layer, i) => (
            <RoundedBox
              key={i}
              args={layer.size}
              radius={0.045}
              smoothness={isMobile ? 2 : 4}
              position={layer.position}
              rotation={layer.rotation}
            >
              <meshStandardMaterial
                color={layer.color}
                emissive={layer.emissive}
                emissiveIntensity={layer.emissiveIntensity}
                metalness={layer.metalness}
                roughness={layer.roughness}
                transparent={layer.opacity < 1}
                opacity={layer.opacity}
              />
            </RoundedBox>
          ))}
        </Float>

        {!isMobile && (
          <group ref={ringRef}>
            <mesh rotation={[Math.PI / 2.15, 0, 0]}>
              <torusGeometry args={[2.35, 0.014, 10, 72]} />
              <meshStandardMaterial
                color="#34d399"
                emissive="#10b981"
                emissiveIntensity={0.25}
                metalness={0.9}
                roughness={0.2}
                transparent
                opacity={0.75}
              />
            </mesh>
          </group>
        )}
      </group>

      {!reducedMotion &&
        Array.from({ length: particleCount }).map((_, i) => {
          const angle = (i / particleCount) * Math.PI * 2;
          const radius = isMobile ? 2.2 : 2.9 + (i % 2) * 0.3;
          const color = PARTICLE_COLORS[i % PARTICLE_COLORS.length];
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * radius, Math.sin(angle * 0.6) * 0.7, Math.sin(angle) * radius]}
            >
              <boxGeometry args={[0.03, 0.03, 0.03]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.65} />
            </mesh>
          );
        })}
    </>
  );
}
