module.exports = {
  siteUrl: "https://sjrealestate.ca",
  generateRobotsTxt: true, // This will generate robots.txt automatically
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/", // Allow all pages to be crawled
        disallow: "/private/", // (Optional) Block any private routes
      },
    ],
    additionalSitemaps: [
      "https://sjrealestate.ca/server-sitemap.xml", // (Optional) For dynamic routes
    ],
  },
  exclude: ["/admin*", "/thank-you"], // (Optional) Exclude specific pages
};
