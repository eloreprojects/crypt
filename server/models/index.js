const mongoose = require('mongoose');

module.exports.connect = uri => {
  // connecting to database through uri
  mongoose.connect(uri);
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', err => {
      console.log(`Mongoose connection error: ${err}`);
      process.exit(1);
  });

  // loads schemas
  require('./user');
  require('./account');
};