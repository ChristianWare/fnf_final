import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProjectSection.module.css";
import Image from "next/image";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Corner from "@/components/shared/Corner/Corner";

const ProjectSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.cornerContainer}>
        <Corner />
      </div>
      <LayoutWrapper>
        <div className={styles.sectionTop}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro
              title='Common Issues'
              color='white'
              dotColor='pinkDot'
            />
          </div>
          <h2 className={styles.heading}>
            Are you <span className={styles.span}> unhappy</span> with your
            current online store, or do you{" "}
            <span className={styles.span}>not have one at all?</span>
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default ProjectSection;
