import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./Benefits.module.css";
import Arrow from "@/components/icons/Arrow/Arrow";

const data = [
  {
    id: 1,
    title: "Tailored Design",
    desc: "Every pixel is crafted around your brand and products, not crammed into a generic theme, so shoppers feel they’re on a store made just for them.",
    bgColor: "blue",
  },
  {
    id: 2,
    title: "Smooth Interactions",
    desc: "Subtle animations and intuitive transitions guide visitors naturally from discovery to checkout, boosting engagement and sales.",
    bgColor: "yellow",
  },
  {
    id: 3,
    title: "Future-Proof Flexibility",
    desc: "A clean, modular architecture lets you add features or integrations later without costly rebuilds or platform limitations.",
    bgColor: "purple",
  },
  {
    id: 5,
    title: "Lightning-Fast Performance",
    desc: "Hand-written code removes unnecessary bloat, letting pages load in under a second and keeping potential buyers from bouncing away.",
    bgColor: "green",
  },
];

export default function Benefits() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionHeadingContainer}>
        <SectionIntro title='Benefits' dotColor='blueDot' />
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
