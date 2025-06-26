import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Specialize.module.css";
import { specialties } from "@/lib/data";
import Corner from "@/components/shared/Corner/Corner";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function Specialize() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.cornerContainer}>
          <Corner backgroundColor='white' />
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='What we specialize in'
                // color='white'
                // dotColor='pinkDot'
              />
            </div>
            <h2 className={styles.heading}>
              Whether you&apos;re selling directly to consumers, building a B2B
              portal, or creating a multi-vendor marketplace, we have the
              expertise to build the perfect solution for your business model:
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.mapDataBox}>
              {specialties.slice(0, 4).map((x) => (
                <div className={styles.card} key={x.id}>
                  <span className={styles.blackDot} />
                  <div className={styles.cardLeft}>
                    <span className={styles.id}>0{x.id}.</span>
                  </div>
                  <div className={styles.cardRight}>
                    <h4 className={styles.feature}>{x.feature}</h4>
                    <p className={styles.desc}>{x.desc}</p>
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
