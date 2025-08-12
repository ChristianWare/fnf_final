import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUsSection.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Check from "@/components/icons/Check/Check";

const data = [
  {
    id: 1,
    feature: "Salons and Wellness",
  },
  {
    id: 2,
    feature: "Luxury Transport",
  },
  {
    id: 3,
    feature: "Vacation-Rental",
  },
  {
    id: 4,
    feature: "Equipment Rentals",
  },
  {
    id: 5,
    feature: "Medical & Clinic",
  },
  {
    id: 6,
    feature: "Multi-Location Chains",
  },
  {
    id: 7,
    feature: "Membership & Recurring Services",
  },
];

export default function AboutUsSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='About Fonts & Footers' />
          </div>
          <h2 className={styles.heading}>
            {/* Fonts & Footers exists for{" "}
            <span className={styles.span}>owner-operated service brands</span>{" "}
            that live and die by bookings. Whether you run three chairs or
            thirty rentals, we build{" "}
            <span className={styles.span}> custom booking platforms</span> that
            charge deposits, sync calendars, and slash no-shows—
            <span className={styles.span}>
              no third-party licence fees, ever.
            </span> */}
            Fonts & Footers is a specialist studio focused on one thing:{" "}
            <span className={styles.span}>
              turning visitors into booked appointments.
            </span>{" "}
            We bring fresh ideas and a proven approach to building custom
            booking platforms for salons, clinics, rentals, and transport —{" "}
            <span className={styles.span}>
              designed to launch quickly and convert reliably.
            </span>
          </h2>
          <div className={styles.bottom}>
            <h3 className={styles.headingii}>Industries we work with:</h3>{" "}
            <div className={styles.mapDataBox}>
              {data.map((x) => (
                <div className={styles.card} key={x.id}>
                  <p className={styles.feature}>{x.feature}</p>
                </div>
              ))}
            </div>
            <div className={styles.mapDataBoxii}>
              {data.map((x) => (
                <div className={styles.cardii} key={x.id}>
                  <Check className={styles.icon} />
                  <p className={styles.featureii}>{x.feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
