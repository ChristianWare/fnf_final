import Button from "@/components/shared/Button/Button";
import styles from "./ServicesHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Nav from "@/components/shared/Nav/Nav";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function ServicesHero() {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Nav color='black' hamburgerColor='hamburgerBlack' />
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntro title='Our Core offering' />
          <h1 className={styles.heading}>
            Done-for-you booking website <br />
            <span className={styles.span}> design & development</span>
          </h1>
          <p className={styles.copy}>
            Conversion-first UX, speed, and automation—so your team spends less
            time scheduling and more time serving.
          </p>
          <div className={styles.btnContainer}>
            <Button
              btnType='black'
              text='Book your discovery Call'
              href='/'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
