export default function PatternHeroBackground() {
  // 900px / 60px spacing = 15 columns max (with a little margin)
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 900 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, right: 0, left: 0, zIndex: 1, pointerEvents: 'none', height: '100%', width: '100%', opacity:'0.4' }}
      aria-hidden="true"
    >
      {/* Geometric pattern: repeat diamond shapes, fill from left edge */}
      <g stroke="#D4AF37" strokeWidth="2">
        {Array.from({ length: 10 }).map((_, row) => (
          Array.from({ length: 15 }).map((_, col) => {
            const x = 0 + col * 60 + (row % 2 === 1 ? 30 : 0);
            const y = 0 + row * 50;
            return (
              <polygon
                key={`p-${row}-${col}`}
                points={`
                  ${x},${y}
                  ${x + 30},${y + 25}
                  ${x},${y + 50}
                  ${x - 30},${y + 25}
                `}
                fill="none"
                opacity={0.7 - row * 0.05}
              />
            );
          })
        ))}
      </g>
    </svg>
  );
}
