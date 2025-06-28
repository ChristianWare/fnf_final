import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./OurTeam.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import ChrisImg from "../../../../public/images/chris.png";
import Button from "@/components/shared/Button/Button";

export default function OurTeam() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='Our Team' dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              At its core, <span className={styles.span}>Fonts & Footers</span>{" "}
              is just me <span className={styles.span}> — Chris — </span>your
              dedicated full-stack developer and founder. With over eight years
              of hands-on experience crafting high-performance Shopify and
              Next.js storefronts, I work as an extension of your team to
              deliver clean, conversion-focused sites.
            </h2>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='blue' text='Find me on linkedIn' arrow />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.circleContainer}>
              <div className={styles.pulsingCircles}></div>
              <div className={styles.imgContainer}>
                <Image src={ChrisImg} alt='' fill className={styles.img} />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
