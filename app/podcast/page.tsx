"use client";
import React from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { Mic2 } from "lucide-react";

const BANNER_IMAGE = "/images/image3.png";
const CONTENT_IMAGE = "/images/image4.webp";

export default function PodcastPage() {
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
            Podcast
          </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">Whispers from the Field Coming Soon.</p>
        </div>
      </header>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2" style={{ color: 'var(--sovereign-gold)' }}>
          <Mic2 className="w-7 h-7 text-[var(--sovereign-gold)]" />
          Podcast
        </h2>
        <div className="w-full h-60 bg-gray-900 bg-opacity-30 rounded-2xl flex flex-col items-center justify-center mb-8 border-2 border-dashed border-[var(--sovereign-gold)]">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="#D4AF37" strokeWidth="4" fill="#000" fillOpacity="0.2" />
            <path d="M32 28L56 40L32 52V28Z" fill="#D4AF37" fillOpacity="0.8"/>
          </svg>
          <span className="mt-4 text-[var(--sovereign-gold)] opacity-80 text-xl font-semibold tracking-wide">Coming Soon</span>
        </div>
      </section>
    </main>
  );
} 