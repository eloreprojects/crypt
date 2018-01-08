import React, { Component } from 'react';
const axios = require('axios');
import AccountCard from './AccountCard.jsx';

export default class AccountList extends Component{
  onComponentWillMount() {
    axios.get('/api/accounts/').then(res => {
      const list = res.data.accounts.map(account =>
        <AccountCard 
          username={account.username} 
          password={account.password}
          title={account.title} 
          notes={account.notes} />
      );
      
      this.state = {};
      this.setState({ list });
    });

    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>
        { this.state.list }
      </div>
    );
  }
}