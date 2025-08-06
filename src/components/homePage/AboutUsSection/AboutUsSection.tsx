import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUsSection.module.css";
// import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";

export default function AboutUsSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {/* <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='About Us' dotColor='blueDot' />
          </div> */}
          <h2 className={styles.heading}>
            Fonts & Footers exists for{" "}
            <span className={styles.span}>owner-operated service brands</span>{" "}
            that live and die by bookings. Whether you run three chairs or
            thirty rentals, we build{" "}
            <span className={styles.span}> custom booking platforms</span> that
            charge deposits, sync calendars, and slash no-shows—
            <span className={styles.span}>
              no third-party licence fees, ever.
            </span>
          </h2>
          <div className={styles.btnContanierii}>
            <Button href='/about' btnType='blue' text='More About Us' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
