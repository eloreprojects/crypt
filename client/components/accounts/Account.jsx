import React from 'react';

function Account(props) {
  return (
    <li>
      <h4>account: {props.account}</h4>
      <p>password: {props.password}</p>
    </li>
  );
}

export default Account;
