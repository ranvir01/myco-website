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
      '/services': 0.9,
      '/ai-for-small-business': 0.9,
      '/free-ai-audit': 0.8,
      '/case-studies': 0.7,
      '/partners': 0.7,
      '/business': 0.7,
      '/experts': 0.7,
      '/privacy': 0.3,
      '/terms': 0.3,
      '/blog': 0.7,
    };

    const changefreqMap = {
      '/': 'weekly',
      '/services': 'weekly',
      '/ai-for-small-business': 'weekly',
      '/free-ai-audit': 'weekly',
      '/case-studies': 'weekly',
      '/partners': 'monthly',
      '/business': 'weekly',
      '/experts': 'weekly',
      '/privacy': 'monthly',
      '/terms': 'monthly',
    };

    // Industry landing pages (/for/home-services, /for/trucking-logistics, ...)
    const isIndustryPage = path.startsWith('/for/');
    // Blog articles (/blog/<slug>)
    const isBlogArticle = path.startsWith('/blog/');

    return {
      loc: path,
      changefreq:
        changefreqMap[path] ||
        (isIndustryPage || isBlogArticle ? 'weekly' : config.changefreq),
      priority:
        priorityMap[path] ?? (isIndustryPage ? 0.8 : isBlogArticle ? 0.6 : config.priority),
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
      // AI / answer-engine crawlers - explicitly allowed so MyCo is represented
      // accurately in ChatGPT, Claude, Perplexity, Gemini, and AI Overviews.
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
};
