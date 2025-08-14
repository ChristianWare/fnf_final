import AboutPageIntro from "@/components/aboutPage/AboutPageIntro/AboutPageIntro";
import AboutPostHero from "@/components/aboutPage/AboutPostHero/AboutPostHero";
import Features from "@/components/aboutPage/Features/Features";
import OurTeam from "@/components/aboutPage/OurTeam/OurTeam";
// import Peace from "@/components/aboutPage/Peace/Peace";
// import ReviewSection from "@/components/aboutPage/ReviewSection/ReviewSection";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <OurTeam />
      <AboutPostHero />
      <Features />
      {/* <Peace /> */}
      {/* <ReviewSection /> */}
    </main>
  );
}
