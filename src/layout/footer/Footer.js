"use client";

import React, { useRef } from "react";
import useGsapReveal from "@/hooks/useGsapReveal";
import styles from "./footer.module.css";
import ContactForm from "./contactForm/ContactForm";
import Container from "@/layout/Container";
import Logo from "@/utils/Logo";
import SocialMedia from "../social/SocialMedia";

function Footer() {
  const getIn = useRef(null);
  const form = useRef(null);
  const des = useRef(null);
  const bottom = useRef(null);

  useGsapReveal({ ref: getIn });
  useGsapReveal({ ref: des });
  useGsapReveal({ ref: form, duration: 1 });
  useGsapReveal({ ref: bottom, stagger: true });

  return (
    <div className={styles.footerContainer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.getInTouch}>
              <h1 ref={getIn}>Get In Touch</h1>
              <p ref={des}>
                Ready to start your real estate journey? Send a message or give
                me a call.
              </p>
            </div>
            <div className={styles.getInTouchForm}>
              <div className={styles.form} ref={form}>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div ref={bottom} className={styles.bottomContent}>
              <div className={styles.logoSection}>
                <div className={styles.logo}>
                  <Logo />
                </div>
                <p className={styles.description}>
                  St. John&apos;s, Newfoundland & Labrador Canada
                </p>
              </div>

              <div className={styles.contactSection}>
                <div className={styles.title}>Contact info:</div>
                <div
                  className={`${styles.contactDetails} ${styles.description}`}
                >
                  <p>
                    <span>Call:</span> +1 (709) 986-1132
                  </p>
                  <p>
                    <span>Mail to:</span> sjrealestatenl@gmail.com
                  </p>
                </div>
              </div>

              <div className={styles.socialSection}>
                <div className={styles.title}>Follow me on:</div>
                <SocialMedia />
              </div>
            </div>

            <div className={styles.copyright}>
              <p className={styles.description}>
                &copy; {new Date().getFullYear()} SJ Realestate. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
