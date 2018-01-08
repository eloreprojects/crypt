import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
const axios = require('axios');
import AccountForm from './AccountForm.jsx';
import AccountList from './AccountList.jsx';

const marginTop = {
  marginTop: "1.5em",
};

class Accounts extends Component {
  componentWillMount() {
    axios.post('/validate', { token: localStorage.getItem('token') }).then(res => {
      if (!res.data.valid) {
        this.props.history.push("/enter");
      }
    });
  }

  render() {
    return (
      <Container>
      <h1 style={marginTop} className="display-3">Crypt</h1>
      <p className="lead"> Leave the username field blank to auto-generate an email that routes to your master email. </p>
      <hr className="my-2" />
      <Row>
        <Col md={6}>
          <Card>
            <CardBody>
              <AccountForm />
            </CardBody>
          </Card>
        </Col>
        <AccountList />
      </Row>
    </Container>
    );
  }
}

export default withRouter(Accounts);