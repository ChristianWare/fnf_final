"use client";

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./How.module.css";
import Image from "next/image";
import HowImage from "../../../../public/images/how.png";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Corner from "@/components/shared/Corner/Corner";

export default function How() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.cornerContainer}>
          <Corner />
        </div>

        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='How we work' dotColor='blueDot' />
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
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <Image
                src={HowImage}
                fill
                alt=''
                title=''
                className={styles.img}
              />
            </div>
            <p className={styles.copy}>
              We regularly provide updates on the current status of campaigns
              and make adjustments depending on the dynamics and results. In
              addition, we provide constant support at every stage of
              cooperation, always staying in touch and ready to help. Our top
              priority is your success, which is why we strive to achieve the
              best results for your business.
            </p>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
