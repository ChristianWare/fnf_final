import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./HorizontalServices.module.css";
import { pricingData } from "@/lib/data";
// import Image from "next/image";

export default function HorizontalServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {pricingData.map((x) => (
            <div className={styles.card} key={x.id} id={x.service.toLowerCase().replace(/\s+/g, "-")}>
              <div className={styles.cardTop}>
                <h3 className={styles.serviceNameHeading}>{x.service}</h3>
                <h3 className={styles.serviceNameHeading}>{x.price}</h3>
                <span className={styles.headline}>{x.desc}</span>
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
                <div className={styles.addonSection}>
                  <div className={styles.addonSectionTop}>
                    <h3 className={styles.addonsHeading}>
                      Expansion blocks and price add-ons
                    </h3>
                  </div>
                  <div className={styles.addonSectionBottom}>
                    <div className={styles.addonSectionTableHeadings}>
                      <h4 className={styles.title}>Expansion Block</h4>
                      <h4 className={styles.title}>When it Triggers</h4>
                      <h4 className={styles.title}>Add-on fee (USD)</h4>
                    </div>
                    <div className={styles.mapData}>
                      {x.addonSectionData.map((x) => (
                        <div
                          key={x.id}
                          className={styles.addonSectionBottomContainer}
                        >
                          {" "}
                          <div>
                            <h4 className={styles.titleMobile}>
                              Expansion Block:
                            </h4>
                            <h5 className={styles.titleii}>
                              {x.expansionblock}
                            </h5>
                          </div>
                          <div>
                            <h4 className={styles.titleMobile}>
                              When it Triggers:
                            </h4>
                            <p className={styles.info}>{x.details}</p>
                          </div>
                          <div>
                            <h4 className={styles.titleMobile}>
                              Add-on fee (USD):
                            </h4>
                            <p className={styles.info}>{x.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
