"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const navItems = [
  { text: "About", href: "/#aboutus" },
  { text: "Work", href: "/#work" },
  { text: "Services", href: "/#services" },
  { text: "faq", href: "/#faq" },
  { text: "Contact", href: "/#contact" },
];

export default function Nav() {
  return (
    <>
      {/*  centred, scrolls away with the hero  */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Logo
              title='Fonts & Footers'
              backgroundColor='backgroundColorWhite'
              direction='center'
            />
          </div>

          <div className={styles.navItems}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navItem}>
                {item.text}
              </Link>
            ))}
          </div>

          <div className={styles.btnContainer}>
            <Button
              href='/'
              text='Get Started'
              btnType='noBackgroundWhiteText'
              arrow
            />
          </div>
        </nav>
      </header>
    </>
  );
}
