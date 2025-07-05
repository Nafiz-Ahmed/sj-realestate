"use client";

import Container from "@/layout/Container";
import React, { useRef } from "react";
import styles from "./listings.module.css";
import * as Links from "@/utils/Links";
import Button from "@/layout/buttons/Button";
import RenderProperties from "@/utils/RenderProperties";
import useGsapReveal from "@/hooks/useGsapReveal";

function Listings() {
  const title = useRef(null);
  const des = useRef(null);
  const button = useRef(null);

  useGsapReveal({ ref: title });
  useGsapReveal({ ref: des });
  useGsapReveal({ ref: button });

  return (
    <div className={styles.listings}>
      <Container>
        <div className={styles.wrapper}>
          <div id="animate" ref={title} className={styles.title}>
            Featured Listings
          </div>
          <div id="animate" ref={des} className={styles.details}>
            Discover your next home in beautiful St. John&apos;s and surrounding
            areas
          </div>
        </div>
      </Container>

      <RenderProperties cardType="listings" loadCount={3} />

      <div
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
        id="animate"
        ref={button}
      >
        <Button link={Links.pageLinks.listings} text="See more" />
      </div>
    </div>
  );
}

export default Listings;
