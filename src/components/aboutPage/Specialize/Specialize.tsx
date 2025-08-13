import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Specialize.module.css";
import { specialties } from "@/lib/data";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import Img1 from "../../../../public/images/specialize.png";

export default function Specialize() {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title="What's it like to work with us?"
                // color='white'
                // dotColor='pinkDot'
              />
            </div>
            <h2 className={styles.heading}>
              {/* Whether you run a one-chair salon, manage a fleet of luxury cars,
              or oversee a portfolio of vacation rentals, we build booking
              platforms tailored to your exact service model and growth stage. */}
              We put transparency and openness at the heart of all our
              processes. Our clients get full access to detailed reports, which
              allows them to track every step of the work and understand how
              projects are progressing.
            </h2>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Hero image'
                className={styles.img}
                fill
                priority
                quality={100}
              />{" "}
            </div>
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
