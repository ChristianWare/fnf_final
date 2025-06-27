import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./EveryPlan.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function EveryPlan() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title="What's included" dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              <span className={styles.span}>Every Fonts & Footers build</span> —
              whether it&#39;s an online store, a booking portal, or a rental
              platform -{" "}
              <span className={styles.span}>
                ships with this same quality baseline.
              </span>{" "}
              That means you don&#39;t pay extra for fundamentals like mobile
              speed, security, accessibility, or search visibility; they&#39;re{" "}
              <span className={styles.span}>woven into each project.</span>
            </h2>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
