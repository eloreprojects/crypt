const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
require('dotenv').config();

// add middleware for parsing json requests
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load mongoose models
const models = require('./models');
models.connect(process.env.DB_URI, { useMongoClient: true });

// load signup/login protocol middlewares
app.use(passport.initialize());

const signupStrategy = require('./auth/signup');
const loginStrategy = require('./auth/login');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./auth/middleware');

passport.use('local-signup', signupStrategy);
passport.use('local-login', loginStrategy);
app.use('/', authRoutes);

// serve static files in dist so index.html can reference index_bundle.js
app.use(express.static(path.resolve('dist')));

// send index.html as default route
app.use((req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

// start server once we have connceted to db
app.listen(process.env.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.info("🌎 Peep port %s. 🌎", process.env.PORT);
  }
});
