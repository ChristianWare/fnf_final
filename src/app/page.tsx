// import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
// import Specialize from "@/components/aboutPage/Specialize/Specialize";
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
// import WorkHero from "@/components/workPage/WorkHero/WorkHero";
import WorkPageIntro from "@/components/workPage/WorkPageIntro/WorkPageIntro";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <Benefits />
      <ApproachTestimonialsIntro />
      <WorkPageIntro />

      {/* <WorkHero /> */}
      <Features />
      {/* <Solution /> */}
      {/* <OurTeam /> */}
      {/* <Specialize /> */}
      <ServicesHero />
      {/* <HorizontalServices /> */}
      {/* <How /> */}
      {/* <ServicesSection /> */}
      {/* <Faq /> */}
      <Stats />
      <ProblemSection />
      {/* <ContactUsSection /> */}
    </main>
  );
}
