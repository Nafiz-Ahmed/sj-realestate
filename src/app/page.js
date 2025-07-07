// This file is part of the sj-realestate project.
// It defines the main home page of the application.

import React from "react";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Description from "@/components/Description/Description";
import Listings from "@/components/Listings/Listings";
import Sold from "@/components/Sold/Sold";
import Mortgage from "@/components/Mortgage/Mortgage";
import TrustSection from "@/layout/trust/TrustSection";
import TrustList from "@/data/HomepageTrust.json";
import { homeMeta } from "@/utils/SEO";

export const metadata = homeMeta;

function page() {
  return (
    <div>
      <Hero />
      <Description />
      <Listings />
      <Sold />
      <Mortgage />
      <TrustSection
        heading={
          <>
            Why Clients Trust <span>Shahriar</span>
          </>
        }
        pointsList={TrustList}
      />
    </div>
  );
}

export default page;
