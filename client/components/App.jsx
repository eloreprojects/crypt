import React from 'react';
import AccountList from './AccountList.jsx';
import CreateAccount from './CreateAccount.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: []
    }
  }

  componentWillMount() {
    fetch('/accounts')
      .then(res => res.json())
      .then(accounts => {
        this.setState({
          accounts
        });
      })
  }

  handleAddAccount(newAccount) {
    fetch('/accounts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAccount)
    })
    .then(res => res.json())
    .then(account => {
      this.setState({
        accounts: this.state.accounts.concat(account)
      });
    });
  }

  render() {
    return (
      <div>
        <h1>crypt</h1>
        <AccountList accounts={this.state.accounts} />
        <CreateAccount onAddAccount={this.handleAddAccount.bind(this)} />
      </div>
    );
  }
}
