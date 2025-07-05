"use client";

import React, { useState, useRef } from "react";
import Grid from "@/layout/grid/Grid";
import ListingCard from "@/layout/propertyCards/propertyListings/PropertyListing";
import SoldCard from "@/layout/propertyCards/propertiesSold/PropertySold";
import properties from "@/data/Properties.json";
import propertiesSold from "@/data/PropertiesSold.json";
import Button from "../layout/buttons/Button";
import useGsapReveal from "@/hooks/useGsapReveal";

function RenderProperties({
  cardType = "listings",
  loadMore = false,
  loadCount = 3,
  initialCount = 3, // New prop for initial load
}) {
  const button = useRef(null);
  const LOAD_COUNT = loadCount;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const CardType = cardType === "listings" ? ListingCard : SoldCard;
  const collection = cardType === "listings" ? properties : propertiesSold;

  const handleLoadMore = (e) => {
    e.preventDefault();
    setVisibleCount((prev) => Math.min(prev + LOAD_COUNT, properties.length));
  };

  useGsapReveal({ ref: button });

  return (
    <div>
      <Grid>
        {collection.slice(0, visibleCount).map((property, idx) => (
          <CardType key={idx} data={property} />
        ))}
      </Grid>

      {visibleCount < collection.length && loadMore && (
        <div
          ref={button}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "40px 0",
          }}
        >
          <Button
            onClick={handleLoadMore}
            text="Load more"
            style={{ width: "fit-content" }}
          />
        </div>
      )}
    </div>
  );
}

export default RenderProperties;
