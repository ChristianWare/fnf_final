import styles from "./ServicesSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { pricingData } from "@/lib/data";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import Happy from "../../../../public/images/fast.png";

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.sectionHeadingContainer}>
                <SectionIntro title='Values' />
              </div>
            </div>
            <div className={styles.bottom}>
              {pricingData.slice(0, 4).map((x) => {
                return (
                  <div className={styles.card} key={x.id}>
                    <h3 className={styles.title}>{x.service}</h3>
                    <div className={styles.imgContainer}>
                      <Image
                        src={Happy}
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
