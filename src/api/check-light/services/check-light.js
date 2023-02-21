'use strict';

/**
 * check-light service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::check-light.check-light');
