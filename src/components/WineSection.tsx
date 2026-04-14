"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";
import ParallaxImage from "./ParallaxImage";

export default function WineSection() {
  return (
    <section className="flex flex-col lg:flex-row-reverse min-h-[70vh]">
      {/* Image RIGHT — parallax + clip reveal */}
      <ScrollReveal
        animation="clip-right"
        duration={1.4}
        className="lg:w-1/2 h-[50vh] lg:h-auto relative"
      >
        <ParallaxImage
          src="/New_Images/J68A7881.jpg"
          alt="Weinauswahl"
          speed={0.12}
          className="absolute inset-0"
          overlay
        />
      </ScrollReveal>

      {/* Content LEFT */}
      <div className="lg:w-1/2 bg-navy px-6 py-20 md:px-12 lg:px-16 lg:py-28 flex flex-col justify-center">
        <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-16">
          <ScrollReveal animation="fade-in">
            <p className="text-gold-light text-[10px] tracking-[0.4em] uppercase">
              La Cantina
            </p>
          </ScrollReveal>

          <TextReveal delay={0.1} className="mt-3 text-4xl md:text-5xl font-bold text-cream leading-tight">
            Unsere Weine
          </TextReveal>

          <ScrollReveal delay={0.2} animation="fade-in">
            <div className="mt-4 w-12 h-[2px] bg-red red-line-reveal" />
          </ScrollReveal>

          <ScrollReveal delay={0.3} animation="fade-up">
            <p className="mt-8 text-cream/60 text-lg leading-relaxed">
              Über 50 sorgfältig ausgewählte Weine aus den besten Regionen
              Italiens. Von spritzigem Prosecco über vollmundigen Primitivo
              bis zu edlen Dessertweinen — für jeden Gang der passende
              Begleiter.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45} animation="fade-up">
            <div className="mt-10">
              <Link
                href="/speisekarte#weine"
                className="btn-ghost inline-block border border-cream/30 text-cream px-8 py-3.5 text-sm font-bold tracking-widest uppercase text-center"
              >
                Weinkarte entdecken
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
