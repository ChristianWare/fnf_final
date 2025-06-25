import AboutUsSection from "@/components/homePage/AboutUsSection/AboutUsSection";
import Hero from "@/components/homePage/Hero/Hero";
import How from "@/components/homePage/How/How";
import ProblemSection from "@/components/homePage/ProblemSection/ProblemSection";
import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import Solution from "@/components/homePage/Solution/Solution";
// import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import WorkProcess from "@/components/homePage/WorkProcess/WorkProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <WorkProcess />
      <ProblemSection />
      <Solution />
      <ProjectSection />
      <How />
    </main>
  );
}
