import Container from "@/layout/Container";
import React from "react";
import styles from "./listings.module.css";
import RenderProperties from "@/utils/RenderProperties";

function Listings() {
  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1>Featured Listings</h1>
        </div>
      </Container>
      <RenderProperties loadMore={true} cardType="listings" initialCount={6} />
    </div>
  );
}

export default Listings;
