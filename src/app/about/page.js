import Introduce from "@/components/_AboutPage/introduce/Introduce";
import EngageTwo from "@/layout/engageTwo/EngageTwo";
import TrustSection from "@/layout/trust/TrustSection";
import React from "react";
import TrustList from "@/data/AboutPageTrust.json";
import { aboutMeta } from "@/utils/SEO";

export const metadata = aboutMeta;

function About() {
  return (
    <div>
      <Introduce />

      <TrustSection
        heading={
          <>
            Mission <span>& Values</span>
          </>
        }
        pointsList={TrustList}
        button={false}
        position="center"
        backgroundColor={true}
      />

      <EngageTwo
        title=" What Makes Me Different?"
        description={
          <>
            You’ll never feel like{" "}
            <strong
              style={{
                color: "var(--accent-color)",
                fontStyle: "italic",
              }}
            >
              “just another transaction.”
            </strong>{" "}
            I take the time to listen, guide, and stand by you, because this is
            more than real estate. It’s your future.
          </>
        }
      />
    </div>
  );
}

export default About;
