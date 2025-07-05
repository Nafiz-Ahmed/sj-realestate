"use client";

import React, { useRef } from "react";
import styles from "./propertySold.module.css";
import Link from "next/link";
import Image from "next/image";
import { Money, Home, Location, Bed, Bath, SQ } from "@/utils/CardIcons";
import useGsapReveal from "@/hooks/useGsapReveal";

function PropertySold({ data }) {
  const card = useRef(null);

  useGsapReveal({ ref: card });

  return (
    <div ref={card} className={styles.propertySold}>
      <Link href="/">
        <div className={styles.imageBox}>
          <Image
            src={data["Cover Image"].url}
            alt={data.Slug}
            fill
            style={{ objectFit: "cover" }}
            priority
          />

          <div className={styles.tag}>
            {<Money width={15} height={15} />}
            {data.Type}
          </div>
        </div>

        <div className={styles.propertyDetails}>
          <div className={styles.location}>
            <Location width={15} height={15} />
            {data.Address}
          </div>

          <div className={styles.name}>{data.Name}</div>
        </div>
      </Link>
    </div>
  );
}

export default PropertySold;
