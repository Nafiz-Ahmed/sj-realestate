import React from "react";
import Container from "../Container";
import styles from "./engage.module.css";
import Button from "@/layout/buttons/Button";

function Engage({
  title = "Title",
  description = "Description",
  buttonLink = "/",
  buttonText = "Call me",
}) {
  return (
    <div
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
            style={{
              backgroundColor: "white",
              color: "var(--text-color)",
              fontSize: "cal(var(--primary-text))",
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export default Engage;
