/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://myconsulting.network',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Custom transformation for each path
  transform: async (config, path) => {
    // Set higher priority for main pages
    const priorityMap = {
      '/': 1.0,
      '/business': 0.9,
      '/experts': 0.9,
      '/privacy': 0.3,
      '/terms': 0.3,
    };

    const changefreqMap = {
      '/': 'weekly',
      '/business': 'weekly',
      '/experts': 'weekly',
      '/privacy': 'monthly',
      '/terms': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || config.changefreq,
      priority: priorityMap[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Additional paths to include
  additionalPaths: async (config) => {
    return [];
  },

  // Exclude certain paths
  exclude: ['/api/*', '/404', '/500'],

  // Robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
};

