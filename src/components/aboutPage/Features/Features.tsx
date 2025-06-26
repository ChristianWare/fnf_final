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
import Corner from "@/components/shared/Corner/Corner";

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
    title: "Platform Selection & Consultation",
    description:
      "We integrate with leading e-commerce platforms like Shopify, WooCommerce, and Magento, ensuring your online store has the functionality and flexibility required to succeed in a competitive market.",
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
    title: "Custom UI/UX Design",
    description:
      "We offer bespoke design services that reflect your brand’s identity and provide an engaging user experience.",
  },
  {
    icon: <Seo className={styles.icon} />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Our websites are built with SEO best practices to ensure that your business ranks well in search engine results.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <Analytics className={styles.icon} />,
    title: "Performance Optimization & Security",
    description:
      "We provide comprehensive analytics and reporting to help you understand your e-commerce performance.",
  },
  {
    icon: <Multiple className={styles.icon} />,
    title: "Store Setup & Product Management",
    description:
      "Our e-commerce platforms enable efficient management of multiple products.",
  },

  {
    icon: <Payment className={styles.icon} />,
    title: "Payment Gateway & Third-Party Integrations",
    description:
      "Integrating Stripe as your payment gateway ensures secure transactions and supports multiple payment methods.",
  },

  {
    icon: <Hosting className={styles.icon} />,
    title: "Hosting",
    description:
      "We use CDN's, or content delivery networks, to speed up the delivery of web content by bringing it closer to where users are.",
  },

  {
    icon: <Edit className={styles.icon} />,
    title: "Unlimited Edits",
    description:
      "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
  },
  {
    icon: <Clock className={styles.icon} />,
    title: "Ongoing Maintenance & Support",
    description:
      "If you ever need to reach out to us for any reason, call us! We're here and ready to help.",
  },
  {
    icon: <Listing className={styles.icon} />,
    title: "Citations & Listings",
    description:
      "A listing on Google appears when potential customers are searching for your business name or a service you offer. We set this up for you.",
  },
];

export default function Features() {
  return (
    <LayoutWrapper>
      <div className={styles.top}>
        <h2 className={styles.heading}>
          Features of our <br /> E-commerce Websites: <br />
        </h2>
        <span className={styles.span}>
          Everything you need to launch, scale, and succeed online
        </span>{" "}
        <p className={styles.copy}>
          We offer a comprehensive e-commerce development service designed to
          cover every aspect of building and managing an online store:
        </p>
      </div>
      <section className={styles.container} id='features'>
        <div className={styles.cornerContainer}>
          <Corner />
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
      </section>
    </LayoutWrapper>
  );
}
