import Listings from "@/components/_LstingPage/listings/Listings";
import Engage from "@/layout/engage/Engage";
import Title from "@/layout/title/Title";
import React from "react";
import * as Links from "@/utils/Links";

function page() {
  return (
    <div>
      <Title
        title="Find the right place to call home."
        details="Below you’ll find my latest active listings across St. John’s and surrounding neighborhoods. Whether you’re looking for something move-in ready or full of potential, there’s a home waiting for you."
      />
      <Listings />
      <Engage
        title="See Something Love?"
        description="Homes move fast in this market – and I’ll make sure you never miss an opportunity."
        buttonLink={Links.contactMe.googleMeet}
        buttonText="Let's book a showing today"
      />
    </div>
  );
}

export default page;
