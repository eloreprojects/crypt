const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
require('dotenv').config();

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const userData = {
    username: username.trim(),
    password: password.trim()
  };

  return User.findOne({ username: userData.username }, (err, user) => {
    if (err) {
        return done(err);
    }

    if (!user) {
      const error = new Error('Incorrect username or password.');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    return user.comparePassword(userData.password, (passwordErr, match) => {
      if (err) {
        return done(err);
      }

      if (!match) {
        const error = new Error('Incorrect username or password.');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        username,
        sub: user._id,
      };

      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 60 * 120 });
      
      const data = {
        username,
        name: user.name,
        _id: user._id,
      };

      return done(null, token, data);
    });
  });
});