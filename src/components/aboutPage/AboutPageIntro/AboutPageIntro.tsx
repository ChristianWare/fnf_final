"use client";

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageIntro.module.css";
import animationData from "../../../../public/lottie/heroii.json";
import Lottie from "lottie-react";
import Nav from "@/components/shared/Nav/Nav";

const services = [
  { id: 1, name: "Full-Build Storefronts" },
  { id: 2, name: "Performance Rescue" },
  { id: 3, name: "Conversion Optimization & A/B Testing" },
  { id: 4, name: "Maintenance & Growth Partnership" },
];

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              About <br /> <span className={styles.span}>Fonts & Footers</span>
            </h1>
            <p className={styles.copy}>
              Fonts & Footers is an e-commerce web development agency.
              We&lsquo;re experts at blending the latest technology with
              creative ideas for top-notch results.
            </p>
            <ul className={styles.servicesContainer}>
              {services.map((x) => (
                <li className={styles.service} key={x.id}>
                  {x.name}
                  <span className={styles.blackDot} />
                </li>
              ))}
            </ul>
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
