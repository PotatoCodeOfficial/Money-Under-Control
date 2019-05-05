import React, { PropType, Component } from "react";
import { Button } from "@progress/kendo-buttons-react-wrapper";
import ProfileCircle from "../../components/ProfileCircle/ProfileCircle";
import { auth, provider } from "../../helpers/firebase";

export default class SignInButton extends Component {
  state = {
    user: null
  };

  openGoogleAuthModal = event => {
    console.log("Ocurre algo");
    if (!!this.state.user) {
      auth.signOut().then(result => {
        this.setState({
          user: null
        });
      });
    } else {
      auth.signInWithPopup(provider).then(result => {
        this.setState({
          user: result.user
        });
      });
    }
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <ProfileCircle />
        ) : (
          <Button click={this.openGoogleAuthModal}>Sign in</Button>
        )}
      </div>
    );
  }
}
