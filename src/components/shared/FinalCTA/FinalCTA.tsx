import styles from "./FinalCTA.module.css";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";
// import Image from "next/image";
// import PuzzleImage from "../../../../public/images/puzzle.png";
// import callImage from "../../../../public/images/call.png";

export default function FinalCTA() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntro title='FONTS & FOOTERS' color='tan' dotColor='tanDot' />

          <h2 className={styles.heading}>
            Ready to improve <br /> your online store&nbsp;?
          </h2>

          <div className={styles.btnContainer}>
            <Button href='/contact' btnType='blue' text='Contact us' />
            <Button
              href='/contact'
              btnType='noBackgroundBlueText'
              text='Get Started'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
