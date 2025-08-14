import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./MissionandValues.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function MissionandValues() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='Mission and Values'  />
          </div>
          <h2 className={styles.heading}>
            <span className={styles.span}>Our mission</span> is to give
            owner-operated service brands{" "}
            <span className={styles.span}>enterprise-grade booking tech</span>
            —without enterprise overhead.
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
