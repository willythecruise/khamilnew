"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedHeroBackground from "./components/AnimatedHeroBackground";
import PatternHeroBackground from "./components/PatternHeroBackground";
import { DoorOpen, ShieldCheck, Flame, BookOpenCheck, HeartHandshake, MailCheck, Mic2 } from "lucide-react";

const missionBlocks = [
  "Karima Hill offers Christ-centered healing and sovereign coaching.",
  "This is not trendy wellness, it’s frontline work.",
  "You won’t be coddled. You’ll be commissioned.",
  "This is holy ground.",
  "This is the sanctuary of Karima Hill. Where timelines collapse, veils lift, and souls remember who they are in Christ.",
  "Here, we do not decorate dysfunction, but dismantle it at the root.",
  "Deliverance is not a metaphor. Sovereignty is not a brand.",
  "This is where the ego kneels, the spirit rises, and the truth walks in like fire.",
  "You were not led here by accident. You were summoned because you are ready."
];

const offerings = [
  {
    name: "Armory",
    summary: "Executive Strategy & Energetic Governance for business owners, investors, and leaders.",
    icon: ShieldCheck,
    link: "/armory",
  },
  {
    name: "Radiance",
    summary: "Private mentorships & refinement work for men. Masculine scroll restoration, AXIS work, high-tier initiations.",
    icon: Flame,
    link: "/radiance",
  },
  {
    name: "Retreats",
    summary: "In-person and virtual immersions for soul phases and sacred locations.",
    icon: DoorOpen,
    link: "/retreats",
  },
  {
    name: "Library",
    summary: "Downloads, journals, audio, meditations, and sacred writings to read.",
    icon: BookOpenCheck,
    link: "/library",
  },
  {
    name: "Projects",
    summary: "Kingdom tithing, legacy projects, and impact gifting.",
    icon: HeartHandshake,
    link: "/projects",
  },
  {
    name: "Apply",
    summary: "Private contact, booking, and invitation-based access.",
    icon: MailCheck,
    link: "/apply",
  },
  {
    name: "Podcast",
    summary: "Whispers from the Field Coming Soon.",
    icon: Mic2,
    link: "/podcast",
  },
];

export default function Home() {
  // Typing animation for hero text
  const fullTitle = "KARIMA HILL";
  const [typedTitle, setTypedTitle] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const title = "KARIMA HILL";
    let i = 0;
    setTypedTitle("");
    setShowSubtitle(false);
    setSubtitleVisible(false);
    const interval = setInterval(() => {
      if (i <= title.length) {
        setTypedTitle(title.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowSubtitle(true);
          setTimeout(() => setSubtitleVisible(true), 350);
        }, 400);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  // Fade-in for hero section
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  // Animation for mission blocks
  const missionRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-in");
          }
        });
      },
      { threshold: 0.15 }
    );
    missionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--velvet-black)] text-[var(--ivory-whisper)] relative">
      {/* Hero Section: Minimalist, Cinematic */}
      <header
        className={`relative flex flex-col items-center justify-center h-screen w-full overflow-hidden transition-opacity duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 0 }}
      >
        <PatternHeroBackground />
        <AnimatedHeroBackground />
        <div className="relative z-30 flex flex-col items-center w-full">
          <h1 className="h1 select-none tracking-wider text-center drop-shadow-lg">
            {typedTitle}
            <span className="blinking-cursor" style={{ color: 'var(--sovereign-gold)', fontWeight: 200 }}>{typedTitle.length < fullTitle.length ? '|' : ''}</span>
          </h1>
          {showSubtitle && (
            <div
              className={`luxury-block text-center animate-pulse-slow tracking-tighter mt-2 text-2xl md:text-3xl transition-opacity duration-1000 ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ color: 'var(--sovereign-gold)' }}
            >
              The sacred war room for those who remember why they came.
            </div>
          )}
        </div>
      </header>
      {/* Cinematic Mission/Identity Reveal */}
      {/* Divider between hero and mission */}
      <div className="w-full flex justify-center my-8">
        <div className="h-1 w-32 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
      </div>
      <section className="w-full flex flex-col items-center justify-center max-w-4xl mx-auto py-16 px-4 md:px-0 gap-0">
        {missionBlocks.map((block, i) => (
          <div
            key={i}
            ref={el => { missionRefs.current[i] = el; }}
            className={
              `text-center ${
                i === 0
                  ? 'text-3xl md:text-5xl font-serif mb-12 font-normal tracking-tight' // Main block, not bold
                  : i === 3
                  ? 'text-2xl md:text-3xl font-serif mb-10 font-medium' // Gold emphasis, not overly bold
                  : 'text-lg md:text-2xl font-sans mb-8 font-normal'
              } fade-up opacity-0`
            }
            style={{ color: i === 3 ? 'var(--sovereign-gold)' : 'var(--ivory-whisper)', letterSpacing: i === 3 ? '0.08em' : '0.01em' }}
          >
            {block}
          </div>
        ))}
      </section>
      {/* Offerings/Portals Section */}
      <section className="w-full max-w-6xl mx-auto py-20 px-4 md:px-0">
        <h2 className="h2 text-center mb-10 tracking-wider" style={{ letterSpacing: '0.08em' }}>PORTALS</h2>
        {/* Responsive grid for all breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {offerings.map((offering, i) => (
            <a
              key={offering.name}
              href={offering.link}
              className="group flex flex-col items-center justify-between bg-black bg-opacity-60 rounded-2xl border-2 border-[var(--sovereign-gold)] p-8 transition-all duration-200 hover:shadow-2xl hover:scale-105 luxury-section text-center"
              style={{ minWidth: '260px', maxWidth: 400, minHeight: 280, margin: '0 auto' }}
            >
              <offering.icon className="w-14 h-14 mb-4 text-[var(--sovereign-gold)] group-hover:scale-110 transition-transform duration-200" />
              <h3 className="h3 mb-3 text-2xl font-semibold" style={{ color: 'var(--sovereign-gold)' }}>{offering.name}</h3>
              <div className="luxury-block mb-6 text-base md:text-lg opacity-90">{offering.summary}</div>
              <span className="mt-auto px-6 py-2 rounded border border-[var(--sovereign-gold)] text-[var(--sovereign-gold)] font-semibold uppercase tracking-wider hover:bg-[var(--sovereign-gold)] hover:text-[var(--velvet-black)] transition-colors duration-200 shadow-lg" style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', display: 'inline-block' }}>Enter</span>
            </a>
          ))}
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="w-full max-w-3xl mx-auto py-20 px-4 md:px-0 flex flex-col items-center">
        <h2 className="h2 text-center mb-6 tracking-wider" style={{ letterSpacing: '0.08em' }}>Ready to Enter the House?</h2>
        <p className="luxury-block text-center max-w-xl mx-auto mb-10 text-lg md:text-xl" style={{ color: 'var(--ivory-whisper)', fontWeight: 500 }}>
          Step into a new era of Christ-centered leadership, legacy, and radiance. Your scroll awaits.
        </p>
        <a
          href="/apply"
          className="px-10 py-3 rounded-full border-2 border-[var(--sovereign-gold)] text-[var(--sovereign-gold)] font-bold uppercase tracking-wider text-lg hover:bg-[var(--sovereign-gold)] hover:text-[var(--velvet-black)] transition-colors duration-200 shadow-lg"
          style={{ fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.12em' }}
        >
          Apply Now
        </a>
      </section>
    </div>
  );
}
