import styles from "./ApproachTestimonialsIntro.module.css";
// import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
// import Arrow from "@/components/icons/Arrow/Arrow";

export default function ApproachTestimonialsIntro() {
  return (
    <div className={styles.container}>
      <div className={styles.topRight}>
        <div className={styles.subheading}>
          We build direct-booking websites for service businesses—fast, branded,
          and conversion-first. One-screen flows (service → pro → time → pay),
          deposit checkout, and automated SMS/email reminders make scheduling
          effortless and cut no-shows. Launch in 3–5 weeks with a single point
          of contact.
        </div>
        <p className={styles.subHeadingCopy}>
          Our playbook is simple: discover goals, map the fastest path to a
          confirmed booking, write clear policy copy, and remove every extra
          field. Then we build, QA, and optimize for 30 days. You keep the
          relationship and the data—so your calendar and margins grow.
        </p>
      </div>
    </div>
  );
}
