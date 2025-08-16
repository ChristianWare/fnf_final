import styles from "./Logo.module.css";
import Link from "next/link";
import Calendar from "@/components/icons/Calendar/Calendar";

interface Props {
  size?: string;
  color?: string;
  backgroundColor?: string;
  direction?: string;
}

const Logo = ({
  size = "",
  color = "",
  backgroundColor = "",
  direction = "",
}: Props) => {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${styles[size]} ${styles[color]} ${styles[backgroundColor]} ${styles[direction]}`}
    >
      {/* <div className={styles.imgContainer}>
        <Image
          src={Img1}
          fill
          alt=''
          title=''
          className={styles.img}
          priority={true}
        />
      </div> */}
      <div className={styles.titleContainer}>
        <Calendar className={styles.icon} /> Fonts & Footers
      </div>
    </Link>
  );
};

export default Logo;
