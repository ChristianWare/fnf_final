"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
// import animationData from "../../../../public/lottie/hero.json";
// import Lottie from "lottie-react";
import Nav from "@/components/shared/Nav/Nav";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import Modal from "@/components/shared/Modal/Modal";
import ContactForm from "@/components/shared/ContactForm/ContactForm";
import { useState } from "react";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/newheroii.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
          <SectionIntroii />
            <h1 className={styles.heading}>
              We build <br />{" "}
              <span className={styles.span}> booking websites </span> <br />
              that fill calendars
              {/* , not inboxes. */}
            </h1>
            <p className={styles.copy}>
              Fonts & Footers turns slow DM scheduling into one-click
              confirmations for salons, spas, rentals, and service brands.
            </p>
            <div className={styles.btnContainer}>
              <FalseButton
                btnType='white'
                text='Request free booking audit'
                onClick={() => setOpen(true)}
              />
              <Button
                href='/contact'
                btnType='noBackgroundWhiteText'
                text='Free strategy call'
                target='_blank'
                arrow
              />
            </div>
          </div>

          {/* <div className={styles.right}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
            </div> */}
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Hero image'
                width={612}
                height={408}
                className={styles.img}
              />{" "}
            </div>
          </div>
        </div>
      </LayoutWrapper>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ContactForm />
      </Modal>
    </section>
  );
}
