"use client";

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageIntro.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import Img1 from "../../../../public/images/thinkingWhite.png";
import Nav from "@/components/shared/Nav/Nav";

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntro
            title='About Fonts & Footers'
            color='yellow'
            borderColor='borderColorYellow'
          />
          <h1 className={styles.heading}>
            We build the booking site you wish you had{" "}
            <span className={styles.span}> last year.</span>
          </h1>
          <p className={styles.copy}>
            Fonts & Footers is a booking-platform studio. We turn clunky DM
            scheduling and marketplace fees into one-tap reservations, automated
            deposits, and real-time calendar sync—built with Next.js, Prisma,
            and Stripe.
          </p>
          <div className={styles.imgContainer}>
            <Image src={Img1} alt='Thinking' fill className={styles.img} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
