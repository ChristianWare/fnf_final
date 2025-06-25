import AboutUsSection from "@/components/homePage/AboutUsSection/AboutUsSection";
import ContactUsSection from "@/components/homePage/ContactUsSection/ContactUsSection";
import Hero from "@/components/homePage/Hero/Hero";
import How from "@/components/homePage/How/How";
import ProblemSection from "@/components/homePage/ProblemSection/ProblemSection";
import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
import Solution from "@/components/homePage/Solution/Solution";
import WorkProcess from "@/components/homePage/WorkProcess/WorkProcess";

export default function Home() {
  return (
    <main>
      {/* Nav Fixes */}
      <Hero />
      <AboutUsSection />
      <WorkProcess />
      <ProblemSection />
      <Solution />
      <ProjectSection />
      <How />
      <ServicesSection />
      <ContactUsSection />
    </main>
  );
}
