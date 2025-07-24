"use client";
import React from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { HeartHandshake, CheckCircle2 } from "lucide-react";

const BANNER_IMAGE = "/images/image7.webp";
const CONTENT_IMAGE = "/images/image1.png";

export default function ProjectsPage() {
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
            Projects
          </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">Kingdom tithing, legacy projects, and impact gifting.</p>
        </div>
      </header>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2" style={{ color: 'var(--sovereign-gold)' }}>
          <HeartHandshake className="w-7 h-7 text-[var(--sovereign-gold)]" />
          Legacy Projects
        </h2>
        <div className="mb-8 bg-black bg-opacity-60 rounded-2xl border-l-4 border-[var(--sovereign-gold)] p-8 shadow-lg">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-[var(--sovereign-gold)] mt-1" />
              <div>
                <span className="font-bold text-xl md:text-2xl text-[var(--sovereign-gold)]">Mutumbu</span>
                <span className="block text-lg md:text-xl text-[var(--ivory-whisper)]">Education and healing initiatives</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-[var(--sovereign-gold)] mt-1" />
              <div>
                <span className="font-bold text-xl md:text-2xl text-[var(--sovereign-gold)]">Scroll Scholarships</span>
                <span className="block text-lg md:text-xl text-[var(--ivory-whisper)]">Supporting future leaders</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-[var(--sovereign-gold)] mt-1" />
              <div>
                <span className="font-bold text-xl md:text-2xl text-[var(--sovereign-gold)]">Village Light-Grids</span>
                <span className="block text-lg md:text-xl text-[var(--ivory-whisper)]">Infrastructure and empowerment</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-[var(--sovereign-gold)] mt-1" />
              <div>
                <span className="font-bold text-xl md:text-2xl text-[var(--sovereign-gold)]">Impact Gifting</span>
                <span className="block text-lg md:text-xl text-[var(--ivory-whisper)]">God-guided charity and tithing</span>
              </div>
            </li>
          </ul>
        </div>
        <p className="text-center text-base md:text-lg mb-8">10% of any revenue flows into God-guided charity such as education, work with children, healings, impact gifting (Mutumbu, scroll scholarships, village light-grids).</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up flex flex-col items-center">
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">If you have a project or cause aligned with the Kingdom, reach out to collaborate or support.</p>
        <a
          href="/apply"
          className="px-10 py-3 rounded-full border-2 border-[var(--sovereign-gold)] text-[var(--sovereign-gold)] font-bold uppercase tracking-wider text-lg hover:bg-[var(--sovereign-gold)] hover:text-[var(--velvet-black)] transition-colors duration-200 shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.12em' }}
        >
          Apply Now
        </a>
      </section>
    </main>
  );
} 