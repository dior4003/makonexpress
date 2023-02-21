'use strict';

/**
 * check-light router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::check-light.check-light');
