import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Row
} from "reactstrap";
import { auth, provider } from "../../helpers/firebase";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from "../../actions/auth";

class Login extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  authCreators = bindActionCreators(AuthActionCreators, this.props.dispatch);

  signInWithGoogle = () => {
    auth.signInWithPopup(provider).then(result => {
      this.signIn(result.user);
    });
  };

  signIn = user => {
    let action = this.authCreators.signIn(user);
    this.props.dispatch(action);
  };

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
        this.props.history.push("/app/dashboard");
      }
    });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card
                  className="text-white bg-primary py-5"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign in / Sign up</h2>
                      <p>
                        To enter this application, just use you Google Account!
                      </p>

                      <Button
                        size="lg"
                        className="btn-google-plus btn-brand mr-1 mb-1"
                        onClick={this.signInWithGoogle}
                      >
                        <i className="fa fa-google" />
                        <span>Google</span>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Login);
