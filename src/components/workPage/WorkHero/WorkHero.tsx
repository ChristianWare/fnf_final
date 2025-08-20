import ProjectSection from "@/components/homePage/ProjectSection/ProjectSection";
import styles from "./WorkHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";


export default function WorkHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {/* <div className={styles.imgContainer}>
            <Image src={Img1} fill alt='' title='' className={styles.img} />
          </div> */}
          {/* <SectionIntro title='Featured Projects' /> */}
          {/* <h2 className={styles.heading}>
            <span className={styles.span}>Our Work</span> <br /> speaks for
            itself
          </h2>
          <p className={styles.copy}>
            Explore our portfolio of successful booking projects across various
            industries and business models.
          </p> */}
          <ProjectSection />
        </div>
        {/* <div className={styles.btnContainer}>
          <Button btnType='blue' text='View All Case Studies' href='/work' arrow />
        </div> */}
      </LayoutWrapper>
    </section>
  );
}
