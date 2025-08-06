"use client";

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./How.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function How() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='How we work'
                dotColor='whiteDot'
                color='white'
              />
            </div>
            <h2 className={styles.heading}>
              We put <span className={styles.span}> transparency</span> and
              openness at the heart of all our processes. Our clients{" "}
              <span className={styles.span}>
                get full access to detailed reports,
              </span>{" "}
              which allows them to track every step of the work and understand
              how projects are progressing.
            </h2>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
