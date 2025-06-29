"use client";

import styles from "./FinalCTA.module.css";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";
import animationData from "../../../../public/lottie/usp.json";
import Lottie from "lottie-react";

export default function FinalCTA() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.lottieBox}>
            <Lottie animationData={animationData} className={styles.lottie} />
          </div>
          <SectionIntro title='FONTS & FOOTERS' color='tan' dotColor='tanDot' />

          <h2 className={styles.heading}>
            Ready to stop chasing DMs <br /> and start filling your calendar?
          </h2>

          <div className={styles.btnContainer}>
            <Button
              href='/contact'
              btnType='blue'
              text='Book a 15-minute call'
              arrow
            />
            <Button
              href='/contact'
              btnType='noBackgroundBlackText'
              text='Prefer email?'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
