"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Specialize.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image, { StaticImageData } from "next/image";

import Img1 from "../../../../public/images/specialize.png";
import Img2 from "../../../../public/images/everything.png";
import Img3 from "../../../../public/images/fast.png";
import Img4 from "../../../../public/images/goal.png";
import Img5 from "../../../../public/images/contactusiv.png";
import Img6 from "../../../../public/images/person.png";
import Img7 from "../../../../public/images/work.png";

type Specialty = {
  id: number;
  feature: string;
  desc: string;
  src: StaticImageData;
};

const specialties: readonly Specialty[] = [
  {
    id: 1,
    feature: "Salon & Wellness Booking",
    desc: "→ Perfect for hair studios, barbers, spas, and massage therapists who need staff-level calendars, service add-ons, and tip capture.",
    src: Img1,
  },
  {
    id: 2,
    feature: "Luxury Transport Scheduling",
    desc: "→ Custom flows for black-car fleets, limo services, and executive shuttles—with live vehicle availability, distance pricing, and damage-hold deposits.",
    src: Img2,
  },
  {
    id: 3,
    feature: "Vacation-Rental Portfolios",
    desc: "→ Multi-property engines that sync with PMS calendars, support dynamic nightly rates, and offer guest portals for upsells like late checkout or grocery packs.",
    src: Img3,
  },
  {
    id: 4,
    feature: "Equipment & Experience Rentals",
    desc: "→ Ideal for kayak fleets, camera-gear shops, and adventure tours that need inventory tracking, QR check-in/out, and overtime fee automation.",
    src: Img4,
  },
  {
    id: 5,
    feature: "Medical & Clinic Appointments",
    desc: "→ HIPAA-ready scheduling for dentists, physiotherapists, and aesthetic clinics, featuring intake forms, insurance fields, and room/resource allocation.",
    src: Img5,
  },
  {
    id: 6,
    feature: "Multi-Location Chains",
    desc: "→ One backend for franchises or studio chains, allowing location switchers, per-branch pricing, and centralised analytics.",
    src: Img6,
  },
  {
    id: 7,
    feature: "Membership & Recurring Services",
    desc: "→ Platforms that bundle recurring bookings with subscription billing—perfect for personal-training packages, co-working desks, or wellness clubs.",
    src: Img7,
  },
] as const;

export default function Specialize() {
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
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro title='Our Specialties' />
            </div>

            <h2 className={styles.heading}>
              Whether you run a one-chair salon, manage a fleet of luxury cars,
              or oversee a portfolio of vacation rentals, we build booking
              platforms tailored to your exact service model and growth stage.
            </h2>

            <div className={styles.imgContainer}>
              <div className={styles.imageStack}>
                {specialties.map((s, idx) => (
                  <Image
                    key={s.id}
                    src={s.src}
                    alt={s.feature}
                    className={`${styles.imgLayer} ${
                      idx === activeIndex ? styles.visible : ""
                    }`}
                    fill
                    priority={idx === 0}
                    quality={100}
                    sizes='(max-width: 768px) 100vw, 40vw'
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.mapDataBox}>
              {specialties.map((x, idx) => {
                const isActive = idx === activeIndex;
                const depthBehind = Math.max(0, activeIndex - idx);
                const PEEK_STEP = 5;
                const translateY =
                  idx <= activeIndex ? `-${depthBehind * PEEK_STEP}%` : "0%";
                const opacityBehind = Math.max(0.1, 1 - depthBehind * 0.1);
                const scaleBehind = 1 - Math.min(depthBehind, 8) * 0.04;
                const enteringOpacity =
                  idx > activeIndex && !visibleSet.has(idx) ? 0 : undefined;

                return (
                  <div
                    key={x.id}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    data-index={idx}
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
                    <span className={styles.blackDot} />
                    <div className={styles.cardLeft}>
                      <span className={styles.id}>
                        {x.id.toString().padStart(2, "0")}.
                      </span>
                      <div className={styles.imgContainerii}>
                        <Image
                          src={x.src}
                          alt={x.feature}
                          fill
                          quality={100}
                          sizes='(max-width: 768px) 100vw, 100vw'
                          className={styles.imgSingle}
                        />
                      </div>
                    </div>
                    <div className={styles.cardRight}>
                      <h4 className={styles.feature}>{x.feature}</h4>
                      <p className={styles.desc}>{x.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
