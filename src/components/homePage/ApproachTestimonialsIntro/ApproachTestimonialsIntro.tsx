import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ApproachTestimonialsIntro.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Arrow from "@/components/icons/Arrow/Arrow";

export default function ApproachTestimonialsIntro() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h2 className={styles.heading}>Approach &amp; Testimonials</h2>
          </div>
          <div className={styles.topRight}>
            <div className={styles.subheading}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              odit perspiciatis ex vero, unde consequatur adipisci dolore qui
              architecto reprehenderit dolorem voluptates, asperiores deserunt,
              nulla voluptas pariatur dolores. Nostrum dolore qui error repellat
              excepturi. Itaque ipsam similique eius praesentium vero quisquam
              veniam delectus, nulla officia consequuntur perferendis, deserunt
              obcaecati sit?
            </div>
            <p className={styles.subHeadingCopy}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              eveniet veniam officia labore, doloremque doloribus earum? Ipsum,
              eos! Ex iusto iste eligendi voluptatum ipsa culpa unde enim vero,
              tempore nobis ut quo omnis, ab tempora!{" "}
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro title='Approach' />
            <h4 className={styles.headingii}>What sets us apart</h4>
            <Arrow className={styles.arrow} />
          </div>
          <div className={styles.right}>
            <SectionIntro title='Services' />
            <h4 className={styles.headingii}>What our clients say</h4>
            <Arrow className={styles.arrow} />
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
