import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProjectSection.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import { projects } from "@/lib/data";
import Button from "@/components/shared/Button/Button";
import ProjectDetails from "@/components/workPage/ProjectDetails/ProjectDetails";

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='Featured Project' dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              Check out our{" "}
              <span className={styles.span}>successful projeccts</span> and case
              studies
            </h2>
          </div>
          <div className={styles.bottom}>
            {projects.slice(0, 1).map((project) => (
              <ProjectDetails key={project.id} project={project} />
            ))}
          </div>
          <div className={styles.btnContanierii}>
            <Button href='/work' btnType='blue' text='See all projects' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
