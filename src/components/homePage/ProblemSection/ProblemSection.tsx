import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProblemSection.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/sadii.png";

import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Outdated from "@/components/icons/Outdated/Outdated";
import CloudPrez from "@/components/icons/CloudPrez/CloudPrez";
import Credibility from "@/components/icons/Credibility/Credibility";
import Update from "@/components/icons/Update/Update";

const data = [
  {
    icon: <Outdated className={styles.icon} />,
    title: "One-screen booking",
    description: "Pick service, pro, date, pay—done in under 60 seconds.",
  },
  {
    icon: <CloudPrez className={styles.icon} />,
    title: "No-show defense",
    description: "Deposit + SMS/email reminders + easy reschedule.",
  },
  {
    icon: <Credibility className={styles.icon} />,
    title: "Multi-location ready",
    description: "Pools staff and inventory across locations in real time.",
  },
  {
    icon: <Update className={styles.icon} />,
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
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='Common Issues'
                color='white'
                borderColor='borderColorWhite'
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
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                <div>
                  <h4 className={styles.title}>{x.title}</h4>
                  <p className={styles.description}>{x.description}</p>
                </div>
                <div className={styles.iconBox}>{x.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
