import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Qualities.module.css";
import { qualities } from "@/lib/data";
import Check from "@/components/icons/Check/Check";

export default function Qualities() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {qualities.map((quality) => (
            <div key={quality.id} className={styles.quality}>
              <h3 className={styles.title}>{quality.title}</h3>
              <ul className={styles.description}>
                {quality.details.map((detail) => (
                  <li key={detail.id} className={styles.detail}>
                    <Check />
                    {detail.detail}
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
