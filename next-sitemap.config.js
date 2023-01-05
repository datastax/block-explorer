/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://eth-explorer.datastax.com';
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml', '/server-sitemaps/*tsx'],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/server-sitemap-index.xml`],
  },
};
