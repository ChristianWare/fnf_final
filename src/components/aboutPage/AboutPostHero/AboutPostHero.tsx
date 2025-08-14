import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPostHero.module.css";

export default function AboutPostHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2>About Us</h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
