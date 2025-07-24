export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-8 mt-16 bg-transparent text-[var(--ivory-whisper)] text-sm relative">
      <div className="mb-2" style={{ color: 'var(--sovereign-gold)', letterSpacing: '0.08em', fontFamily: 'var(--font-header)', textTransform: 'uppercase' }}>
        © {new Date().getFullYear()} Karima Hill
      </div>
      <div className="opacity-60" style={{ fontFamily: 'var(--font-body)' }}>
        Embodied Light. Sacred Precision. Real Results.
      </div>
      <a
        href="/legal"
        className="absolute right-4 bottom-2 text-xs opacity-0 pointer-events-auto hover:opacity-60 transition-opacity duration-200"
        tabIndex={-1}
        aria-hidden="true"
        style={{ color: 'var(--ivory-whisper)' }}
      >
        Legal / Privacy
      </a>
    </footer>
  );
} 