module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "http:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "eco-fleet-bot.s3.eu-north-1.amazonaws.com",
          ],
          "media-src": ["'self'", "data:", "blob:"],
          "script-src": ["'self'", "'unsafe-inline'", " telegram.org"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
