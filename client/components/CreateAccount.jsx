import React from 'react';

function CreateAccount(props) {
  function submit() {
    // grab the input elements
    const accountInput = document.getElementById('account');
    const passwordInput = document.getElementById('password');

    // send the values to the express server
    props.onAddAccount({
      account: accountInput.value,
      password: passwordInput.value
    });

    // reset the input values
    accountInput.value = '';
    passwordInput.value = '';
  }

  return (
    <div>
      <input id="account" className="form-control"
        placeholder="Account name" />
      <input id="password" className="form-control"
        placeholder="Password" />
      <button type="button" onClick={submit}>
        Add Account
      </button>
    </div>
  );
}

export default CreateAccount;
