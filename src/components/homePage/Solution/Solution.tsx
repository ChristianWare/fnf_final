import styles from "./Solution.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import SolutionImage from "../../../../public/images/happyii.png";

const data = [
  {
    id: 1,
    title: "A. Mobile Booking Screen",
    desc: "Date, service, and payment fields in a single scroll so guests can confirm in under 60 seconds.",
  },
  {
    id: 2,
    title: "B. Admin Dashboard",
    desc: "Real-time view of occupancy, revenue, and late-cancel fees—no spreadsheets or manual tallies.",
  },
  {
    id: 3,
    title: "C. Automated Reminders",
    desc: "SMS and email notifications that slash no-shows by nudging guests 24 h and 2 h before their appointment.",
  },
  {
    id: 4,
    title: "D. Guest Self-Service Portal",
    desc: "One link lets clients reschedule, upgrade, or add extras without calling the front desk.",
  },
  {
    id: 5,
    title: "E. Multi-Calendar Sync",
    desc: "Google, iCal, or Office 365 calendars stay perfectly aligned—double-bookings disappear.",
  },
  {
    id: 6,
    title: "F. Analytics Snapshot",
    desc: "Monthly email shows booking-conversion rate, utilisation, and repeat-guest percentage in plain English.",
  },
];

export default function Solution() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='Our Solutions'
                borderColor='borderColorBlue'
                color='blue'
              />
            </div>
            <h2 className={styles.heading}>
              Work with <span className={styles.span}>Fonts & Footers</span> and
              we&lsquo;ll provide these{" "}
              <span className={styles.span}> solutions</span> for your booking
              website:
            </h2>
            <div className={styles.imgContainer}>
              <Image
                src={SolutionImage}
                fill
                alt=''
                title=''
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((item) => (
              <div key={item.id} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
