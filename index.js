const express = require('express');
const app = express();
const routes = require('./routes/index');
const conf = require('./services/config');

app.use(routes);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(conf.APP_PORT, () => {
  console.log(`Server running for port ${conf.APP_PORT}`);
});