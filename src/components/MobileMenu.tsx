"use client";

import { useEffect } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-cream transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full px-6 py-6">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="p-2 text-navy"
            aria-label="Menü schließen"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 mt-12 flex-1">
          <Link
            href="/"
            onClick={onClose}
            className="text-navy font-charter font-bold text-2xl tracking-wide"
          >
            Startseite
          </Link>
          <Link
            href="/speisekarte"
            onClick={onClose}
            className="text-navy font-charter font-bold text-2xl tracking-wide"
          >
            Speisekarte
          </Link>
          <Link
            href="/dessertkarte"
            onClick={onClose}
            className="text-navy font-charter font-bold text-2xl tracking-wide"
          >
            Dessertkarte
          </Link>
          <Link
            href="/ueber-uns"
            onClick={onClose}
            className="text-navy font-charter font-bold text-2xl tracking-wide"
          >
            Über uns
          </Link>
          <Link
            href="/#reservierung"
            onClick={onClose}
            className="mt-4 bg-red text-white rounded-full px-10 py-4 text-lg font-bold tracking-wide uppercase hover:bg-red-dark transition-colors"
          >
            Tisch reservieren
          </Link>
        </nav>

        <div className="text-center space-y-4 pb-8 text-sm text-gold">
          <div>
            <a href="tel:+4941914144" className="font-bold text-navy text-base">
              04191 / 4144
            </a>
          </div>
          <div>Hamburger Straße 75, 24568 Kaltenkirchen</div>
          <div className="text-xs space-y-1">
            <div>Mo – Fr: 11:30 – 14:30 & 17:00 – 22:00</div>
            <div>Sa: 11:30 – 22:00</div>
            <div>So: 11:30 – 14:30 & 17:00 – 22:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
