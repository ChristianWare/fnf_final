import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUsSection.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
// import Image from "next/image";
// import PuzzleImage from "../../../../public/images/puzzle.png";

export default function AboutUsSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='About Fonts & Footers' dotColor='blueDot' />
          </div>
          <h2 className={styles.heading}>
            We exists exclusively for{" "}
            <span className={styles.span}>small to mid-sized</span> businesses
            that sell physical products online. Whether you move five SKUs or
            five thousand, we concentrate on headless{" "}
            <span className={styles.span}>Shopify</span> and custom
            <span className={styles.span}> Next.js</span> storefronts that scale
            with you.
          </h2>
          {/* <div className={styles.imgContainer}>
            <Image
              src={PuzzleImage}
              fill
              alt=''
              title=''
              className={styles.img}
            />
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
}
