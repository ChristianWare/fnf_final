import styles from "./ServicesSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { pricingData } from "@/lib/data";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.sectionHeadingContainer}>
                <SectionIntro title='Services' dotColor='blueDot' />
              </div>
            </div>
            <div className={styles.bottom}>
              {pricingData.slice(0, 4).map((x) => {
                const slug = x.service.toLowerCase().replace(/\s+/g, "-");
                return (
                  <div className={styles.card} key={x.id}>
                    <h3 className={styles.title}>{x.service}</h3>
                    <span className={styles.headline}>{x.headline}</span>
                    <ul className={styles.ServicesContainer}>
                      {x.servicesInclude.map((y) => (
                        <li className={styles.item} key={y.id}>
                          {y.serviceName}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.btnContainer}>
                      <Button
                        href={`/services#${slug}`}
                        btnType='white'
                        text='More Details'
                        arrow
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.btnContainerii}>
              <Button href='/services' btnType='blue' text='See all Services' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
