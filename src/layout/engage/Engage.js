"use client";

import React, { useRef } from "react";
import Container from "../Container";
import styles from "./engage.module.css";
import Button from "@/layout/buttons/Button";
import useGsapReveal from "@/hooks/useGsapReveal";

function Engage({
  title = "Title",
  description = "Description",
  buttonLink = "/",
  buttonText = "Call me",
}) {
  const containerRef = useRef(null);

  useGsapReveal({
    ref: containerRef,
  });

  return (
    <div
      ref={containerRef}
      style={{
        padding: "0 var(--edge-gap)",
      }}
    >
      <Container>
        <div className={styles.wrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button
            link={buttonLink}
            target="_blank"
            text={buttonText}
            whiteButton={true}
          />
        </div>
      </Container>
    </div>
  );
}

export default Engage;
