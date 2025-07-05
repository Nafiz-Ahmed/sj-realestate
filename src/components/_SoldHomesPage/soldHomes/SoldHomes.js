import Container from "@/layout/Container";
import React from "react";
import styles from "./soldHomes.module.css";
import RenderProperties from "@/utils/RenderProperties";

function SoldHomes() {
  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1>Recently Sold Homes</h1>
        </div>
      </Container>
      <RenderProperties
        loadMore={true}
        initialCount={6}
        cardType="sold-homes"
      />
    </div>
  );
}

export default SoldHomes;
