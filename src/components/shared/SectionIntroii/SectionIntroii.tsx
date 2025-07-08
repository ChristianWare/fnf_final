"use client";

import styles from "./SectionIntroii.module.css";
import Star from "@/components/icons/Star/Star";

function getCurrentMonth(locale: string = navigator.language): string {
  return new Date().toLocaleString(locale, { month: "long" });
}

export default function SectionIntroii() {
  const currentMonth = getCurrentMonth();

  return (
    <section className={styles.container}>
      <Star className={styles.icon} />
      <span className={styles.text}>
        We&apos;re taking new Projects for{" "}
        <span className={styles.month}>{currentMonth}</span>
      </span>
    </section>
  );
}
