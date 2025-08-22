import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Stats.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/stats.png";
import Check from "@/components/icons/Check/Check";

const data = [
  {
    id: 1,
    title: "One-screen booking, done in under 60 seconds",
  },
  {
    id: 2,
    title: "Deposit checkout + reminders to cut no-shows",
  },
  {
    id: 3,
    title: "Multi-location & staff availability that stays in sync",
  },
];

const data2 = [
  {
    id: 4,
    title: "≤ 60 sec",
    desc: "Average time to complete a booking",
  },
  {
    id: 5,
    title: "3–5 weeks",
    desc: "Typical launch timeline from kickoff",
  },
  {
    id: 6,
    title: "20–40% fewer",
    desc: "No-shows with deposits + reminders",
  },
];

export default function Stats() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <h2 className={styles.heading}>
                Direct booking that fills <br />
                your calendar
              </h2>
              <p className={styles.copy}>
                Fast, branded booking experiences turn visitors into paid
                appointments. Clear policies, deposits on file, and automated
                reminders remove friction—so you keep the relationship, the
                data, and the margin.
              </p>
              <div className={styles.mapDataBox}>
                {data.map((item) => (
                  <div key={item.id} className={styles.mapDataItem}>
                    <Check className={styles.icon} />
                    <p className={styles.mapDataTitle}>{item.title}</p>
                  </div>
                ))}
              </div>
              {/* <div className={styles.btnContainer}>
                <Button
                  href='/contact'
                  btnType='blue'
                  text='Book a 20-min demo'
                  arrow
                />
              </div> */}
            </div>
            <div className={styles.topRight}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img1}
                  alt='Booking performance highlights'
                  className={styles.img}
                  fill
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            {data2.map((y) => (
              <div key={y.id} className={styles.card}>
                <div className={styles.cardContent}>
                  <h3 className={styles.bottomTitle}>{y.title}</h3>
                  <p className={styles.bottomDesc}>{y.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
