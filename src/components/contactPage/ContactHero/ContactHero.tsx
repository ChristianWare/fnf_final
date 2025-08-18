"use client";

import Nav from "@/components/shared/Nav/Nav";
import styles from "./ContactHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from '../../../../public/images/contactus.png'
// import Lottie from "lottie-react";
// import animationData from "../../../../public/lottie/email.json";

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
              Have a question, need a quote, or just curious whether a custom
              booking platform is right for you? Drop a line below—no strings
              attached. We reply within one business day.
            </p>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
              </div> */}
          </div>
        </div>
      </LayoutWrapper>
              <div className={styles.imgContainer}>
                <Image src={Img1} fill title='' alt='' className={styles.img} />
              </div>
    </section>
  );
}
