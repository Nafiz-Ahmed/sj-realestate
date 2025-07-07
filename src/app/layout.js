// This file is part of the SJ Real Estate project
// It sets up the root layout for the Next.js application, including global styles and metadata.

import Layout from "@/layout/Layout";
import "@/styles/fonts.css";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/variables.css";

export const metadata = {
  title: "SJ Real Estate | St. John's, Newfoundland",
  description:
    "Buy or sell homes in St. John's, NL with SJ Real Estate. Browse MLS® listings, view recently sold properties, calculate mortgage payments, and work with trusted local experts.",
  keywords: [
    "St. John's real estate",
    "SJ Real Estate",
    "homes for sale NL",
    "real estate agent Newfoundland",
    "St. John's MLS listings",
    "buy house St. John's",
    "real estate St. John's NL",
  ],
  metadataBase: new URL("https://sjrealestate.ca"),
  openGraph: {
    title: "SJ Real Estate | St. John's, Newfoundland",
    description:
      "Explore real estate listings, sold homes, and mortgage tools with SJ Real Estate — your trusted experts in St. John's, NL.",
    url: "https://sjrealestate.ca",
    siteName: "SJ Real Estate",
    images: [
      {
        url: "https://sjrealestate.ca/images/hero2.jpeg",
        width: 1200,
        height: 630,
        alt: "SJ Real Estate - St. John's NL Homes",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ Real Estate | St. John's, Newfoundland",
    description:
      "Buy or sell homes in St. John's with SJ Real Estate. Local experts. Updated listings. Fast results.",
    images: ["https://sjrealestate.ca/images/hero3.jpeg"],
  },
  alternates: {
    canonical: "https://sjrealestate.ca",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
