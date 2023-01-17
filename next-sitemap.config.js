/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://eth-explorer.datastax.com';
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: [
    '/blocks-sitemap-index.xml',
    '/transactions-sitemap-index.xml',
    '/server-sitemaps/blocks/*tsx',
    '/server-sitemaps/transactions/*tsx',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/blocks-sitemap-index.xml`,
      `${siteUrl}/transactions-sitemap-index.xml`,
    ],
  },
};
