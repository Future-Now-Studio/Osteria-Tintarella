import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import siteData from "../../../content/site.json";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Geschichte der Osteria Tintarella – Familie Imbrogiano bringt süditalienisches Urlaubsflair nach Kaltenkirchen.",
};

export default function UeberUnsPage() {
  const about = siteData.about;

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

        {/* ═══════════════════ WARUM TINTARELLA — Split Layout ═══════════════════ */}
        <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6">
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <ScrollReveal animation="clip-left" className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/gallery-interior.jpg"
                  alt="Restaurant Ambiente"
                  className="w-full h-full object-cover"
                />
              </ScrollReveal>
            </div>

            {/* Content */}
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

        {/* ═══════════════════ UNSERE KÜCHE — Reverse Split ═══════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 px-6">
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <ScrollReveal animation="clip-right" className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/Umbau.webp"
                  alt="Küche und Ambiente"
                  className="w-full h-full object-cover"
                />
              </ScrollReveal>
            </div>

            {/* Content */}
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
