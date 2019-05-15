import React from "react";

const Colors = React.lazy(() => import("./components/Theme/Colors"));
const Typography = React.lazy(() => import("./components/Theme/Typography"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography }
];

export default routes;
