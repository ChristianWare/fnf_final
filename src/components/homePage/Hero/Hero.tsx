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
              We build <br />{" "}
              <span className={styles.span}> booking websites </span> <br />
              that fill calendars
              {/* , not inboxes. */}
            </h1>
            <p className={styles.copy}>
              We design and build fast, branded booking sites that convert
              visitors into confirmed appointments. Payments, reminders,
              reviews—done.
            </p>
            <div className={styles.btnContainer}>
              <Button
                btnType='white'
                text='Book your discovery Call'
                href='/'
                arrow
              />
              {/* <Button
                href='/contact'
                btnType='noBackgroundWhiteText'
                text='Free strategy call'
                target='_blank'
                arrow
              /> */}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Hero image'
                className={styles.img}
                fill
                priority
                quality={100}
              />{" "}
            </div>
          </div>
        </div>
      </LayoutWrapper>
      {/* <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ContactForm />
      </Modal> */}
    </section>
  );
}
