"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[var(--velvet-black)] bg-opacity-95 border-b border-[var(--sovereign-gold)] flex items-center justify-between px-6 py-3"
      style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center select-none">
        <Image src="/images/logo.png" alt="Karima Hill Logo" width={400} height={120} style={{ maxHeight: 120, width: 'auto', height: 'auto' }} priority />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-7 md:gap-10 text-lg md:text-xl items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="transition-colors hover:text-[var(--sovereign-gold)] text-[var(--ivory-whisper)] font-serif font-normal tracking-tight px-1 py-0.5"
            style={{ letterSpacing: "0.01em" }}
            onClick={() => setSidebarOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--sovereign-gold)]"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu className="w-8 h-8 text-[var(--sovereign-gold)]" />
      </button>
      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-[999] bg-black bg-opacity-70 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--velvet-black)] border-l-2 border-[var(--sovereign-gold)] z-[1000] transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col`}
        style={{ boxShadow: "-2px 0 24px 0 rgba(212,175,55,0.08)" }}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--sovereign-gold)]">
          <Image src="/images/logo.png" alt="Karima Hill Logo" width={120} height={36} style={{ maxHeight: 36, width: 'auto', height: 'auto' }} priority />
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--sovereign-gold)]"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="w-7 h-7 text-[var(--sovereign-gold)]" />
          </button>
        </div>
        <div className="flex flex-col gap-4 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-[var(--sovereign-gold)] text-[var(--ivory-whisper)] font-serif font-normal tracking-tight text-xl py-2"
              style={{ letterSpacing: "0.01em" }}
              onClick={() => setSidebarOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </aside>
    </nav>
  );
} 