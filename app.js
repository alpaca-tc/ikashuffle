const express = require('express');
const app = express();
const env = require('./config/environment');
const debug = require('./lib/debug')('app.js');
const morgan = require('morgan');

app.set('views', './views');
app.set('view engine', 'jade');

app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', function(req, resp) {
  resp.render('home', {
    title: 'Welcome'
  });
});

debug('start server');
app.listen(env.PORT);
