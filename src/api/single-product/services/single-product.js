'use strict';

/**
 * single-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-product.single-product');
