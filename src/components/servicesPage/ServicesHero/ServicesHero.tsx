import styles from "./ServicesHero.module.css";
import Nav from "@/components/shared/Nav/Nav";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

export default function ServicesHero() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav color='black' hamburgerColor='hamburgerBlack' />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            E-Commerce <span className={styles.span}>Services</span> <br />{" "}
            Built for Growth
          </h1>
        </div>
      </LayoutWrapper>
    </section>
  );
}
