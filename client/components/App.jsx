import React from 'react';
import AccountList from './AccountList.jsx';

// mock data store
const data = [
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
]

export default class App extends React.Component {
  componentWillMount() {
    this.setState({
      data
    });
  }

  render() {
    return (
      <div>
        <h1>crypt</h1>
        <AccountList accounts={this.state.data} />
      </div>
    );
  }
}
