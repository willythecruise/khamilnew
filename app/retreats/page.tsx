"use client";
import React from "react";
import Image from "next/image";
import { useFadeUp } from "../components/useFadeUp";
import { Mountain, Waves, Leaf, Turtle } from "lucide-react";

const BANNER_IMAGE = "/images/image3.png";
const CONTENT_IMAGE = "/images/image4.webp";

export default function RetreatsPage() {
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
        Retreats
      </h1>
          <div className="h-1 w-24 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, var(--sovereign-gold), transparent)' }} />
          <p className="text-lg md:text-2xl font-medium text-[var(--ivory-whisper)] max-w-2xl text-center drop-shadow-lg">In-person and virtual immersions for soul phases and sacred locations.</p>
        </div>
      </header>
      {/* Main Content */}
      <section ref={fadeUpRef} className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: 'var(--sovereign-gold)' }}>Aligned with seasons, locations, and soul phases.</h2>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">Application by admission only. Each retreat is a sacred, immersive experience designed for deep transformation and restoration.</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-5xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--sovereign-gold)' }}>Retreat Locations</h3>
        {/* Afghanistan Retreat */}
        <div className="luxury-section bg-opacity-10 rounded-xl border border-[var(--sovereign-gold)] p-10 flex flex-col md:flex-row items-center gap-8 mb-12 shadow-lg">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/images/image1.png" alt="Afghanistan Retreat" width={480} height={320} className="rounded-xl object-cover" style={{ maxHeight: 320 }} />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl font-semibold mb-4" style={{ color: 'var(--sovereign-gold)' }}>The Cradle of Humanity: Afghanistan</h4>
            <p className="mb-3 text-base md:text-lg italic">Atmosphere: Stark. Sacred. Unexpectedly tender.<br/>This is a land where mountains carry ancient prayers and every shared cup of tea feels like a vow.<br/>Woven rug under open sky, steam rising from the tea kettle, laughter carried on dry winds... and you feel something you didn’t know you missed: the deep dignity of being human. Being fully seen, and loved.</p>
            <p className="mb-3 text-base md:text-lg"><span className="font-bold">Purpose:</span> Peace, where the world once whispered only war.<br/>This isn’t luxury; it’s soul restoration through raw, honest humanity.<br/>Here, men and women hold your gaze like they mean it. Picnics on quiet hills, shared bread, stories by firelight... you’ll remember every moment because nothing here is fake. You won't have to be scared to unpack your naked heart because everyone around us is already naked in that sense, too. This is the sacred paradox: veiled, but more human than anywhere else on the planet.</p>
            <p className="mb-3 text-base md:text-lg"><span className="font-bold">Outcome:</span><br/>If you’ve tried everything else: meditation, masterminds, retreats, and still feel restless, this is where we meet to bring you back to God. Amongst the strongest warriors and the softest women, any tear of healing shed here nourishes the sacred dust. Afghanistan changes you by reminding you who you are beneath every mask.<br/>You return home thrilled, softened, and fiercely alive, carrying a new kind of courage: the courage to love life again.</p>
          </div>
        </div>
        {/* Austria Atlantic Coast Offgrid Lodge Retreat */}
        <div className="luxury-section bg-opacity-10 rounded-xl border border-[var(--sovereign-gold)] p-10 flex flex-col md:flex-row items-center gap-8 mb-12 shadow-lg">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/images/image3.png" alt="Austria Atlantic Coast Offgrid Lodge" width={480} height={320} className="rounded-xl object-cover" style={{ maxHeight: 320 }} />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl font-semibold mb-4" style={{ color: 'var(--sovereign-gold)' }}>Austria Atlantic Coast Offgrid Lodge</h4>
            <p className="mb-3 text-base md:text-lg italic">Remote. Strong. Clean.<br/>The kind of stillness only raw nature can teach. Pine-scented air, silent dawns, water lapping against the shore like a slow metronome for your thoughts.<br/>You wake to mist curling off the ocean, and end the day with fresh fish on the grill, billiards, and laughter under starlight.</p>
            <p className="mb-3 text-base md:text-lg"><span className="font-bold">Purpose:</span> Deep soul work meets serious strategy. A sacred pause and time with the soul.<br/>Here, your mind clears, not because you try, but because the wilderness burns the static out of you.<br/>We break the loops of “busy brilliance” and rebuild your genius from first principles.<br/>The breaks, workouts, fishing, fire pits, open sky, aren’t distractions; they’re the reset switch for your best decisions and support the deep soul work.</p>
            <p className="mb-3 text-base md:text-lg"><span className="font-bold">Outcome:</span><br/>You leave lighter, sharper, owning the next season of your life without doubt.<br/>Where others burn out, you’ll be writing a clean new chapter, this time aligned, with God’s favor behind it.<br/>This isn’t just a getaway. It’s the wild Atlantic half-island that hands you back your edge.</p>
          </div>
        </div>
        {/* Other Retreat Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Image src="/images/image2.png" alt="Retreat Image 2" width={320} height={220} className="rounded-xl object-cover mb-2" style={{ maxHeight: 220 }} />
            <span className="text-base md:text-lg mt-2 opacity-80">Polynesian Flowers</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/image4.webp" alt="Retreat Image 4" width={320} height={220} className="rounded-xl object-cover mb-2" style={{ maxHeight: 220 }} />
            <span className="text-base md:text-lg mt-2 opacity-80">Turtle Hatching Beach</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/image6.png" alt="Retreat Image 6" width={320} height={220} className="rounded-xl object-cover mb-2" style={{ maxHeight: 220 }} />
            <span className="text-base md:text-lg mt-2 opacity-80">Alps Chalet</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/image7.webp" alt="Retreat Image 7" width={320} height={220} className="rounded-xl object-cover mb-2" style={{ maxHeight: 220 }} />
            <span className="text-base md:text-lg mt-2 opacity-80">Lion’s Table</span>
          </div>
      </div>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-3xl mx-auto px-4 md:px-0 mb-20 fade-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--sovereign-gold)' }}>What Happens in These Rooms?</h3>
        <ul className="mb-8 text-base md:text-lg text-left mx-auto inline-block">
          <li>This is not coaching. This is resurrection.</li>
          <li>One conversation here can equal years of progress alone.</li>
          <li>You won’t remember what we said. You’ll remember how you finally felt seen, both in your brilliance as an executive and leader and as a human without shame. Heaven entered and your life never was the same again. In the best way.</li>
        </ul>
        <p className="text-center text-base md:text-lg mb-8">“Some knots only untie in sacred silence and under the care of a sacred witness.”</p>
      </section>
      <section ref={fadeUpRef} className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-20 fade-up flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--sovereign-gold)' }}>Application Flow</h3>
        <p className="mb-8 text-lg md:text-xl text-center leading-relaxed">These custom immersions are by admission only. If your spirit stirred reading this, your soul may already be packing to arrive. Send us a message and let’s get to planning.</p>
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