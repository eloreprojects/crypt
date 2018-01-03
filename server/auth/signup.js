const mongoose = require('mongoose');
const User = mongoose.model('User');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const userData = {
    username: username.trim(),
    password: password.trim(),
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) {
        console.log(err);
        return done(err);
    }

    return done(null);
  });
});