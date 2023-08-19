'use strict';

/**
 * product1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product1.product1');
