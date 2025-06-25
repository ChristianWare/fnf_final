import styles from "./Logo.module.css";
import Link from "next/link";

interface Props {
  size?: string;
  color?: string;
  backgroundColor?: string;
  title: string;
  direction?: string;
}

const Logo = ({
  size = "",
  color = "",
  title,
  backgroundColor = "",
  direction = "",
}: Props) => {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${styles[size]} ${styles[color]} ${styles[backgroundColor]} ${styles[direction]}`}
    >
      
      {title}
    </Link>
  );
};

export default Logo;
