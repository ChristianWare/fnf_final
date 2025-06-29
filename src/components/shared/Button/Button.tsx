import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import Arrow from "@/components/icons/Arrow/Arrow";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  disabled?: boolean;
  children?: ReactNode;
  arrow?: boolean;
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  disabled,
  children,
  arrow,
}: Props) {
  const content = text || children;

  return (
    <button className={styles.container} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {content}
        {arrow && <Arrow className={styles.arrow} />}
      </Link>
    </button>
  );
}
