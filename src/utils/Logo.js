import React from "react";
import * as Links from "@/utils/Links";
import Link from "next/link";

function Logo({
  fontSize = "1.5rem",
  fontFamily = "var(--font-family-logo)",
  color = "var(--primary-color)",
}) {
  return (
    <div
      style={{
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamily}`,
        color: `${color}`,
        fontWeight: "bold",
        textTransform: "uppercase",
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      <Link
        style={{
          color: "inherit",
          cursor: "pointer",
        }}
        href={Links.pageLinks.home}
      >
        SJ REALESTATE
      </Link>
    </div>
  );
}

export default Logo;
