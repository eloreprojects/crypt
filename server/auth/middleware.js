const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
require('dotenv').config();

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
    
  return jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json(err);
    }
    
    return User.findById(decoded.sub, (userErr, user) => {
      if (userErr || !user || !user.verified) {
          return res.status(401).json(err).end();
      }

      return next();
    });
  });
};