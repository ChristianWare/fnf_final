import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "900"],
});

const PPNeueMontrealMedium = localFont({
  src: "../../public/fonts/PPNeueMontrealMedium2.woff2",
  variable: "--PPNeueMontrealMedium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fonts & Footers",
  description:
    "Fonts & Footers empowers business owners with e-commerce stores, business websites, and direct booking platforms. Elevate your online presence with our web development and design expertise!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${PPNeueMontrealMedium.variable}`}>
        {children}
      </body>
    </html>
  );
}
