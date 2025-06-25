/* eslint-disable @typescript-eslint/no-explicit-any */
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProblemSection.module.css";
import Image from "next/image";
import ProblemImage from "../../../../public/images/problem.png";

import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Corner from "@/components/shared/Corner/Corner";
import Outdated from "@/components/icons/Outdated/Outdated";
import CloudPrez from "@/components/icons/CloudPrez/CloudPrez";
import Credibility from "@/components/icons/Credibility/Credibility";
import Update from "@/components/icons/Update/Update";

const data = [
  {
    icon: <Outdated className={styles.icon} />,
    title: "Outdated Design",
    description:
      "Your website looks outdated or unprofessional, which doesn’t reflect the quality of your business.",
  },
  {
    icon: <CloudPrez className={styles.icon} />,
    title: "Missed Online Presence",
    description:
      "You’re missing out on reaching potential customers because they can’t find you online.",
  },
  {
    icon: <Credibility className={styles.icon} />,
    title: "Losing Credibility",
    description:
      "Not having a website can make your business appear less credible or outdated compared to competitors who have an online presence.",
  },
  {
    icon: <Update className={styles.icon} />,
    title: "Hard to Update or Manage",
    description:
      "Every small update requires technical assistance, and it’s holding back your business growth.",
  },
];

export default function ProblemSection() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.cornerContainer}>
          <Corner />
        </div>

        <div className={styles.sectionTop}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro
              title='Common Issues'
              color='white'
              dotColor='pinkDot'
            />
          </div>
          <h2 className={styles.heading}>
            Are you <span className={styles.span}> unhappy</span> with your
            current online store, or do you{" "}
            <span className={styles.span}>not have one at all?</span>
          </h2>
          <p className={styles.leftCopy}>
            This means solving strategic challenges like how to re-platform a
            technology stack, get data-driven insights from business
            intelligence or build a seamless digital experience across online
            and offline channels.{" "}
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={ProblemImage}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x: any, index) => (
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
