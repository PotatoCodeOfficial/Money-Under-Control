import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from "../../actions/auth";

import { connect } from "react-redux";
import { Button } from "@progress/kendo-buttons-react-wrapper";
import ProfileCircle from "../ProfileCircle/ProfileCircle";
import { auth, provider } from "../../helpers/firebase";

class SignInButton extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  authCreators = bindActionCreators(AuthActionCreators, this.props.dispatch);

  openGoogleAuthModal = event => {
    auth.signInWithPopup(provider).then(result => {
      this.signIn(result.user);
    });
  };

  signIn = user => {
    let action = this.authCreators.signIn(user);
    this.props.dispatch(action);
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
      }
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        {user != null ? (
          <ProfileCircle />
        ) : (
          <Button click={this.openGoogleAuthModal}>Sign in</Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SignInButton);
