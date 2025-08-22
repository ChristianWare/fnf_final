// "use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import Nav from "@/components/shared/Nav/Nav";
// import FalseButton from "@/components/shared/FalseButton/FalseButton";
// import Modal from "@/components/shared/Modal/Modal";
// import ContactForm from "@/components/shared/ContactForm/ContactForm";
// import { useState } from "react";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/newhero.png";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";

export default function Hero() {
  // const [open, setOpen] = useState(false);

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
              {/* We build <br />{" "}
              <span className={styles.span}> booking websites </span> <br />
              that fill calendars */}
              Direct Booking Websites <br />{" "}
              <span className={styles.span}> that actually book.</span>
            </h1>
            <p className={styles.copy}>
              Ready to master direct booking and crush your revenue goals? We
              build branded, conversion-first sites with one-screen checkout,
              deposits, and reminder automations.
            </p>
            <div className={styles.imgContainerii}>
              <Image src={Img1} alt='' fill className={styles.img} />
            </div>
            <div className={styles.btnContainer}>
              <Button
                btnType='white'
                text='Book your discovery call'
                href='/'
                arrow
              />
            </div>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Hero image'
                className={styles.img}
                fill
                priority
                quality={100}
              />{" "}
            </div> */}
            <div className={styles.circleContainer}>
              <div className={styles.pulsingCircles} />
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='' fill className={styles.img} />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
      <div className={styles.scrollTextContainer}>
        <ScrollHorizontalText text='Built for salons, studios, consultants, and short-term rentals' />
      </div>
    </section>
  );
}
