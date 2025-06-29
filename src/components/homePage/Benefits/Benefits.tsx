import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./Benefits.module.css";
import Arrow from "@/components/icons/Arrow/Arrow";

const data = [
  {
    id: 1,
    title: "One-Tap Rebooking",
    desc: "Returning guests confirm a new appointment in under ten seconds, turning happy customers into reliable repeat revenue.",
    bgColor: "blue",
  },
  {
    id: 2,
    title: "Real-Time Availability",
    desc: "Google, iCal, and on-site calendars stay perfectly in sync, so clients see only open slots and double-bookings disappear.",
    bgColor: "yellow",
  },
  {
    id: 3,
    title: "Smart Deposit Rules",
    desc: "Card-on-file deposits and late-cancel fees protect your income and cut no-shows by up to 40 %.",
    bgColor: "purple",
  },
  {
    id: 4,
    title: "Lightning-Fast Experience",
    desc: "Optimised Next.js pages load in well under a second on mobile, keeping busy clients from bouncing before they book.",
    bgColor: "green",
  },
];


export default function Benefits() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionHeadingContainer}>
        <SectionIntro title='Benefits of working with us' dotColor='blueDot' />
      </div>
      <div className={styles.content}>
        {data.map((x) => (
          <div className={`${styles.card} ${styles[x.bgColor]}`} key={x.id}>
            <div className={styles.cardTop}>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.desc}</p>
            </div>
            <div className={styles.cardBottom}>
              <Arrow className={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
