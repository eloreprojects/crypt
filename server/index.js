const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

// initialize server and db url
const app = express();
const dbUrl = 'mongodb://localhost:27017/crypt';

// bodyParser middleware allows us to acess the req body of route reqs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(dbUrl, (err, database) => {
  if (err) {
    return console.dir(err);
  }

  // since database is actually the mongoclient obj
  const db = database.db('crypt');

  // create the accounts collection
  db.createCollection('accounts', (err, collection) => {});

  // close the server
  database.close();
});

app.get('/accounts', (req, res) => {
  MongoClient.connect(dbUrl, (err, database) => {
    const db = database.db('crypt');
    const accounts = db.collection('accounts');

    accounts.find().toArray((err, result) => {
      res.send(result);
    });

    database.close();
  });
});

app.post('/accounts', (req, res) => {
  MongoClient.connect(dbUrl, (err, database) => {
    const db = database.db('crypt');
    const accounts = db.collection('accounts');

    const newAccount = req.body;

    accounts.insert(newAccount, (err, result) => {
      if (err) {
        // send a blank object
        res.send({});
      } else {
        res.send(newAccount);
      }
    });

    database.close();
  });
});

// serve static files in dist so index.html can reference index_bundle.js
app.use(express.static(path.resolve('dist')));

// send index.html as default route
app.use((req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

// start server once we have connceted to db
app.listen(3000, () => console.log('Server is running 🌏, reach port 3000 👀'));
