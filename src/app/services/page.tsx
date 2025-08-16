// import Specialize from "@/components/aboutPage/Specialize/Specialize";
import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
import Solution from "@/components/homePage/Solution/Solution";
import EveryPlan from "@/components/servicesPage/EveryPlan/EveryPlan";
import HorizontalServices from "@/components/servicesPage/HorizontalServices/HorizontalServices";
// import AddOns from "@/components/servicesPage/AddOns/AddOns";
import Offering from "@/components/servicesPage/Offering/Offering";
import ServicesHero from "@/components/servicesPage/ServicesHero/ServicesHero";
// import Faq from "@/components/shared/Faq/Faq";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Offering />
      <ServicesSection />
      {/* <Specialize /> */}
      <Solution />
      <HorizontalServices />
      <EveryPlan />
      {/* <AddOns /> */}
      {/* <Faq /> */}
    </main>
  );
}
