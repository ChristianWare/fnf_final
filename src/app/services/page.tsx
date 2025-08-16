import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
import AddOns from "@/components/servicesPage/AddOns/AddOns";
import Offering from "@/components/servicesPage/Offering/Offering";
import ServicesHero from "@/components/servicesPage/ServicesHero/ServicesHero";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Offering />
      <ServicesSection />
      <AddOns />
    </main>
  );
}
