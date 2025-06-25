import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./WorkProcess.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Circle from "../Circle/Circle";

export default function WorkProcess() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='The work Process' dotColor='blueDot' />
          </div>
          <h2 className={styles.heading}>
            We begin with a <span className={styles.span}>discovery call</span>{" "}
            to map your goals, pain points, and prototype every page before
            writing a line of code. Then we{" "}
            <span className={styles.span}>build, launch, and support</span> your
            storefront with hands-on training and 30 days of complimentary
            post-launch care.
          </h2>
        </div>
        <div className={styles.circleContainer}>
          <Circle />
        </div>
      </LayoutWrapper>
    </section>
  );
}
