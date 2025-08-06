import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProblemSection.module.css";
// import Image from "next/image";
// import Img1 from "../../../../public/images/sad.png";

import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
// import Corner from "@/components/shared/Corner/Corner";
import Outdated from "@/components/icons/Outdated/Outdated";
import CloudPrez from "@/components/icons/CloudPrez/CloudPrez";
import Credibility from "@/components/icons/Credibility/Credibility";
import Update from "@/components/icons/Update/Update";

const data = [
  {
    icon: <Outdated className={styles.icon} />,
    title: "DM Chaos",
    description:
      "You spend hours each day confirming times in Instagram or Facebook messages instead of serving clients.",
  },
  {
    icon: <CloudPrez className={styles.icon} />,
    title: "No-Show Drain",
    description:
      "Last-minute cancellations and no-shows eat 15-20 % of your revenue—but guests still expect flexibility.",
  },
  {
    icon: <Credibility className={styles.icon} />,
    title: "Double-Booking Risk",
    description:
      "Google, iCal, and handwritten schedules fall out of sync, leading to awkward refunds and bad reviews.",
  },
  {
    icon: <Update className={styles.icon} />,
    title: "Marketplace Fees",
    description:
      "Third-party platforms keep up to 15 % of every booking and block you from building your own customer list.",
  },
];

export default function ProblemSection() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        {/* <div className={styles.cornerContainer}>
          <Corner />
        </div> */}

        {/* <div className={styles.sectionTop}>
          
        </div> */}
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='Common Issues'
                color='white'
                dotColor='pinkDot'
              />
            </div>
            <h2 className={styles.heading}>
              Are you <span className={styles.span}>tired</span> of chasing DMs
              or <span className={styles.span}>losing money</span> to no-shows?
            </h2>
            <p className={styles.leftCopy}>
              {/* A custom booking platform fixes those leaks by syncing calendars
              in real time, charging deposits automatically, and giving guests a
              60-second checkout—no coding on your part, no monthly marketplace
              tax. */}
            </p>
            {/* <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Hero image'
                width={654}
                height={381}
                className={styles.img}
              />{" "}
            </div> */}
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
