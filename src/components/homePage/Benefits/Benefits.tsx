import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./Benefits.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Fast from "../../../../public/images/fast.png";
import Pricing from "../../../../public/images/pricing.png";
import Everything from "../../../../public/images/everything.png";
import Person from "../../../../public/images/person.png";
import Goal from "../../../../public/images/goal.png";
import Updates from "../../../../public/images/updates.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Fast and Reliable Delivery",
    src: Fast,
  },
  {
    id: 2,
    title: "Clear, No-Surprise Pricing",
    src: Pricing,
  },
  {
    id: 3,
    title: "Everything, Under One Roof",
    src: Everything,
  },
  {
    id: 4,
    title: "Fixed Milestone for Progress",
    src: Goal,
  },
  {
    id: 5,
    title: "Daily/Weekly Updates",
    src: Updates,
  },
  {
    id: 6,
    title: "Single Point of Contact",
    src: Person,
  },
];

export default function Benefits() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.sectionHeadingContainer}>
          <SectionIntro title='Benefits' />
        </div>
        <h2 className={styles.heading}>
          Why work with <br />
          Fonts & Footers?
        </h2>
        <div className={styles.content}>
          {data.map((x) => (
            <div className={styles.card} key={x.id}>
              <div className={styles.imgContainer}>
                <Image
                  src={x.src}
                  alt={x.title}
                  title={x.title}
                  fill
                  className={styles.img}
                />
              </div>
              <h3 className={styles.title}>{x.title}</h3>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
