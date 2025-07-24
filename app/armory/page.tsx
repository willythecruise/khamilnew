"use client";
import React from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { KeyRound, Eye, Ruler } from "lucide-react";

const BANNER_IMAGE = "/images/image1.png";
const CONTENT_IMAGE = "/images/image2.png";

export default function ArmoryPage() {
  const fadeUpRef = useFadeUp();
  return (
    <main className="min-h-screen flex flex-col items-center bg-[var(--velvet-black)] text-[var(--ivory-whisper)]">
      {/* Banner Section */}
    
      <header className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center mb-16 overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-3xl md:text-5xl font-serif mb-12 font-normal tracking-tight text-center drop-shadow-lg" style={{ color: 'var(--ivory-whisper)', letterSpacing: '0.01em' }}>
            Armory
          </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">Karima Hill | Executive Scroll Advisory</p>
        </div>
      </header>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: 'var(--sovereign-gold)' }}>Where prophetic strategy meets enterprise governance.</h2>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">In markets that move faster than legal frameworks, you don’t just need data, you need discernment.</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">With an LL.M. in Mergers & Acquisitions, a B.A. in Philosophy and Economics, experience in top-tier strategy consulting, VC, and high-growth tech (crypto, health tech) and spiritual authority as a DACH-based energetic governance specialist, I now work exclusively with CEOs, investors, and leadership boards whose kingdoms require sanctified strategy.</p>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">What began with energetically guiding the establishment of free trade cities remotely and placing crystals in power zones of office floors has become a remote-access energetic war-room offering: recalibrating portfolios, timelines, and corporate spirits in real time.</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--sovereign-gold)' }}>Industries Covered</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-center mb-8">
          <li>Tech (especially crypto, health tech, emergent AI)</li>
          <li>Finance & Family Offices</li>
          <li>Beauty, Wellness & Longevity</li>
          <li>Strategic Innovation Ventures</li>
        </ul>
        <p className="text-center text-base md:text-lg">Your industry may vary, but if you're leading something that matters, I can feel it.</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-5xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--sovereign-gold)' }}>What I Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Service 1 */}
          <div className="luxury-section bg-opacity-10 rounded-3xl border-2 border-[var(--sovereign-gold)] px-10 py-8 flex flex-col items-center shadow-2xl w-full max-w-xl mx-auto mb-4">
            <KeyRound className="w-12 h-12 mb-6 text-[var(--sovereign-gold)]" />
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--sovereign-gold)', letterSpacing: '0.01em' }}>Energetic Due Diligence & Red Flag Report</h4>
            <p className="mb-4 text-lg text-center font-medium">Company soul-check + timeline scan.</p>
            <ul className="text-left mb-4 text-base">
              <li className="mb-2">Leadership frequency distortion (e.g. narcissist cofounder risk)</li>
              <li className="mb-2">Strategic misalignments not seen on a P&L</li>
              <li>Unspoken energetic contracts, hidden drains</li>
            </ul>
            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--sovereign-gold)]">Includes:</div>
            <ul className="text-left mb-2 text-base">
              <li className="mb-2">Written energetic audit, DD including red flags and gaps</li>
              <li className="mb-2">Realignment suggestions</li>
              <li>Optional: immediate shifts, energy realignment, site blessings or anchor placements</li>
            </ul>
          </div>
          {/* Service 2 */}
          <div className="luxury-section bg-opacity-10 rounded-3xl border-2 border-[var(--sovereign-gold)] px-10 py-8 flex flex-col items-center shadow-2xl w-full max-w-xl mx-auto mb-4">
            <Eye className="w-12 h-12 mb-6 text-[var(--sovereign-gold)]" />
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--sovereign-gold)', letterSpacing: '0.01em' }}>Strategic Presence at Key Decision Points</h4>
            <p className="mb-4 text-lg text-center font-medium">Silent support for LP decks, board meetings, investor rounds.</p>
            <ul className="text-left mb-4 text-base">
              <li className="mb-2">Timeline harmonization</li>
              <li className="mb-2">Energy steering (conflict transmutation, divine alignment)</li>
              <li className="mb-2">Portfolio prioritization: which projects carry the scroll?</li>
              <li>Live energetic calibration of the room (even virtually)</li>
            </ul>
            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--sovereign-gold)]">Includes:</div>
            {/* No extra includes for this card */}
          </div>
          {/* Service 3 */}
          <div className="luxury-section bg-opacity-10 rounded-3xl border-2 border-[var(--sovereign-gold)] px-10 py-8 flex flex-col items-center shadow-2xl w-full max-w-xl mx-auto mb-4">
            <Ruler className="w-12 h-12 mb-6 text-[var(--sovereign-gold)]" />
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--sovereign-gold)', letterSpacing: '0.01em' }}>Christ-Aligned Innovation Architecture</h4>
            <p className="mb-4 text-lg text-center font-medium">The replacement for McKinsey. Only for the best in each industry.</p>
            <ul className="text-left mb-4 text-base">
              <li className="mb-2">Strategic innovation reviews</li>
              <li className="mb-2">Scroll-based brand redesign: your vision, but this time in Christ</li>
              <li className="mb-2">Kingdom direction setting: opening timelines in markets you’re meant to govern</li>
              <li>Internal language & culture shifts: create sanctified enterprise atmospheres</li>
            </ul>
            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--sovereign-gold)]">Includes:</div>
            {/* No extra includes for this card */}
          </div>
        </div>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--sovereign-gold)' }}>Who This Is For</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-center mb-8">
          <li>A sovereign family office</li>
          <li>A public-facing kingdom business</li>
          <li>A next-gen innovation platform</li>
          <li>A company that shouldn’t die when you do</li>
          <li>A leader of states, organisations, armies</li>
        </ul>
        <p className="text-center text-base md:text-lg">I become part of your spiritual intelligence board and shield your legacy accordingly.</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--sovereign-gold)' }}>Access Protocol</h3>
        <ul className="mb-6 text-left mx-auto inline-block text-base md:text-lg">
          <li>I do not review pitch decks without full mandate.</li>
          <li>My time is not for persuasion, it is for protection.</li>
          <li>To inquire, send a formal application or offer memo via <a href="/apply" className="underline hover:text-[var(--sovereign-gold)]">Apply</a>.</li>
        </ul>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <blockquote className="italic opacity-80 border-l-4 border-[var(--sovereign-gold)] pl-6 mb-4 text-lg md:text-xl">“She said five words in the boardroom. Everything changed.”</blockquote>
      </section>
      {/* <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <a href="#" className="underline hover:text-[var(--sovereign-gold)] text-base md:text-lg">[LinkedIn Corporate Background Link Placeholder]</a>
      </section>
      <div className="w-full max-w-2xl h-40 bg-gray-900 bg-opacity-30 rounded-2xl flex items-center justify-center mb-12 border-2 border-dashed border-[var(--sovereign-gold)]">
        <span className="text-[var(--sovereign-gold)] opacity-60 luxury-block">[Full Logo or Vision Statement Image Here]</span>
      </div> */}
    </main>
  );
} 