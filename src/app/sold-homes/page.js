import SoldHomes from "@/components/_SoldHomesPage/soldHomes/SoldHomes";
import EngageTwo from "@/layout/engageTwo/EngageTwo";
import Title from "@/layout/title/Title";
import React from "react";
import { soldMeta } from "@/utils/SEO";

export const metadata = soldMeta;

function page() {
  return (
    <div>
      <Title
        title={
          <>
            Homes Sold. <br />
            Dreams Delivered. <br />
            Clients Happy.
          </>
        }
        details="From cozy condos to spacious family homes, I’ve helped clients sell confidently and buy smart. Every sale tells a story of strategic pricing, skilled negotiation, and client-first service."
      />

      <SoldHomes />
      <EngageTwo
        title="Why  Choose Us?"
        description="When you work with me, you get more than a Realtor. You get a committed partner who fights for your best deal – and gets results."
      />
    </div>
  );
}

export default page;
