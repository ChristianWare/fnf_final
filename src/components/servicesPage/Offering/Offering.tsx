import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Offering.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/ecomm.jpeg";
import Button from "@/components/shared/Button/Button";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import ApproachTestimonialsIntro from "@/components/homePage/ApproachTestimonialsIntro/ApproachTestimonialsIntro";

const data = [
  { id: 1, title: "Direct-booking website built for conversion" },
  { id: 2, title: "One-screen flow (service → pro → time → pay)" },
  { id: 3, title: "Deposit checkout (Stripe/Square) + saved cards" },
  {
    id: 4,
    title: "SMS/email reminders + clear no-show & cancellation policies",
  },
  { id: 5, title: "Calendar sync (Google / Apple / Outlook)" },
  { id: 6, title: "Multi-location & staff availability logic" },
  { id: 7, title: "Reviews, rebooking prompts, memberships & gift cards" },
  { id: 8, title: "SEO schema, speed tuning, analytics & simple dashboards" },
  { id: 9, title: "Accessibility-minded UX (WCAG-aware) & QA" },
  { id: 10, title: "Training & handoff documentation for your team" },
];

export default function Offering() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Example of a clean, mobile-first booking interface'
                title='Direct-booking website example'
                fill
                className={styles.img}
                priority
              />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>Core Offering</h2>
            {/* <p className={styles.copy}>
              Fonts &amp; Footers builds fast, branded booking sites that turn
              visitors into paid appointments. We remove friction with a
              one-screen checkout, deposit payments, and automated reminders—so
              you keep the relationship, the data, and the margin. Typical
              launches go live in 3–5 weeks with a single point of contact.
            </p> */}
            <ApproachTestimonialsIntro />
            <SectionIntro title='Including:' />
            <ul className={styles.mapDataBox}>
              {data.map((item) => (
                <li key={item.id} className={styles.mapDataItem}>
                  {item.title}
                </li>
              ))}
            </ul>

            <div className={styles.btnContainer}>
              <Button
                btnType='black'
                text='Book a 20-min demo'
                href='/contact'
                arrow
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
