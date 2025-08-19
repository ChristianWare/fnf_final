import ContactHero from "@/components/contactPage/ContactHero/ContactHero";
import ContactUsSection from "@/components/homePage/ContactUsSection/ContactUsSection";
import Faq from "@/components/shared/Faq/Faq";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactUsSection />
      <Faq />
    </main>
  );
}
