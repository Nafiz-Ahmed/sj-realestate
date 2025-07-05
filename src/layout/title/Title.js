import Container from "@/layout/Container";
import React from "react";
import styles from "./title.module.css";

function Title({ title = "Title", details = "details" }) {
  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.details}>{details}</p>
        </div>
      </Container>
    </div>
  );
}

export default Title;
