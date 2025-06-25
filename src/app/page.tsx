import AboutUsSection from "@/components/homePage/AboutUsSection/AboutUsSection";
import Hero from "@/components/homePage/Hero/Hero";
import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import WorkProcess from "@/components/homePage/WorkProcess/WorkProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <WorkProcess />
      <ProjectSection />
    </main>
  );
}
