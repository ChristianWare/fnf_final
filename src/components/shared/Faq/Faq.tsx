/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import styles from "./Faq.module.css";
import React, { useState } from "react";
import Arrow from "@/components/icons/Arrow/Arrow";
import { questions } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";

export default function Faq() {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='How we work' dotColor='blueDot' />
          </div>
          <h2 className={styles.heading}>
            We put <span className={styles.span}> transparency</span> and
            openness at the heart of all our processes. Our clients{" "}
            <span className={styles.span}>
              get full access to detailed reports,
            </span>{" "}
            which allows them to track every step of the work and understand how
            projects are progressing.
          </h2>
        </div>
        <div className={styles.bottom}>
          {" "}
          {questions.slice(0, 5).map((x, i) => (
            <div
              key={x.id}
              className={
                selected === i
                  ? styles.qaContainer + " " + styles.showBorder
                  : styles.qaContainer
              }
              onClick={() => toggle(i)}
            >
              <div className={styles.headingArrowContainer}>
                <div className={styles.h3Container}>
                  <span className={styles.index}>{i + 1}. </span>
                  <h3 className={styles.question} lang='en'>
                    {x.question}
                  </h3>
                </div>
                {selected === i ? (
                  <Arrow className={styles.iconFlip} />
                ) : (
                  <Arrow className={styles.icon} />
                )}
              </div>
              <div
                className={
                  selected === i
                    ? styles.answerContainer + " " + styles.show
                    : styles.answerContainer
                }
              >
                <p className={styles.answer} lang='en'>
                  {x.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
