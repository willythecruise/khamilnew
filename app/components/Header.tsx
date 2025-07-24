"use client";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Armory", href: "/armory" },
  { name: "Radiance", href: "/radiance" },
  { name: "Retreats", href: "/retreats" },
  { name: "About", href: "/about" },
  { name: "Library", href: "/library" },
  { name: "Projects", href: "/projects" },
  { name: "Apply", href: "/apply" },
  { name: "Podcast", href: "/podcast" },
];

export default function Header() {
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[var(--velvet-black)] bg-opacity-95 border-b border-[var(--sovereign-gold)] flex items-center justify-between px-6 py-3"
      style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center select-none">
        <Image src="/images/logo.png" alt="Karima Hill Logo" width={400} height={120} style={{ maxHeight: 120, width: 'auto', height: 'auto' }} priority />
      </Link>
      {/* Navigation Links */}
      <div className="flex gap-7 md:gap-10 text-lg md:text-xl items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="transition-colors hover:text-[var(--sovereign-gold)] text-[var(--ivory-whisper)] font-serif font-normal tracking-tight px-1 py-0.5"
            style={{ letterSpacing: "0.01em" }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
} 