import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Features.module.css";
import Integration from "@/components/icons/Integration/Integration";
import Design from "@/components/icons/Design/Design";
import Seo from "@/components/icons/Seo/Seo";
import Analytics from "@/components/icons/Analytics/Analytics";
import Multiple from "@/components/icons/Multiple/Multiple";
import Hosting from "@/components/icons/Hosting/Hosting";
import Edit from "@/components/icons/Edit/Edit";
import Clock from "@/components/icons/Clock/Clock";
import Listing from "@/components/icons/Listing/Listing";
import Payment from "@/components/icons/Payment/Payment";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
// import ReviewSection from "../ReviewSection/ReviewSection";

const ecommerceFeatures = [
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <Design className={styles.icon} />,
    title: "One-screen booking flow",
    description: "Service → pro → time → pay, all in a single, seamless flow.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <Payment className={styles.icon} />,
    title: "Deposits & split payments with Stripe",
    description:
      "Secure payments, deposits, and split charges via Stripe integration.",
  },
  {
    icon: <Clock className={styles.icon} />,
    title: "Automated SMS/email reminders + no-show policies",
    description:
      "Reduce no-shows with automated reminders and enforceable policies.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <Integration className={styles.icon} />,
    title: "Real-time calendar sync",
    description: "Sync bookings with Google, Microsoft 365, or PMS calendars.",
  },
  {
    icon: <Multiple className={styles.icon} />,
    title: "Multi-staff & resource management",
    description: "Manage teams, resources, and staff schedules with ease.",
  },
  {
    icon: <Hosting className={styles.icon} />,
    title: "Multi-location ready with central admin",
    description: "Operate multiple locations from a single, unified backend.",
  },
  {
    icon: <Seo className={styles.icon} />,
    title: "Dynamic pricing rules and add-ons",
    description:
      "Automate pricing and offer add-ons based on demand or season.",
  },
  {
    icon: <Listing className={styles.icon} />,
    title: "Reviews & UGC collection built in",
    description:
      "Collect guest reviews and user-generated content automatically.",
  },
  {
    icon: <Analytics className={styles.icon} />,
    title: "Analytics dashboards & SEO schema",
    description:
      "Track performance and boost visibility with built-in analytics and SEO.",
  },
  {
    icon: <Edit className={styles.icon} />,
    title: "Included revision rounds during build",
    description:
      "Request changes and refinements during your site build—no extra cost.",
  },
];

export default function Features() {
  return (
    <LayoutWrapper>
      <section className={styles.container} id='features'>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='Features' />
          </div>
          <h2 className={styles.heading}>
            {" "}
            <span className={styles.span}>Features</span> of our booking
            websites
          </h2>
          {/* <span className={styles.span}>
            Everything you need to fill calendars and cut no-shows
          </span> */}
          <p className={styles.copy}>
            Fonts & Footers delivers a fully custom booking solution—so you
            spend less time scheduling and more time serving.
          </p>
        </div>

        <div className={styles.parent}>
          <div className={styles.dataContainer}>
            {ecommerceFeatures.map((x, index) => (
              <div key={index} className={styles.content}>
                <div className={styles.left}>
                  <div className={styles.iconContainer}>{x.icon}</div>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <ReviewSection /> */}
      </section>
    </LayoutWrapper>
  );
}
