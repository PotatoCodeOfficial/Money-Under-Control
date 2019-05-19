import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import LoginCard from "./LoginCard/LoginCard";
import { isLogged } from "../../helpers/auth";

class Login extends Component {
  componentWillMount() {
    if (isLogged()) {
      this.props.history.push("/app/dashboard");
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <LoginCard {...this.props} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
