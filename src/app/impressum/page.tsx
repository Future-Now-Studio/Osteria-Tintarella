import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteData from "../../../content/site.json";

export const metadata: Metadata = {
  title: "Impressum — Osteria Tintarella",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-12">
            Impressum
          </h1>

          <div className="space-y-10 text-navy/80 leading-relaxed">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Osteria Tintarella UG (haftungsbeschränkt) i.G.
                <br />
                Hamburger Straße 75
                <br />
                24568 Kaltenkirchen
              </p>
            </section>

            {/* Vertreten durch */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Vertreten durch
              </h2>
              <p>Geschäftsführer: Salvatore Imbrogiano</p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a
                  href={`tel:${siteData.phoneRaw}`}
                  className="text-navy font-bold hover:text-red transition-colors"
                >
                  {siteData.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${siteData.email}`}
                  className="text-navy font-bold hover:text-red transition-colors"
                >
                  {siteData.email}
                </a>
              </p>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                <span className="italic text-gold">wird nachgereicht</span>
              </p>
            </section>

            {/* Verantwortlich */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Salvatore Imbrogiano
                <br />
                Paul-Junge-Straße 23
                <br />
                25336 Elmshorn
              </p>
            </section>

            <div className="w-12 h-[2px] bg-red" />

            {/* Streitschlichtung */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-bold hover:text-red transition-colors underline underline-offset-2"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p className="mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </section>

            {/* Website-Erstellung */}
            <section>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-4">
                Website-Erstellung
              </h2>
              <p>
                <a
                  href="https://future-now.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-bold hover:text-red transition-colors"
                >
                  Future-Now Studio
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
