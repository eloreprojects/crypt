import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AccountCard from '../accounts/AccountCard.jsx';

const marginTop = {
  marginTop: "1.5em",
};

const marginLeft = {
  marginLeft: ".5em",
};

const Splash = () => (
  <Container>
    <Row>
      <Col md="12"> 
        <h1 style={marginTop} className="display-3">Crypt</h1>
        <p className="lead"> A minimalist hyper-secure account manager. </p>
        <hr className="my-2" />
        <p>
          Crypt secures all your internet identities by generating disposable emails to obfuscate
          accounts through.
        </p>
        <p className="lead">
          <Button color="secondary">Read More</Button>
          <Link to='/enter'> <Button style={marginLeft} outline color="info"> Enter </Button> </Link>         
        </p>
        <h2 style={marginTop}>Demo</h2>
        <p className="lead"> Stored information is AES encrypted and only be decrypted by you -- not even the Crypt team has access.</p>
        <AccountCard
          notes="You can type notes here! Press the buttons to copy your information to the clipboard." 
          title="Examples Account"
          email="g8alg90v@getcrypt.co"
          password="!ajsuf9v0xx@12$" />
      </Col>
    </Row>
  </Container>
);

export default Splash;