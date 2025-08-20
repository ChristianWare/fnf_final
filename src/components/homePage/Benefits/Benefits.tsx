import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./Benefits.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Fast from "../../../../public/images/fast.png";
import Pricing from "../../../../public/images/pricing.png";
import Everything from "../../../../public/images/everything.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Fast and Reliable Delivery",
    desc: "We move at the speed of creativity — and caffeine. Your deadlines won't even see us coming.",
    src: Fast,
  },
  {
    id: 2,
    title: "Clear, No-Surprise Pricing",
    desc: "No hidden fees, no sneaky charges — just clear, honest pricing and work that makes you wonder.",
    src: Pricing,
  },
  {
    id: 3,
    title: "Everything, Under One Roof",
    desc: "Design? Branding? Websites? TikTok dances? (Okay, maybe not that last one... yet.)",
    src: Everything,
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
              {/* <p className={styles.desc}>{x.desc}</p> */}
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
