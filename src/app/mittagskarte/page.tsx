import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import MenuTabs from "@/components/MenuTabs";
import menuData from "../../../content/menu.json";

export const metadata: Metadata = {
  title: "Mittagskarte — Osteria Tintarella",
  description:
    "Unsere Mittagskarte: Antipasti, Pasta, Pizza, Fisch und Fleisch. Dienstag bis Freitag von 11:30 bis 14:30 Uhr.",
};

export default function MittagskartePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red text-xs font-bold tracking-[0.3em] uppercase">
              Osteria Tintarella
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-navy">
              Mittagskarte
            </h1>
            <p className="mt-4 text-gold max-w-md mx-auto leading-relaxed">
              Dienstag bis Freitag von 11:30 bis 14:30 Uhr
            </p>
          </div>

          <MenuTabs categories={menuData.mittagskarte} />

          <div className="mt-12 text-center border-t border-navy/10 pt-10">
            <a
              href="/speisekarte"
              className="inline-block border border-navy/20 text-navy px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-navy hover:text-cream transition-all duration-300"
            >
              Zur Abendkarte
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
