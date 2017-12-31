import React from 'react';
import AccountList from './AccountList.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    fetch('/accounts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          data
        });
      })
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
