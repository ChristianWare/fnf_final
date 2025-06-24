import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUsSection.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function AboutUsSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='Web Development Agency' dotColor='blueDot' />
          </div>
          <h2 className={styles.heading}>
            Fonts & Footers exists exclusively for small to mid-sized businesses
            that sell physical products online. Whether you move five SKUs or
            five thousand, we concentrate on headless Shopify and custom Next.js
            storefronts that scale with you.
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
