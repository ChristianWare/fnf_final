import Nav from "@/components/shared/Nav/Nav";
import styles from "./WorkPageIntro.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

export default function WorkPageIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav color='black' hamburgerColor='hamburgerBlack' />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Our work <br />{" "}
              <span className={styles.span}>speaks for itself</span>
            </h1>
            <p className={styles.copy}>
              Have a question, need a quote, or just curious whether a custom
              booking platform is right for you? Drop a line below—no strings
              attached. We reply within one business day.
            </p>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div> */}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
