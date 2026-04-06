import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Osteria Tintarella | Italienisches Restaurant in Kaltenkirchen",
    template: "%s | Osteria Tintarella",
  },
  description:
    "Gehobene italienische Küche mit sizilianischer Note im Herzen von Kaltenkirchen. Pizza, Pasta, Fisch, Fleisch & über 50 Weine. Jetzt Tisch reservieren!",
  keywords: [
    "Osteria Tintarella",
    "Italienisches Restaurant Kaltenkirchen",
    "Pizza Kaltenkirchen",
    "Pasta Kaltenkirchen",
    "Italiener Kaltenkirchen",
    "Restaurant Hamburger Straße",
  ],
  openGraph: {
    title: "Osteria Tintarella | Italienisches Restaurant in Kaltenkirchen",
    description:
      "Gehobene italienische Küche mit sizilianischer Note. Vino · Cucina · Amore",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <script
          src="https://cloud.ccm19.de/app.js?apiKey=06cd01fef0d5405811628f562181a5c3e2dd42e02809b05f&amp;domain=69d388f457792d155703a582"
          referrerPolicy="origin"
          defer
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
