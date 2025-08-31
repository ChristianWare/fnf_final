import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/Footer/Footer";
import { auth } from "../../auth";
import { SessionProvider } from "next-auth/react";
import styles from "./Layout.module.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--bebasNeue",
  subsets: ["latin"],
  weight: ["400"],
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

const JetBrainsMonoRegular = localFont({
  src: "../../public/fonts/JetBrainsMonoRegular.woff2",
  variable: "--JetBrainsMonoRegular",
  display: "swap",
});

const PerfectlyNinetiesItalic = localFont({
  src: "../../public/fonts/PerfectlyNinetiesItalic.otf",
  variable: "--PerfectlyNinetiesItalic",
  display: "swap",
});

const Merriweather = localFont({
  src: "../../public/fonts/Merriweather.ttf",
  variable: "--Merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fonts & Footers | Custom Booking Websites",
    template: "%s - Fonts & Footers | Custom Booking Websites",
  },
  description:
    "Fonts & Footers builds lightning-fast, mobile-first booking platforms that sync calendars in real time, cut no-shows, and automate deposits for salons, spas, rentals, and service brands.",
};

export const viewport: Viewport = {
  // this will render:
  // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang='en'>
        <body
          className={`${inter.variable} ${PPNeueMontrealMedium.variable} ${PPNeueMontrealMediumThick.variable} ${bebasNeue.variable} ${JetBrainsMonoRegular.variable}
            ${PerfectlyNinetiesItalic.variable} ${Merriweather.variable}`}
        >
          <div className={styles.container}>
            {children}

            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
