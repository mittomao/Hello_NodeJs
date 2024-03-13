const express = require('express');
const routes = express.Router();
const { homeController,  aboutController} = require('../controllers/indexController');

routes.get('/', homeController);
routes.get('/about', aboutController);
module.exports = routes;