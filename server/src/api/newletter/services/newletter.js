'use strict';

/**
 * newletter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newletter.newletter');
