import styles from "./ProjectSection.module.css";
import { projects } from "@/lib/data";
import ProjectDetails from "@/components/workPage/ProjectDetails/ProjectDetails";

export default function ProjectSection() {
  return (
    <section className={styles.container}>
        {/* <WorkHero /> */}
        <div className={styles.content}>
         
          <div className={styles.bottom}>
            {projects.slice(0, 3).map((project) => (
              <ProjectDetails key={project.id} project={project} />
            ))}
          </div>
         
        </div>
    </section>
  );
}
