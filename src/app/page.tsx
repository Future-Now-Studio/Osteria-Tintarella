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
          {/* Ken Burns background */}
          <img
            src="/images/pasta.jpg"
            alt="Osteria Tintarella"
            className="absolute inset-0 w-full h-full object-cover hero-ken-burns"
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/20 via-transparent to-navy/20" />
          <div className="absolute inset-0 golden-vignette" />

          {/* Content — staggered cinematic entrance */}
          <div className="relative z-10 flex flex-col items-center px-4">
            {/* Decorative line */}
            <div className="w-[60px] h-[1px] bg-gold-light/50 hero-line mb-8" />

            <div className="hero-stagger-1">
              <Image
                src="/images/logo.png"
                alt="Osteria Tintarella"
                width={320}
                height={80}
                className="h-auto w-[220px] md:w-[320px] brightness-0 invert"
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
                href={`tel:${siteData.phoneRaw}`}
                className="btn-ghost border border-cream/30 text-cream px-10 py-4 font-bold text-sm tracking-widest uppercase text-center"
              >
                Anrufen
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
        <section className="relative py-20 md:py-24 lg:py-28 px-4 noise-overlay">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-in">
              <span className="ornament text-red text-[10px] font-bold tracking-[0.4em] uppercase">
                Benvenuti
              </span>
            </ScrollReveal>

            <TextReveal
              mode="words"
              delay={0.2}
              className="mt-8 text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.15] tracking-tight"
            >
              {siteData.welcome.headline}
            </TextReveal>

            <ScrollReveal delay={0.4} animation="fade-up">
              <p className="mt-8 text-gold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                {siteData.welcome.text}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6} animation="fade-up">
              <div className="mt-12">
                <div className="w-10 h-[1px] bg-red/40 mx-auto" />
                <blockquote className="mt-8 italic text-navy/50 text-xl md:text-2xl leading-relaxed">
                  &laquo;{siteData.welcome.quote}&raquo;
                </blockquote>
                <p className="mt-4 text-gold/60 text-sm tracking-widest uppercase">
                  — {siteData.welcome.quoteAuthor}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════ SPEISEKARTE — Split mit clip-reveal ═══════════════════ */}
        <section className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Image LEFT — parallax + clip reveal */}
          <ScrollReveal
            animation="clip-left"
            duration={1.4}
            className="lg:w-1/2 h-[50vh] lg:h-auto relative"
          >
            <ParallaxImage
              src="/images/bruschetta.jpg"
              alt="Restaurant Ambiente"
              speed={0.12}
              className="absolute inset-0"
              overlay
            />
          </ScrollReveal>

          {/* Content RIGHT */}
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

        {/* ═══════════════════ WEINE — Content links, Bild rechts ═══════════════════ */}
        <WineSection />

        {/* ═══════════════════ RESERVIERUNG STÖRER — Breathing glow ═══════════════════ */}
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

        {/* ═══════════════════ ÜBER UNS TEASER — Parallax + story ═══════════════════ */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <ParallaxImage
            src="/images/umbau.webp"
            alt="Osteria Tintarella Umbau"
            speed={0.2}
            scale={1.2}
            className="absolute inset-0"
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
                  Von Neapel nach Kaltenkirchen
                </TextReveal>
              </div>

              <div className="md:w-1/2">
                <ScrollReveal delay={0.3} animation="slide-right">
                  <div className="border-l-2 border-red pl-6">
                    <p className="text-cream/70 text-lg leading-relaxed">
                      {siteData.about.intro}
                    </p>
                    <blockquote className="mt-6 italic text-cream/80 text-base">
                      &laquo;{siteData.about.quote}&raquo;
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

            {/* Map — full width, first */}
            <ScrollReveal animation="clip-up" duration={1.2}>
              <div className="w-full h-[350px] md:h-[450px] mb-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1467216856004!2d9.967147277826415!3d53.832777772434355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b22e3aa87945af%3A0xcb9c5c4c4e8e9b15!2sLa%20Botte!5e1!3m2!1sde!2sde!4v1775420364143!5m2!1sde!2sde"
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

            {/* Info cards — 3 columns on desktop */}
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
                    <div className="pt-3 border-t border-navy/5 space-y-1">
                      <p className="text-xs text-gold/60">{siteData.parking}</p>
                      <p className="text-xs text-gold/60">{siteData.transit}</p>
                    </div>
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
                    <p className="text-gold/50 text-xs mt-3 group-hover:text-cream/30 transition-colors">
                      Folgen Sie uns für Einblicke hinter die Kulissen
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-navy group-hover:text-cream transition-colors">
                    <span className="text-xs font-bold tracking-widest uppercase">Folgen</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="arrow-icon"
                    >
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
