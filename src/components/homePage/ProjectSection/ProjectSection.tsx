import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProjectSection.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import { projects } from "@/lib/data";
import ProjectDetails from "@/components/workPage/ProjectDetails/ProjectDetails";
import WorkHero from "@/components/workPage/WorkHero/WorkHero";

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <WorkHero />
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='Featured Projects' dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              Check out our{" "}
              <span className={styles.span}>successful projeccts</span> and case
              studies
            </h2>
          </div>
          <div className={styles.bottom}>
            {projects.slice(0, 2).map((project) => (
              <ProjectDetails key={project.id} project={project} />
            ))}
          </div>
         
        </div>
      </LayoutWrapper>
    </section>
  );
}
