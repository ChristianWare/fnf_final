"use client";

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageIntro.module.css";
// import animationData from "../../../../public/lottie/aboutiii.json";
// import Lottie from "lottie-react";
import Nav from "@/components/shared/Nav/Nav";

const services = [
  { id: 1, name: "Solo Starter Booking" },
  { id: 2, name: "Team Booking Platform" },
  { id: 3, name: "Multi-Location Booking" },
  { id: 4, name: "Rental Fleet & Inventory Booking" },
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
              Cross the finish line with the <br />
              <span className={styles.span}>#1 Direct Booking Agency</span>
            </h1>
            <p className={styles.copy}>
              Fonts & Footers is a booking-platform studio. We turn clunky DM
              scheduling and marketplace fees into one-tap reservations,
              automated deposits, and real-time calendar sync—built with
              Next.js, Prisma, and Stripe. We specialize in:
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
            {/* <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div> */}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
