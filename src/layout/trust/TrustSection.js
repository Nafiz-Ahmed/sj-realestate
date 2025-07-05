"use client";

import React, { useRef } from "react";
import useGsapReveal from "@/hooks/useGsapReveal";
import Button from "@/layout/buttons/Button";
import Container from "../Container";
import styles from "./trustSection.module.css";
import Image from "next/image";
import * as Links from "@/utils/Links";

export default function TrustSection({
  heading,
  pointsList,
  button = true,
  buttonContent = "Book Your Free Consultation →",
  buttonLink,
  position = "start",
  backgroundColor = false,
}) {
  const points = pointsList;
  const title = useRef(null);
  const list = useRef(null);
  const buttons = useRef(null);

  useGsapReveal({ ref: title });
  useGsapReveal({ ref: list, stagger: true });
  useGsapReveal({ ref: buttons });

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: `${
          backgroundColor && "var(--secondary-background-color)"
        }`,
      }}
      className={styles.container}
    >
      <Container>
        <div className={styles.wrapper}>
          <h2 id="animate" ref={title} className={styles.heading}>
            {heading}
          </h2>
          <div id="animate" ref={list} className={styles.points}>
            {points.map((point, index) => (
              <div
                key={index}
                style={{
                  alignItems: `${position}`,
                }}
                className={styles.point}
              >
                <div className={styles.icon}>
                  <Image
                    src="/icons/check-mark.png"
                    alt="Check icon"
                    width={45}
                    height={45}
                  />
                </div>

                <div className={styles.text}>
                  <strong>{point.title}:</strong> {point.description}
                </div>
              </div>
            ))}
          </div>

          {button && (
            <div id="animate" ref={buttons}>
              <Button
                link={buttonLink || Links.contactMe.googleMeet}
                target="_blank"
                text={buttonContent}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
