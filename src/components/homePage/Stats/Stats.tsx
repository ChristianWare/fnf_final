import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Stats.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/stats.png";
import Check from "@/components/icons/Check/Check";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Total Users",
  },
  {
    id: 2,
    title: "Active Users Active Users",
  },
  {
    id: 3,
    title: "Inactive Users Inactive Users",
  },
];

const data2 = [
  {
    id: 4,
    title: "$30K +",
    desc: "Lorem ipsum dolor",
  },
  {
    id: 5,
    title: "104K",
    desc: "Lorem ipsum dolor",
  },
  {
    id: 6,
    title: "90%",
    desc: "Lorem ipsum dolor",
  },
];

export default function Stats() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <h2 className={styles.heading}>
                Banking that builds <br />
                Your credit
              </h2>
              <p className={styles.copy}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                molestias autem voluptatibus? Sint itaque, distinctio minima
                aspernatur molestias ut quas.
              </p>
              <div className={styles.mapDataBox}>
                {data.map((item) => (
                  <div key={item.id} className={styles.mapDataItem}>
                    <Check className={styles.icon} />
                    <p className={styles.mapDataTitle}>{item.title}</p>
                  </div>
                ))}
              </div>
              <div className={styles.btnContainer}>
                <Button
                  href='/contact'
                  btnType='blue'
                  text='Free strategy call'
                  // target='_blank'
                  arrow
                />{" "}
              </div>
            </div>
            <div className={styles.topRight}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img1}
                  alt='Hero image'
                  className={styles.img}
                  fill
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            {data2.map((y) => (
              <div key={y.id} className={styles.card}>
                <div className={styles.cardContent}>
                  <h3 className={styles.bottomTitle}>{y.title}</h3>
                  <p className={styles.bottomDesc}>{y.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
