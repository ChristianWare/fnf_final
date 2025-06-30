import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./EveryPlan.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Phone from "@/components/icons/Phone/Phone";
import Analytics from "@/components/icons/Analytics/Analytics";
import Seo from "@/components/icons/Seo/Seo";
import Design from "@/components/icons/Design/Design";
import Payment from "@/components/icons/Payment/Payment";
import Integration from "@/components/icons/Integration/Integration";
import Support from "@/components/icons/Support/Support";

const data = [
  {
    icon: <Phone className={styles.icon} />,
    id: 1,
    title: "Mobile-first responsive design",
    description:
      "Every page adapts fluidly to phones, tablets, and desktops, ensuring faster mobile checkout and higher Google ranking.",
  },
  {
    icon: <Analytics className={styles.icon} />,
    id: 2,
    title: "Performance & Core Web Vitals",
    description:
      "Code and image pipelines tuned for sub-1.5 s Largest Contentful Paint and >90 Lighthouse scores out of the box.",
  },
  {
    icon: <Seo className={styles.icon} />,
    id: 3,
    title: "SEO & schema foundations",
    description:
      "Clean URL structure, JSON-LD product or service schema, and meta-tag automation so search engines understand and index your site from day one.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <Design className={styles.icon} />,
    id: 4,
    title: "Accessible UI components",
    description:
      "WCAG-compliant colour contrast, keyboard navigation, and ARIA labels so every customer can shop or book with ease.",
  },
  {
    icon: <Payment className={styles.icon} />,
    id: 5,
    title: "Secure payment & data hygiene",
    description:
      "PCI-compliant Stripe or Shopify Payments integration, HTTPS everywhere, and GDPR-ready consent banners.",
  },
  {
    icon: <Integration className={styles.icon} />,
    id: 6,
    title: "Self-serve content manager",
    description:
      "Headless CMS or Shopify metafields that let your team edit copy, images, and pricing without touching code.",
  },
  {
    icon: <Support className={styles.icon} />,
    id: 7,
    title: "Launch training & 14-day support",
    description:
      "Recorded walk-through, step-by-step manuals, and two weeks of bug-fix coverage to keep your go-live stress-free.",
  },
];

export default function EveryPlan() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title="What's included" dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              <span className={styles.span}>Every Fonts & Footers build</span> —
              be it a salon scheduler, a luxury-car reservation system, or a
              multi-property rental hub —{" "}
              <span className={styles.span}>
                ships with this same quality baseline.
              </span>{" "}
              That means you don&#39;t pay extra for fundamentals like mobile
              speed, security, accessibility, or search visibility; they&#39;re{" "}
              <span className={styles.span}>woven into each project.</span>
            </h2>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div className={styles.card} key={index}>
                {x.icon}
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
