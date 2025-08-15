import AboutPageIntro from "@/components/aboutPage/AboutPageIntro/AboutPageIntro";
// import Features from "@/components/aboutPage/Features/Features";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
import Reasons from "@/components/aboutPage/Reasons/Reasons";
import Specialize from "@/components/aboutPage/Specialize/Specialize";
import Stats from "@/components/homePage/Stats/Stats";
// import Solution from "@/components/homePage/Solution/Solution";
// import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
// import Peace from "@/components/aboutPage/Peace/Peace";
// import ReviewSection from "@/components/aboutPage/ReviewSection/ReviewSection";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <OurTeam />
      <Stats />
      <Specialize />
      <Reasons />
      {/* <Solution /> */}
      {/* <Features /> */}
      {/* <ServicesSection /> */}
      {/* <Peace /> */}
      {/* <ReviewSection /> */}
    </main>
  );
}
