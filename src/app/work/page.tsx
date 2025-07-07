import ProjectPreview from "@/components/workPage/ProjectPreview/ProjectPreview";
import WorkHero from "@/components/workPage/WorkHero/WorkHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  // title: {
  //   absolute: "About",
  // },
};

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <ProjectPreview />
    </main>
  );
}
