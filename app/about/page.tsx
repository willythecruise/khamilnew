"use client";
import React from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { ScrollText } from "lucide-react";

const BANNER_IMAGE = "/images/image4.webp";
const CONTENT_IMAGE = "/images/image6.png";

export default function AboutPage() {
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
            About
          </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">Scroll origin, sovereign path, and mission. Written as a letter or blessing.</p>
        </div>
      </header>
       {/* About Me Letter Section */}
       <section ref={fadeUpRef} className="w-full max-w-3xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <div className="bg-black bg-opacity-60 border-2 border-[var(--sovereign-gold)] rounded-2xl p-8 md:p-12 shadow-lg luxury-section">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center tracking-wide" style={{ color: 'var(--sovereign-gold)', letterSpacing: '0.06em' }}>About Me : A Letter to You</h3>
          <div className="italic text-lg md:text-xl text-left leading-relaxed mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="block mb-3 font-bold text-[var(--sovereign-gold)]">This is not coaching. It’s a consecrated pause.</span>
            <span className="block mb-2">You’ve carried so much for so long, no one has asked what it costs you to be strong.</span>
            <span className="block mb-2">I will.</span>
            <span className="block mb-2">I don’t come to decorate your dysfunction. We dismantle it.</span>
            <span className="block mb-2">I don’t come to take your edge. I sharpen it; but without the weight you’ve been dragging.</span>
            <span className="block mb-2">Some men come for breakthrough.</span>
            <span className="block mb-2">Others come for stillness.</span>
            <span className="block mb-2">For re-strategising.</span>
            <span className="block mb-2">But all leave standing straighter, lighter... not because I fixed them,</span>
            <span className="block mb-2">but because Christ lifts what crushes when Truth is spoken plainly.</span>
            <span className="block mb-2">You won’t be coddled. You won'd be humiliated. You’ll be commissioned. Respectfully.</span>
            <span className="block mb-2">To lead better. To breathe again. To remember what real power feels like when it’s clean.</span>
            <span className="block mt-4 font-bold text-[var(--sovereign-gold)]">If it’s for you, you’ll know.</span>
          </div>
          <div className="mt-8 text-right font-serif text-base md:text-lg text-[var(--sovereign-gold)]" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
            Margaritta<br/>(Karima Hill)
          </div>
        </div>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <blockquote className="italic opacity-80 border-l-4 border-[var(--sovereign-gold)] pl-6 mb-4 text-lg md:text-xl text-center">“What profits a man to gain the whole world and lose his soul?” — Mark 8:36</blockquote>
      </section>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2" style={{ color: 'var(--sovereign-gold)' }}>
          <ScrollText className="w-7 h-7 text-[var(--sovereign-gold)]" />
          Scroll Origin, Sovereign Path, Mission
        </h2>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">This is the sanctuary of Karima Hill. Where timelines collapse, veils lift, and souls remember who they are in Christ. Here, we do not decorate dysfunction, but dismantle it at the root. Deliverance is not a metaphor. Sovereignty is not a brand. This is where the ego kneels, the spirit rises, and the truth walks in like fire. You were not led here by accident. You were summoned because you are ready.</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">“She doesn’t beg for stage time. She is the solution.”</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">You’ve outgrown mindset. Hustle alone didn’t make you happy. Now build with Christ. You can’t build an empire without Christ. Come and get Kingdom advisory and refinement.”</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">This is holy ground.</p>
      </section>
     
      {/* <div className="w-full max-w-2xl h-40 bg-gray-900 bg-opacity-30 rounded-2xl flex items-center justify-center mb-12 border-2 border-dashed border-[var(--sovereign-gold)]">
        <span className="text-[var(--sovereign-gold)] opacity-60 luxury-block">[Letter/Scroll Image Here]</span>
      </div> */}
    </main>
  );
} 