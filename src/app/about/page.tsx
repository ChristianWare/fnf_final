import AboutPageIntro from "@/components/aboutPage/AboutPageIntro/AboutPageIntro";
import Features from "@/components/aboutPage/Features/Features";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
// import Peace from "@/components/aboutPage/Peace/Peace";
// import ReviewSection from "@/components/aboutPage/ReviewSection/ReviewSection";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <OurTeam />
      <Features />
      <ServicesSection />
      {/* <Peace /> */}
      {/* <ReviewSection /> */}
    </main>
  );
}
