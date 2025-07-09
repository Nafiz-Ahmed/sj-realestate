"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./hero.module.css";
import Container from "@/layout/Container";
import Button from "@/layout/buttons/Button";
import * as Links from "@/utils/Links";
import { useSplitText } from "@/hooks/useSplitText";
import useGsapReveal from "@/hooks/useGsapReveal";
import useTypeOnText from "@/hooks/useTypeOnText";

const typeOnText = ["REALESTATE", "HOMES", "PROPERTIES", "LISTINGS"];

export default function Page() {
  const title = useRef(null);
  const typeOn = useRef(null);
  const details = useRef(null);
  const buttons = useRef(null);

  // Parent animation
  useSplitText(title, {
    splitOptions: { type: "lines" },
    animation: {
      from: { y: 100, opacity: 0 },
      to: {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.4,
        ease: "expo.out",
      },
      delay: 0.2,
    },
  });

  // useTypeOnText(typeOn, typeOnText);

  useGsapReveal({
    ref: details,
    from: "bottom",
    duration: 1,
    delay: 0.2,
  });

  useGsapReveal({
    ref: buttons,
    stagger: true,
  });

  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.title}>
            <div ref={title}>
              SHARIAR <br /> JOBAYER <br />
              <span>
                <span className={styles.typeOn} ref={typeOn}>
                  {" "}
                  REAL ESTATE
                </span>
              </span>
            </div>
          </div>

          <div ref={details} className={styles.description}>
            Your Trusted Guide to Homes in St. John&apos;s – With Heart, Hustle,
            and Local Know-How.
          </div>

          <div ref={buttons} className={styles.CTA}>
            <Button
              text="Browse Listings"
              link={Links.pageLinks.listings}
              target="_self"
              style={{ width: "fit-content" }}
            />
            <Button
              text="Schedule a Call"
              link={Links.contactMe.googleMeet}
              whiteButton={true}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
