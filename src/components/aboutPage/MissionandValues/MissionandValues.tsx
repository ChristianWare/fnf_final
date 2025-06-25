import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./MissionandValues.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function MissionandValues() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='Mission and Values' dotColor='blueDot' />
          </div>
          <h2 className={styles.heading}>
            Empower ambitious{" "}
            <span className={styles.span}>small-to-mid-size</span> product
            brands with enterprise-grade,{" "}
            <span className={styles.span}>conversion-focused</span>{" "}
            storefronts—without enterprise-level overhead.
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
