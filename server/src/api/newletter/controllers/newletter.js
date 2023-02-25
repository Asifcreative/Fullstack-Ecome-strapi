'use strict';

/**
 * newletter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::newletter.newletter', () => ({
    async create(ctx) {
        const { email } = ctx.request.body;
        await strapi
            .service("api::newletter.newletter")
            .create({ data: { email } });
    }
}));


