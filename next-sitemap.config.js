/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://eth-explorer.datastax.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://eth-explorer.datastax.com/server-sitemap-index.xml',
    ],
  },
}
