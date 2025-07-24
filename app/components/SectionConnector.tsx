"use client";
import { useEffect, useRef, useState } from "react";

const OFFSET_X = 80; // px from the left edge for luxury margin
const SVG_WIDTH = 60; // width of the SVG container
const LINE_X = 30; // x position of the line in the SVG

// Helper: get section positions (vertical center, fixed x)
function getSectionAnchors() {
  return Array.from(document.querySelectorAll('[data-connector-anchor]')).map(
    (el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: LINE_X,
        y: rect.top + window.scrollY + rect.height / 2,
      };
    }
  );
}

export default function SectionConnector() {
  const [path, setPath] = useState("");
  const [length, setLength] = useState(0);
  const [draw, setDraw] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  // Recalculate path on scroll/resize
  useEffect(() => {
    function updatePath() {
      const anchors = getSectionAnchors();
      if (anchors.length < 2) return;
      let d = `M ${anchors[0].x},${anchors[0].y}`;
      for (let i = 1; i < anchors.length; i++) {
        d += ` V ${anchors[i].y}`;
      }
      setPath(d);
      // Get path length for animation
      setTimeout(() => {
        if (svgRef.current) {
          const p = svgRef.current.querySelector('path');
          if (p) setLength((p as SVGPathElement).getTotalLength());
        }
      }, 10);
    }
    updatePath();
    window.addEventListener("resize", updatePath);
    window.addEventListener("scroll", updatePath);
    return () => {
      window.removeEventListener("resize", updatePath);
      window.removeEventListener("scroll", updatePath);
    };
  }, []);

  // Animate draw on scroll
  useEffect(() => {
    function onScroll() {
      if (!length) return;
      // Reveal more of the line as you scroll
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(1, scrollY / (docHeight * 0.9));
      setDraw(length * (1 - progress));
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [length]);

  // Calculate SVG height
  const [svgHeight, setSvgHeight] = useState(0);
  useEffect(() => {
    function updateHeight() {
      setSvgHeight(document.body.scrollHeight);
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed"
      style={{
        left: OFFSET_X - SVG_WIDTH / 2,
        top: 0,
        width: SVG_WIDTH,
        height: svgHeight,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <path
        d={path}
        fill="none"
        stroke="#D4AF37"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{
          filter: 'drop-shadow(0 0 8px #D4AF37AA)',
          strokeDasharray: length,
          strokeDashoffset: draw,
          transition: 'stroke-dashoffset 0.2s cubic-bezier(.4,0,.2,1)',
        }}
      />
    </svg>
  );
} 