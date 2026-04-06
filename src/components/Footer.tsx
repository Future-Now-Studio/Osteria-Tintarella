import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Osteria Tintarella"
              width={180}
              height={45}
              className="h-auto mx-auto md:mx-0 brightness-0 invert"
            />
            <p className="mt-3 text-gold text-sm tracking-widest uppercase">
              Vino · Cucina · Amore
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-cream">
              Öffnungszeiten
            </h3>
            <div className="space-y-2 text-sm text-cream/70">
              <div className="flex justify-between max-w-[260px] mx-auto md:mx-0">
                <span>Mo – Fr</span>
                <span>12 – 14:30 & 17 – 22</span>
              </div>
              <div className="flex justify-between max-w-[260px] mx-auto md:mx-0">
                <span>Samstag</span>
                <span>12 – 22</span>
              </div>
              <div className="flex justify-between max-w-[260px] mx-auto md:mx-0">
                <span>Sonntag</span>
                <span>12 – 14:30 & 17 – 22</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-cream">
              Kontakt
            </h3>
            <div className="space-y-2 text-sm text-cream/70">
              <p>Hamburger Straße 75</p>
              <p>24568 Kaltenkirchen</p>
              <p className="pt-2">
                <a
                  href="tel:+4941914144"
                  className="text-cream hover:text-red transition-colors"
                >
                  04191 / 4144
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@osteria-tintarella.de"
                  className="text-cream hover:text-red transition-colors"
                >
                  info@osteria-tintarella.de
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>&copy; 2026 Osteria Tintarella. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="hover:text-cream/70 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-cream/70 transition-colors"
            >
              Datenschutz
            </Link>
            <a
              href="https://www.instagram.com/osteria_tintarella/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/70 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
