"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { MailCheck, User, Mail, MessageCircle } from "lucide-react";

const BANNER_IMAGE = "/images/image2.png";
const CONTENT_IMAGE = "/images/image3.png";

export default function ApplyPage() {
  const fadeUpRef = useFadeUp();
  // Form state
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
            Apply
          </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">Private contact, booking, and invitation-based access. Especially for Armory, Radiance, or Retreat inquiries.</p>
        </div>
      </header>
      {/* Private Immersions Letter Section */}
      <section ref={fadeUpRef} className="w-full max-w-3xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <div className="bg-black bg-opacity-60 border-2 border-[var(--sovereign-gold)] rounded-2xl p-8 md:p-12 shadow-lg luxury-section">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center tracking-wide" style={{ color: 'var(--sovereign-gold)', letterSpacing: '0.06em' }}>Private Immersions : A Letter to You</h3>
          <div className="italic text-lg md:text-xl text-left leading-relaxed mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="block mb-3 font-bold text-[var(--sovereign-gold)]">This isn’t a vacation.</span>
            <span className="block mb-2">It’s a sacred pause in the place that speaks to you the most where timelines shift, and weight leaves you for good.</span>
            <span className="block mb-2">Some men come because they can’t think straight anymore. Because stress and looping thoughts haunt them.</span>
            <span className="block mb-2">Others come because they’ve done everything right, excel, and still feel nothing in their hearts.</span>
            <span className="block mb-2">You won’t find luxury for luxury’s sake here.</span>
            <span className="block mb-2">You’ll find stillness that unnerves you… then restores you.</span>
            <span className="block mb-2">Conversations that cut through the noise.</span>
            <span className="block mb-2">Moments where God breathes on parts of you you thought were long gone.</span>
            <span className="block mb-2">The men who leave don’t return the same.</span>
            <span className="block mb-2">Not because they “worked on themselves,”</span>
            <span className="block mb-2">but because Truth has a way of stepping in quietly,</span>
            <span className="block mb-2">and everything changes.</span>
            <span className="block mt-4 font-bold text-[var(--sovereign-gold)]">If you felt that pull reading this, your soul may already be packing.</span>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2" style={{ color: 'var(--sovereign-gold)' }}>
          <MailCheck className="w-7 h-7 text-[var(--sovereign-gold)]" />
          Application Form
        </h2>
        <form
          className="w-full max-w-xl mx-auto bg-black bg-opacity-70 rounded-2xl border-2 border-[var(--sovereign-gold)] p-8 md:p-12 shadow-2xl flex flex-col gap-7 mb-8"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus(null);
            setLoading(true);
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const message = formData.get('message') as string;
            try {
              const res = await fetch('/api/apply-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
              });
              const data = await res.json();
              if (data.success) {
                setStatus('success');
                form.reset();
              } else {
                setStatus('error');
              }
            } catch {
              setStatus('error');
            } finally {
              setLoading(false);
            }
          }}
        >
          <label className="flex flex-col gap-2 text-lg font-medium">
            <span className="mb-1">Name</span>
            <div className="flex items-center gap-3 bg-black bg-opacity-40 border border-[var(--sovereign-gold)] rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[var(--sovereign-gold)]">
              <User className="w-6 h-6 text-[var(--sovereign-gold)] opacity-80" />
              <input name="name" type="text" required className="flex-1 bg-transparent border-none outline-none text-[var(--ivory-whisper)] placeholder:text-[var(--sovereign-gold)] text-lg" placeholder="Your Name" />
            </div>
          </label>
          <label className="flex flex-col gap-2 text-lg font-medium">
            <span className="mb-1">Email</span>
            <div className="flex items-center gap-3 bg-black bg-opacity-40 border border-[var(--sovereign-gold)] rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[var(--sovereign-gold)]">
              <Mail className="w-6 h-6 text-[var(--sovereign-gold)] opacity-80" />
              <input name="email" type="email" required className="flex-1 bg-transparent border-none outline-none text-[var(--ivory-whisper)] placeholder:text-[var(--sovereign-gold)] text-lg" placeholder="your@email.com" />
            </div>
          </label>
          <label className="flex flex-col gap-2 text-lg font-medium">
            <span className="mb-1">Message</span>
            <div className="flex items-start gap-3 bg-black bg-opacity-40 border border-[var(--sovereign-gold)] rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[var(--sovereign-gold)]">
              <MessageCircle className="w-6 h-6 mt-1 text-[var(--sovereign-gold)] opacity-80" />
              <textarea name="message" rows={6} required className="flex-1 bg-transparent border-none outline-none text-[var(--ivory-whisper)] placeholder:text-[var(--sovereign-gold)] text-lg resize-none" placeholder="Your message..." />
            </div>
          </label>
          <button
            type="submit"
            className="mt-2 px-8 py-3 rounded-full border-2 border-[var(--sovereign-gold)] text-[var(--sovereign-gold)] font-bold uppercase tracking-wider text-lg hover:bg-[var(--sovereign-gold)] hover:text-[var(--velvet-black)] transition-colors duration-200 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Application'}
          </button>
          {status === 'success' && (
            <div className="text-green-400 text-center font-semibold mt-2">Your application was sent successfully!</div>
          )}
          {status === 'error' && (
            <div className="text-red-400 text-center font-semibold mt-2">There was an error sending your application. Please try again.</div>
          )}
        </form>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">We will respond to serious inquiries only. Your privacy and discernment are honored.</p>
        <div className="mt-8 text-center text-base md:text-lg text-[var(--sovereign-gold)] font-medium luxury-block">
          These custom immersions are by admission only.<br />
          If your spirit stirred reading this, your soul may already be packing to arrive. Send us a message and let’s get to planning.
        </div>
      </section>
    </main>
  );
} 