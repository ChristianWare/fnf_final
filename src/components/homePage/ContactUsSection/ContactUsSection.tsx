"use client";

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactUsSection.module.css";
import Corner from "@/components/shared/Corner/Corner";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import ContactForm from "@/components/shared/ContactForm/ContactForm";
import animationData from "../../../../public/lottie/email.json";
import Lottie from "lottie-react";

export default function ContactUsSection() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.cornerContainer}>
            <Corner />
          </div>

          <div className={styles.sectionTop}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='Contact us'
                color='white'
                dotColor='pinkDot'
              />
            </div>
            <h2 className={styles.heading}>
              <span className={styles.span}>Reach out to us anytime.</span>{" "}
              We&lsquo;re ready to assist you with quotes, inquiries, and
              personalized web solutions.{" "}
              <span className={styles.span}>
                We&lsquo;re just a message or call away.
              </span>
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.lottieBox}>
                <Lottie
                  animationData={animationData}
                  className={styles.lottie}
                />
              </div>
            </div>
            <div className={styles.right}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
