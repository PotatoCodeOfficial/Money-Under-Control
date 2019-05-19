import React from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

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
  user: state.user
});

export default connect(mapStateToProps)(ProtectedRoute);
