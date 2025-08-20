"use client";

import styles from "./ContactHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/contactusiv.png";
import ContactForm from "@/components/shared/ContactForm/ContactForm";
// import Lottie from "lottie-react";
// import animationData from "../../../../public/lottie/email.json";

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Contact <br />{" "}
              <span className={styles.span}>Fonts & Footers</span>
            </h2>
            <p className={styles.copy}>
              Have a question, need a quote, or just curious whether a custom
              booking platform is right for you? Drop a line — no strings
              attached. We reply within one business day.
            </p>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill title='' alt='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
