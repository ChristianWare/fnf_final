import Features from "@/components/aboutPage/Features/Features";
import AboutUsSection from "@/components/homePage/AboutUsSection/AboutUsSection";
import ApproachTestimonialsIntro from "@/components/homePage/ApproachTestimonialsIntro/ApproachTestimonialsIntro";
import Benefits from "@/components/homePage/Benefits/Benefits";
import Hero from "@/components/homePage/Hero/Hero";
import ProblemSection from "@/components/homePage/ProblemSection/ProblemSection";
import Stats from "@/components/homePage/Stats/Stats";
import ServicesHero from "@/components/servicesPage/ServicesHero/ServicesHero";
import WorkPageIntro from "@/components/workPage/WorkPageIntro/WorkPageIntro";
import Specialize from "@/components/aboutPage/Specialize/Specialize";
import ContactHero from "@/components/contactPage/ContactHero/ContactHero";
import Faq from "@/components/shared/Faq/Faq";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
import Circle from "@/components/homePage/Circle/Circle";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <WorkPageIntro />
      <Benefits />
      <ApproachTestimonialsIntro />
      <Features />
      <Circle />
      <Stats />
      <Specialize />
      <ProblemSection />
      <OurTeam />
      <ServicesHero />
      <Faq />
      <ContactHero />
    </main>
  );
}
