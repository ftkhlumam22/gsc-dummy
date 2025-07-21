/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gsc.backoffice-tim.web.id',
  generateRobotsTxt: true,
  // Enable auto-discovery of routes based on app directory
  autoLastmod: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://gsc.backoffice-tim.web.id/server-sitemap.xml',
    ],
  },
}