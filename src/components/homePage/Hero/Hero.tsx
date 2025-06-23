import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h1 className={styles.heading}>We build interactive and immersive ecommerce websites</h1>
      </LayoutWrapper>
    </section>
  );
}
