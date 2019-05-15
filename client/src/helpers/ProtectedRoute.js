import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./firebase";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from "../actions/auth";

const Layout = React.lazy(() => import("../containers/Layout"));

const ProtectedRoute = ({ component: Component, ...rest }) => {
  var propTypes = {
    user: PropTypes.object
  };

  return (
    <Route
      {...rest}
      render={props => {
        console.log("The user is: " + auth.currentUser);

        if (true) {
          return <Component {...props} />;
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
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProtectedRoute);
