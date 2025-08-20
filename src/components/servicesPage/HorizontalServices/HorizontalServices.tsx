// import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./HorizontalServices.module.css";
import { pricingData } from "@/lib/data";
import Check from "@/components/icons/Check/Check";
import Button from "@/components/shared/Button/Button";
// import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function HorizontalServices() {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.content}>
        <div className={styles.left}>
          {/* <SectionIntro title='Pricing Plans' />
            <h2 className={styles.heading}>Packages</h2>
            <p className={styles.copy}>
              Transparent pricing for any stage of your business. We offer
              flexible packages tailored to your needs. No hidden fees. No long
              term contracts.
            </p> */}
        </div>
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
                      <Check className={styles.icon} />
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
        {/* <div className={styles.btnContainerii}>
            <Button
              href='/services'
              btnType='blue'
              text='See all plans and services'
              arrow
            />
          </div> */}
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
}
