import AboutPageIntro from "@/components/aboutPage/AboutPageIntro/AboutPageIntro";
import Features from "@/components/aboutPage/Features/Features";
import MissionandValues from "@/components/aboutPage/MissionandValues/MissionandValues";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";

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
