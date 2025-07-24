"use client";
import { useRef, useEffect, useState } from "react";

export default function AnimatedHeroBackground() {
  const [mouse, setMouse] = useState({ x: 320, y: 180, inside: false });
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Animate gold dust particles
  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.008;
      const particles = svgRef.current?.querySelectorAll('.gold-dust');
      if (particles) {
        particles.forEach((el, i) => {
          const angle = t + i * 1.2;
          const r = 120 + 40 * Math.sin(t + i);
          const cx = 320 + r * Math.cos(angle);
          const cy = 180 + r * Math.sin(angle * 1.1);
          el.setAttribute('cx', cx.toString());
          el.setAttribute('cy', cy.toString());
        });
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Mouse move for highlight (SVG coordinates)
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Map mouse position to SVG viewBox (0-640, 0-360)
    const x = ((e.clientX - rect.left) / rect.width) * 640;
    const y = ((e.clientY - rect.top) / rect.height) * 360;
    setMouse({ x, y, inside: true });
  };
  const handleMouseLeave = () => setMouse((m) => ({ ...m, inside: false }));

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden z-0"
      style={{ pointerEvents: 'auto' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 640 360"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Animated gold dust particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <circle
            key={i}
            className="gold-dust"
            r={Math.random() * 2.5 + 1.5}
            fill="url(#gold-gradient)"
            opacity={0.7 + 0.3 * Math.sin(i)}
          />
        ))}
        <defs>
          <radialGradient id="gold-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbe6" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#0D0D0D" />
          </radialGradient>
          <radialGradient id="mouse-light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Mouse-following highlight */}
        {/**
        {mouse.inside && (
          <circle
            cx={mouse.x}
            cy={mouse.y}
            r="90"
            fill="url(#mouse-light)"
          />
        )}
        */}
      </svg>
    </div>
  );
} 