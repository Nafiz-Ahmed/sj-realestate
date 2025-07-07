"use client";

import React, { useRef } from "react";
import Container from "@/layout/Container";
import styles from "./title.module.css";
import { useSplitText } from "@/hooks/useSplitText";

function Title({ title = "Title", details = "details" }) {
  const titleRef = useRef(null);
  const detailsRef = useRef(null);

  useSplitText(titleRef, {
    splitOptions: { type: "words" },
  });

  useSplitText(detailsRef, {
    splitOptions: { type: "lines" },
  });

  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1 ref={titleRef} className={styles.title}>
            {title}
          </h1>
          <p ref={detailsRef} className={styles.details}>
            {details}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Title;
