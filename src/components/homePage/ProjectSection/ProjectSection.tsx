"use client";

import { projects } from "@/lib/data";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ProjectSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/shared/Modal/Modal";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

const ProjectSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null
  );

  const handleOpenModal = (index: number) => {
    setActiveProjectIndex(index);
  };

  const handleCloseModal = () => {
    setActiveProjectIndex(null);
  };
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <div className={styles.sectionTop}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntro title='Portfolio' color='white' dotColor='pinkDot' />
          </div>
          <h2 className={styles.heading}>
            Proven <span className={styles.span}> Results</span> <br /> Not just
            Pretty Mock-Ups
          </h2>
        </div>
        <div className={styles.dataContainer}>
          {projects.slice(0, 2).map((x, index) => (
            <div key={index} className={styles.parent}>
              <div className={styles.content}>
                <div className={styles.left}>
                  <h3 className={styles.titleMobile}>{x.title}</h3>
                  <div className={styles.imgContainer}>
                    <Image src={x.src} alt='' fill className={styles.img} />
                  </div>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                  <br />
                  {/* <span className={styles.span}>Links:</span> */}
                  <div className={styles.links}>
                    <Button href='/' btnType='white' text='Submit a request' />

    

                    <FalseButton
                      text='Get Started'
                      onClick={() => handleOpenModal(index)}
                      btnType='tanOutline'
                    />
                  </div>
                </div>
              </div>
              {activeProjectIndex === index && (
                <Modal
                  isOpen={activeProjectIndex === index}
                  onClose={handleCloseModal}
                >
                  <p className={styles.modalDescription}>{x.description}</p>
                  <div className={styles.modalLinks}>
                    <Link href={x.href} target='_blank' className={styles.link}>
                      Live Site <span className={styles.arrow}>→</span>
                    </Link>
                    <div className={styles.link} onClick={handleCloseModal}>
                      Close
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default ProjectSection;
