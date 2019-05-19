import React, { Component } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { AppHeaderDropdown } from "@coreui/react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logoutUser } from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import { doLogout, isLogged } from "../../helpers/auth";
import { withRouter } from "react-router-dom";

class UserButton extends Component {
  logout = () => {
    doLogout().then(() => {
      this.props.logoutUser();
      this.props.history.push("/login");
    });
  };
  render() {
    let { user } = this.props;
    return (
      <React.Fragment>
        <AppHeaderDropdown direction="down">
          <DropdownToggle nav>
            <img
              src={user ? user.photoURL : ""}
              className="img-avatar"
              alt={user ? user.email : ""}
            />
          </DropdownToggle>
          <DropdownMenu right style={{ right: "auto" }}>
            <DropdownItem onClick={this.logout}>
              <i className="fa fa-lock" /> Logout
            </DropdownItem>
          </DropdownMenu>
        </AppHeaderDropdown>
      </React.Fragment>
    );
  }
}

UserButton.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser: logoutUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserButton));
