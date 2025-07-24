"use client";
import React from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { Crown, Flame, Swords } from "lucide-react";

const BANNER_IMAGE = "/images/image2.png";
const CONTENT_IMAGE = "/images/image3.png";

export default function RadiancePage() {
  const fadeUpRef = useFadeUp();
  return (
    <main className="min-h-screen flex flex-col items-center bg-[var(--velvet-black)] text-[var(--ivory-whisper)]">
      {/* Banner Section */}
      <header className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center mb-16 overflow-hidden">
        <Image
          src={BANNER_IMAGE}
          alt="Banner"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-3xl md:text-5xl font-serif mb-12 font-normal tracking-tight text-center drop-shadow-lg" style={{ color: 'var(--ivory-whisper)', letterSpacing: '0.01em' }}>
            Radiance
          </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">Private mentorship, spiritual refinement, and scroll restoration for men of calling.</p>
        </div>
      </header>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: 'var(--sovereign-gold)' }}>For Kings</h2>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">Enter only if you’re ready to remember who you are, and willing to be the best man you could possibly be. Subtle, intimate, and potent. The most mysterious page—only for men, whereas "Armory" is for any leader, even women in business.</p>
        <a href="https://instagram.com/karimaradiance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--sovereign-gold)] text-center block mb-8">@karimaradiance Instagram</a>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-5xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--sovereign-gold)' }}>The Masculinity Immersion Ladder</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="luxury-section bg-opacity-10 rounded-xl border border-[var(--sovereign-gold)] p-7 flex flex-col items-center shadow-lg">
            <Swords className="w-10 h-10 mb-3 text-[var(--sovereign-gold)]" />
            <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--sovereign-gold)' }}>Axis Realignment – Initiation Tier</h4>
            <p className="mb-2 text-base text-center">€3,500 · 1-on-1 intensive (digital or immersive)</p>
            <ul className="text-left mb-2 text-sm">
              <li>Identity deliverance (from mimicry, seduction, collapse)</li>
              <li>Restoring command tone, posture, gaze</li>
              <li>Cleansing sexual history fields + financial disarray</li>
              <li>Sealed with prayer + masculine anointing</li>
            </ul>
            <p className="italic opacity-80 text-center">“This is not healing. This is resurrection. Your spine back online. Emotional bandwidth increase. Able to lead in all areas of life.”</p>
          </div>
          {/* Tier 2 */}
          <div className="luxury-section bg-opacity-10 rounded-xl border border-[var(--sovereign-gold)] p-7 flex flex-col items-center shadow-lg">
            <Crown className="w-10 h-10 mb-3 text-[var(--sovereign-gold)]" />
            <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--sovereign-gold)' }}>Return of the King – Restoration Tier</h4>
            <p className="mb-2 text-base text-center">€7,800 · 30-day container + digital strategy access + custom deliverance codes</p>
            <ul className="text-left mb-2 text-sm">
              <li>4-week scroll-mapping with prophetic calibration</li>
              <li>Clean wealth grids and honor recalibration</li>
              <li>Emotional + sexual sovereignty</li>
            </ul>
            <p className="italic opacity-80 text-center">“The King was never dead. Just disarmed. Burdened with spiritual warfare. We win here.”</p>
          </div>
          {/* Tier 3 */}
          <div className="luxury-section bg-opacity-10 rounded-xl border border-[var(--sovereign-gold)] p-7 flex flex-col items-center shadow-lg">
            <Flame className="w-10 h-10 mb-3 text-[var(--sovereign-gold)]" />
            <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--sovereign-gold)' }}>Refinement Protocol – Mastery Tier</h4>
            <p className="mb-2 text-base text-center">€11,000+ or Invite-Only · Ongoing mentorship or yearly structure (12-month commitment)</p>
            <ul className="text-left mb-2 text-sm">
              <li>Public posture coaching (how to show up as holy leader)</li>
              <li>Wealth containment strategy (no more leakage or false overflow)</li>
              <li>Romance, pleasure, and divine responsibility training</li>
              <li>Spiritual status sealing: “Your presence becomes a sermon.”</li>
            </ul>
            <p className="italic opacity-80 text-center">“When a man is fully refined in Christ, even kingdoms kneel at his peace.”</p>
          </div>
        </div>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <blockquote className="italic opacity-80 border-l-4 border-[var(--sovereign-gold)] pl-6 mb-4 text-lg md:text-xl text-center">“Thank you for seeing value in me beyond titles that alone is a blessing I don’t take for granted.” - Entrepreneur, male</blockquote>
      </section>
      {/* <div className="w-full max-w-2xl h-40 bg-gray-900 bg-opacity-30 rounded-2xl flex items-center justify-center mb-12 border-2 border-dashed border-[var(--sovereign-gold)]">
        <span className="text-[var(--sovereign-gold)] opacity-60 luxury-block">[Kings Enter Here / Mystery Image]</span>
      </div> */}
    </main>
  );
} 