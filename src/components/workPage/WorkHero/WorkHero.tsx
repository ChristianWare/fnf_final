// import Nav from "@/components/shared/Nav/Nav";
import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import styles from "./WorkHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function WorkHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntro
            title='Featured Projects'
            dotColor='blueDot'
            color='white'
          />
          <h2 className={styles.heading}>
            <span className={styles.span}>Our Work</span> <br /> speaks for
            itself
          </h2>
          <p className={styles.copy}>
            Explore our portfolio of successful booking projects across various
            industries and business models.
          </p>
        <ProjectSection />
        </div>
      </LayoutWrapper>
    </section>
  );
}
