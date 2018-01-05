import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Form, FormText, Button } from 'reactstrap';

const marginTop = {
  marginTop: "1.5em",
};

const marginLeft = {
  marginLeft: ".5em",
};

class Enter extends Component {
  render() {
    return (
      <Container>
        <h1 style={marginTop} className="display-3">Crypt</h1>
        <p className="lead"> We encrypt all sensitive data using military standards. </p>
        <hr className="my-2" />
        <Row>
          <Col md={5}>
            <Form>
              <h4 style={marginTop}> Login </h4>
              <FormGroup style={marginTop} row>
                <Label sm={4}>Email</Label>
                <Col sm={8}>
                  <Input type="email" name="email" placeholder="your master email" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Password</Label>
                <Col sm={8}>
                  <Input type="password" name="password" placeholder="your master password" />
                  <Button style={marginTop} type="submit" outline color="info"> Submit </Button>       
                </Col>
              </FormGroup>         
            </Form>
          </Col>
          <Col md={2} />
          <Col md={5}>
            <Form>
              <h4 style={marginTop}> Sign Up </h4>
              <FormGroup style={marginTop} row>
                <Label sm={4}>Email</Label>
                <Col sm={8}>
                  <Input type="email" name="email" placeholder="your master email" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Password</Label>
                <Col sm={8}>
                  <Input type="password" name="password" placeholder="your master password" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Confirm</Label>
                <Col sm={8}>
                  <Input type="confirm" name="confirm" placeholder="confirm your master password" />
                  <Button style={marginTop} type="submit" outline color="info"> Submit </Button>                         
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Enter;