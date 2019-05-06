import React, { Component } from "react";
import { auth } from "../../helpers/firebase";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from "../../actions/auth";

import {
  DropDownButton,
  DropDownButtonItem
} from "@progress/kendo-react-buttons";

class ProfileCircle extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  authCreators = bindActionCreators(AuthActionCreators, this.props.dispatch);

  logOut = () => {
    auth.signOut().then(result => {
      let action = this.authCreators.logOut();
      this.props.dispatch(action);
    });
  };

  render() {
    const { dispatch, user } = this.props;
    const logOut = bindActionCreators(AuthActionCreators.logOut, dispatch);
    return (
      <DropDownButton
        text={user.displayName + " Settings"}
        onItemClick={this.logOut}
        icon="user"
      >
        <DropDownButtonItem text="Log Out" />
      </DropDownButton>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileCircle);
