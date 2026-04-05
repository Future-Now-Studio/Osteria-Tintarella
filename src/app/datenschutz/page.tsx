import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy mb-8">
            Datenschutzerklärung
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gold leading-relaxed">
              Die Datenschutzerklärung wird in Kürze durch unseren rechtlichen
              Partner bereitgestellt.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
