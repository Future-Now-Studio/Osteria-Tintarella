"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import siteData from "../../../content/site.json";

// Hinweis: In Next.js 13+ (App Router) muss Metadata in ein Server-Component.
// Da dies ein Client-Component ("use client") ist, sollte die Metadata 
// idealerweise in der layout.tsx oder einer separaten page.tsx (Server) stehen.

export default function UeberUnsPage() {
  const about = siteData.about;

  // 1. STATE FÜR LIGHTBOX
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 2. BILDER-KONFIGURATION (Masonry-Pattern erzwungen)
  const galleryImages = [
    { filename: "J68A7895.jpg", layout: "V" }, // V = Vertikal (nimmt 2 Reihen ein)
    { filename: "J68A7878.jpg", layout: "Q" }, // Q = Quadratisch
    { filename: "J68A7973.jpg", layout: "Q" },
    { filename: "J68A7927.jpg", layout: "Q" },
    { filename: "J68A7932.jpg", layout: "V" }, // Zweites vertikales Element
    { filename: "J68A7915.jpg", layout: "Q" },
    { filename: "J68A8006.jpg", layout: "Q" },
    { filename: "J68A8024.jpg", layout: "Q" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/Umbau.webp"
            alt="Restaurant Innenraum"
            className="absolute inset-0 w-full h-full object-cover hero-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/70" />
          <div className="absolute inset-0 golden-vignette" />

          <div className="relative z-10 text-center px-4">
            <ScrollReveal animation="fade-in">
              <p className="text-gold-light text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">
                Osteria Tintarella
              </p>
            </ScrollReveal>
            <TextReveal className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[1.1]">
              {about.headline}
            </TextReveal>
          </div>
        </section>

        {/* ═══════════════════ INTRO ═══════════════════ */}
        <section className="relative py-20 md:py-28 px-4 noise-overlay">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-in">
              <div className="ornament mb-8">
                <span className="text-red text-lg">&#10045;</span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-xl md:text-2xl text-navy leading-relaxed font-bold">
                {about.intro}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════ WARUM TINTARELLA ═══════════════════ */}
        <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6">
            <div className="md:w-1/2 w-full">
              <ScrollReveal animation="clip-left" className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/terasse.webp"
                  alt="Terrasse"
                  className="w-full h-full object-cover"
                />
              </ScrollReveal>
            </div>
            <div className="md:w-1/2">
              <ScrollReveal animation="fade-in">
                <p className="text-gold-light text-[10px] tracking-[0.4em] uppercase mb-4">
                  Il Nome
                </p>
              </ScrollReveal>
              <TextReveal delay={0.1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-[1.1] mb-8">
                Warum &bdquo;Tintarella&ldquo;?
              </TextReveal>
              <ScrollReveal animation="fade-up" delay={0.2}>
                <p className="text-cream/70 leading-relaxed text-lg">
                  {about.nameOrigin}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════ UNSERE KÜCHE ═══════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 px-6">
            <div className="md:w-1/2 w-full">
              <ScrollReveal animation="clip-right" className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/Umbau.webp"
                  alt="Küche und Ambiente"
                  className="w-full h-full object-cover"
                />
              </ScrollReveal>
            </div>
            <div className="md:w-1/2">
              <ScrollReveal animation="fade-in">
                <p className="text-red text-[10px] tracking-[0.4em] uppercase mb-4">
                  Cucina Italiana
                </p>
              </ScrollReveal>
              <TextReveal delay={0.1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-[1.1] mb-8">
                Unsere Küche
              </TextReveal>
              <ScrollReveal animation="fade-up" delay={0.2}>
                <p className="text-gold leading-relaxed text-lg">
                  {about.cuisine}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════ ZITAT ═══════════════════ */}
        <section className="relative bg-navy py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="scale-in">
              <div className="ornament mb-10">
                <span className="text-red text-lg">&#10045;</span>
              </div>
              <blockquote className="text-2xl md:text-3xl italic text-cream/90 leading-relaxed">
                &laquo;{about.quote}&raquo;
              </blockquote>
              <p className="mt-6 text-gold-light text-sm tracking-widest uppercase">
                — {about.quoteAuthor}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════ GALERIE ═══════════════════ */}
       {/* ═══════════════════ GALERIE ═══════════════════ */}
<section className="relative py-20 md:py-28 bg-cream/30 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <ScrollReveal animation="fade-in">
        <p className="text-red text-[10px] tracking-[0.4em] uppercase mb-4">Impressionen</p>
      </ScrollReveal>
      <TextReveal className="text-3xl md:text-5xl font-bold text-navy">
        Ein Blick ins Tintarella
      </TextReveal>
    </div>

    {/* Echter Masonry-Effekt via CSS Columns */}
    <div className="columns-2 md:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
      {galleryImages.map((image, i) => (
        <ScrollReveal
          key={image.filename}
          animation="fade-up"
          delay={i * 0.05}
          className="break-inside-avoid" // Verhindert, dass Bilder zwischen Spalten zerreißen
        >
          <div 
            className="relative group overflow-hidden bg-navy cursor-pointer"
            onClick={() => setSelectedImage(`/New_Images/${image.filename}`)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
              <span className="text-cream text-3xl font-light scale-90 group-hover:scale-100 transition-all duration-500">
                &#10010;
              </span>
            </div>

            {/* Bild - WICHTIG: h-auto damit verschiedene Höhen wirken */}
            <img
              src={`/New_Images/${image.filename}`}
              alt="Galerie Impression"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gold-Rahmen */}
            <div className="absolute inset-4 border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>

        {/* ═══════════════════ LIGHTBOX OVERLAY ═══════════════════ */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-cream text-4xl hover:text-white transition-colors">&times;</button>
            <img
              src={selectedImage}
              className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl animate-in fade-in zoom-in duration-300"
              alt="Großansicht"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* ═══════════════════ CTA ═══════════════════ */}
        <section className="py-16 md:py-20 px-6 text-center noise-overlay">
          <div className="relative z-10">
            <ScrollReveal animation="fade-up">
              <p className="text-gold text-sm mb-6">Lernen Sie unsere Küche kennen</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/speisekarte"
                  className="btn-glow bg-red text-white px-10 py-4 font-bold text-sm tracking-widest uppercase text-center"
                >
                  Speisekarte
                </Link>
                <a
                  href={siteData.opentable.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost border border-navy/20 text-navy px-10 py-4 font-bold text-sm tracking-widest uppercase text-center"
                >
                  Tisch reservieren
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}