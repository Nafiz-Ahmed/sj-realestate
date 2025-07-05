"use client";

import Container from "@/layout/Container";
import React, { useRef } from "react";
import styles from "./sold.module.css";
import * as Links from "@/utils/Links";
import Button from "@/layout/buttons/Button";
import RenderProperties from "@/utils/RenderProperties";
import useGsapReveal from "@/hooks/useGsapReveal";

function Sold() {
  const title = useRef(null);
  const des = useRef(null);
  const button = useRef(null);

  useGsapReveal({ ref: title });
  useGsapReveal({ ref: des });
  useGsapReveal({ ref: button });
  return (
    <div className={styles.sold}>
      <Container>
        <div className={styles.wrapper}>
          <div ref={title} className={styles.title}>
            Recently Sold Homes
          </div>
          <div ref={des} className={styles.details}>
            A record of success and satisfied clients
          </div>
        </div>
      </Container>

      <RenderProperties cardType="sold" loadCount={3} />

      <div
        ref={button}
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <Button link={Links.pageLinks.soldHomes} text="See more" />
      </div>
    </div>
  );
}

export default Sold;
