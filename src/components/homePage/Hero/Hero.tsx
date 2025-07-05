"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import animationData from "../../../../public/lottie/hero.json";
import Lottie from "lottie-react";
import Nav from "@/components/shared/Nav/Nav";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              We build <br />{" "}
              <span className={styles.span}> booking websites </span> <br />
              that fill calendars, not inboxes.
            </h1>
            <p className={styles.copy}>
              Fonts & Footers turns slow DM scheduling into one-click
              confirmations for salons, spas, rentals, and service brands.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='white'
                text='Get a free 90-second audit'
              />
              <Button
                href='/services'
                btnType='noBackgroundWhiteText'
                text='See pricing'
                arrow
              />
            </div>
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
