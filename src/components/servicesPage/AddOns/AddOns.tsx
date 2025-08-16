import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AddOns.module.css";
import Calendar from "@/components/icons/Calendar/Calendar";

const data = [
  {
    id: 1,
    title: "Local SEO Kit",
    desc: "Location pages, service schema, review sync",
  },
  {
    id: 2,
    title: "Ad-ready landing pages",
    desc: "PPC & social variants that convert",
  },
  {
    id: 3,
    title: "Integrations",
    desc: "Accounting/CRM/POS/Inventory",
  },
  {
    id: 4,
    title: "Content production",
    desc: "Copywriting, photo/video, branding refresh",
  },
  {
    id: 5,
    title: "Accessibility pass",
    desc: "WCAG-minded build & audit",
  },
  {
    id: 6,
    title: "Analytics setup",
    desc: "GA4, conversion tracking, custom dashboards",
  },
];

export default function AddOns() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Add-ons</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.mapDataBox}>
              {data.map((item) => (
                <div key={item.id} className={styles.card}>
                  <Calendar className={styles.icon} />
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
