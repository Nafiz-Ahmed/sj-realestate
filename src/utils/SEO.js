const baseUrl = "https://sjrealestate.ca";

// Default images (using relative paths)
const defaultImages = [
  {
    url: "/images/hero2.jpeg",
    width: 1200,
    height: 630,
    alt: "SJ Real Estate - St. John's NL Homes",
  },
];

// Enhanced default metadata
export const defaultMeta = {
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "SJ Real Estate",
    locale: "en_CA",
    type: "website",
    images: defaultImages,
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero3.jpeg"],
  },
  verification: {
    google: "JQryb462VXfLS2Lh_SS_mT69EW3YnKathCvKtPeX8yc", // ← Paste your code here
  },
};

// Home Page
export const homeMeta = {
  ...defaultMeta,
  title: {
    default: "SJ Real Estate | St. John's, Newfoundland",
    template: "%s | SJ Real Estate",
  },
  description:
    "Buy or sell homes in St. John's, NL with SJ Real Estate. Browse MLS® listings, view sold properties, and get expert local guidance.",
  alternates: {
    canonical: "/",
  },
};

// Listings Page
export const listingsMeta = {
  ...defaultMeta,
  title: "Listings | SJ Real Estate - St. John's Homes for Sale",
  description:
    "Browse the latest MLS® listings in St. John's, Newfoundland. Filter homes by price, location, and more.",
  alternates: {
    canonical: "/listings",
  },
};

// Sold Homes Page
export const soldMeta = {
  ...defaultMeta,
  title: "Sold Homes | SJ Real Estate - Market Trends in St. John's",
  description:
    "Explore recently sold homes in St. John's and track the latest real estate market trends.",
  alternates: {
    canonical: "/sold-homes",
  },
};

// Mortgage Calculator Page
export const mortgageMeta = {
  ...defaultMeta,
  title: "Mortgage Calculator | SJ Real Estate - Estimate Payments",
  description:
    "Use our mortgage calculator to estimate monthly payments on your next St. John's home. Plan your budget with confidence.",
  alternates: {
    canonical: "/mortgage-calculator",
  },
};

// About Page
export const aboutMeta = {
  ...defaultMeta,
  title: "About | SJ Real Estate - Local Experts in St. John's",
  description:
    "Learn more about SJ Real Estate — your trusted partner for buying and selling homes in St. John's, Newfoundland.",
  alternates: {
    canonical: "/about",
  },
};
