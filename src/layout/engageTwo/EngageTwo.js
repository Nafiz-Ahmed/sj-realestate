"use client";

import React, { useRef } from "react";
import Container from "../Container";
import styles from "./engageTwo.module.css";
import useGsapReveal from "@/hooks/useGsapReveal";

function EngageTwo({ title = "Title", description = "Description" }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useGsapReveal({ ref: titleRef });
  useGsapReveal({ ref: descriptionRef });

  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1 ref={titleRef}>{title}</h1>
          <p ref={descriptionRef}>{description}</p>
        </div>
      </Container>
    </div>
  );
}

export default EngageTwo;
