import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./HorizontalServices.module.css";
import { pricingData } from "@/lib/data";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";

export default function HorizontalServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {pricingData.map((x, index) => (
            <div className={styles.card} key={x.id}>
              <div className={styles.cardTop}>
                <span className={styles.index}>0{index + 1}.</span>
                <h3 className={styles.title}>{x.service}</h3>
                <span className={styles.headline}>{x.desc}</span>
                <div className={styles.imgContainer}>
                  <Image src={x.src} fill alt='' title='' className={styles.img} />
                </div>
              </div>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardTop}>
                  {x.servicesInclude.map((y) => (
                    <div key={y.serviceName}>
                      <h4 className={styles.serviceName}>{y.serviceName}</h4>
                      <p
                        className={styles.descriptionMobile}
                        key={y.description}
                      >
                        {y.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles.servicesCardBottom}>
                  {x.servicesInclude.map((z) => (
                    <p className={styles.description} key={z.description}>
                      {z.description}
                    </p>
                  ))}
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  href='/'
                  btnType='blackOutline'
                  text='More Details'
                  arrow
                />
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
