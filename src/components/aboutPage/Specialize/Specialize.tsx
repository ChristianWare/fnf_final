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
              Whether you run a one-chair salon, manage a fleet of luxury cars,
              or oversee a portfolio of vacation rentals, we build booking
              platforms tailored to your exact service model and growth stage.
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.mapDataBox}>
              {specialties.map((x) => (
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
