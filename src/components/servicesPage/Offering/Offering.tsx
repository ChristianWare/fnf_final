import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Offering.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/ecomm.jpeg";
import Button from "@/components/shared/Button/Button";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

const data = [
  {
    id: 1,
    title: "Branded website built for conversion",
  },
  {
    id: 2,
    title: "One-screen booking flow (service → pro → date/time → pay)",
  },
  {
    id: 3,
    title: "Deposits, upsells, memberships, gift cards",
  },
  {
    id: 4,
    title: "SMS/email reminders, no-show policies, waitlists",
  },
  {
    id: 5,
    title: "Multi-location/staff availability logic",
  },
  {
    id: 6,
    title: "Reviews & UGC built in",
  },
  {
    id: 7,
    title: "Analytics, dashboards, and SEO schema",
  },
  {
    id: 8,
    title: "Training + documentation",
  },
];

export default function Offering() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Description of image'
                title='Description of image'
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>Core Offering</h2>
            <p className={styles.copy}>
              Give the right people the right visibility—without the
              back-and-forth. Prospect makes permission management effortless,
              with granular roles, smart defaults, and real-time updates.
            </p>
            <SectionIntro title='Including:' />
            <ul className={styles.mapDataBox}>
              {data.map((item) => (
                <li key={item.id} className={styles.mapDataItem}>
                  {item.title}
                </li>
              ))}
            </ul>

            <div className={styles.btnContainer}>
              <Button btnType='blackii' text='Start now' href='/' arrow />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
