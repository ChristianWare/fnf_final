import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "@/components/shared/Button/Button";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              We build <span className={styles.span}>blazing fast</span> <br /> online
              stores
            </h1>
            <p className={styles.copy}>
              Fonts & Footers builds lightning-fast, revenue-driven online
              stores for small and medium-sized brands.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='white' text='Submit a request' />
            </div>
          </div>
          <div className={styles.right}>Right Stuff here</div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
