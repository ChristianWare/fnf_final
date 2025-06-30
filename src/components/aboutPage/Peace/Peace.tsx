import styles from "./Peace.module.css";
import Clock from "@/components/icons/Clock/Clock";
import Payment from "@/components/icons/Payment/Payment";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/peace.png";
import Support from "@/components/icons/Support/Support";

const data = [
  {
    icon: <Payment width={75} height={75} className={styles.icon} />,
    feature: "Transparent Pricing",
    desc: "Flat build fee plus clearly tiered add-ons; no licence surprises",
  },
  {
    icon: <Clock width={75} height={75} className={styles.icon} />,
    feature: "Four-week launch guarantee",
    desc: "Go live fast and start recapturing lost bookings",
  },
  {
    icon: <Support width={75} height={75} className={styles.icon} />,
    feature: "Ongoing Support",
    desc: "From launch to growth, we’re here for you every step of the way, ensuring peace of mind with continuous support.",
  },
];

export default function Peace() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.imgContainer}>
          <Image src={Img1} alt='' title='' fill className={styles.img} />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Work with us for <br />
              <span className={styles.span}>peace of mind</span>
            </h2>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.iconContainer}>{x.icon}</div>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
