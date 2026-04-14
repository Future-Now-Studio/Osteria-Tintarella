"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ParallaxImage from "@/components/ParallaxImage";
import WineSection from "@/components/WineSection";
import siteData from "../../content/site.json";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ═══════════════════ HERO — Cinematic ═══════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Ken Burns background — mobile / desktop */}
          <img
            src="/New_Images/J68A8005.jpg"
            alt="Osteria Tintarella"
            className="absolute inset-0 w-full h-full object-cover hero-ken-burns md:hidden"
          />
          <img
            src="/New_Images/J68A8005.jpg"
            alt="Osteria Tintarella"
            className="absolute inset-0 w-full h-full object-cover hero-ken-burns hidden md:block"
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/20 via-transparent to-navy/20" />
          <div className="absolute inset-0 golden-vignette" />

          {/* Content — staggered cinematic entrance */}
          <div className="relative z-10 flex flex-col items-center px-4">
            <div className="w-[60px] h-[1px] bg-gold-light/50 hero-line mb-8" />

            <div className="hero-stagger-1">
              <Image
                src="/images/Logo-Rund.png"
                alt="Osteria Tintarella"
                width={240}
                height={240}
                className="h-auto w-[160px] md:w-[220px] rounded-full shadow-2xl shadow-black/30"
                priority
              />
            </div>

            <p className="hero-stagger-2 mt-6 text-cream/70 text-xs md:text-sm tracking-[0.5em] uppercase">
              {siteData.tagline}
            </p>

            <div className="hero-stagger-3 mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={siteData.opentable.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow bg-red text-white px-10 py-4 font-bold text-sm tracking-widest uppercase text-center"
              >
                Jetzt reservieren
              </a>
              <a
                href="/speisekarte"
                className="btn-ghost border border-cream/30 text-cream px-10 py-4 font-bold text-sm tracking-widest uppercase text-center"
              >
                Speisekarte
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 flex flex-col items-center gap-3 z-10 hero-stagger-4">
            <span className="text-cream/30 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <div className="w-[1px] h-10 bg-cream/15 relative overflow-hidden">
              <div className="w-full h-4 bg-cream/50 scroll-indicator" />
            </div>
          </div>
        </section>

        {/* ═══════════════════ WILLKOMMEN ═══════════════════ */}
        <section className="relative py-14 md:py-20 px-4 noise-overlay">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-in">
              <span className="ornament text-red text-[10px] font-bold tracking-[0.4em] uppercase">
                Benvenuti
              </span>
            </ScrollReveal>

            <TextReveal
              mode="words"
              delay={0.2}
              className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.15] tracking-tight"
            >
              {siteData.welcome.headline}
            </TextReveal>

            <ScrollReveal delay={0.4} animation="fade-up">
              <p className="mt-6 text-gold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                {siteData.welcome.text}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════ ZITAT — Highlighted ═══════════════════ */}
        <section className="relative py-14 md:py-20 px-6 noise-overlay">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal animation="scale-in">
              <blockquote className="text-2xl md:text-3xl italic text-navy/80 leading-relaxed">
                «{siteData.welcome.quote}»
              </blockquote>
              <p className="mt-4 text-gold/60 text-sm tracking-widest uppercase">
                — {siteData.welcome.quoteAuthor}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════ SPEISEKARTE — Split mit clip-reveal ═══════════════════ */}
        <section className="flex flex-col lg:flex-row min-h-[70vh]">
          <ScrollReveal
            animation="clip-left"
            duration={1.4}
            className="lg:w-1/2 h-[50vh] lg:h-auto relative"
          >
            <ParallaxImage
              src="/New_Images/J68A8059.jpg"
              alt="Unsere Speisen"
              speed={0.12}
              className="absolute inset-0"
              objectPosition="bottom" 
              overlay
            />
          </ScrollReveal>

          <div className="lg:w-1/2 bg-navy px-6 py-20 md:px-12 lg:px-16 lg:py-28 flex flex-col justify-center">
            <div className="max-w-lg mx-auto lg:mx-0 lg:mr-auto lg:ml-16">
              <ScrollReveal animation="fade-in">
                <p className="text-gold-light text-[10px] tracking-[0.4em] uppercase">
                  Cucina Italiana
                </p>
              </ScrollReveal>

              <TextReveal delay={0.1} className="mt-3 text-4xl md:text-5xl font-bold text-cream leading-tight">
                Unsere Küche
              </TextReveal>

              <ScrollReveal delay={0.2} animation="fade-in">
                <div className="mt-4 w-12 h-[2px] bg-red red-line-reveal" />
              </ScrollReveal>

              <ScrollReveal delay={0.3} animation="fade-up">
                <p className="mt-8 text-cream/60 text-lg leading-relaxed">
                  Gehobene italienische Küche mit sizilianischer Note — von
                  handgemachter Pasta über Pizza aus dem Steinofen bis hin zu
                  frischem Fisch und Fleischgerichten. Lassen Sie sich
                  überraschen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.45} animation="fade-up">
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/speisekarte"
                    className="btn-ghost inline-block border border-cream/30 text-cream px-8 py-3.5 text-sm font-bold tracking-widest uppercase text-center"
                  >
                    Speisekarte
                  </Link>
                  <Link
                    href="/dessertkarte"
                    className="btn-ghost inline-block border border-cream/30 text-cream px-8 py-3.5 text-sm font-bold tracking-widest uppercase text-center"
                  >
                    Dessertkarte
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <WineSection />

        {/* ═══════════════════ RESERVIERUNG STÖRER ═══════════════════ */}
        <section
          id="reservierung"
          className="relative py-28 md:py-36 px-4 bg-cream-dark noise-overlay reservation-glow"
        >
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-in">
              <span className="ornament text-red text-[10px] font-bold tracking-[0.4em] uppercase">
                Reservierung
              </span>
            </ScrollReveal>

            <TextReveal delay={0.15} className="mt-6 text-4xl md:text-5xl font-bold text-navy leading-tight">
              Ihr Tisch wartet
            </TextReveal>

            <ScrollReveal delay={0.3} animation="fade-up">
              <p className="mt-6 text-gold max-w-md mx-auto leading-relaxed">
                Sichern Sie sich Ihren Platz für einen unvergesslichen Abend
                mit süditalienischer Küche und erlesenen Weinen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45} animation="scale-in">
              <a
                href={siteData.opentable.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow mt-10 inline-block bg-red text-white px-14 py-5 font-bold text-sm tracking-widest uppercase"
              >
                Jetzt reservieren
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.55} animation="fade-in">
              <p className="mt-8 text-gold/60 text-sm">
                Oder rufen Sie uns an:{" "}
                <a
                  href={`tel:${siteData.phoneRaw}`}
                  className="font-bold text-navy hover:text-red transition-colors duration-300"
                >
                  {siteData.phone}
                </a>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════ ÜBER UNS TEASER ═══════════════════ */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <ParallaxImage
            src="/images/Umbau.webp"
            alt="Osteria Tintarella Umbau"
            speed={0.2}
            scale={1.2}
            className="absolute inset-0"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-navy/60" />

          <div className="relative z-10 w-full px-6 py-20 md:py-28">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="md:w-1/2">
                <ScrollReveal animation="fade-in">
                  <p className="text-gold-light text-[10px] tracking-[0.4em] uppercase mb-4">
                    La nostra storia
                  </p>
                </ScrollReveal>
                <TextReveal delay={0.1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[1.1]">
                  Von Sizilien nach Kaltenkirchen
                </TextReveal>
              </div>

              <div className="md:w-1/2">
                <ScrollReveal delay={0.3} animation="slide-right">
                  <div className="border-l-2 border-red pl-6">
                    <p className="text-cream/70 text-lg leading-relaxed">
                      {siteData.about.intro}
                    </p>
                    <blockquote className="mt-6 italic text-cream/80 text-base">
                      «{siteData.about.quote}»
                    </blockquote>
                    <p className="mt-2 text-gold-light/80 text-xs tracking-widest uppercase">
                      — {siteData.about.quoteAuthor}
                    </p>
                  </div>

                  <Link
                    href="/ueber-uns"
                    className="arrow-link mt-8 text-cream text-sm tracking-widest uppercase"
                  >
                    <span>Unsere Geschichte</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="arrow-icon"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ INFO + KARTE ═══════════════════ */}
        <section id="info" className="py-20 md:py-28 px-4 relative noise-overlay">
          <div className="relative z-10 max-w-5xl mx-auto">
            <ScrollReveal animation="fade-in">
              <div className="text-center mb-14">
                <span className="text-red text-[10px] font-bold tracking-[0.4em] uppercase">
                  Besuchen Sie uns
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy">
                  So finden Sie uns
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="clip-up" duration={1.2}>
              <div className="w-full h-[350px] md:h-[450px] mb-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.465431604135!2d9.9678!3d53.8341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDUwJzAyLjgiTiA5wrA1OCc0NC4xIkU!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Osteria Tintarella"
                />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollReveal animation="fade-up">
                <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-500 h-full">
                  <h3 className="font-bold text-navy text-sm tracking-[0.15em] uppercase mb-5">
                    Öffnungszeiten
                  </h3>
                  <div className="space-y-3 text-sm">
                    {siteData.openingHours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-4">
                        <span className="font-bold text-navy text-xs tracking-wider uppercase">
                          {h.days}
                        </span>
                        <span className="text-gold whitespace-nowrap">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1} animation="fade-up">
                <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-500 h-full">
                  <h3 className="font-bold text-navy text-sm tracking-[0.15em] uppercase mb-5">
                    Kontakt & Adresse
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gold">
                      {siteData.address.street}
                      <br />
                      {siteData.address.zip} {siteData.address.city}
                    </p>
                    <a
                      href={`tel:${siteData.phoneRaw}`}
                      className="text-navy font-bold hover:text-red transition-colors block"
                    >
                      {siteData.phone}
                    </a>
                    <a
                      href={`mailto:${siteData.email}`}
                      className="text-gold hover:text-red transition-colors block"
                    >
                      {siteData.email}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} animation="fade-up">
                <a
                  href={siteData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between bg-white p-8 group hover:bg-navy transition-colors duration-500 hover:shadow-lg h-full"
                >
                  <div>
                    <h3 className="font-bold text-navy text-sm tracking-[0.15em] uppercase group-hover:text-cream transition-colors">
                      Instagram
                    </h3>
                    <p className="text-gold text-sm mt-2 group-hover:text-cream/50 transition-colors">
                      {siteData.instagram}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-navy group-hover:text-cream transition-colors">
                    <span className="text-xs font-bold tracking-widest uppercase">Folgen</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}