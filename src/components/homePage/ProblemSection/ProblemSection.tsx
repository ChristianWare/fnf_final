import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProblemSection.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/happyiii.png";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Check from "@/components/icons/Check/Check";

const data = [
  {
    icon: <Check className={styles.icon} />,
    title: "One-screen booking",
    description: "Pick service, pro, date, pay—done in under 60 seconds.",
  },
  {
    icon: <Check className={styles.icon} />,
    title: "No-show defense",
    description: "Deposit + SMS/email reminders + easy reschedule.",
  },
  {
    icon: <Check className={styles.icon} />,
    title: "Multi-location ready",
    description: "Pools staff and inventory across locations in real time.",
  },
  {
    icon: <Check className={styles.icon} />,
    title: "Own your traffic",
    description: "SEO + speed + schema = you control demand, not marketplaces.",
  },
];

export default function ProblemSection() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles.left}>
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
          <div className={styles.right}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='Final Results'
                color='black'
                borderColor='borderColorBlack'
              />
            </div>
            <h2 className={styles.heading}>
              {/* Are you <span className={styles.span}>tired</span> of chasing DMs
              or <span className={styles.span}>losing money</span> to no-shows? */}
              Stop losing bookings to DMs and dead forms.
            </h2>
            <p className={styles.leftCopy}>
              If your calendar isn’t full, it’s not your services—it’s the
              friction. Fonts & Footers removes it with clear offers, one-screen
              booking, automated reminders, and payment on file so no-shows
              disappear.
            </p>
            <div className={styles.dataMapBox}>
              {data.map((x, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.iconBox}>{x.icon}</div>
                  <div>
                    <h4 className={styles.title}>{x.title}</h4>
                    <p className={styles.description}>{x.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
