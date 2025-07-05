"use client";

import React, { useRef } from "react";
import useGsapReveal from "@/hooks/useGsapReveal";
import styles from "./mortgage.module.css";
import Container from "@/layout/Container";
import Button from "@/layout/buttons/Button";
import * as Links from "@/utils/Links";

function Mortgage() {
  const title = useRef(null);
  const des = useRef(null);
  const button = useRef(null);

  useGsapReveal({ ref: title });
  useGsapReveal({ ref: des });
  useGsapReveal({ ref: button });
  return (
    <div className={styles.mortgageContainer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 id="animate" ref={title}>
              Plan Your Mortgage with Confidence
            </h1>
            <p id="animate" ref={des}>
              Find out what your monthly payments might look like with our
              easy-to-use mortgage calculator. Whether you&apos;re a first-time
              buyer or planning your next move, get the numbers that help you
              make smarter decisions.
            </p>
            <div id="animate" ref={button}>
              <Button
                link={Links.pageLinks.mortgageCalculator}
                text="Try the Mortgage Calculator"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mortgage;
