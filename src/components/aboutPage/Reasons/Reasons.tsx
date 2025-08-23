"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Reasons.module.css";
import { reasons } from "@/lib/data";

export default function Reasons() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set([0]));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ticking = useRef(false);

  const measure = useCallback(() => {
    const mid = window.innerHeight * 0.5;

    let bestIdx = 0;
    let bestDist = Infinity;
    const nextVisible = new Set<number>();

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();

      const isVisible = rect.bottom >= 0 && rect.top <= window.innerHeight;
      if (isVisible) nextVisible.add(idx);

      const center = rect.top + rect.height * 0.5;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    setVisibleSet(nextVisible);
    setActiveIndex((prev) => (prev !== bestIdx ? bestIdx : prev));
  }, []);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      measure();
      ticking.current = false;
    });
  }, [measure]);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll, measure]);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Implementation Bonuses (included)</h2>

        <div className={styles.content}>
          {reasons.map((reason, idx) => {
            const isActive = idx === activeIndex;
            const depthBehind = Math.max(0, activeIndex - idx); // 0 = active, 1 = previous, etc.

            // 10% peek per layer so tops stay visible
           const PEEK_STEP = 10; // percent
           const translateY =
             idx <= activeIndex ? `-${depthBehind * PEEK_STEP}%` : "0%";
            // fade/scale progressively for layers behind
            const opacityBehind = Math.max(0.1, 1 - depthBehind * 0.1);
            const scaleBehind = 1 - Math.min(depthBehind, 8) * 0.04;

            const enteringOpacity =
              idx > activeIndex && !visibleSet.has(idx) ? 0 : undefined;

            return (
              <div
                key={reason.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`${styles.card} ${isActive ? styles.isActive : styles.isInactive}`}
                style={{
                  zIndex: isActive ? 1000 : idx + 1,
                  opacity:
                    enteringOpacity !== undefined
                      ? enteringOpacity
                      : opacityBehind,
                  transform: `translateY(${translateY}) scale(${
                    idx <= activeIndex ? scaleBehind : 1
                  })`,
                  willChange: "opacity, transform",
                }}
              >
                <h3 className={styles.title}>{reason.title}</h3>
                <p className={styles.copy}>{reason.description}</p>
              </div>
            );
          })}
        </div>
      </LayoutWrapper>
    </section>
  );
}
