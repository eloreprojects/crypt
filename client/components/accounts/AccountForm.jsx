const axios = require('axios');
import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

const marginTop = {
  marginTop: "1.5em",
};

export default class AccountForm extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);    
  }

  handleSubmit(event) {
    event.preventDefault();

    const account = { 
      username: this.state.username,
      password: this.state.password
    };

    axios.post('/api/accounts/new', user).then(response => {
      
    }).catch(error => {
      console.log(error);
    });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <Form>
        <h4 style={marginTop}> Add Account </h4>
        <FormGroup row>
          <Label sm={4}>Title</Label>
          <Col sm={8}>
            <Input type="text" onChange={this.handleTitleChange} placeholder="your account name" />
          </Col>
        </FormGroup> 
        <FormGroup style={marginTop} row>
          <Label sm={4}>Username</Label>
          <Col sm={8}>
            <Input type="text" onChange={this.handleUsername} placeholder="your account username" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4}>Password</Label>
          <Col sm={8}>
            <Input type="password" onChange={this.handlePasswordChange} placeholder="your account password" />
          </Col>
        </FormGroup> 
        <FormGroup row>
          <Label sm={4}>Notes</Label>
          <Col sm={8}>
            <Input type="password" onChange={this.handlePasswordChange} placeholder="optional account info" />
            <Button style={marginTop} outline color="info" onClick={this.handleLogin} type="submit"> Submit </Button>       
          </Col>
        </FormGroup>         
      </Form>
    );
  }
}