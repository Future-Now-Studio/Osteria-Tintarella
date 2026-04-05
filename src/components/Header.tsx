"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent py-5"
            : "bg-cream/95 backdrop-blur-md shadow-sm py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Osteria Tintarella"
              width={180}
              height={45}
              className={`transition-all duration-500 h-auto ${
                isTransparent ? "w-[160px] brightness-0 invert opacity-0" : "w-[140px] opacity-100"
              }`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {[
              { href: "/speisekarte", label: "Speisekarte" },
              { href: "/ueber-uns", label: "Über uns" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isTransparent ? "text-cream/80 hover:text-cream" : "text-navy hover:text-red"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#reservierung"
              className="bg-red text-white px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-red-dark transition-all duration-300"
            >
              Reservieren
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors ${isTransparent ? "text-cream" : "text-navy"}`}
            aria-label="Menü öffnen"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="16" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
