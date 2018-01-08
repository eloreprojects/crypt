import React, { Component } from 'react';
const axios = require('axios');

export default class Accounts extends Component {
  componentWillMount() {
    axios.post('/validate', { token: localStorage.getItem('token') }).then(res => {
      if (!res.data.valid) {
        // redirect
      }
    });
  }

  render() {
    return (
      <p> you're good! </p>
    );
  }
}