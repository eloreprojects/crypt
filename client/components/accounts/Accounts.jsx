import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
const axios = require('axios');

class Accounts extends Component {
  componentWillMount() {
    axios.post('/validate', { token: localStorage.getItem('token') }).then(res => {
      if (!res.data.valid) {
        this.props.history.push("/enter");
      }
    });
  }

  render() {
    return (
      <p> you're good! </p>
    );
  }
}

export default withRouter(Accounts);