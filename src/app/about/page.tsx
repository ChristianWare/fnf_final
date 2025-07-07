import AboutPageIntro from "@/components/aboutPage/AboutPageIntro/AboutPageIntro";
import Features from "@/components/aboutPage/Features/Features";
import MissionandValues from "@/components/aboutPage/MissionandValues/MissionandValues";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
import Peace from "@/components/aboutPage/Peace/Peace";
import Specialize from "@/components/aboutPage/Specialize/Specialize";
import { Metadata } from "next";
// import ReviewSection from "@/components/aboutPage/ReviewSection/ReviewSection";

export const metadata: Metadata = {
  title: "About",
  // title: {
  //   absolute: "About",
  // },
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <MissionandValues />
      <OurTeam />
      <Features />
      <Specialize />
      <Peace />
    </main>
  );
}
