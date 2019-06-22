import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from "@coreui/react";
import navigation from "../../_nav";
import routes from "../../routes";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadUser } from "../../redux/actions/authActions";
import { loadCategories } from "../../redux/actions/categoryActions";
import { isLogged } from "../../helpers/auth";

import { bindActionCreators } from "redux";

const Footer = React.lazy(() => import("./Footer"));
const Header = React.lazy(() => import("./Header"));

class Layout extends Component {
  componentWillMount() {
    const { loadUser, user, loadCategories } = this.props;

    if (isLogged()) {
      if (!user) {
        loadUser();
        loadCategories();
      }
    } else {
      this.props.history.push("/login");
    }
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    const isMobile = window.innerWidth <= 500;

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <Header {...this.props} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid={!isMobile}>
              <Suspense fallback={this.loading()}>
                {this.props.user != null ? (<Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/app/dashboard" />
                </Switch>
                ) : null}
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>

            <Footer />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

Layout.propTypes = {
  user: PropTypes.object,
  loadUser: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { loadUser: loadUser, loadCategories: loadCategories },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
