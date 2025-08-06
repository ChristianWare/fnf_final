import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./Benefits.module.css";
import Rebooking from "@/components/icons/Rebooking/Rebooking";
import Clock from "@/components/icons/Clock/Clock";
import Deposit from "@/components/icons/Deposit/Deposit";
import Lightning from "@/components/icons/Lightning/Lightning";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const data = [
  {
    id: 1,
    title: "One-Tap Rebooking",
    desc: "Returning guests confirm a new appointment in under ten seconds, turning happy customers into reliable repeat revenue.",
    bgColor: "blue",
    icon: <Rebooking className={styles.icon} />,
  },
  {
    id: 2,
    title: "Real-Time Availability",
    desc: "Google, iCal, and on-site calendars stay perfectly in sync, so clients see only open slots and double-bookings disappear.",
    bgColor: "yellow",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 3,
    title: "Smart Deposit Rules",
    desc: "Card-on-file deposits and late-cancel fees protect your income and cut no-shows by up to 40 %.",
    bgColor: "purple",
    icon: <Deposit className={styles.icon} />,
  },
  {
    id: 4,
    title: "Lightning-Fast Experience",
    desc: "Optimised Next.js pages load in well under a second on mobile, keeping busy clients from bouncing before they book.",
    bgColor: "green",
    icon: <Lightning className={styles.icon} />,
  },
];

export default function Benefits() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.sectionHeadingContainer}>
          <SectionIntro
            title='Benefits of working with us'
            dotColor='blueDot'
          />
        </div>
        <div className={styles.content}>
          {data.map((x) => (
            <div className={`${styles.card} ${styles[x.bgColor]}`} key={x.id}>
              <div className={styles.cardTop}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.desc}</p>
              </div>
              <div className={styles.cardBottom}>{x.icon}</div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
