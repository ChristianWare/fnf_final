import styles from "./ServicesHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/bookingii.png";

export default function ServicesHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image src={Img1} alt='' title='' fill className={styles.img} />
          </div>
          <h1 className={styles.heading}>
            Booking platforms <br /> built to fill your calendar
          </h1>
        </div>
      </LayoutWrapper>
    </section>
  );
}
