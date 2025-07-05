"use client";

import React, { useRef } from "react";
import styles from "./propertyListing.module.css";
import Link from "next/link";
import Image from "next/image";
import { Money, Home, Location, Bed, Bath, SQ } from "@/utils/CardIcons";
import useGsapReveal from "@/hooks/useGsapReveal";

function PropertyListing({ data }) {
  const card = useRef(null);

  useGsapReveal({ ref: card });
  return (
    <div ref={card} className={styles.propertyListing}>
      <Link href={`/listings/${data.Slug}`}>
        <div className={styles.imageBox}>
          <Image
            src={data["Cover Image"].url}
            alt={data.Slug}
            fill
            style={{ objectFit: "cover" }}
            priority
          />

          <div className={styles.tag}>
            {data.Type !== "For sale" ? (
              <Home width={15} height={15} />
            ) : (
              <Money width={15} height={15} />
            )}{" "}
            {data.Type}
          </div>
        </div>

        <div className={styles.propertyDetails}>
          <div className={styles.location}>
            <Location width={15} height={15} />
            {data.Address}
          </div>

          <div className={styles.name}>{data.Name}</div>

          <div className={styles.contains}>
            <div className={styles.bedrooms}>
              <Bed width={15} height={15} />
              {data.Bedroom}
            </div>

            <div className={styles.bathrooms}>
              <Bath width={15} height={15} />
              {data.Bathrooms}
            </div>

            <div className={styles.sqft}>
              <SQ width={15} height={15} />
              {data["Size (sq.ft)"]}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PropertyListing;
