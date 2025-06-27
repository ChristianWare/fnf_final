"use client";

import Nav from "@/components/shared/Nav/Nav";
import styles from "./ContactHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/email.json";

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Contact <br />{" "}
              <span className={styles.span}>Fonts & Footers</span>
            </h1>
            <p className={styles.copy}>
              Ready to finally see how work, should work? We have the business
              apps you depend on, the support you need, and the AI you’ve been
              waiting for—all in one solution. Be one of the first to experience
              our product and gain a competitive edge.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
