"use client";

import React, { useRef } from "react";
import Container from "@/layout/Container";
import styles from "./listings.module.css";
import RenderProperties from "@/utils/RenderProperties";
import useGsapReveal from "@/hooks/useGsapReveal";

function Listings() {
  const titleRef = useRef(null);

  useGsapReveal({
    ref: titleRef,
  });
  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1 ref={titleRef}>Featured Listings</h1>
        </div>
      </Container>
      <RenderProperties loadMore={true} cardType="listings" initialCount={6} />
    </div>
  );
}

export default Listings;
