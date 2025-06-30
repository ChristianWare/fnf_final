import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/Footer/Footer";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const PPNeueMontrealMedium = localFont({
  src: "../../public/fonts/PPNeueMontrealMedium2.woff2",
  variable: "--PPNeueMontrealMedium",
  display: "swap",
});

const PPNeueMontrealMediumThick = localFont({
  src: "../../public/fonts/PPNeueMontrealMedium.woff2",
  variable: "--PPNeueMontrealMediumThick",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fonts & Footers | Custom Booking Websites",
  description:
    "Fonts & Footers builds lightning-fast, mobile-first booking platforms that sync calendars in real time, cut no-shows, and automate deposits for salons, spas, rentals, and service brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${PPNeueMontrealMedium.variable} ${PPNeueMontrealMediumThick.variable}`}
      >
        {children}
        <FinalCTA />
        <Footer />
      </body>
    </html>
  );
}
