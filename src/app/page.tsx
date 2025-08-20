// import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
// import ContactUsSection from "@/components/homePage/ContactUsSection/ContactUsSection";
// import How from "@/components/homePage/How/How";
// import Solution from "@/components/homePage/Solution/Solution";
// import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
// import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
// import Faq from "@/components/shared/Faq/Faq";
import Features from "@/components/aboutPage/Features/Features";
import AboutUsSection from "@/components/homePage/AboutUsSection/AboutUsSection";
import ApproachTestimonialsIntro from "@/components/homePage/ApproachTestimonialsIntro/ApproachTestimonialsIntro";
import Benefits from "@/components/homePage/Benefits/Benefits";
import Hero from "@/components/homePage/Hero/Hero";
import ProblemSection from "@/components/homePage/ProblemSection/ProblemSection";
import Stats from "@/components/homePage/Stats/Stats";
// import HorizontalServices from "@/components/servicesPage/HorizontalServices/HorizontalServices";
import ServicesHero from "@/components/servicesPage/ServicesHero/ServicesHero";
import WorkPageIntro from "@/components/workPage/WorkPageIntro/WorkPageIntro";
import Specialize from "@/components/aboutPage/Specialize/Specialize";
import ContactHero from "@/components/contactPage/ContactHero/ContactHero";
// import ContactUsSection from "@/components/homePage/ContactUsSection/ContactUsSection";
import Faq from "@/components/shared/Faq/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <Benefits />
      <ApproachTestimonialsIntro />
      <WorkPageIntro />
      <Features />
      {/* <Solution /> */}
      {/* <OurTeam /> */}
      <ServicesHero />
      {/* <HorizontalServices /> */}
      {/* <How /> */}
  

      <Stats />
      <Specialize />
      <ProblemSection />
      <Faq />
      <ContactHero />
      {/* <ContactUsSection /> */}
    </main>
  );
}
