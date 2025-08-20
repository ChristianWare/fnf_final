import styles from "./Logo.module.css";
import Link from "next/link";
// import Calendar from "@/components/icons/Calendar/Calendar";
import Image from "next/image";
import Img1 from "../../../../public/images/smileii.png";

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
      <Image src={Img1} alt='' title='' className={styles.img} />
      {/* <Calendar className={styles.icon} /> */}
      <span className={styles.text}>Fonts & Footers</span>
    </Link>
  );
};

export default Logo;
