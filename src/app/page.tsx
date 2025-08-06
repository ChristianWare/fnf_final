import Features from "@/components/aboutPage/Features/Features";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
import Specialize from "@/components/aboutPage/Specialize/Specialize";
import AboutUsSection from "@/components/homePage/AboutUsSection/AboutUsSection";
import Benefits from "@/components/homePage/Benefits/Benefits";
import ContactUsSection from "@/components/homePage/ContactUsSection/ContactUsSection";
import Hero from "@/components/homePage/Hero/Hero";
import How from "@/components/homePage/How/How";
import ProblemSection from "@/components/homePage/ProblemSection/ProblemSection";
import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
import Solution from "@/components/homePage/Solution/Solution";
import Faq from "@/components/shared/Faq/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <Specialize />
      <Benefits />
      <ProblemSection />
      <Solution />
      <Features />
      <ProjectSection />
      <OurTeam />
      <How />
      <ServicesSection />
      <Faq />
      <ContactUsSection />
    </main>
  );
}
