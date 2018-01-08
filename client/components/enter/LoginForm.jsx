const axios = require('axios');
import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

const marginTop = {
  marginTop: "1.5em",
};

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);    
  }

  handleLogin(event) {
    event.preventDefault();

    const user = { 
      username: this.state.email,
      password: this.state.password
    };

    axios.post('/login', user).then(response => {
      localStorage.setItem('token', response.data.token);      
    }).catch(error => {
      console.log(error);
    });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <Form>
        <h4 style={marginTop}> Login </h4>
        <FormGroup style={marginTop} row>
          <Label sm={4}>Email</Label>
          <Col sm={8}>
            <Input type="email" onChange={this.handleEmailChange} name="email" placeholder="your master email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4}>Password</Label>
          <Col sm={8}>
            <Input type="password" onChange={this.handlePasswordChange} name="password" placeholder="your master password" />
            <Button style={marginTop} outline color="info" onClick={this.handleLogin} type="submit"> Submit </Button>       
          </Col>
        </FormGroup>         
      </Form>
    );
  }
}