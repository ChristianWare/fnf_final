import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./OurTeam.module.css";
// import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import ChrisImg from "../../../../public/images/chris.png";
import { founderPoints } from "@/lib/data";
import Check from "@/components/icons/Check/Check";

export default function OurTeam() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.circleContainer}>
              <div className={styles.pulsingCircles} />
              <div className={styles.imgContainer}>
                <Image src={ChrisImg} alt='' fill className={styles.img} />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Founder-led, partner-minded—focused on your bookings
            </h2>
            <p className={styles.copy}>
              When you’re growing, you don’t need another pretty website. You
              need a partner who cares about filled calendars, fewer no-shows,
              and clear next steps. I’m Chris, founder of Fonts & Footers. We’re
              a new studio with a sharp niche: direct-booking websites that move
              visitors to paid appointments—fast.
              <br />
              <br />
              I’ve shaped our approach through early client work and hands-on
              pilots across salons, pet grooming, transport, clinics, rentals,
              and multi-location teams. The goal is simple: remove friction,
              protect margins, and make the “book now” path so obvious it wins
              by default.
            </p>
            <div className={styles.box}>
              <span className={styles.whyThisMatters}>
                Why this matters for your business:
              </span>
              <ul className={styles.founderPointsList}>
                {founderPoints.map((point) => (
                  <li key={point.id} className={styles.founderPoint}>
                    <Check className={styles.icon} /> {point.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.signatureBox}>
              <p className={styles.signature}>Cheers, Chris</p>
              <p className={styles.title}>Founder - Fonts & Footers</p>
            </div>
            {/* <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='Chris, Founder of Fonts & Footers'
                color='blue'
                borderColor='borderColorBlue'
              />
            </div> */}
            {/* <div className={styles.btnContainer}>
              <Button
                href='/'
                btnType='blue'
                text='Find me on linkedIn'
                arrow
              />
            </div> */}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
