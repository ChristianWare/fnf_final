import LayoutWrapper from '@/components/shared/LayoutWrapper'
import styles from './ProjectSection.module.css'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro';

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='About Fonts & Footers' dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              Fonts & Footers exists exclusively for{" "}
              <span className={styles.span}>small to mid-sized</span> businesses
              that sell physical products online. Whether you move five SKUs or
              five thousand, we concentrate on headless{" "}
              <span className={styles.span}>Shopify</span> and custom
              <span className={styles.span}> Next.js</span> storefronts that
              scale with you.
            </h2>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}