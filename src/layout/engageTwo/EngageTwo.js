import React from "react";
import Container from "../Container";
import styles from "./engageTwo.module.css";

function EngageTwo({ title = "Title", description = "Description" }) {
  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Container>
    </div>
  );
}

export default EngageTwo;
