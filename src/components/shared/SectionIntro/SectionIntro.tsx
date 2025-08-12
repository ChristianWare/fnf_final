import styles from "./SectionIntro.module.css";
import Star from "@/components/icons/Star/Star";

interface Props {
  title: string;
}

export default function SectionIntro({ title }: Props) {
  return (
    <div className={styles.container}>
      <Star className={styles.icon} />
      <span className={styles.text}>
        <span className={styles.month}>{title}</span>
      </span>
    </div>
  );
}
