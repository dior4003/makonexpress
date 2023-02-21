'use strict';

/**
 * call-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::call-request.call-request');
