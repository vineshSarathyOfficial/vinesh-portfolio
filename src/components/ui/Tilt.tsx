"use client";

import React, { useRef, useState } from "react";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number;
}

export function Tilt({ children, className = "", maxRotate = 8 }: TiltProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    showSpotlight: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles
    const rotateY = (mouseX / (width / 2)) * maxRotate;
    const rotateX = -(mouseY / (height / 2)) * maxRotate;

    // Spotlight coordinates relative to card top-left
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y, rotateX, rotateY, showSpotlight: true });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0, rotateX: 0, rotateY: 0, showSpotlight: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale3d(1.015, 1.015, 1.015)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-[inherit] overflow-hidden"
        style={{
          opacity: coords.showSpotlight ? 1 : 0,
          background: `radial-gradient(circle 150px at ${coords.x}px ${coords.y}px, var(--spotlight-color), transparent 80%)`,
        }}
      />
      <div className="h-full w-full" style={{ transform: "translateZ(15px)" }}>
        {children}
      </div>
    </div>
  );
}
