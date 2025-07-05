import React from "react";
import Container from "../Container";
import styles from "./grid.module.css";

function Grid({ children }) {
  return (
    <div>
      <Container>
        <div className={styles.grid}>{children}</div>
      </Container>
    </div>
  );
}

export default Grid;
