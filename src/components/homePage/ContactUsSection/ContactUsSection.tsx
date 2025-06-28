// "use client";

import styles from "./ContactUsSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import ContactForm from "@/components/shared/ContactForm/ContactForm";
import Image from "next/image";
import Img1 from "../../../../public/images/contact.png";

export default function ContactUsSection() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.content}>
          

          <div className={styles.sectionTop}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='Contact us'
              />
            </div>
            <h2 className={styles.heading}>
              <span className={styles.span}>Reach out to us anytime.</span>{" "}
              We&lsquo;re ready to assist you with quotes, inquiries, and
              personalized web solutions.{" "}
              <span className={styles.span}>
                We&lsquo;re just a message or call away.
              </span>
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Img1} fill alt='' className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
