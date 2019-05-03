import React from "react";
import { Button, Icon } from "antd";

import { auth, provider } from "../../firebase";

class SignInButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: null
    };
  }

  openGoogleAuthModal() {
    if (this.state.signedIn) {
      auth.signOut().then(result => {
        this.setState({
          signedIn: false,
          user: null
        });
      });
    } else {
      auth.signInWithPopup(provider).then(result => {
        this.setState({
          signedIn: !!result.user,
          user: result.user
        });
      });
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, signedIn: !!user });
      }
    });
  }

  render() {
    return (
      <Button onClick={() => this.openGoogleAuthModal()}>
        {this.state.signedIn ? (
          <h3>
            <Icon type="logout" /> Sign out
          </h3>
        ) : (
          <h3>
            <Icon type="google" /> Sign In
          </h3>
        )}
      </Button>
    );
  }
}
export default SignInButton;
