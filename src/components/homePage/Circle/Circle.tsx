"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Circle/Circle.tsx
import { useState } from "react";
import styles from "./Circle.module.css";
import Modal from "@/components/shared/Modal/Modal";

const data = [
  {
    id: 1,
    feature: "Discovery & Goal Mapping",
    desc: "A quick strategy call and analytics review to pin down revenue targets, customer pain points, and brand voice before any design work begins.",
  },
  {
    id: 2,
    feature: "Strategic Blueprint",
    desc: "You receive a detailed project roadmap—site architecture, milestones, and fixed pricing—so you know exactly what’s coming and when.",
  },
  {
    id: 3,
    feature: "Build & Integrate",
    desc: "Our developers turn the prototype into a high-performance storefront, integrating payment gateways, inventory systems, and marketing tools.",
  },
  {
    id: 4,
    feature: "Launch & Growth Tune-Ups",
    desc: "After go-live we monitor performance, run quick-win A/B tests, and provide 30 days of complimentary support to ensure the site hits your KPIs.",
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
    <section className={styles.container}>
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
            fill='var(--blackii)'
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
            </div>
          ))}
        </div>

        <div className={styles.centerCircle} />
      </div>

      {selected && (
        <Modal isOpen={true} onClose={closeModal}>
          <div className={styles.modalContent}>
            <span className={styles.index}>{selected.id}</span>
            <h2 className={styles.modalHeading}>{selected.feature}</h2>
            <p className={styles.modalCopy}>{selected.desc}</p>
          </div>
        </Modal>
      )}
    </section>
  );
}
