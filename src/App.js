import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";
import ProtectedRoute from "./helpers/ProtectedRoute";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const Layout = React.lazy(() => import("./containers/Layout"));
const Login = React.lazy(() => import("./containers/Login/Login"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={props => <Login {...props} />}
            />

            <Route path="/app" component={Layout} />
            <Redirect from="/" to="/login" />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;