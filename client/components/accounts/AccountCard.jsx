import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Notification } from 'react-notification';

const marginLeft = {
  marginLeft: ".5em",
};

class AccountCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: this.props.email,
      password: this.props.password,
      notification: false,
      message: ""
    };

    this.handleEmailButton = this.handleEmailButton.bind(this);
    this.handlePasswordButton = this.handlePasswordButton.bind(this);
  }

  handleEmailButton() {
    event.preventDefault();
    copy(this.state.email);
    this.setState({ notification: true, message: "Email copied to clipboard!" });
  }

  handlePasswordButton() {
    event.preventDefault();
    copy(this.state.password);
    this.setState({ notification: true, message: "Password copied to clipboard!"});
  }
  
  hideNotification() {
    this.setState({ notification: false });
  }
    
  render() {
    return (
      <Col md={4}>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.notes}</CardText>
            <Button onClick={this.handleEmailButton}> Email </Button>
            <Button onClick={this.handlePasswordButton} style={marginLeft}> Password</Button>
          </CardBody>

          <Notification
            isActive={this.state.notification}
            message={this.state.message}
            activeClassName={".notification"}
            onDismiss={this.hideNotification.bind(this)}
          />
        </Card>
      </Col>
    );
  }
}

export default AccountCard;