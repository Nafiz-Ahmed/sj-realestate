/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["framerusercontent.com"],
  },
  // Required for sitemap generation
  output: "standalone",

  // Ensure proper content-type headers
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
      {
        source: "/sitemap-0.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
