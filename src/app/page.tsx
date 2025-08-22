import Features from "@/components/aboutPage/Features/Features";
import AboutUsSection from "@/components/homePage/AboutUsSection/AboutUsSection";
// import Benefits from "@/components/homePage/Benefits/Benefits";
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
// import Offering from "@/components/servicesPage/Offering/Offering";
import Benefitsii from "@/components/homePage/Benefitsii/Benefitsii";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Reasons from "@/components/aboutPage/Reasons/Reasons";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <WorkPageIntro />
      <Specialize />
      <Benefitsii />
      {/* <Offering /> */}
      <Features />
      <Stats />
      <Circle />
      <ServicesHero />
      <Reasons />
      <ProblemSection />
      <Faq />
      <OurTeam />
      <FinalCTA />
      <ContactHero />
    </main>
  );
}
