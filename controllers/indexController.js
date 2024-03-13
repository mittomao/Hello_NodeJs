const conf = require('../services/config');

async function homeController(req, res) {
  res.render('pages/home', {
    data: {
      title: "Home Pages"
    }
  });
}

async function aboutController(req, res) {
  res.render('pages/about', {
    data: {
      title: "Abouts Pages"
    }
  });
}

module.exports = {
  homeController,
  aboutController
};