"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import animationData from "../../../../public/lottie/hero.json";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              We build <br />
              <span className={styles.span}>interactive & immersive </span> <br />
              e-commerce websites
            </h1>
            <p className={styles.copy}>
              Fonts & Footers builds lightning-fast, revenue-driven online
              stores for small and medium-sized brands.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='white' text='Submit a request' />
              <Button
                href='/'
                btnType='noBackgroundWhiteText'
                text='See how it works'
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
