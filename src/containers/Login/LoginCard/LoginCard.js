import React, { Component } from "react";
import { Button, Card, CardBody, CardGroup } from "reactstrap";
import { doLogin } from "../../../helpers/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser } from "../../../redux/actions/authActions";
import { bindActionCreators } from "redux";
class LoginCard extends Component {
  login = () => {
    doLogin().then(user => {
      this.props.loginUser(user);
      this.props.history.push("/app/dashboard");
    });
  };

  render() {
    return (
      <CardGroup>
        <Card className="text-white bg-primary py-5" style={{ width: "44%" }}>
          <CardBody className="text-center">
            <div>
              <h2>Sign in / Sign up</h2>
              <p>To enter this application, just use you Google Account!</p>

              <Button
                size="lg"
                className="btn-google-plus btn-brand mr-1 mb-1"
                onClick={this.login}
              >
                <i className="fa fa-google" />
                <span>Google</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </CardGroup>
    );
  }
}

LoginCard.propTypes = {
  loginUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser: loginUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCard);
