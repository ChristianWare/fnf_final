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
    icon: <Integration className={styles.icon} />,
    title: "Real-Time Calendar Sync",
    description:
      "Two-way link with Google, iCal, or Microsoft 365 keeps every slot updated and double-bookings impossible.",
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
    title: "Mobile-First Booking Screen",
    description:
      "Date, service, and payment in one scroll so guests finish in under 60 seconds, even on 4-inch phones.",
  },
  {
    icon: <Seo className={styles.icon} />,
    title: "Dynamic Pricing Rules",
    description:
      "Automated yield management raises or lowers prices based on demand and seasonality.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <Analytics className={styles.icon} />,
    title: "Live Utilisation Dashboard",
    description:
      "See booking-conversion rate, repeat-guest % and revenue per slot in real time.",
  },
  {
    icon: <Multiple className={styles.icon} />,
    title: "Multi-Staff & Resource Management",
    description:
      "Colour-coded calendars for teams up to 15; staff can set their own hours and services.",
  },
  {
    icon: <Payment className={styles.icon} />,
    title: "Deposits & Split Payments",
    description:
      "Stripe gateway stores cards on file, charges non-refundable deposits, and auto-retries failed payments.",
  },
  {
    icon: <Hosting className={styles.icon} />,
    title: "Multi-Location Ready",
    description:
      "Branch selector, per-location pricing, and local tax settings—managed from a single backend.",
  },
  {
    icon: <Edit className={styles.icon} />,
    title: "Unlimited Edits",
    description:
      "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
  },
  {
    icon: <Clock className={styles.icon} />,
    title: "Automated Reminders",
    description:
      "SMS and email nudges 24 h and 2 h before service cut no-shows by up to 40 %.",
  },
  {
    icon: <Listing className={styles.icon} />,
    title: "No-Show Protection",
    description:
      "Late-cancel windows and automatic fee capture guard revenue while staying transparent to guests.",
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
            Fonts&nbsp;&amp;&nbsp;Footers delivers a fully custom booking
            solution—handling scheduling, deposits, reminders, and real-time
            calendar sync—so you can focus on service, not back-and-forth
            messages.
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
