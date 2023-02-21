"use strict";

/**
 * call-request router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::call-request.call-request");
