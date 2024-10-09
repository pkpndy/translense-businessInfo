const express = require('express');
const { businessRouter } = require('./business.routes');

const homeRouter = express.Router();

homeRouter.use([
    businessRouter
]);

module.exports = {
    homeRouter
}