const axios = require('axios');
import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

const marginTop = {
  marginTop: "1.5em",
};

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSignup = this.handleSignup.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);    
    this.handleConfirmChange = this.handleConfirmChange.bind(this);        
  }

  handleSignup(event) {
    event.preventDefault();

    const user = { 
      username: this.state.email,
      password: this.state.password
    };

    axios.post('/signup', user).then(response => {
      console.log(response.data.message);
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

  handleConfirmChange(event) {
    this.setState({ confirm: event.target.value });
  }
    
  render() {
    return (
      <Form>
        <h4 style={marginTop}> Sign Up </h4>
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
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4}>Confirm</Label>
          <Col sm={8}>
            <Input type="password" onChange={this.handleConfirmChange} name="confirm" placeholder="confirm your master password" />
            <Button style={marginTop} onClick={this.handleSignup} type="submit" outline color="info"> Submit </Button>                         
          </Col>
        </FormGroup>
      </Form>
    );
  }
}