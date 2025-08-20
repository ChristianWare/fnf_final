/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, KeyboardEvent } from "react";
import styles from "./Circle.module.css";
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
  const [selectedId, setSelectedId] = useState<number>(data[0].id);

  const selected = data.find((d) => d.id === selectedId)!;

  const handleKey = (e: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedId(id);
    }
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
                aria-hidden='true'
              >
                <defs>
                  <path
                    id='circlePath'
                    d='M250,250 m-225,0 a225,225 0 1,1 450,0 a225,225 0 1,1 -450,0'
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

              <div className={styles.innerCircle} role='list'>
                {data.map((item, index) => {
                  const cls = (styles as any)[`quad${index + 1}`];
                  const isActive = item.id === selectedId;
                  return (
                    <div
                      key={item.id}
                      role='button'
                      tabIndex={0}
                      aria-pressed={isActive}
                      aria-label={`${item.feature}`}
                      className={`${cls} ${isActive ? styles.activeQuad : ""}`}
                      onClick={() => setSelectedId(item.id)}
                      onKeyDown={(e) => handleKey(e, item.id)}
                    >
                      {item.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.featureWrap} key={`feature-${selected.id}`}>
              <h3 className={styles.featureTitle}>{selected.feature}</h3>
            </div>
            <div className={styles.copyWrap}>
              <p
                className={`${styles.copy} ${styles.fadeIn}`}
                key={selected.id}
              >
                {selected.desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
