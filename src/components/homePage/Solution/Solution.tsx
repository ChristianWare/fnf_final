import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Solution.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import SolutionImage from "../../../../public/images/solution.png";
import Arrow from "@/components/icons/Arrow/Arrow";

// const data = [
//   {
//     id: 1,
//     title: "Inspiring Design",
//     desc: "The design of your website inspires and you stay in the minds of your customers.",
//     solutions: [
//       {
//         id: 1,
//         solution:
//           "Consistent brand colors, typography, and imagery create an instantly recognizable storefront that stands out in crowded marketplaces.",
//       },
//       {
//         id: 2,
//         solution:
//           "Mobile-first layouts and optimized assets cut load times and bounce rates, keeping shoppers engaged from the first second.",
//       },
//       {
//         id: 3,
//         solution:
//           "Conversion-driven UI patterns—clear calls-to-action, persuasive micro-copy, and strategic use of white space—guide visitors smoothly to checkout.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Professional Identity",
//     desc: "You will be perceived by your visitors as trustworthy and professional.",
//     solutions: [
//       {
//         id: 1,
//         solution:
//           "SSL certificates, PCI-compliant payment gateways, and visible security seals give risk-averse shoppers immediate confidence.",
//       },
//       {
//         id: 2,
//         solution:
//           "Automated testimonial and review widgets surface real customer experiences, building social proof without manual effort.",
//       },
//       {
//         id: 3,
//         solution:
//           "A cohesive style guide ensures every page, email, and ad aligns with your brand voice—no more mismatched visuals or messaging.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Authentic Appearance",
//     desc: "You can identify with your website and are happy to share the link with potential customers.",
//     solutions: [
//       {
//         id: 1,
//         solution:
//           "Custom photography, video, and iconography replace generic stock imagery, giving your store a one-of-a-kind look.",
//       },
//       {
//         id: 2,
//         solution:
//           "Story-driven product pages connect your brand mission to every SKU, turning casual browsers into loyal advocates.",
//       },
//       {
//         id: 3,
//         solution:
//           "Localized content and personalized recommendations help international visitors feel understood and valued.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Stress-Free Management",
//     desc: "Change or expand your content effortlessly, without technical know-how.",
//     solutions: [
//       {
//         id: 1,
//         solution:
//           "Drag-and-drop CMS blocks let you launch promotions or swap banners in minutes—no developer tickets required.",
//       },
//       {
//         id: 2,
//         solution:
//           "Real-time inventory sync with Shopify prevents overselling and eliminates tedious manual stock updates.",
//       },
//       {
//         id: 3,
//         solution:
//           "Role-based dashboards and intuitive workflows shorten onboarding time for new team members and reduce costly mistakes.",
//       },
//     ],
//   },
// ];

const data = [
  {
    id: 1,

    title: "A. Home Page",
    desc: "Engage your audience with visually stunning designs that reflect your brand and captivate customers.",
  },
  {
    id: 2,

    title: "B. Cart Modal",
    desc: "Leverage insights to optimize your store for better user experiences and higher conversions.",
  },
  {
    id: 3,

    title: "C. About Page",
    desc: "Guide visitors effortlessly from discovery to checkout with a streamlined shopping experience.",
  },
  {
    id: 4,
    title: "D. FAQ's",
    desc: "Stay ahead with fast, secure, and scalable solutions tailored to your e-commerce needs.",
  },
  {
    id: 5,
    title: "E. Shop Page",
    desc: "Create a memorable connection with your audience by showcasing what makes your brand unique.",
  },
  {
    id: 6,
    title: "F. Footer",
    desc: "Drive results with strategies designed to turn casual visitors into loyal customers.",
  },
];

export default function Solution() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='Our Solutions' dotColor='blueDot' />
            </div>
            <h2 className={styles.heading}>
              Work with <span className={styles.span}>Fonts & Footers</span> and
              we&lsquo;ll provide these{" "}
              <span className={styles.span}> solutions</span> for your ecommerce
              store:
            </h2>
            <div className={styles.imgContainer}>
              <Image
                src={SolutionImage}
                fill
                alt=''
                title=''
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((item) => (
              <div key={item.id} className={styles.card}>
                <h3
                  className={styles.title}
                >
                  {item.title}
                </h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
