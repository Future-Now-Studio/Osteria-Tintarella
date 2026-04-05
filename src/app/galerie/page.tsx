import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Gallery from "@/components/Gallery";
import galleryData from "../../../content/gallery.json";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Impressionen aus der Osteria Tintarella – unser Restaurant, unsere Gerichte, unsere Terrasse in Kaltenkirchen.",
};

export default function GaleriePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red text-xs font-bold tracking-[0.3em] uppercase">
              Impressionen
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-navy">
              Galerie
            </h1>
          </div>
          <Gallery
            images={galleryData.images}
            categories={galleryData.categories}
          />
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
