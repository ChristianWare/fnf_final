import ContactHero from "@/components/contactPage/ContactHero/ContactHero";
import ContactUsSection from "@/components/homePage/ContactUsSection/ContactUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  // title: {
  //   absolute: "About",
  // },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactUsSection />
    </main>
  );
}
