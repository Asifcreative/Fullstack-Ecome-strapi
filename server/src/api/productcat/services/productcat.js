'use strict';

/**
 * productcat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::productcat.productcat');
