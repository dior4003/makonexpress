'use strict';

/**
 * fault-code service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fault-code.fault-code');
