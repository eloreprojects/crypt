import React from 'react';
import Account from './Account.jsx';

function AccountList(props) {
  const accounts = props.accounts.map((account) =>
    <Account account={account.account} password={account.password} />
  );

  return (
    <ul>{accounts}</ul>
  );
}

export default AccountList;
