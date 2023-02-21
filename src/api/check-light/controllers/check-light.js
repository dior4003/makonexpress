'use strict';

/**
 *  check-light controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::check-light.check-light');
