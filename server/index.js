const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// mock data store
const accounts = [
  {
    account: 'Google',
    password: 'foobar1'
  },
  {
    account: 'Facebook',
    password: 'foobar2'
  },
  {
    account: 'Twitter',
    password: 'foobar3'
  },
  {
    account: 'Instagram',
    password: 'foobar4'
  },
];

// initialize server
const app = express();

// bodyParser middleware allows us to acess the req body of route reqs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/accounts', (req, res) => {
  res.send(accounts);
});

app.post('/accounts', (req, res) => {
  const newAccount = req.body;
  accounts.push(newAccount);
  res.send(newAccount);
});

// serve static files in dist so index.html can reference index_bundle.js
app.use(express.static(path.resolve('dist')));

// send index.html as default route
app.use((req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

// start server
app.listen(3000, () => console.log('Server is running 🌏, reach port 3000 👀'))
