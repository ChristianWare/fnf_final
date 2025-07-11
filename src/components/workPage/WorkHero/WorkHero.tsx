import Nav from "@/components/shared/Nav/Nav";
import styles from "./WorkHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

export default function WorkHero() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span className={styles.span}>Our Work</span> <br /> speaks for
            itself
          </h1>
          <p className={styles.copy}>
            Explore our portfolio of successful booking projects across
            various industries and business models.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
