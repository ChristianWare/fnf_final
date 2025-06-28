import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProjectSection.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import { projects } from "../../../../src/lib/data";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='our works' dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              Check out our{" "}
              <span className={styles.span}>successful projeccts</span> and case
              studies
            </h2>
          </div>
          <div className={styles.bottom}>
            {projects.map((x) => (
              <div className={styles.card} key={x.title}>
                <div className={styles.cardTop}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      fill
                      alt=''
                      title=''
                      className={styles.img}
                    />
                  </div>
                  <h3 className={styles.title}>{x.title}</h3>
                  <span className={styles.category}>Ecommerce</span>
                  <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus corporis veritatis ullam ipsa sequi delectus.
                  </p>
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.btnContanier}>
                    <Button href='/' btnType='white' text='Live Site' arrow />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btnContanierii}>
            <Button href='/' btnType='blue' text='See all projects' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
