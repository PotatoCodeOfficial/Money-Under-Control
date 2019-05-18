import React from "react";
import { Route, Redirect } from "react-router-dom";

import { auth, provider } from "../helpers/firebase";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from "../redux/actions/auth";
import { withRouter } from "react-router";

class ProtectedRoute extends React.Component {
  static propTypes = {
    user: PropTypes.object
  };

  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.user);
    return (
      <Route
        {...this.props}
        render={props => {
          if (!!this.props.user) {
            return <this.props.component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ProtectedRoute);
