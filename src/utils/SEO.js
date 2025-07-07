const baseUrl = "https://sjrealestate.ca";

const defaultImages = [
  {
    url: `${baseUrl}/images/hero2.jpeg`, // Replace with your actual image
    width: 1200,
    height: 630,
    alt: "SJ Real Estate - St. John's NL Homes",
  },
];

const defaultMeta = {
  metadataBase: new URL(baseUrl),
  openGraph: {
    siteName: "SJ Real Estate",
    locale: "en_CA",
    type: "website",
    images: defaultImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ Real Estate | St. John's, Newfoundland",
    description:
      "Trusted real estate in St. John's NL. Browse homes, listings, and sold properties with SJ Real Estate.",
    images: [`${baseUrl}/images/hero3.jpeg`], // Replace with your image
  },
};

// Home Page
export const homeMeta = {
  ...defaultMeta,
  title: "SJ Real Estate | St. John's, Newfoundland",
  description:
    "Buy or sell homes in St. John's, NL with SJ Real Estate. Browse MLS® listings, view sold properties, and get expert local guidance.",
  alternates: {
    canonical: `${baseUrl}`,
  },
};

// Listings Page
export const listingsMeta = {
  ...defaultMeta,
  title: "Listings | SJ Real Estate - St. John's Homes for Sale",
  description:
    "Browse the latest MLS® listings in St. John's, Newfoundland. Filter homes by price, location, and more.",
  alternates: {
    canonical: `${baseUrl}/listings`,
  },
};

// Sold Homes Page
export const soldMeta = {
  ...defaultMeta,
  title: "Sold Homes | SJ Real Estate - Market Trends in St. John's",
  description:
    "Explore recently sold homes in St. John's and track the latest real estate market trends.",
  alternates: {
    canonical: `${baseUrl}/sold-homes`,
  },
};

// Mortgage Calculator Page
export const mortgageMeta = {
  ...defaultMeta,
  title: "Mortgage Calculator | SJ Real Estate - Estimate Payments",
  description:
    "Use our mortgage calculator to estimate monthly payments on your next St. John's home. Plan your budget with confidence.",
  alternates: {
    canonical: `${baseUrl}/mortgage-calculator`,
  },
};

// About Page
export const aboutMeta = {
  ...defaultMeta,
  title: "About | SJ Real Estate - Local Experts in St. John's",
  description:
    "Learn more about SJ Real Estate — your trusted partner for buying and selling homes in St. John's, Newfoundland.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};
