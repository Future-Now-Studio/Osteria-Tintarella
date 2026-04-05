import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import MenuTabs from "@/components/MenuTabs";
import menuData from "../../../content/menu.json";

export const metadata: Metadata = {
  title: "Dessertkarte — Osteria Tintarella",
  description:
    "Unsere Dessertkarte: Tiramisù, Panna Cotta, Profiteroles, italienische Käsespezialitäten und erlesene Dessertweine.",
};

export default function DessertkartePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-10">
            <span className="text-red text-xs font-bold tracking-[0.3em] uppercase">
              Osteria Tintarella
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-navy">
              Dessertkarte
            </h1>
            <p className="mt-4 text-gold max-w-md mx-auto leading-relaxed">
              Klassische italienische Desserts, erlesene Käsespezialitäten
              und Dessertweine zum perfekten Abschluss.
            </p>
          </div>

          {/* Menu Tabs */}
          <MenuTabs categories={menuData.dessertkarte} />

          {/* Link back to Speisekarte */}
          <div className="mt-12 text-center border-t border-navy/10 pt-10">
            <a
              href="/speisekarte"
              className="inline-block border border-navy/20 text-navy px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-navy hover:text-cream transition-all duration-300"
            >
              Zur Speisekarte
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
