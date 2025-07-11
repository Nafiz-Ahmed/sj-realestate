import React from "react";
import * as Links from "@/utils/Links";
import Link from "next/link";

function Logo({
  fontSize = "1.5rem",
  fontFamily = "var(--font-family)",
  color = "var(--primary-color)",
}) {
  return (
    <div
      style={{
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamily}`,
        color: `${color}`,
        fontWeight: "900",
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
        SJ REAL ESTATE
      </Link>
    </div>
  );
}

export default Logo;
