"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styles from "./Circle.module.css";
import Modal from "@/components/shared/Modal/Modal";
import Analytics from "@/components/icons/Calendar/Calendar";
import Clock from "@/components/icons/Listing/Listing";
import CloudPrez from "@/components/icons/Integration/Integration";
import Multiple from "@/components/icons/Analytics/Analytics";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const data = [
  {
    id: 1,
    feature: "Booking Audit & Goal Mapping",
    desc: "We start with a 30-minute strategy call and a quick audit of your current booking flow to pinpoint no-show rate, calendar pain points, and revenue targets before any code is written.",
    icon: <Analytics className={styles.icon} />,
  },
  {
    id: 2,
    feature: "Prototype & Road-map",
    desc: "You receive an interactive prototype of the booking screen plus a milestone timeline and fixed pricing, so you know exactly what we’ll ship and when.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 3,
    feature: "Custom Build & Integrations",
    desc: "We turn the prototype into a production-ready platform—Next.js front end, Stripe deposits, and live Google / 365 calendar sync—all tested for speed and security.",
    icon: <CloudPrez className={styles.icon} />,
  },
  {
    id: 4,
    feature: "Launch & No-Show Optimisation",
    desc: "Post-launch we monitor booking-conversion and no-show %, tweak reminders, and include 30 days of complimentary support to ensure the numbers move up and to the right.",
    icon: <Multiple className={styles.icon} />,
  },
];

export default function Circle() {
  const [selected, setSelected] = useState<(typeof data)[0] | null>(null);

  const openModal = (item: (typeof data)[0]) => {
    setSelected(item);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro
              title='Our Process'
              color='white'
              borderColor='borderColorWhite'
            />
          </div>
          <h2 className={styles.heading}>How we work</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.outerCircle}>
              <svg
                className={styles.curveText}
                viewBox='0 0 500 500'
                preserveAspectRatio='xMidYMid meet'
              >
                <defs>
                  <path
                    id='circlePath'
                    d='
                M250,250
                m-225,0
                a225,225 0 1,1 450,0
                a225,225 0 1,1 -450,0
              '
                  />
                </defs>
                <text
                  fontFamily='var(--SuisseIntlCondensed)'
                  fontSize='24'
                  fill='var(--yellow)'
                >
                  <textPath
                    href='#circlePath'
                    startOffset='25%'
                    textAnchor='middle'
                    dy='-8'
                  >
                    Select an Option
                  </textPath>
                </text>
              </svg>

              <div className={styles.innerCircle}>
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className={(styles as any)[`quad${index + 1}`]}
                    onClick={() => openModal(item)}
                  >
                    0{item.id}
                    {/* {item.icon} */}
                  </div>
                ))}
              </div>

              {/* <div className={styles.centerCircle} /> */}
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              voluptatum optio animi repudiandae ipsa corporis placeat rerum et
              deserunt ea. Beatae odio eius iure voluptates laborum voluptatem
              temporibus ut adipisci consectetur placeat, aliquam quidem
              veritatis quos magnam sint dolore cupiditate eaque blanditiis
              exercitationem facilis quia corporis? Consequuntur, omnis. In,
              non!
            </p>
          </div>
        </div>

        {selected && (
          <Modal isOpen={true} onClose={closeModal}>
            <div className={styles.modalContent}>
              <span className={styles.index}>{selected.id}</span>
              <span className={styles.index}>{selected.icon}</span>
              <h2 className={styles.modalHeading}>{selected.feature}</h2>
              <p className={styles.modalCopy}>{selected.desc}</p>
            </div>
          </Modal>
        )}
      </section>
    </LayoutWrapper>
  );
}
