"use client";
import React from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { BookOpenCheck } from "lucide-react";

const BANNER_IMAGE = "/images/image6.png";
const CONTENT_IMAGE = "/images/image7.webp";

export default function LibraryPage() {
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
            Library
          </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">Paid downloads, free texts, and sacred writings to read.</p>
        </div>
      </header>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2" style={{ color: 'var(--sovereign-gold)' }}>
          <BookOpenCheck className="w-7 h-7 text-[var(--sovereign-gold)]" />
          KarimaHill Writing Flow
        </h2>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">There are things in life which money can’t buy. It’s more than Harvard philosopher Michael Sandel wrote in his book with the same name. It’s Loyalty. Integrity. God’s divine protection when building on Christ.</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">I know betrayal. And I know your legacy is not in danger because your vision, strategy, discipline, routine or revenue is not enough. It is in danger, when you fail to spot energetic misalignment and cracks in the structure. Factors you spot too late, that make deals go sour. Co-founders that rug-pull. The business partner that is not loyal. Employees who go behind your back. An ex-wife that tries to put some black magic on you so you can’t deliver anymore. Buried emotional childhood trauma resurfacing at the most inconvenient time. I’ve seen it all, and there’s a remedy. It’s called KarimaRadiance. Gifted by God to be a seer, an oracle, an intercessor.</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">Equipped to win in divine court. To be an attorney in heaven, for those that confide in me. To see what is hidden to others. To reveal privately to you, what you need to know. Shifting timelines and re-architecting energetically with high precision and reverence to the most High.</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">Only aligned to work with kings worthy of divine intervention. Quiet, secret, sacrosanct. Supporting you behind the scenes so you can shine.</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-3xl mx-auto px-4 md:px-0 mb-20 fade-up flex flex-col items-center">
        <div className="w-full flex justify-center mb-12">
          <Image src="/images/library.png" alt="Library" width={900} height={400} className="rounded-2xl object-cover border-2 border-[var(--sovereign-gold)] shadow-lg" style={{ maxHeight: 400 }} priority />
        </div>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">On the Morgan Library ceiling, each zodiac sign etched above was chosen by J.P. Morgan himself, who famously said, ‘Millionaires don’t use astrology. Billionaires do.’ He wasn’t joking. He joined an elite Zodiac Club, believing in timed financial power through celestial manipulation and rituals. He might have collected rare Bibles, but never made it into Christ. I once stood in that library. I chose a different allegiance. Not to stars, symbols, or making wealth a god. Not to secrecy. But to the Kingdom of Heaven. The Karima Hill Library holds no coded myths, only holy strategy. Uncompromised truth. No zodiac required. Just Christ, eternal, enthroned and alive in us.</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <blockquote className="italic opacity-80 border-l-4 border-[var(--sovereign-gold)] pl-6 mb-4 text-lg md:text-xl text-center">“What profits a man to gain the whole world and lose his soul?” — Mark 8:36</blockquote>
      </section>
    </main>
  );
} 