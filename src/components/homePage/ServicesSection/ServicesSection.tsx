import styles from "./ServicesSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Person from "../../../../public/images/person.png";
import Goal from "../../../../public/images/goal.png";
import Updates from "../../../../public/images/updates.png";

const data = [
  {
    id: 1,
    title: "Fixed milestones",
    src: Goal,
  },
  {
    id: 2,
    title: "Weekly updates",
    src: Updates,
  },
  {
    id: 3,
    title: "Single point of contact",
    src: Person,
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <span className={styles.subHeading}>How we deliver</span>
              <h2 className={styles.heading}>Implementation</h2>
              <p className={styles.copy}>
                We scope in a week, launch in 3–5 weeks. Fixed milestones,
                weekly updates, and a single point of contact.
              </p>
            </div>
            <div className={styles.bottom}>
              {data.slice(0, 4).map((x) => {
                return (
                  <div className={styles.card} key={x.id}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <div className={styles.imgContainer}>
                      <Image
                        src={x.src}
                        alt='Happy illustration'
                        fill
                        className={styles.img}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
