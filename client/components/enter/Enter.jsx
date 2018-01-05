import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';

const marginTop = {
  marginTop: "1.5em",
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
            <LoginForm />
          </Col>
          <Col md={2} />
          <Col md={5}>
            <SignupForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Enter;