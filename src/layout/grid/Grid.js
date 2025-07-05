"use client";

import React, { useRef } from "react";
import Container from "../Container";
import styles from "./grid.module.css";
import useGsapReveal from "@/hooks/useGsapReveal";

function Grid({ children }) {
  const card = useRef(null);

  useGsapReveal({
    ref: card,
    stagger: true,
  });

  return (
    <div>
      <Container>
        <div id="animate" ref={card} className={styles.grid}>
          {children}
        </div>
      </Container>
    </div>
  );
}

export default Grid;
