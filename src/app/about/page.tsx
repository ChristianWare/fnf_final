import AboutPageIntro from "@/components/aboutPage/AboutPageIntro/AboutPageIntro";
import Features from "@/components/aboutPage/Features/Features";
import MissionandValues from "@/components/aboutPage/MissionandValues/MissionandValues";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
// import ReviewSection from "@/components/aboutPage/ReviewSection/ReviewSection";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <MissionandValues />
      <OurTeam />
      <Features />
      
    </main>
  );
}
