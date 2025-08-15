import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ApproachTestimonialsIntro.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";

export default function ApproachTestimonialsIntro() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro
              title='Approach'
              color='white'
              borderColor='borderColorWhite'
            />
            <h2 className={styles.heading}>What sets us apart</h2>
            <p className={styles.copy}>
              Innovative brands are always evolving; so are we. Learn how
              we&lsquo;ve unlocked more than $500 million in sales for our
              clients.
            </p>
            <div className={styles.btnContainer}>
              <Button
                btnType='white'
                text='Uncover our process'
                href='/'
                arrow
              />
            </div>
          </div>
          <div className={styles.right}>
            <SectionIntro title='Services' />
            <h2 className={styles.heading}>What our clients say</h2>
            <p className={styles.copy}>
              It&lsquo;s not our first time helping brands like yours. In fact,
              companies thrive when they partner with Pact – but don&lsquo;t
              take our word for it.
            </p>
            <div className={styles.btnContainer}>
              <Button
                btnType='black'
                text='Read our testimonials'
                href='/'
                arrow
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
