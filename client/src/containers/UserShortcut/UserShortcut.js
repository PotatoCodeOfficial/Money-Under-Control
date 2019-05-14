import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Badge, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import PropTypes from "prop-types";
import { auth, provider } from "../../helpers/firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from "../../actions/auth";

import { AppHeaderDropdown } from "@coreui/react";

class UserShortcut extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  authCreators = bindActionCreators(AuthActionCreators, this.props.dispatch);

  signIn = user => {
    let action = this.authCreators.signIn(user);
    this.props.dispatch(action);
  };

  logOut = () => {
    auth.signOut().then(result => {
      let action = this.authCreators.logOut();
      this.props.dispatch(action);
      // Need to use some of `this.context.history.push` or `this.props.history.push`
      window.location.href = "/";
    });
  };

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
      }
    });
  }

  render() {
    let { user } = this.props;
    return (
      <React.Fragment>
        <AppHeaderDropdown direction="down">
          <DropdownToggle nav>
            <img
              src={user ? user.photoURL : ""}
              className="img-avatar"
              alt="admin@bootstrapmaster.com"
            />
          </DropdownToggle>
          <DropdownMenu right style={{ right: "auto" }}>
            <DropdownItem header tag="div" className="text-center">
              <strong>Account</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-bell-o" /> Updates
              <Badge color="info">42</Badge>
            </DropdownItem>

            <DropdownItem header tag="div" className="text-center">
              <strong>Settings</strong>
            </DropdownItem>

            <DropdownItem>
              <i className="fa fa-wrench" /> Settings
            </DropdownItem>
            <DropdownItem onClick={this.logOut}>
              <i className="fa fa-lock" /> Logout
            </DropdownItem>
          </DropdownMenu>
        </AppHeaderDropdown>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserShortcut);
