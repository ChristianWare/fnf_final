import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./HorizontalServices.module.css";
import { pricingData } from "@/lib/data";

export default function HorizontalServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {pricingData.map((x, index) => (
            <div className={styles.card} key={x.id}>
                <span className={styles.index}>0{index + 1}</span>
              <h3 className={styles.title}>{x.service}</h3>
              <span className={styles.headline}>{x.headline}</span>
              <ul className={styles.ServicesContainer}>
                {x.servicesInclude.map((y) => (
                  <li className={styles.item} key={y.id}>
                    {y.serviceName}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
