import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Benefitsii.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

const data = [
  {
    id: 1,
    title: "Fast and Reliable Delivery of Services",
    Description: "We ensure your projects are delivered on time, every time.",
  },
  {
    id: 2,
    title: "Clear, No-Surprise Competetive Pricing",
    Description: "Our pricing model is transparent and straightforward.",
  },
  {
    id: 3,
    title: "Everything Under One Roof",
    Description:
      "We provide a comprehensive suite of services to meet all your needs.",
  },
  {
    id: 4,
    title: "Fixed Milestone for Progress",
    Description:
      "We establish clear milestones to track progress and ensure accountability.",
  },
];

export default function Benefitsii() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.inner}>
          <div className={styles.top}>
            <SectionIntro title='Benefits' />
            <h2 className={styles.heading}>
              Why work with <br />
              <span className={styles.span}>Fonts & Footers?</span>
            </h2>
            <p className={styles.copy}>
              Partnering with Fonts & Footers means gaining a dedicated team
              focused on delivering quality, transparency, and
              efficiency—helping your business achieve its goals with confidence
              and ease.
            </p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.mapBox}>
              {data.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.desc}>{item.Description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
