const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
      type: String,
      index: { unique: true }
  },
  password: String,
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  if (!user.isModified('password')) {
      return next();
  }

// generating password salt to be stored with user
  return bcrypt.genSalt((saltError, salt) => {
      if (saltError) {
          return next(saltError);
      }
      
      // hashing password and storing with user
      return bcrypt.hash(user.password, salt, (hashError, hash) => {
          if (hashError) {
              return next(hashError);
          }

          user.password = hash;
          return next();
      });
  });
});

module.exports = mongoose.model('User', UserSchema);