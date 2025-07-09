import EveryPlan from "@/components/servicesPage/EveryPlan/EveryPlan";
import HorizontalServices from "@/components/servicesPage/HorizontalServices/HorizontalServices";
import ServicesHero from "@/components/servicesPage/ServicesHero/ServicesHero";
import Faq from "@/components/shared/Faq/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  // title: {
  //   absolute: "About",
  // },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <HorizontalServices />
      <EveryPlan />
      <Faq />
    </main>
  );
}
