import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Reasons.module.css";
import { reasons } from "@/lib/data";

export default function Reasons() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Implementation Bonuses (included)</h2>
        <div className={styles.content}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.card}>
              <h3 className={styles.title}>{reason.title}</h3>
              <p className={styles.copy}>{reason.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
