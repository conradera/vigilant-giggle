import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollToHash from "@/components/ScrollToHash";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700"],
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIM Paints | Engineered for Uganda",
  description:
    "Premium coatings engineered for the tropical Ugandan climate. NIM (U) Limited — Beyond Expectations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClass = `${barlowCondensed.variable} ${poppins.variable}`;
  return (
    <html lang="en" className={fontClass}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md antialiased selection:bg-leaf-green selection:text-white">
        <Header />
        <ScrollToHash />
        <main className="min-h-screen pt-20"><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
