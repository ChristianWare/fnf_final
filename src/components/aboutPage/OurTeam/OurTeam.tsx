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
              <SectionIntro title='Intro' />
            </div>
            <h2 className={styles.heading}>
              {/* At its core, <span className={styles.span}>Fonts & Footers</span>{" "}
              is just me <span className={styles.span}> — Chris — </span>your
              dedicated full-stack developer and founder. With over eight years
              of hands-on experience crafting high-performance e-commerce stores
              and booking platforms, I work as an{" "}
              <span className={styles.span}>extension of your team</span> to
              deliver clean, conversion-focused sites. */}
              Fonts & Footers is a specialist studio focused on one thing:
              turning visitors into{" "}
              <span className={styles.span}> booked appointments.</span> I’m
              Chris, founder. After years building for salons, clinics, rentals,
              and transport, we’ve honed a repeatable system that launches
              quickly and converts reliably.
            </h2>
            <div className={styles.btnContainer}>
              <Button
                href='/'
                btnType='blue'
                text='Find me on linkedIn'
                arrow
              />
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
