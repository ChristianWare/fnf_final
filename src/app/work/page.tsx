import ProblemSection from "@/components/homePage/ProblemSection/ProblemSection";
import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import WorkPageIntro from "@/components/workPage/WorkPageIntro/WorkPageIntro";

export default function WorkPage() {
  return (
    <main>
      <WorkPageIntro />
      <ProjectSection />
      <ProblemSection />
    </main>
  );
}
