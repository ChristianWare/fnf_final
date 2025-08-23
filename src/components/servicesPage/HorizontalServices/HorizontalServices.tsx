import styles from "./HorizontalServices.module.css";
import { pricingData } from "@/lib/data";
import Button from "@/components/shared/Button/Button";

export default function HorizontalServices() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          {pricingData.slice(0, 3).map((x) => (
            <div
              className={styles.card}
              key={x.id}
              id={x.service.toLowerCase().replace(/\s+/g, "-")}
            >
              <div className={styles.cardTop}>
                <h3 className={styles.serviceNameHeading}>{x.service}</h3>
                <h3 className={styles.price}>{x.price}</h3>
                <span className={styles.headline}>{x.desc}</span>
              </div>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardTop}>
                  {x.servicesInclude.map((y) => (
                    <div key={y.serviceName} className={styles.box}>
                      {/* <Check className={styles.icon} /> */}
                      <h4 className={styles.serviceName}>{y.serviceName}</h4>
                    </div>
                  ))}
                </div>

                <div className={styles.btnContainer}>
                  <Button
                    href={`/services/#${x.service.toLowerCase().replace(/\s+/g, "-")}`}
                    btnType='blackii'
                    text='More Details'
                    arrow
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
