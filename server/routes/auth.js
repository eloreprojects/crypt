const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = new express.Router();
require('dotenv').config();

router.post('/signup', (req, res, next) => {
  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors',
          errors: {
              username: 'This username is already taken.'
          }
        });
      }
    
      return res.status(400).json({
        success: false,
        message: err
      });
    }

    return res.status(200).json({
        success: true,
        message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req,res,next);
});

router.post('/login', (req, res, next) => {
  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      
      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      user: userData,
      token
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout();
});

module.exports = router;