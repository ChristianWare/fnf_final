import EveryPlan from "@/components/servicesPage/EveryPlan/EveryPlan";
import HorizontalServices from "@/components/servicesPage/HorizontalServices/HorizontalServices";
import ServicesHero from "@/components/servicesPage/ServicesHero/ServicesHero";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <HorizontalServices />
      <EveryPlan />
    </main>
  );
}
