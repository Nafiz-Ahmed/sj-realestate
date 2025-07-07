/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sjrealestate.ca",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://sjrealestate.ca/sitemap.xml"],
  },
  exclude: ["/admin*", "/404", "/500"],
};
