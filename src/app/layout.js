// This file is part of the SJ Real Estate project
// It sets up the root layout for the Next.js application, including global styles and metadata.

import Layout from "@/layout/Layout";
import "@/styles/fonts.css";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/variables.css";
import { defaultMeta } from "@/utils/SEO";

export const metadata = defaultMeta;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Essential meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="Canonical link preview URL"></meta>

        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content={defaultMeta.verification.google}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
