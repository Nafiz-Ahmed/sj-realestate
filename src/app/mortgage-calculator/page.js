import Engage from "@/layout/engage/Engage";
import EngageTwo from "@/layout/engageTwo/EngageTwo";
import Title from "@/layout/title/Title";
import RateHubCalculator from "@/utils/RateHubCalculator";
import React from "react";
import * as Links from "@/utils/Links";
import { mortgageMeta } from "@/utils/SEO";

export const metadata = mortgageMeta;

function page() {
  return (
    <div>
      <Title
        title="Mortgage Calculator"
        details="Wondering how much home you can afford? Use this simple mortgage calculator to estimate your monthly payments based on price, down payment, and more."
      />

      <RateHubCalculator />

      <EngageTwo
        title="How it helps?"
        description="This tool helps you plan with clarity – so you can shop smart, budget better, and avoid surprises."
      />

      <Engage
        title="Make Smart Moves with Your Money"
        description="Need help figuring out what fits your budget? Let’s run the numbers together."
        buttonLink={Links.contactMe.googleMeet}
        buttonText="Contact Shahriar →"
      />
    </div>
  );
}

export default page;
