import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
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
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <img src="/images/about-hero.jpg" alt="Restaurant Innenraum" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="relative z-10 text-center px-4">
            <span className="text-red text-xs font-bold tracking-[0.3em] uppercase">
              Osteria Tintarella
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-white">
              {about.headline}
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-navy leading-relaxed font-bold">
              {about.intro}
            </p>
            <p className="mt-6 text-gold leading-relaxed">{about.story}</p>
          </div>
        </section>

        {/* Warum Tintarella */}
        <section className="py-16 md:py-24 px-4 bg-cream-dark">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Warum &bdquo;Tintarella&ldquo;?
            </h2>
            <p className="text-gold leading-relaxed">{about.nameOrigin}</p>
          </div>
        </section>

        {/* Der Umbau */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Der Umbau
            </h2>
            <p className="text-gold leading-relaxed">{about.renovation}</p>
          </div>
        </section>

        {/* Unsere Küche */}
        <section className="py-16 md:py-24 px-4 bg-cream-dark">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Unsere Küche
            </h2>
            <p className="text-gold leading-relaxed">{about.cuisine}</p>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">
              Die junge Generation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {about.team.map((member, idx) => (
                <div key={member.name} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img src={idx === 0 ? "/images/team-1.jpg" : "/images/team-2.jpg"} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">{member.name}</h3>
                  <p className="text-gold text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zitat */}
        <section className="py-16 md:py-24 px-4 bg-cream-dark">
          <div className="max-w-2xl mx-auto">
            <div className="border-l-4 border-red pl-6 py-2">
              <blockquote className="text-xl italic text-navy leading-relaxed">
                &laquo;{about.quote}&raquo;
              </blockquote>
              <p className="mt-4 text-gold text-sm">
                — {about.quoteAuthor}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
