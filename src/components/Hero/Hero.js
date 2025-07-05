"use client";
import React, { useRef } from "react";
import styles from "./hero.module.css";
import Container from "@/layout/Container";
import Button from "@/layout/buttons/Button";
import * as Links from "@/utils/Links";
import { useSplitText } from "@/hooks/useSplitText";
import { useScrambleText } from "@/hooks/useScrambleText";
import useGsapReveal from "@/hooks/useGsapReveal";

const scrambleWords = ["REALESTATE", "PROPERTY", "HOMES", "RESIDENCES"];

export default function Page() {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const details = useRef(null);
  const buttons = useRef(null);

  useSplitText(line1, {
    animation: {
      from: { y: 100, opacity: 0 },
      to: {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "back.out(1.7)",
      },
    },
  });

  useSplitText(line2);
  useSplitText(line3);

  useScrambleText(line3, scrambleWords, {
    delay: 3,
    scrambleSettings: {
      duration: 4,
      scrambleText: {
        chars: "01#_<>?!@",
        newClass: "scramble-effect",
        revealDelay: 0.3,
        tweenLength: false,
      },
    },
  });

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
            <div ref={line1}>SHAHRIAR</div>
            <div ref={line2}>JOBAYER</div>
            <div ref={line3} className="landing-text">
              {scrambleWords[0]}
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
